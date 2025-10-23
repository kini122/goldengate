import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projectCategories = [
  {
    title: "Curtains, Blinds, Upholstery, and other Decor Projects",
    items: [
      {
        name: "Elegant Design",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fb4ea7fbd1a9d4e2580e07696e7c3b875?format=webp&width=800",
      },
      {
        name: "Blinds",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F2f48f77a46824b2cb19ae680c404bdc9?format=webp&width=800",
      },
      {
        name: "Upholstery",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F05ca7951a9d04f49ab54cadaada9ba13?format=webp&width=800",
      },
      {
        name: "Sofa",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F204cc6f07bc042c48dcfa93b2bb0b4b1?format=webp&width=800",
      },
      {
        name: "Curtains",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F8e2fb543f2684f09bdf2433d921fc315?format=webp&width=800",
      },
      {
        name: "White royal curtains",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F5708c5ff8f5f4b4b9a19ceb653d638a6?format=webp&width=800",
      },
      {
        name: "Hall Decor",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F2120192af8bf41ec9eeccf65ea23fbbb?format=webp&width=800",
      },
      {
        name: "Living room",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fe7362f8879994020ae2f93b0a66fb9c2?format=webp&width=800",
      },
      {
        name: "Mesh Design",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F53e9680290a34549a8619e3df9610bab?format=webp&width=800",
      },
      {
        name: "Pleated Fabric",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F39efeb721a7341e1b389c174c2f6fdff?format=webp&width=800",
      },
      {
        name: "Kunnupuram Project",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fccfa5a5840de447aa1ec5f97c7f4a0c9?format=webp&width=800",
      },
      {
        name: "Residential Project",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F7432377167f94d3c90b65e8e4e496087?format=webp&width=800",
      },
    ],
  },
];

const residentialProjects = [
  {
    name: "Kunnupuram Residential Project",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fccfa5a5840de447aa1ec5f97c7f4a0c9?format=webp&width=800",
  },
  {
    name: "Residential Project Eranjipalam, Kozhikode",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fa6d13e1baada45fca0c7508d7ff82186?format=webp&width=800",
  },
  {
    name: "Residential project Pullaloor, Kozhikode",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fe98e17c5705644ae816459ab3c86d16d?format=webp&width=800",
  },
  {
    name: "Riverine Project",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F5bf8aaf1ba1748eb8be81c18b32be15d?format=webp&width=800",
  },
  {
    name: "Veepees Villas",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F7bff929cdead4907bf1556e1851a9b4a?format=webp&width=800",
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
    className="bg-white"
    style={{
      backgroundImage:
        "url(https://cdn.builder.io/api/v1/image/assets%2F587546ad8c244b4d84afa236ebe7a32d%2F9b2524dd21594ebda42f2b5a91b6a52a)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      padding: "80px 0",
      marginBottom: "-5px",
    }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 text-center mb-4">
        Curtains, Blinds, Upholstery, and other Decor Projects.
      </h1>
    </div>
  </section>

      {/* Project Grid */}
  <section className="bg-white" style={{ padding: "20px 0 46px" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectCategories[0].items.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-sm bg-gray-200 h-64"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center font-medium">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Projects Section */}
      <section className="bg-gold/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center justify-center w-full">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
                Residential Projects
              </h2>
              <div className="mt-2">
                <Link to="/projects">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-700 hover:bg-gray-50"
                  >
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm bg-gray-200 h-64 md:h-96 w-full max-w-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F587546ad8c244b4d84afa236ebe7a32d%2F91a5a74110224c70952334d22acc0b05"
                alt="Residential Project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mx-auto">
            {residentialProjects.map((project, index) => (
              <div key={index} className="flex gap-4">
                <div className="relative overflow-hidden rounded-sm bg-gray-200 w-40 h-32 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between py-2">
                  <h3 className="font-serif font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-700 hover:bg-gray-50 w-fit"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-sm bg-gray-200 h-96">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F7432377167f94d3c90b65e8e4e496087?format=webp&width=800"
                alt="Commercial Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
                Commercial Projects
              </h2>
              <Link to="/projects">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-700 hover:bg-gray-50"
                >
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
