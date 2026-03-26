import Image from "next/image";
import { BASE_PATH } from "@/lib/prefix";

export default function Footer() {
  return (
    <footer className="bg-forest border-t border-whisper/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Image
              src={`${BASE_PATH}/images/birdiez_lettering_yellow.png`}
              alt="Birdiez2Go"
              width={180}
              height={45}
              className="h-10 w-auto mb-3"
            />
            <p className="text-sand/60 text-sm leading-relaxed mb-4">
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
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-whisper font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <a
              href="mailto:Info@Birdiez2go.com"
              className="text-sand/60 hover:text-gold transition-colors text-sm"
            >
              Info@Birdiez2go.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-whisper font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {["About", "Services", "Gallery", "Reviews", "FAQ"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sand/60 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-whisper/10 text-center">
          <p className="text-sand/40 text-sm">
            &copy; {new Date().getFullYear()} Birdiez2Go. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
