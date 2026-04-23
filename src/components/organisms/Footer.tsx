import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { BenevoxLogo } from "@/components/atoms/BenevoxLogo";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <BenevoxLogo className="h-10" />
            </div>
            <p className="text-muted-foreground max-w-md mb-6 mt-4">
              Your Product, Our Team. We Build, Ship, and Handover. Connecting
              you to Africa's elite tech talent.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/models"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Engagement Models
                </a>
              </li>
              <li>
                <a
                  href="/ops-and-security"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  How We Work
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Works
                </a>
              </li>
              <li>
                <a
                  href="/accelerator"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accelerator
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/ops-and-security"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Security & Compliance
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                contact@benevox.africa
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-[hsl(var(--brand-gold))]" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Benevox. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
