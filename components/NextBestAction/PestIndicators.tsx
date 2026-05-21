"use client";

import { motion } from "framer-motion";
import { Bug, Thermometer, Droplets, Wind } from "lucide-react";

const pestData = [
  { name: "Armyworm", probability: 87, trend: "rising", severity: "critical" },
  { name: "Whitefly", probability: 62, trend: "rising", severity: "high" },
  { name: "Leaf Spot", probability: 34, trend: "stable", severity: "medium" },
  { name: "Bollworm", probability: 18, trend: "declining", severity: "low" },
];

const weatherImpact = [
  { icon: <Thermometer className="w-4 h-4" />, label: "Temperature", value: "34°C", status: "Above Normal", color: "text-amber-400" },
  { icon: <Droplets className="w-4 h-4" />, label: "Humidity", value: "78%", status: "High", color: "text-blue-400" },
  { icon: <Wind className="w-4 h-4" />, label: "Wind Speed", value: "12 km/h", status: "Moderate", color: "text-emerald-400" },
];

export default function PestIndicators() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-red-500/10">
          <Bug className="w-5 h-5 text-red-400" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Pest & Weather Risk</h3>
          <p className="text-[11px] text-text-secondary">Nashik District • Current conditions</p>
        </div>
      </div>

      {/* Pest Probability */}
      <div className="space-y-3 mb-5">
        {pestData.map((pest, i) => (
          <motion.div
            key={pest.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-text-primary font-medium">{pest.name}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                    pest.trend === "rising"
                      ? "bg-red-500/10 text-red-400"
                      : pest.trend === "declining"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {pest.trend === "rising" ? "↑" : pest.trend === "declining" ? "↓" : "→"} {pest.trend}
                </span>
                <span
                  className={`text-xs font-bold ${
                    pest.probability >= 75
                      ? "text-red-400"
                      : pest.probability >= 50
                      ? "text-amber-400"
                      : pest.probability >= 25
                      ? "text-yellow-400"
                      : "text-emerald-400"
                  }`}
                >
                  {pest.probability}%
                </span>
              </div>
            </div>
            <div className="stat-bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pest.probability}%` }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className="stat-bar-fill"
                style={{
                  background:
                    pest.probability >= 75
                      ? "linear-gradient(90deg, #F87171, #EF4444)"
                      : pest.probability >= 50
                      ? "linear-gradient(90deg, #FB923C, #F97316)"
                      : pest.probability >= 25
                      ? "linear-gradient(90deg, #FBBF24, #F59E0B)"
                      : "linear-gradient(90deg, #34D399, #10B981)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Weather Conditions */}
      <div className="border-t border-border/30 pt-4">
        <p className="text-xs text-text-secondary mb-3 uppercase tracking-wider">Weather Impact</p>
        <div className="grid grid-cols-3 gap-2">
          {weatherImpact.map((w) => (
            <div key={w.label} className="p-2.5 rounded-lg bg-white/3 border border-border/20 text-center">
              <div className={`flex items-center justify-center mb-1 ${w.color}`}>
                {w.icon}
              </div>
              <p className="text-xs font-bold text-text-primary">{w.value}</p>
              <p className="text-[10px] text-text-secondary">{w.status}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
