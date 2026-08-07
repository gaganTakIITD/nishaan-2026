import Link from "next/link";
import { footerNav, site } from "@/content/site";

/** OAE-style institutional footer */
export function Footer() {
  return (
    <footer className="mt-auto w-full bg-nishaan-footer text-white">
      <div className="shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-2xl font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-oae-mint" lang="hi">
            {site.nameHi}
          </p>
          <p className="mt-3 text-sm text-white/80">
            Inclusive cultural celebration for students with disabilities at IIT
            Delhi.
          </p>
          <p className="mt-4 text-sm">
            Organised by{" "}
            <a
              href={site.oaeUrl}
              className="font-medium text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Office of Accessible Education
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Quick links
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/90 no-underline hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Contact
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            <li>
              <a href="mailto:oae@admin.iitd.ac.in">oae@admin.iitd.ac.in</a>
            </li>
            <li>LH 124, Ground Floor, LHC, IIT Delhi</li>
            <li>
              <a href={site.oaeUrl} target="_blank" rel="noopener noreferrer">
                oae.iitd.ac.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="shell py-3 text-xs text-white/60">
          © {site.year} NISHAAN · Office of Accessible Education · IIT Delhi
        </p>
      </div>
    </footer>
  );
}
