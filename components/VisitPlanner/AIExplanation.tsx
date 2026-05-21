"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, AlertTriangle, Calendar, Target } from "lucide-react";

interface AIExplanationProps {
  visitId?: string;
}

const explanations = [
  {
    icon: <AlertTriangle className="w-4 h-4 text-red-400" />,
    title: "Pest Emergency",
    detail: "Armyworm outbreak in Nashik requires immediate protective action. Cotton at flowering stage is highly vulnerable.",
    confidence: 94,
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
    title: "Revenue Opportunity",
    detail: "Insecticide demand surged 40% this week. Rajesh Agrovet historically converts 76% of recommendations.",
    confidence: 88,
  },
  {
    icon: <Calendar className="w-4 h-4 text-blue-400" />,
    title: "Visit Timing",
    detail: "Last visit was 7 days ago. Optimal re-visit window is 5-10 days for high-priority retailers.",
    confidence: 85,
  },
  {
    icon: <Target className="w-4 h-4 text-amber-400" />,
    title: "Product Match",
    detail: "Insecticide-XR and Crop Shield Plus align with current crop stage needs. Cross-sell probability: 72%.",
    confidence: 82,
  },
];

export default function AIExplanation({ }: AIExplanationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-text-primary">AI Reasoning</h3>
          <p className="text-[11px] text-text-secondary">Why this visit is prioritized</p>
        </div>
      </div>

      <div className="space-y-3">
        {explanations.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex gap-3 p-3 rounded-xl bg-white/3 border border-border/20 hover:border-primary/20 transition-colors"
          >
            <span className="mt-0.5 shrink-0">{exp.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold text-text-primary">{exp.title}</p>
                <span className="text-[10px] text-primary font-medium">{exp.confidence}%</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">{exp.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Composite Score */}
      <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-primary">Composite Priority Score</span>
          <span className="text-lg font-bold text-primary">94</span>
        </div>
        <div className="stat-bar">
          <div
            className="stat-bar-fill"
            style={{
              width: "94%",
              background: "linear-gradient(90deg, #10B981, #34D399)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
