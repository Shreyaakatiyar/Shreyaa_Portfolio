import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";  
import Resume from "../assets/Shreyaa_Resume.pdf"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-10 mt-6 bg-[rgba(25,16,34,0.7)] backdrop-blur border border-[rgba(140,43,238,0.3)] rounded-full px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <a href="#hero"><img src={Logo} alt="Logo" className="cursor-pointer" /></a>
            </div>
          </div>

          <ul className="flex gap-8 text-white text-sm">
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

          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition cursor-pointer">
                Resume
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
