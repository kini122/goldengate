import { useParams, useNavigate } from "react-router-dom";
import { residentialProjectsData } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = residentialProjectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="w-full flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate("/projects")}>Back to Projects</Button>
        </div>
      </div>
    );
  }

  const currentIndex = residentialProjectsData.findIndex(
    (p) => p.id === projectId
  );
  const previousProject =
    currentIndex > 0 ? residentialProjectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < residentialProjectsData.length - 1
      ? residentialProjectsData[currentIndex + 1]
      : null;

  const handlePrevious = () => {
    if (previousProject) {
      navigate(`/project/${previousProject.id}`);
    }
  };

  const handleNext = () => {
    if (nextProject) {
      navigate(`/project/${nextProject.id}`);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-96 md:h-96 bg-gray-200 overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back Button and Title Overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,1) 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <button
              onClick={() => navigate("/projects")}
              className="text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
            >
              <span>&lt;</span>
              <span>Back</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              {project.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8">
            {project.location}
          </h2>

          {/* Description */}
          <div className="prose prose-lg max-w-none text-gray-700">
            {project.description.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Project Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative bg-gray-200 overflow-hidden rounded-sm h-72"
              >
                <img
                  src={image}
                  alt={`${project.name} gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              {previousProject ? (
                <button
                  onClick={handlePrevious}
                  className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
                >
                  <span>&larr;</span>
                  <span>Previous</span>
                </button>
              ) : (
                <span className="text-gray-300 font-medium">Previous</span>
              )}
            </div>

            <button
              onClick={() => navigate("/projects")}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              All Projects
            </button>

            <div>
              {nextProject ? (
                <button
                  onClick={handleNext}
                  className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
                >
                  <span>Next</span>
                  <span>&rarr;</span>
                </button>
              ) : (
                <span className="text-gray-300 font-medium">Next</span>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
