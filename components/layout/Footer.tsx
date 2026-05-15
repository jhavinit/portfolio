import Link from "next/link";
import { socialLinks, siteConfig } from "@/lib/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-surface">
      <div className="container-wide flex flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <p className="font-mono text-sm text-zinc-500">
            © {year} {siteConfig.name}
          </p>
        </div>

        <ul className="flex flex-wrap gap-6">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
                aria-label={link.label}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
