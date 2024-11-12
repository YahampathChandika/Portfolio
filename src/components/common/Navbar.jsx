import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
export default function Navbar() {
  const location = useLocation();
  const initialTab = location.pathname === "/info" ? "info" : "work";
  const [activeTab, setActiveTab] = useState(initialTab);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true); // Control navbar visibility
  const lastScrollTop = useRef(0); // Store the last scroll position
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  // Handle outside clicks for dropdown close
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Detect scroll to hide/show the navbar only on mobile view
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return; // Apply only for mobile view

      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop.current) {
        setNavbarVisible(false); // Hide on scroll down
      } else {
        setNavbarVisible(true); // Show on scroll up
      }
      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center px-3 md:px-10 py-5 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo and Name */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          className="h-auto w-20 md:mr-5 neon-border rounded-full p-2"
          // src="https://cdn.vectorstock.com/i/500p/80/27/yc-logo-monogram-design-template-vector-38558027.jpg"
          src={logo}
          alt="logo"
        />
        <div className="hidden md:flex flex-col">
          <p className="text-xl text-white glow-text">Yahampath Chandika</p>
          <p className="text-base mt-1 text-gray-200">Full-Stack Developer</p>
        </div>
      </div>

      {/* Button Group with Toggle Indicator */}
      <div className="relative inline-flex items-center border border-white/20 p-1 rounded-full shadow-neon w-full md:w-[200px] mx-5 md:ml-10">
        <div className="relative rounded-full p-1 w-full">
          <div
            className={`absolute top-0.5 bottom-0.5 left-0 bg-white/20 rounded-full transition-transform duration-300 ease-in-out w-1/2 ${
              activeTab === "info" ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          <button
            className={`relative z-10 py-2 text-sm w-1/2 font-medium glow-text neon-hover rounded-full transition-colors duration-300 hover:text-white ${
              activeTab === "work" ? "text-white" : "text-gray-300"
            }`}
            onClick={() => {
              setActiveTab("work");
              navigate("/");
            }}
          >
            Work
          </button>

          <button
            className={`relative z-10 px-4 py-2 text-sm w-1/2 font-medium glow-text neon-hover rounded-full transition-colors duration-300 hover:text-white ${
              activeTab === "info" ? "text-white" : "text-gray-300"
            }`}
            onClick={() => {
              setActiveTab("info");
              navigate("/info");
            }}
          >
            Info
          </button>
        </div>
      </div>

      {/* Desktop View Links */}
      <div className="hidden md:flex font-semibold justify-between text-white space-x-5">
        <a
          href="https://www.linkedin.com/in/yahampath-chandika/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center neon-hover"
        >
          LinkedIn
          <span className="material-symbols-outlined text-xl ml-1">
            call_made
          </span>
        </a>

        <a
          href="https://github.com/YahampathChandika"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center neon-hover"
        >
          GitHub
          <span className="material-symbols-outlined text-xl ml-1">
            call_made
          </span>
        </a>

        
        <a
          href="https://drive.google.com/file/d/1Xc_jCwd075Uz2obHd84ZNtyIrXJCVNPs/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center neon-hover"
        >
          Resume
          <span className="material-symbols-outlined text-xl ml-1">
            call_made
          </span>
        </a>
      </div>

      {/* Mobile View Dropdown */}
      <div className="md:hidden" ref={dropdownRef}>
        <div className="relative">
          <button
            className="text-white flex items-center justify-center w-10 h-10 border border-1 neon-border rounded-full"
            onClick={toggleDropdown}
          >
            <span
              className={`material-symbols-outlined text-2xl transition-all duration-300 ease-in-out transform ${
                dropdownOpen
                  ? "rotate-90 opacity-0 scale-75"
                  : "rotate-0 opacity-100 scale-100"
              }`}
            >
              alternate_email
            </span>

            <span
              className={`material-symbols-outlined text-2xl transition-all duration-300 ease-in-out transform absolute ${
                dropdownOpen
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-75"
              }`}
            >
              close
            </span>
          </button>
        </div>

        <div
          className={`absolute top-20 right-5 border bg-black border-white/20 rounded-lg shadow-neon p-5 transition-all duration-300 ease-in-out ${
            dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transformOrigin: "top right" }}
        >
          <div className="flex flex-col space-y-3">
            <a
              href="https://www.linkedin.com/in/yahampath-chandika/"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-hover"
            >
              LinkedIn
              <span className="material-symbols-outlined text-xl ml-2">
                call_made
              </span>
            </a>

            <a
              href="https://github.com/YahampathChandika"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-hover"
            >
              GitHub
              <span className="material-symbols-outlined text-xl ml-2">
                call_made
              </span>
            </a>
            <a
              href="https://drive.google.com/file/d/1Xc_jCwd075Uz2obHd84ZNtyIrXJCVNPs/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-hover"
            >
              Resume
              <span className="material-symbols-outlined text-xl ml-2">
                call_made
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
