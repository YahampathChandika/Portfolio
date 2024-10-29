import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("work");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-10 z-50 text-white flex justify-between items-center px-3 md:px-10 py-3 md:py-5">
      {/* Logo and Name */}
      <div className="flex items-center">
        <img
          className="h-14 mr-3 md:mr-5"
          src="https://cdn.vectorstock.com/i/500p/80/27/yc-logo-monogram-design-template-vector-38558027.jpg"
        />
        {/* Name & Title (hidden on mobile) */}
        <div className="hidden md:flex flex-col">
          <p className="text-xl text-white">Yahampath Chandika</p>
          <p className="text-base mt-1 text-gray-400">Full-Stack Developer</p>
        </div>
      </div>

      {/* Button Group with Toggle Indicator */}
      <div className="relative inline-flex items-center bg-gray-800/50 border border-gray-700 p-1 rounded-full shadow-lg w-[250px] md:w-[200px] mx-3 md:ml-10">
        <div className="relative rounded-full p-1 w-full">
          <div
            className={`absolute top-0.5 bottom-0.5 left-0 opacity-50 bg-gray-500 rounded-full transition-transform duration-300 ease-in-out w-1/2 ${
              activeTab === "info" ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          <button
            className={`relative z-10 py-2 text-sm w-1/2 font-medium rounded-full transition-colors duration-300 hover:text-white ${
              activeTab === "work" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("work")}
          >
            Work
          </button>

          <button
            className={`relative z-10 px-4 py-2 text-sm w-1/2 font-medium rounded-full transition-colors duration-300 hover:text-white ${
              activeTab === "info" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("info")}
          >
            Info
          </button>
        </div>
      </div>

      {/* Desktop View: LinkedIn and Resume */}
      <div className="hidden md:flex font-semibold justify-between">
        <a
          href="https://www.linkedin.com/in/yahampath-chandika/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer"
        >
          LinkedIn
          <span className="material-symbols-outlined text-xl ml-1">
            call_made
          </span>
        </a>
        <div className="flex ml-5 cursor-pointer">
          Resume
          <span className="material-symbols-outlined text-xl ml-1">
            call_made
          </span>
        </div>
      </div>

      {/* Mobile View: Dropdown Icon */}
      <div className="md:hidden ml-3" ref={dropdownRef}>
        {/* <button
          className="text-white focus:outline-none"
          onClick={toggleDropdown}
        >
          <span className="material-symbols-outlined text-3xl">
            {dropdownOpen ? "close" : "alternate_email"}
          </span>
        </button> */}

        {/* <button
          className="text-white focus:outline-none min-w-4"
          onClick={toggleDropdown}
        >
          <span
            className={`material-symbols-outlined text-3xl transition-transform duration-300 ease-in-out ${
              dropdownOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            } absolute top-5 right-2`}
          >
            alternate_email
          </span>
          <span
            className={`material-symbols-outlined text-3xl transition-transform duration-300 ease-in-out ${
              dropdownOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            } absolute top-5 right-2`}
          >
            close
          </span>
        </button> */}

        <div className="relative bg-red-500">
          <button
            className="text-white focus:outline-none relative flex items-center justify-center w-10 h-10"
            onClick={toggleDropdown}
          >
            {/* Alternate Email Icon */}
            <span
              className={`material-symbols-outlined text-3xl transition-all duration-300 ease-in-out transform ${
                dropdownOpen
                  ? "rotate-90 opacity-0 scale-75"
                  : "rotate-0 opacity-100 scale-100"
              }`}
            >
              alternate_email
            </span>

            {/* Close Icon */}
            <span
              className={`material-symbols-outlined text-3xl transition-all duration-300 ease-in-out transform absolute ${
                dropdownOpen
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-75"
              }`}
            >
              close
            </span>
          </button>
        </div>

        {/* Dropdown Menu with Transition */}
        <div
          className={`absolute top-20 right-5 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-5 transition-all duration-300 ease-in-out ${
            dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transformOrigin: "top right" }}
        >
          <div className="flex flex-col space-y-3">
            <a
              href="https://www.linkedin.com/in/yahampath-chandika/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition"
            >
              LinkedIn
              <span className="material-symbols-outlined text-xl ml-2">
                call_made
              </span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white transition"
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
