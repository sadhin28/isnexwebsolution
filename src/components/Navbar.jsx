import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // track current section

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" }, // 🔥 capital S fixed
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.name.toLowerCase());
        if (section) {
          const top = section.offsetTop - 80;
          const bottom = top + section.offsetHeight;
          const scroll = window.scrollY;

          if (scroll >= top && scroll < bottom) {
            setActiveSection(link.name.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed text-white top-0 w-full z-50 backdrop-blur-lg bg-black/40">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-1 px-4">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div>
            <img
              className="w-full h-12 object-contain" 
              src="/src/assets/isnexwebsolutionlogo.png"
              alt="logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const element = document.getElementById(link.name.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`relative text-xl transition-colors duration-700
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                  after:bg-[#26b0f0] after:transition-all after:duration-700 after:ease-in-out hover:after:w-full
                  ${activeSection === link.name.toLowerCase() ? "text-[#26b0f0]" : "text-white"}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden shadow-lg bg-black/80 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setIsOpen(false);
                  const element = document.getElementById(link.name.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`block w-full text-start p-2 font-bold transition
                  hover:rounded-xl hover:border hover:border-[#26b0f0]
                  ${activeSection === link.name.toLowerCase() ? "text-[#26b0f0]" : "text-white"}`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
