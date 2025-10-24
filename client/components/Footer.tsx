import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F99a120142ae1427e83a940862d0a05e4?format=webp&width=400"
                alt="Golden Gate Logo"
                className="h-14 w-auto object-contain mb-4"
              />
              <div className="w-12 h-1 bg-gradient-to-r from-gold to-gold/60" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Golden Gate Decor — premium curtains, blinds and home decor since
              1992. Crafting bespoke textile solutions for discerning clients.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/10 text-gold hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/10 text-gold hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-110"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/10 text-gold hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-110"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                Explore
              </h3>
              <div className="w-8 h-1 bg-gradient-to-r from-gold to-gold/60" />
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="inline-block w-1 h-1 bg-gold rounded-full" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="inline-block w-1 h-1 bg-gold rounded-full" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="inline-block w-1 h-1 bg-gold rounded-full" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="inline-block w-1 h-1 bg-gold rounded-full" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                Services
              </h3>
              <div className="w-8 h-1 bg-gradient-to-r from-gold to-gold/60" />
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#curtains"
                  className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="inline-block w-1 h-1 bg-gold rounded-full" />
                  Curtains & Drapes
                </a>
              </li>
              <li>
                <a
                  href="#blinds"
                  className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="inline-block w-1 h-1 bg-gold rounded-full" />
                  Blinds & Shades
                </a>
              </li>
              <li>
                <a
                  href="#upholstery"
                  className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="inline-block w-1 h-1 bg-gold rounded-full" />
                  Upholstery
                </a>
              </li>
              <li>
                <a
                  href="#design"
                  className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="inline-block w-1 h-1 bg-gold rounded-full" />
                  Interior Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                Get In Touch
              </h3>
              <div className="w-8 h-1 bg-gradient-to-r from-gold to-gold/60" />
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Phone
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <a
                    href="mailto:info@goldengate.com"
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    info@goldengate.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-gray-300 text-sm">
                    Kozhikode, Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © {currentYear} Golden Gate Decor. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a
              href="#privacy"
              className="hover:text-gold transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#terms"
              className="hover:text-gold transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#sitemap"
              className="hover:text-gold transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
    </footer>
  );
}
