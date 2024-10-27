// import { useState } from "react";

// export default function Navbar() {
//   const [activeTab, setActiveTab] = useState("work");

//   return (
//     <nav className="sticky top-10 z-50 text-white flex justify-between items-center px-10">
//       <div className="flex">
//         <img
//           className="h-14 mr-5"
//           src="https://st2.depositphotos.com/33928496/47670/v/450/depositphotos_476708710-stock-illustration-logo-letter-monogram-slash-modern.jpg"
//         />
//         <div className="flex flex-col">
//           <p className="text-xl text-white">Yahampath Chandika</p>
//           <p className="text-base mt-1 text-gray-400">Full-Stack Developer</p>
//         </div>
//       </div>
//       <div className="relative inline-flex items-center bg-gray-800/50 border border-gray-700 p-1 rounded-full shadow-lg w-[200px] ml-52">
//         <div className="relative  rounded-full p-1 w-full">
//           <div
//             className={`absolute top-0.5 bottom-0.5 left-0 opacity-50 bg-gray-500 rounded-full transition-transform duration-300 ease-in-out w-1/2 ${
//               activeTab === "info" ? "translate-x-full" : "translate-x-0"
//             }`}
//           ></div>

//           <button
//             className={`relative z-10 px-4 py-2 text-sm w-1/2 font-medium rounded-full transition-colors duration-300 hover:text-white ${
//               activeTab === "work" ? "text-white" : "text-gray-400"
//             }`}
//             onClick={() => setActiveTab("work")}
//           >
//             Work
//           </button>

//           <button
//             className={`relative z-10 px-4 py-2 text-sm w-1/2 font-medium rounded-full transition-colors duration-300 hover:text-white ${
//               activeTab === "info" ? "text-white" : "text-gray-400"
//             }`}
//             onClick={() => setActiveTab("info")}
//           >
//             Info
//           </button>
//         </div>
//       </div>
//       <div className="font-semibold flex justify-between">
//         <div className="flex cursor-pointer">
//           LinkedIn
//           <span class="material-symbols-outlined text-xl ml-1">call_made</span>
//         </div>
//         <div className="flex ml-5 cursor-pointer">
//           Resume
//           <span class="material-symbols-outlined text-xl ml-1">call_made</span>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("work");
  const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown toggle

  return (
    <nav className="sticky top-10 z-50 text-white flex justify-between items-center px-5 md:px-10 py-3 md:py-5">
      {/* Logo and Name */}
      <div className="flex items-center">
        <img
          className="h-14 mr-5"
          src="https://st2.depositphotos.com/33928496/47670/v/450/depositphotos_476708710-stock-illustration-logo-letter-monogram-slash-modern.jpg"
        />
        {/* Name & Title (hidden on mobile) */}
        <div className="hidden md:flex flex-col">
          <p className="text-xl text-white">Yahampath Chandika</p>
          <p className="text-base mt-1 text-gray-400">Full-Stack Developer</p>
        </div>
      </div>

      {/* Button Group with Toggle Indicator */}
      <div className="relative inline-flex items-center bg-gray-800/50 border border-gray-700 p-1 rounded-full shadow-lg w-[250px] md:w-[200px] ml-5 md:ml-10">
        <div className="relative rounded-full p-1 w-full">
          {/* Tab Indicator */}
          <div
            className={`absolute top-0.5 bottom-0.5 left-0 opacity-50 bg-gray-500 rounded-full transition-transform duration-300 ease-in-out w-1/2 ${
              activeTab === "info" ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          {/* Work Button */}
          <button
            className={`relative z-10 py-2 text-sm w-1/2 font-medium rounded-full transition-colors duration-300 hover:text-white ${
              activeTab === "work" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("work")}
          >
            Work
          </button>

          {/* Info Button */}
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
        <div className="flex cursor-pointer">
          LinkedIn
          <span className="material-symbols-outlined text-xl ml-1">
            call_made
          </span>
        </div>
        <div className="flex ml-5 cursor-pointer">
          Resume
          <span className="material-symbols-outlined text-xl ml-1">
            call_made
          </span>
        </div>
      </div>

      {/* Mobile View: Dropdown Icon */}
      <div className="md:hidden ml-10">
        <button
          className="text-white focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            alternate_email
          </span>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-20 right-10 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-5">
            <div className="flex flex-col space-y-3">
              <a
                href="#"
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
        )}
      </div>
    </nav>
  );
}
