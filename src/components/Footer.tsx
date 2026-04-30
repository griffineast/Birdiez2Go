import Image from "next/image";
import { BASE_PATH } from "@/lib/prefix";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Image
              src={`${BASE_PATH}/images/birdiez-letters-logo.png`}
              alt="Birdiez2Go"
              width={180}
              height={45}
              className="h-10 w-auto mb-3"
            />
            <p className="text-forest/60 text-sm leading-relaxed mb-4">
              The ultimate golf experience — delivered. Premium mobile golf
              simulator entertainment for any event.
            </p>
            <div className="inline-flex items-center gap-2 bg-bright/10 border border-bright/20 rounded-full px-4 py-1.5">
              <svg
                className="w-4 h-4 text-bright"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-bright text-xs font-semibold uppercase tracking-wider">
                Licensed & Insured
              </span>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://www.instagram.com/birdiez2go/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-forest/60 hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Birdiez2go"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-forest/60 hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@birdiez2go"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-forest/60 hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.66 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.7-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-forest font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:Info@Birdiez2go.com"
                className="text-forest/60 hover:text-gold transition-colors text-sm"
              >
                Info@Birdiez2go.com
              </a>
              <a
                href="tel:+16312137775"
                className="text-forest/60 hover:text-gold transition-colors text-sm"
              >
                (631) 213-7775
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-forest font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {["About", "Services", "Gallery", "Reviews", "FAQ"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-forest/60 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 pb-8 sm:pb-0 border-t border-forest/10 flex flex-col items-center gap-4">
          <p className="text-forest/40 text-sm text-center">
            &copy; {new Date().getFullYear()} Birdiez2Go. All rights reserved.
          </p>
          <Image
            src={`${BASE_PATH}/images/2019-Chamber-Logo-1-1.png`}
            alt="Chamber of Commerce member"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
        </div>
      </div>
    </footer>
  );
}
