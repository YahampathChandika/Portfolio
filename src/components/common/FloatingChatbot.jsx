// import { useState } from "react";
// import ChatWindow from "./ChatWindow";
// import { FiMessageCircle } from "react-icons/fi";

// export default function FloatingChatbot() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         // className="fixed bottom-6 right-6 bg-neutral-400 hover:bg-neutral-500 text-neutral-900 p-4 rounded-full shadow-lg transition-all duration-300 z-50"
//         className="fixed bottom-6 right-6 border border-white/20  p-4 rounded-full shadow-neon"
//       >
//         <FiMessageCircle size={28} />
//       </button>

//       {/* Chat Window */}
//       {open && <ChatWindow />}
//     </>
//   );
// }
