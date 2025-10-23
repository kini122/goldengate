import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Slideshow({
  images,
  interval = 3000,
}: {
  images: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState<number>(() =>
    Math.floor(Math.random() * images.length),
  );

  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval,
    );
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className="relative w-full overflow-hidden h-screen">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`slideshow-${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="text-left text-white w-full max-w-[90%] md:max-w-[1100px] px-4 sm:px-6 md:px-12 lg:px-24 ml-2 md:ml-8 lg:ml-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 tracking-wide leading-tight md:leading-snug">
            Welcome to Golden Gate Decor
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95">
            Your Preferred Interior Design Studio
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/projects">
              <Button className="rounded-full px-8 py-3 bg-gradient-to-r from-[rgb(238,197,88)] to-[rgb(192,147,54)] text-white shadow-lg transform transition-transform duration-200 hover:scale-105">
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="rounded-full px-8 py-3 border border-white/30 text-white bg-white/5 shadow-sm hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const slideshowImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fb4ea7fbd1a9d4e2580e07696e7c3b875?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F8e2fb543f2684f09bdf2433d921fc315?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F24a86975b88f457d9aef54c0d99f5359?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F2f48f77a46824b2cb19ae680c404bdc9?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F05ca7951a9d04f49ab54cadaada9ba13?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F204cc6f07bc042c48dcfa93b2bb0b4b1?format=webp&width=1600",
  ];


  return (
    <div className="w-full">
      {/* Slideshow Hero (full-bleed) */}
      <Slideshow images={slideshowImages} />

      {/* About Section */}
      <section className="relative w-full">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 h-full w-full bg-[rgb(217,196,166)]" />
        </div>
        <div className="relative w-full">
          <div className="grid w-full grid-rows-[min-content_min-content_1fr_min-content]">
            <div className="relative mx-auto mb-1 mt-12 w-full max-w-[980px] px-4">
              <h2 className="text-2xl md:text-[36px] leading-[1.2] text-[rgb(49,64,63)] text-center tracking-[1.2px]">
                <span className="text-[rgb(90,69,38)]">
                  <span className="tracking-[1.8px]">
                    <span className="tracking-[1.8px]">
                      <span className="font-[futura-lt-w01-light,\_futura-lt-w05-light,\_sans-serif]">
                        Quality Curtains, Blinds and other Decor
                      </span>
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <div className="relative mx-auto mb-2 w-[42px] border-t-[2.4px] border-[rgb(90,69,38)]" />
            <div className="relative mx-auto mb-[10px] min-h-[220px] w-full max-w-[680px] px-4">
              <p className="text-base md:text-[16px] leading-7 md:leading-[25.6px] text-[rgb(49,64,63)] text-center font-light">
                Looking for the best Curtains and Blinds designs near you? Our
                Curtains and Blinds are designed by Experienced professionals
                and handcrafted by the best artisans with state-of-the-art
                technology.
              </p>
              <p className="text-[16px] leading-[25.6px] text-[rgb(49,64,63)] text-center font-light">
                &nbsp;
              </p>
              <p className="text-[17px] leading-[25.6px] text-[rgb(49,64,63)] text-center font-light">
                We have a wide range of Curtains, Blinds, Upholstery, and many
                other home décor solutions to suit your needs, from modern to
                classic styles. We can create anything that you imagine, from
                rustic to contemporary, kid's rooms to office spaces we can
                cater to everyone with our experience and variety that will only
                add to your space and make it more welcoming. We also prefer to
                maintain an everlasting relationship with our clients, thus if
                you ever worry about after-sales services, we can guarantee that
                we will always be at your disposal. It might be a little hard to
                believe, Want to explore all our services and products?
              </p>
            </div>
            <div className="relative mx-auto mb-[35px] h-10 w-full max-w-[243px]">
              <Link
                to="/projects"
                aria-label="Explore our projects"
                className="block h-full w-full bg-[rgb(52,52,52)] rounded-md"
              >
                <span className="flex h-full w-full items-center justify-center">
                  <span className="mr-1 max-w-full whitespace-nowrap text-[15px] tracking-[1.5px] text-white">
                    Explore our projects
                  </span>
                  <span aria-hidden="true" className="hidden sm:inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60 60"
                      className="h-[10px] w-[10px] fill-white"
                    >
                      <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Experience the Golden Touch
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We have 25 years of experience in textile designs and interior
                decor. By working closely with our clients through every stage
                of their project, we're able to create something truly special
                and unique.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                After consultation, we create a mockup of the proposed design,
                and share it with the client for approval and feedback. Once
                finalized, we procure the required materials.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-sm bg-gray-200 h-96">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F7432377167f94d3c90b65e8e4e496087?format=webp&width=800"
                alt="Golden Gate Project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        className="bg-gold/5 py-16 lg:py-24"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F587546ad8c244b4d84afa236ebe7a32d%2Fb3f1903b441545068b056630c95d455d)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-[48px] font-serif font-bold text-gray-900 mb-12 text-center">
            Our Partners
          </h2>
          <div className="flex gap-8 items-center justify-center flex-wrap w-auto">
            <div className="h-20 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F102810140467459cac589b9a7a489608?format=webp&width=800"
                alt="DDECOR"
                className="max-w-full max-h-16 object-contain"
              />
            </div>
            <div className="h-20 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F290a71dade864213b31a98ea5c5e2446?format=webp&width=800"
                alt="KC Fabrics"
                className="max-w-full max-h-16 object-contain"
              />
            </div>
            <div className="h-20 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F4df4e3329eb444cd9b16603ed3f56e1e?format=webp&width=800"
                alt="Sarom"
                className="max-w-full max-h-16 object-contain"
              />
            </div>
            <div className="h-20 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F99a120142ae1427e83a940862d0a05e4?format=webp&width=800"
                alt="Golden Gate"
                className="max-w-full max-h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed (SociableKit iframe) */}
      <section className="w-full h-screen bg-gray-50">
        <div className="w-full h-full">
          <iframe
            title="Golden Gate Instagram Feed"
            src="https://widgets.sociablekit.com/instagram-feed/iframe/25613519"
            className="w-full h-full border-0"
            style={{ minHeight: '600px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full">
        <div className="w-full h-[480px] relative">
          <iframe
            title="Golden Gate Location"
            src="https://maps.google.com/maps?ll=11.265695,75.820899&t=k&z=15&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute left-1/2 top-16 transform -translate-x-1/2 w-[min(760px,90%)] bg-white rounded shadow-lg p-4 z-20">
            <div className="flex items-start justify-between">
              <div className="text-sm text-gray-800">
                Tp Kumaran Nair road, Thondayad, bye-pass junction, Nellikkode, Kozhikode, Kerala 673017
              </div>
              <button
                type="button"
                aria-label="close"
                className="ml-4 text-gray-500 hover:text-gray-700"
                onClick={(e) => {
                  const el = (e.target as HTMLElement).closest('.absolute');
                  if (el) el.remove();
                }}
              >
                ✕
              </button>
            </div>
            <div className="mt-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=11.265695,75.820899"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold hover:underline"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 text-center">
            Get to Know Us
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Your Preferred Interior Design Studio
          </p>
          <div className="bg-gold/5 p-8 rounded-sm">
            <p className="text-gray-600 text-lg leading-relaxed text-center">
              We strive to bring you the latest ranges of decorative textiles
              with diverse textures and finishes. Every product is meticulously
              selected to provide our clients with modern and stylish interior
              decor options. From conceptualization to the final outcomes, each
              design process is completely unique and tailored to suit the
              specific needs of the client.
            </p>
            <div className="mt-8 text-center">
              <Link to="/contact">
                <Button className="bg-gold hover:bg-gold-dark text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
