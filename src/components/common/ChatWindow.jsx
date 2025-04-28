import { useState } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
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
      const botMessage = { type: "bot", text: data.reply };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Sorry, server error. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 p-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-xl max-w-[80%] ${
              msg.type === "user"
                ? "ml-auto bg-neutral-700 text-white"
                : "mr-auto bg-white text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="mr-auto bg-white text-black p-2 rounded-xl max-w-[80%] italic opacity-70">
            Bot is typing...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 mt-2">
        <input
          className="flex-1 bg-white/50 rounded-full px-4 py-2 outline-none text-black placeholder-gray-700"
          placeholder="Ask me..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-neutral-900 hover:bg-black text-white rounded-full px-4 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}
