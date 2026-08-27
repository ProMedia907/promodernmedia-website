import type { WorkKind } from "@/lib/site";

/**
 * A CSS-drawn stand-in for a site screenshot. Sized to fill its parent, so
 * replacing it with a real <Image> later needs no layout changes.
 */
export default function WorkThumb({
  kind,
  accent,
}: {
  kind: WorkKind;
  accent: string;
}) {
  const bar = "rounded-[2px] bg-white/12";

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#101017]"
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div className="flex h-6 items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="ml-2 h-2 w-24 rounded-full bg-white/[0.07]" />
      </div>

      <div className="p-4">
        {/* Nav row */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-[3px]"
              style={{ background: accent }}
            />
            <span className={`h-1.5 w-12 ${bar}`} />
          </div>
          <div className="flex gap-1.5">
            <span className={`h-1.5 w-6 ${bar}`} />
            <span className={`h-1.5 w-6 ${bar}`} />
            <span
              className="h-3 w-10 rounded-full"
              style={{ background: accent, opacity: 0.85 }}
            />
          </div>
        </div>

        {kind === "hospitality" || kind === "fitness" ? (
          // Image-led layout
          <>
            <div
              className="mb-3 h-20 w-full rounded-md"
              style={{
                background: `linear-gradient(135deg, ${accent}55, ${accent}12)`,
              }}
            />
            <div className={`mb-2 h-2.5 w-3/5 ${bar}`} />
            <div className={`mb-3.5 h-1.5 w-4/5 ${bar}`} />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-9 rounded-[4px] bg-white/[0.06]" />
              ))}
            </div>
          </>
        ) : kind === "clinic" ? (
          // Split hero with booking panel
          <>
            <div className="mb-3 flex gap-3">
              <div className="flex-1">
                <div className={`mb-2 h-3 w-11/12 ${bar}`} />
                <div className={`mb-2 h-3 w-8/12 ${bar}`} />
                <div className={`mb-3 h-1.5 w-10/12 ${bar}`} />
                <div
                  className="h-5 w-20 rounded-full"
                  style={{ background: accent }}
                />
              </div>
              <div
                className="h-24 w-24 shrink-0 rounded-md"
                style={{
                  background: `linear-gradient(160deg, ${accent}4D, ${accent}0F)`,
                }}
              />
            </div>
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-7 flex-1 rounded-[4px] bg-white/[0.06]" />
              ))}
            </div>
          </>
        ) : kind === "professional" ? (
          // Type-led, editorial
          <>
            <div className={`mb-2 h-3.5 w-10/12 ${bar}`} />
            <div className={`mb-2 h-3.5 w-7/12 ${bar}`} />
            <div className={`mb-4 h-1.5 w-9/12 ${bar}`} />
            <div className="mb-3 flex gap-2">
              <div
                className="h-5 w-24 rounded-full"
                style={{ background: accent }}
              />
              <div className="h-5 w-20 rounded-full border border-white/15" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="h-12 rounded-[4px] border border-white/10 bg-white/[0.03]"
                />
              ))}
            </div>
          </>
        ) : (
          // Trades: bold hero, trust strip
          <>
            <div
              className="mb-3 h-16 w-full rounded-md"
              style={{
                background: `linear-gradient(120deg, ${accent}66, ${accent}14)`,
              }}
            />
            <div className={`mb-2 h-3 w-9/12 ${bar}`} />
            <div className={`mb-3 h-1.5 w-11/12 ${bar}`} />
            <div className="mb-3 flex gap-2">
              <div
                className="h-5 w-24 rounded-[4px]"
                style={{ background: accent }}
              />
              <div className="h-5 w-16 rounded-[4px] border border-white/15" />
            </div>
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`h-1.5 flex-1 ${bar}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
