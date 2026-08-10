import Image from "next/image";
import Link from "next/link";
import { contacts, footerNav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto w-full bg-nishaan-footer text-white">
      <div className="shell grid gap-10 py-12 md:grid-cols-3 md:gap-10 lg:py-16">
        <div>
          <div className="flex flex-wrap items-end gap-4">
            <Image
              src="/brand/nishaan-mark.svg"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-full bg-white/10"
            />
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight text-balance">
                {site.name}
              </p>
              <p className="mt-1 text-base text-fest-warm-soft" lang="hi">
                {site.nameHi}
              </p>
            </div>
            <Image
              src="/brand/oae-logo-footer.png"
              alt="Office of Accessible Education, IIT Delhi"
              width={140}
              height={132}
              className="h-16 w-auto rounded-full bg-white/95 object-contain p-1"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            Inclusive cultural celebration for students with disabilities at IIT
            Delhi.
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            Organised by{" "}
            <a
              href={site.oaeUrl}
              className="font-medium text-white underline decoration-white/35 underline-offset-4 transition-colors hover:decoration-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Office of Accessible Education
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
            Quick links
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/90 no-underline transition-colors hover:text-fest-warm-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/90">
            <li>
              <a
                href={`mailto:${contacts.oae.email}`}
                className="transition-colors hover:text-fest-warm-soft"
              >
                {contacts.oae.email}
              </a>
            </li>
            <li>{contacts.oae.office}</li>
            <li>
              <a
                href={site.oaeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fest-warm-soft"
              >
                oae.iitd.ac.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="shell py-4 text-xs leading-relaxed text-white/50">
          © {site.year} NISHAAN · Office of Accessible Education · IIT Delhi
        </p>
      </div>
    </footer>
  );
}
