"use client";
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import ChatbotUI from "./ChatUI";
import { AnimatePresence } from "framer-motion";

const ChatBotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-custom-gradient from-blue-600 to-blue-500 text-white p-4 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-all duration-300 z-30"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with us"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && <ChatbotUI onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default ChatBotIcon;
