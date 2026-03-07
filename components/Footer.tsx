import config from "@/site.config";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Left: name + email */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white">
              {config.name}
            </p>
            <a
              href={`mailto:${config.email}`}
              className="mt-1 block text-sm text-white/40 transition-colors hover:text-white/70"
            >
              {config.email}
            </a>
          </div>

          {/* Center: nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {config.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 transition-colors hover:text-white/70"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
