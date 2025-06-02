import { useState, useRef, useEffect } from "react";
import { Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from 'next/image';
import Link from 'next/link';

// import chatbotIcon from "@/app/assets/icons/icons8_chatbot_48.svg"

const ChatbotUI = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot", text: `Hi there! 👋 I'm **Chankya AI**,
      your guide to Hiren's portfolio. How can I assist you today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const isMobile = useIsMobile();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input?.trim()) return;

    // Update UI with user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
    ]);

    try {
      // Prepare headers and request body
      setIsLoading(true);
      const headers = new Headers({ "Content-Type": "application/json" });
      const body = JSON.stringify({ question: input });
      setInput("");

      // Make API call
      const response = await fetch(
        "https://portfoliochatbot-v8ey.onrender.com/chat",
        {
          method: "POST",
          headers,
          body,
          redirect: "follow",
        }
      );

      // Handle response
      const result = await response.json();
      if (result.answer) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: result.answer },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "I didn't get that. Can you try again?" },
        ]);
      }
      setIsLoading(false);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again later.",
        },
      ]);
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className={`fixed ${isMobile ? "inset-0 z-50" : "bottom-5 z-40 right-6 w-96 h-[500px] rounded-2xl"
        } bg-white shadow-2xl flex flex-col overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-custom-gradient from-blue-600 to-blue-500 text-white">
        <div className="flex items-center">
          <div className="bg-white/20 p-1.5 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          {/* <Image src={chatbotIcon} height={isMobile ? 50 : 50} width={isMobile ? 50 : 50} alt="chat_logo" /> */}
          <h2 className="text-lg font-bold ml-2">AkshAI</h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
        <div className="flex flex-col space-y-3">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"
                }`}
            >
              <div
                className={`p-3 rounded-2xl max-w-[85%] ${msg.sender === "bot"
                  ? "bg-white border border-gray-200 text-gray-800"
                  : "bg-custom-gradient text-white"
                  }`}
              >
                {msg.sender === "bot" ? (
                  <div className="prose prose-sm max-w-none" style={{ whiteSpace: 'pre-line', wordBreak: 'break-word' }}>
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                ) : (
                  <div className="text-sm">{msg.text}</div>
                )}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 p-3 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-custom-gradient rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 bg-custom-gradient rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 bg-custom-gradient rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-gray-200">
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-grow bg-transparent border-none focus:outline-none text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`ml-2 p-2 rounded-full transition-colors ${input.trim()
              ? "bg-custom-gradient text-white hover:bg-custom-gradient-300"
              : "bg-custom-gradient text-white cursor-not-allowed"
              }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatbotUI;
