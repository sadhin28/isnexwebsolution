// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed text-white top-0 w-full z-50  backdrop-blur-lg">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-1 px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            <h1 className="text-white font-bold">T.B <span className="text-green-500">SA<span>DH</span>IN</span></h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden  md:flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const element = document.getElementById(link.name.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white-800 text-xl hover:underline hover:underline-offset-4 decoration-transparent hover:decoration-green-500 transition-colors duration-700"
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
        <div className="md:hidden  shadow-lg">
          <div className="px-2  pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
               
                key={link.name}
                  onClick={() => {
                  setIsOpen(false)
                  const element = document.getElementById(link.name.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block hover:rounded-xl w-full hover:border hover:border-green-500 text-start p-2  text-white font-bold  hover:text-green-600 transition"
               
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
