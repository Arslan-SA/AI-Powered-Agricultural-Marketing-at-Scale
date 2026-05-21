"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { crops, growthStages } from "@/data/crops";

interface CropStageProps {
  cropId?: string;
}

export default function CropStage({ cropId = "cotton" }: CropStageProps) {
  const crop = crops.find((c) => c.id === cropId) || crops[0];
  const currentStageIndex = growthStages.indexOf(crop.growth_stage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass-card p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-emerald-500/10">
          <Leaf className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Crop Stage Timeline</h3>
          <p className="text-[11px] text-text-secondary">{crop.name} • {crop.season} Season</p>
        </div>
        <span className="ml-auto text-2xl">{crop.icon}</span>
      </div>

      {/* Timeline */}
      <div className="relative mb-4">
        {/* Track */}
        <div className="h-2 rounded-full bg-white/5 relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${crop.growth_progress}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #10B981, #34D399, #6EE7B7)",
            }}
          />
        </div>

        {/* Stage markers */}
        <div className="flex justify-between mt-2">
          {growthStages.filter((_, i) => i % 2 === 0 || i === currentStageIndex).map((stage, i) => {
            const stageIdx = growthStages.indexOf(stage);
            const isPast = stageIdx < currentStageIndex;
            const isCurrent = stageIdx === currentStageIndex;
            return (
              <div
                key={stage}
                className="flex flex-col items-center"
                style={{ position: "relative" }}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full -mt-[13px] ${
                    isCurrent
                      ? "bg-primary ring-4 ring-primary/20"
                      : isPast
                      ? "bg-primary/50"
                      : "bg-white/10"
                  }`}
                />
                <span
                  className={`text-[9px] mt-1 whitespace-nowrap ${
                    isCurrent ? "text-primary font-semibold" : "text-text-secondary"
                  }`}
                >
                  {stage}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="p-2.5 rounded-lg bg-white/3 border border-border/20 text-center">
          <p className="text-[10px] text-text-secondary mb-0.5">Disease Risk</p>
          <p
            className={`text-sm font-bold ${
              crop.disease_risk === "high"
                ? "text-red-400"
                : crop.disease_risk === "medium"
                ? "text-amber-400"
                : "text-emerald-400"
            }`}
          >
            {crop.disease_risk.toUpperCase()}
          </p>
        </div>
        <div className="p-2.5 rounded-lg bg-white/3 border border-border/20 text-center">
          <p className="text-[10px] text-text-secondary mb-0.5">Price Trend</p>
          <p
            className={`text-sm font-bold ${
              crop.price_trend === "up"
                ? "text-emerald-400"
                : crop.price_trend === "down"
                ? "text-red-400"
                : "text-amber-400"
            }`}
          >
            {crop.price_trend === "up" ? "↑ UP" : crop.price_trend === "down" ? "↓ DOWN" : "→ STABLE"}
          </p>
        </div>
        <div className="p-2.5 rounded-lg bg-white/3 border border-border/20 text-center">
          <p className="text-[10px] text-text-secondary mb-0.5">Price/Quintal</p>
          <p className="text-sm font-bold text-text-primary">₹{crop.price_per_quintal.toLocaleString()}</p>
        </div>
      </div>
    </motion.div>
  );
}
