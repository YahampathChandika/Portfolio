import { useState, useRef, useEffect } from "react";

// Component to render markdown-like text with clickable links
function MessageContent({ text }) {
  // Function to parse and render text with markdown formatting
  const renderText = (text) => {
    // Split text by markdown patterns and URLs
    const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s]+)/g);

    return parts.map((part, index) => {
      // Handle bold text (**text**)
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldText = part.slice(2, -2);
        return (
          <strong key={index} className="font-semibold text-blue-200">
            {boldText}
          </strong>
        );
      }

      // Handle URLs
      if (part.match(/^https?:\/\//)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200 underline underline-offset-2 transition-colors duration-200"
          >
            {part}
          </a>
        );
      }

      // Handle line breaks and regular text
      return part.split("\n").map((line, lineIndex, array) => (
        <span key={`${index}-${lineIndex}`}>
          {line}
          {lineIndex < array.length - 1 && <br />}
        </span>
      ));
    });
  };

  return <div>{renderText(text)}</div>;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi there! How can I help you learn more about Yahampath Chandika today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = {
      type: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://portfolio-chatbot-three.vercel.app/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await res.json();

      setTimeout(() => {
        const botMessage = {
          type: "bot",
          text: data.reply,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
            timestamp: new Date(),
          },
        ]);
        setLoading(false);
      }, 1000);
    }
  }

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const quickSuggestions = [
    "Tell me about his skills",
    "What projects has he worked on?",
    "How to contact him?",
  ];

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-500 ease-out ${
        isExpanded
          ? "w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-2rem)] sm:h-[600px] max-w-md"
          : "w-64 sm:w-80 h-12 sm:h-16"
      }`}
    >
      {/* Chat Widget */}
      <div className="relative w-full h-full">
        {/* Collapsed State - Chat Button */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full h-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-black/50 transition-all duration-300 flex items-center justify-between px-3 sm:px-6 group shadow-2xl hover:shadow-black/20"
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div className="text-left min-w-0 flex-1">
                <div className="text-white text-xs sm:text-sm font-medium truncate">
                  Ask me anything
                </div>
                <div className="text-white/60 text-xs hidden sm:block">
                  About Yahampath
                </div>
              </div>
            </div>
            <span className="relative flex size-2 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
            </span>
          </button>
        )}

        {/* Expanded State - Full Chat */}
        {isExpanded && (
          <div className="w-full h-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">
                    Personal Assistant
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-end gap-2 animate-slideUp ${
                    msg.type === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                    animationFillMode: "both",
                  }}
                >
                  {/* Avatar */}
                  <div
                    className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                      msg.type === "user"
                        ? "bg-gradient-to-br from-gray-600 to-gray-800 text-white"
                        : "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                    }`}
                  >
                    {msg.type === "user" ? "Y" : "AI"}
                  </div>

                  {/* Message */}
                  <div
                    className={`max-w-[75%] group ${
                      msg.type === "user" ? "items-end" : "items-start"
                    } flex flex-col`}
                  >
                    <div
                      className={`px-3 py-2 rounded-2xl text-sm leading-relaxed backdrop-blur-sm transition-all duration-200 ${
                        msg.type === "user"
                          ? "bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-br-sm shadow-lg"
                          : "bg-white/10 text-white border border-white/20 rounded-bl-sm"
                      }`}
                    >
                      <MessageContent text={msg.text} />
                    </div>
                    <span className="text-xs text-white/40 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex items-end gap-2 animate-slideUp">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex-shrink-0 flex items-center justify-center text-xs font-bold">
                    AI
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl rounded-bl-sm px-3 py-2">
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div
                          className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                      <span className="text-xs text-white/60 ml-2">
                        Thinking...
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setInput(suggestion);
                        inputRef.current?.focus();
                      }}
                      className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 text-white/80 rounded-full border border-white/20 transition-all duration-200 hover:scale-105"
                      disabled={loading}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="relative">
                <input
                  ref={inputRef}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3 pr-12 text-white placeholder-white/50 text-sm outline-none transition-all duration-200 focus:bg-white/20 focus:border-white/30"
                  placeholder="Ask me..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  disabled={loading}
                />

                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-lg"
                >
                  {loading ? (
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .scrollbar-thin {
          scrollbar-width: thin;
        }

        .scrollbar-thumb-white\/20::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
        }

        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }

        ::-webkit-scrollbar {
          width: 4px;
        }
      `}</style>
    </div>
  );
}
