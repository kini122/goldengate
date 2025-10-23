import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ firstName: '', email: '', phone: '' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white py-8 lg:py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Coming Soon.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Fill up this form for Free consultation and Exclusive Disco on your Interior Decor.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gold/5 py-10 lg:py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your email here*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email here*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-96 rounded-full overflow-hidden border-8 border-gold/50">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fb4ea7fbd1a9d4e2580e07696e7c3b875?format=webp&width=800"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 (123) 456 7890</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@goldengate.com</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Kozhikode, Kerala</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
