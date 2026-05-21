"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, Minimize2 } from "lucide-react";

const suggestions = [
  "Which districts need urgent visits?",
  "Show pest risk for Cotton this week",
  "Optimize my route for tomorrow",
  "What's the revenue forecast?",
];

interface Message {
  role: "user" | "ai";
  content: string;
}

const aiResponses: Record<string, string> = {
  "Which districts need urgent visits?":
    "Based on current data, **Nashik** (critical pest outbreak, priority 94) and **Jodhpur** (severe drought, priority 81) need urgent visits. Nashik has an active Armyworm infestation affecting Cotton crops. I recommend scheduling visits within 24 hours.",
  "Show pest risk for Cotton this week":
    "Cotton pest risk is **HIGH** this week:\n• Nashik: Armyworm (87% index)\n• Guntur: Whitefly surge (71% index)\n• Dharwad: Moderate risk (68% index)\n\nRecommend immediate protective sprays in Nashik and Guntur.",
  "Optimize my route for tomorrow":
    "Optimized route for May 20:\n1. **Rajesh Agrovet**, Nashik (12 km) — Pest emergency\n2. **Patil Crop Care**, Pune (18 km) — Quarterly review\n3. **Krishna Farm Supplies**, Belgaum (28 km) — Retention visit\n\nTotal distance: 58 km | Est. time: 4.5 hours",
  "What's the revenue forecast?":
    "Revenue forecast for May: **₹3.8M** (↑14.5% vs target)\n\nKey drivers:\n• Insecticide demand surge (+40%)\n• Soybean protection window\n• New product launches in Punjab\n\nRisk: Drought in Rajasthan may reduce Jodhpur revenue by 15%.",
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "Hello! I'm your FieldOps AI assistant. I can help you with visit planning, pest analysis, route optimization, and sales insights. How can I help?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text?: string) => {
    const msg = text || input;
    if (!msg.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setInput("");

    setTimeout(() => {
      const response =
        aiResponses[msg] ||
        "I'm analyzing your request. Based on the current field data, I recommend checking the **Visit Planner** for optimized recommendations. Would you like me to elaborate on any specific district or crop?";
      setMessages((prev) => [...prev, { role: "ai", content: response }]);
    }, 800);
  };

  return (
    <>
      {/* FAB Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center shadow-xl shadow-primary/30 cursor-pointer"
          >
            <Bot className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: minimized ? "auto" : 520,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",
              border: "1px solid rgba(51,65,85,0.6)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 40px rgba(16,185,129,0.1)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">FieldOps AI</p>
                  <p className="text-[10px] text-primary">Online • Analyzing data</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMinimized(!minimized)}
                  className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <Minimize2 className="w-4 h-4 text-text-secondary" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-4 h-4 text-text-secondary" />
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ height: 360 }}>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-primary/20 text-text-primary rounded-br-md"
                            : "bg-white/5 text-text-secondary rounded-bl-md"
                        }`}
                      >
                        {msg.content.split("\n").map((line, j) => (
                          <p key={j} className={j > 0 ? "mt-1" : ""}>
                            {line.split("**").map((part, k) =>
                              k % 2 === 1 ? (
                                <strong key={k} className="text-text-primary font-semibold">
                                  {part}
                                </strong>
                              ) : (
                                part
                              )
                            )}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  {/* Suggestions */}
                  {messages.length <= 2 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {suggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => handleSend(s)}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-3 border-t border-border/40">
                  <div className="flex items-center gap-2">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Ask FieldOps AI..."
                      className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-white/5 border border-border/40 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary/40 transition-colors"
                    />
                    <button
                      onClick={() => handleSend()}
                      className="p-2.5 rounded-xl bg-primary hover:bg-primary-dark transition-colors"
                    >
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
