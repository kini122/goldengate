import { Facebook, Instagram, MessageCircle, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col space-y-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F99a120142ae1427e83a940862d0a05e4?format=webp&width=400"
              alt="Golden Gate Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-sm text-gray-600 max-w-sm">
              Golden Gate Decor — quality curtains, blinds and home decor since
              1992. We design, manufacture and install bespoke textile solutions
              for residential and commercial projects.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Phone size={16} />
              <a href="tel:+123456789" className="hover:text-gold">
                +1 (234) 567-89
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Mail size={16} />
              <a
                href="mailto:info@goldengate.example"
                className="hover:text-gold"
              >
                info@goldengate.example
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/projects" className="hover:text-gold">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gold">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Connect
            </h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gold transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              © {new Date().getFullYear()} Golden Gate Decor. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
