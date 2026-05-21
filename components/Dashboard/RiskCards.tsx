"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CloudRain, TrendingDown, Bug } from "lucide-react";
import { districts } from "@/data/districts";

const riskDistricts = districts
  .filter((d) => d.risk_level === "critical" || d.risk_level === "high")
  .sort((a, b) => b.pest_index - a.pest_index)
  .slice(0, 4);

const riskIcons: Record<string, React.ReactNode> = {
  critical: <AlertTriangle className="w-4 h-4" />,
  high: <Bug className="w-4 h-4" />,
};

export default function RiskCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {riskDistricts.map((district, i) => (
        <motion.div
          key={district.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="glass-card p-4 cursor-pointer group"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm font-semibold text-text-primary">{district.name}</p>
              <p className="text-xs text-text-secondary">{district.state}</p>
            </div>
            <span
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
                district.risk_level === "critical"
                  ? "bg-red-500/15 text-red-400"
                  : "bg-orange-500/15 text-orange-400"
              }`}
            >
              {riskIcons[district.risk_level]}
              {district.risk_level.toUpperCase()}
            </span>
          </div>

          <div className="space-y-2">
            {/* Pest Index */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-text-secondary flex items-center gap-1">
                  <Bug className="w-3 h-3" /> Pest Index
                </span>
                <span className="text-text-primary font-medium">{district.pest_index}%</span>
              </div>
              <div className="stat-bar">
                <div
                  className="stat-bar-fill"
                  style={{
                    width: `${district.pest_index}%`,
                    background:
                      district.pest_index > 70
                        ? "linear-gradient(90deg, #F87171, #EF4444)"
                        : district.pest_index > 50
                        ? "linear-gradient(90deg, #FB923C, #F97316)"
                        : "linear-gradient(90deg, #FBBF24, #F59E0B)",
                  }}
                />
              </div>
            </div>

            {/* Rainfall */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <CloudRain className="w-3 h-3" /> Rainfall
              </span>
              <span
                className={`font-medium flex items-center gap-1 ${
                  district.rainfall_deviation < -20 ? "text-red-400" : "text-yellow-400"
                }`}
              >
                <TrendingDown className="w-3 h-3" />
                {district.rainfall_deviation}%
              </span>
            </div>

            {/* Crops */}
            <div className="flex gap-1 flex-wrap pt-1">
              {district.crop_coverage.map((crop) => (
                <span
                  key={crop}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-text-secondary border border-border/30"
                >
                  {crop}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
