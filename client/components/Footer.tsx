import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Media Links */}
          <div className="flex items-center justify-center space-x-6">
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

          {/* Copyright Text */}
          <p className="text-center text-sm text-gray-600">
            Created by Golden Gate in association with Koder Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
