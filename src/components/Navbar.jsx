import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";  
import Resume from "../assets/Shreyaa_Resume.pdf"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`mx-3 sm:mx-10 mt-6 px-4 sm:px-8 py-4 transition-all duration-300 
        ${
            isMenuOpen
            ? "bg-transparent border-none backdrop-blur-none rounded-none"
            : "bg-[rgba(25,16,34,0.7)] backdrop-blur border border-[rgba(140,43,238,0.3)] rounded-full"
        }
      lg:bg-[rgba(25,16,34,0.7)] lg:backdrop-blur lg:border lg:border-[rgba(140,43,238,0.3)] lg:rounded-full
        `}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <a href="#hero" onClick={handleLinkClick}>
                <img src={Logo} alt="Logo" className="cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8 text-white text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition ${
                    activeSection === link.href.slice(1)
                      ? "text-purple-400 font-semibold"
                      : "hover:text-purple-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Resume Button */}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block"
          >
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition cursor-pointer">
              Resume
            </button>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {isMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[rgba(140,43,238,0.2)]">
            <ul className="flex flex-col gap-4 text-white text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`transition block ${
                      activeSection === link.href.slice(1)
                        ? "text-purple-400 font-semibold"
                        : "hover:text-purple-400"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 w-full"
            >
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition cursor-pointer">
                Resume
              </button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
