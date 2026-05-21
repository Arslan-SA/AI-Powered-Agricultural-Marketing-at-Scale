"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Bug, CloudRain, ShoppingCart, Shield } from "lucide-react";
import { alerts } from "@/data/mockData";
import { getRelativeTime } from "@/lib/utils";

const typeIcons: Record<string, React.ReactNode> = {
  pest: <Bug className="w-4 h-4" />,
  weather: <CloudRain className="w-4 h-4" />,
  market: <ShoppingCart className="w-4 h-4" />,
  competitor: <Shield className="w-4 h-4" />,
};

const typeColors: Record<string, string> = {
  pest: "from-red-500/20 to-red-600/5 border-red-500/30",
  weather: "from-blue-500/20 to-blue-600/5 border-blue-500/30",
  market: "from-amber-500/20 to-amber-600/5 border-amber-500/30",
  competitor: "from-purple-500/20 to-purple-600/5 border-purple-500/30",
};

const typeIconBg: Record<string, string> = {
  pest: "bg-red-500/20 text-red-400",
  weather: "bg-blue-500/20 text-blue-400",
  market: "bg-amber-500/20 text-amber-400",
  competitor: "bg-purple-500/20 text-purple-400",
};

export default function AlertsCarousel() {
  const [current, setCurrent] = useState(0);
  const topAlerts = alerts.filter((a) => a.severity === "critical" || a.severity === "high").slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % topAlerts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [topAlerts.length]);

  const next = () => setCurrent((prev) => (prev + 1) % topAlerts.length);
  const prev = () => setCurrent((prev) => (prev - 1 + topAlerts.length) % topAlerts.length);

  return (
    <div className="glass-card p-5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-text-primary">Live Alerts</h3>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-danger animate-pulse" />
          <span className="text-xs text-text-secondary">{topAlerts.length} active</span>
        </div>
      </div>

      <div className="relative min-h-[120px]">
        <AnimatePresence mode="wait">
          {topAlerts.map(
            (alert, index) =>
              index === current && (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-xl p-4 border bg-gradient-to-r ${typeColors[alert.type]}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`p-2 rounded-lg ${typeIconBg[alert.type]}`}>
                      {typeIcons[alert.type]}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold text-text-primary truncate">
                          {alert.title}
                        </p>
                        {alert.severity === "critical" && (
                          <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 font-semibold animate-alert-pulse">
                            CRITICAL
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                        {alert.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-[10px] text-text-secondary">
                          {alert.district}, {alert.state}
                        </span>
                        <span className="text-[10px] text-text-secondary" suppressHydrationWarning>
                          {getRelativeTime(alert.timestamp)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-1.5">
          {topAlerts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-white/20 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-1">
          <button
            onClick={prev}
            className="p-1.5 rounded-lg hover:bg-white/5 transition-colors text-text-secondary"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="p-1.5 rounded-lg hover:bg-white/5 transition-colors text-text-secondary"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
