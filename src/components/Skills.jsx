import { Globe, StoreIcon } from "lucide-react";
import { CgWebsite } from "react-icons/cg";
import { FaSearchengin, FaUikit, FaWix } from "react-icons/fa";
import { FaPersonDotsFromLine, FaSection, FaSourcetree } from "react-icons/fa6";

const Skills = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Design",
      description:
        "Custom, pixel-perfect website designs tailored to your brand identity.",
    },
    {
      icon: <FaWix className="h-8 w-8" />,
      title: "Wix Development",
      description:
        "Professional Wix websites with advanced features and integrations.",
    },
    {
      icon: <FaPersonDotsFromLine className="h-8 w-8" />,
      title: "Portfolio Website",
      description:
        "Stunning portfolio sites that showcase your work and attract clients.",
    },
    {
      icon: <StoreIcon className="h-8 w-8" />,
      title: "E-commerce Store",
      description:
        "High-converting online stores built for seamless shopping experiences.",
    },
    {
      icon: <FaUikit className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Intuitive and beautiful interfaces that delight your users.",
    },
    {
      icon: <FaSearchengin className="h-8 w-8" />,
      title: "SEO Optimization",
      description:
        "Boost your rankings and drive organic traffic to your site.",
    },
  ];
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-center pb-2 text-blue-500">What We Do</h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            End-to-end web solutions to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6  bg-gray-600/10 backdrop-blur-lg  rounded-xl border border-border hover:text-blue-500 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-primary mb-4 group-hover:scale-100 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 text-center animate-fade-in-up animate-delay-600">
          <h3 className="text-xl  font-semibold mb-6">
            Technologies We Work With
          </h3>
          <div className="flex  flex-wrap justify-center gap-4">
            {[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "VS Code",
              "Postman",
              "Figma",
              "Pixo",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 hover:shadow-lg py-2 bg-blue-500   rounded-lg font-medium text-black  transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
