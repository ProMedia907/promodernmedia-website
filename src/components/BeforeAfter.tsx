"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SiteMock2009 from "./SiteMock2009";
import SiteMockModern from "./SiteMockModern";

const DESIGN_W = 1200;
const DESIGN_H = 750;

export default function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const [scale, setScale] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);

  // Scale the fixed 1200x750 design down to whatever width we actually have,
  // so both mocks stay laid out like real sites instead of reflowing to mush.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (w > 0) setScale(w / DESIGN_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  // Track the pointer on the window so dragging survives leaving the frame.
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => setFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging, setFromClientX]);

  const start = (e: React.PointerEvent) => {
    setTouched(true);
    setDragging(true);
    setFromClientX(e.clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setTouched(true);
      setPos((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setTouched(true);
      setPos((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setTouched(true);
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setTouched(true);
      setPos(100);
    }
  };

  return (
    <section
      id="before-after"
      className="relative border-y border-line bg-ink-2 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            The difference
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Same business. Same phone number.
            <span className="block text-muted">Ten times the enquiries.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            On the left is what a lot of local businesses are still running. On
            the right is what happens after a rebuild. Drag the handle and
            decide which one you would hand your card to.
          </p>
        </div>

        {/* Comparison frame */}
        <div
          ref={frameRef}
          onPointerDown={start}
          className={`relative w-full touch-none overflow-hidden rounded-xl border border-line bg-black shadow-2xl ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ aspectRatio: `${DESIGN_W} / ${DESIGN_H}` }}
        >
          {/* AFTER (underneath, full width) */}
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{
              width: DESIGN_W,
              height: DESIGN_H,
              transform: `scale(${scale})`,
            }}
          >
            <SiteMockModern />
          </div>

          {/* BEFORE (on top, clipped to the left of the handle) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <div
              className="absolute left-0 top-0 origin-top-left"
              style={{
                width: DESIGN_W,
                height: DESIGN_H,
                transform: `scale(${scale})`,
              }}
            >
              <SiteMock2009 />
            </div>
          </div>

          {/* Corner labels */}
          <div
            className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/90 backdrop-blur-sm transition-opacity sm:left-4 sm:top-4 sm:text-xs"
            style={{ opacity: pos < 14 ? 0 : 1 }}
          >
            Before &middot; 2009
          </div>
          <div
            className="pointer-events-none absolute right-3 top-3 rounded-md bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white transition-opacity sm:right-4 sm:top-4 sm:text-xs"
            style={{ opacity: pos > 86 ? 0 : 1 }}
          >
            After
          </div>

          {/* Divider + handle */}
          <div
            className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90 shadow-[0_0_18px_rgba(0,0,0,0.6)]"
            style={{ left: `${pos}%` }}
          >
            <button
              type="button"
              role="slider"
              tabIndex={0}
              aria-label="Drag to compare the old site with the rebuild"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              aria-valuetext={`${Math.round(pos)}% old site shown`}
              onKeyDown={onKeyDown}
              onPointerDown={(e) => {
                e.stopPropagation();
                start(e);
              }}
              className={`pointer-events-auto absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full border-2 border-white bg-ink text-white shadow-xl outline-none transition-transform focus-visible:ring-4 focus-visible:ring-accent/60 active:cursor-grabbing sm:h-14 sm:w-14 ${
                dragging ? "scale-95" : "hover:scale-105"
              } ${touched ? "" : "animate-pulse"}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6 3 12l6 6" />
                <path d="m15 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-xs text-muted">
          {touched
            ? "Use the arrow keys for finer control."
            : "Drag the handle, or focus it and use the arrow keys."}
        </p>
      </div>
    </section>
  );
}
