"use client";

import { motion } from "framer-motion";
import { regionalActivity } from "@/data/searchData";
import { MapPin } from "lucide-react";

export default function RegionalHeatmap() {
  const maxReps = Math.max(...regionalActivity.map((r) => r.reps));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.38 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-text-primary">Regional Search Activity</h3>
        </div>
        <span className="text-xs text-text-secondary">By state</span>
      </div>

      <div className="space-y-3">
        {regionalActivity.map((region, i) => (
          <motion.div
            key={region.state}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: region.color }} />
                <span className="text-xs text-text-primary font-medium">{region.state}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-text-secondary">{region.reps} reps</span>
                <span className="text-[11px] text-text-secondary/50">•</span>
                <span className="text-[11px] text-text-secondary">{region.retailers} retailers</span>
              </div>
            </div>
            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(region.reps / maxReps) * 100}%` }}
                transition={{ delay: 0.1 * i, duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${region.color}99, ${region.color})`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
