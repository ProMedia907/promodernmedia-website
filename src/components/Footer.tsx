import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-[13px] font-bold text-white">
            P
          </span>
          {site.name}
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-bone"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-muted transition-colors hover:text-bone"
          >
            {site.email}
          </a>
        </nav>

        <p className="font-mono text-[11px] text-muted">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
