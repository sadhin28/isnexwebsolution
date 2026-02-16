import { Code, Database, FastForwardIcon, Globe, Server, User2Icon } from "lucide-react";
import { CgWebsite } from "react-icons/cg";
import { FaSadCry, FaStamp, FaStar, FaWix } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";

const About = () => {
  const highlights = [
    {
      icon: <CgWebsite className="h-8 w-8" />,
      title: "Modern Design",
      description:
        "Cutting-edge designs that captivate your audience and set you apart from the competition.",
    },
    {
      icon: <FaWix className="h-8 w-8" />,
      title: "Fast Delivery",
      description:
        "Quick turnaround without compromising on quality. Your project, delivered on time.",
    },
    {
      icon: <User2Icon className="h-8 w-8" />,
      title: "Client Satisfaction",
      description:
        "We don't stop until you're 100% happy. Your success is our top priority."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Integration",
      description:
        "Seamlessly connecting frontend and backend for complete web application solutions.",
    },
  ];
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <h1 className="pt-10 pb-5 text-blue-500">About Us</h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            Who We Are
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Is.Nex Web Solution is a creative digital agency specializing in
            building fast, modern, and SEO-friendly websites that help
            businesses grow and convert visitors into customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left text-gray-400">
            <h3 className="text-2xl font-semibold mb-4">Our Journey</h3>
            <p className="text-muted-foreground text-justify leading-relaxed">
              Is.Nex Web Solution is a creative digital agency that focuses on
              building fast, modern, and SEO-friendly websites to help
              businesses grow online. We create responsive, high-performance,
              and visually attractive websites that convert visitors into real
              customers. Our goal is to deliver smart digital solutions that
              make your brand stand out in the competitive online world.
            </p>
            <p className="text-muted-foreground text-justify leading-relaxed">
              Is.Nex Web Solution provides powerful CMS-based website solutions
              using Wix, WordPress, and Shopify, including custom website
              design, online store development, and complete website redesign
              services. We create fast, responsive, and conversion-focused
              websites tailored to your business needs. We also specialize in
              full-stack web development using the MERN stack (MongoDB,
              Express.js, React, and Node.js) to build scalable, secure, and
              user-friendly web applications from concept to deployment. With a
              strong focus on performance, UI/UX, and SEO, we ensure every
              project is optimized for success and long-term business growth.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "React",
                "Wix",
                "velo",
                "Nwxt.js",
                "Express.js",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3  py-1 bg-blue-400 text-black  rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6  bg-gray-600/10 backdrop-blur-lg  rounded-xl border border-border hover:border-blue-600/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
