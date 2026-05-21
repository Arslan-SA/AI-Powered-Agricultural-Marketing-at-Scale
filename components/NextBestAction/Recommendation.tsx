"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle, AlertCircle, ArrowRight, ShoppingCart } from "lucide-react";

const recommendations = [
  {
    product: "Insecticide-XR",
    action: "Recommend immediate protective spray",
    reason: "Armyworm at 87% probability. Cotton flowering stage requires urgent intervention.",
    priority: "urgent",
  },
  {
    product: "Crop Shield Plus",
    action: "Cross-sell preventive treatment",
    reason: "73% historical acceptance for bundled products. Compatible with current spray schedule.",
    priority: "high",
  },
  {
    product: "Growth Booster",
    action: "Recommend for yield optimization",
    reason: "Cotton at 65% growth. Nutrient supplementation window closing in 10 days.",
    priority: "medium",
  },
];

const reasoning = [
  "Pest outbreak creates immediate demand for Insecticide-XR",
  "Retailer's 76% acceptance rate suggests high conversion probability",
  "Bundled product recommendation increases order value by avg 34%",
  "Competitor stock-out in region creates substitution opportunity",
  "Optimal crop stage window for maximum product efficacy",
];

export default function Recommendation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-5"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-emerald-500/10">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-text-primary">AI Recommendation</h3>
          <p className="text-[11px] text-text-secondary">Next best action for Rajesh Agrovet</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
          <span className="text-xs font-semibold text-primary">92% confidence</span>
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-3 mb-5">
        {recommendations.map((rec, i) => (
          <motion.div
            key={rec.product}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className={`p-3 rounded-xl border ${
              rec.priority === "urgent"
                ? "bg-red-500/5 border-red-500/20"
                : rec.priority === "high"
                ? "bg-amber-500/5 border-amber-500/20"
                : "bg-white/3 border-border/20"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`p-1.5 rounded-lg shrink-0 ${
                  rec.priority === "urgent"
                    ? "bg-red-500/15 text-red-400"
                    : rec.priority === "high"
                    ? "bg-amber-500/15 text-amber-400"
                    : "bg-primary/15 text-primary"
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-text-primary">{rec.product}</p>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase ${
                      rec.priority === "urgent"
                        ? "bg-red-500/15 text-red-400"
                        : rec.priority === "high"
                        ? "bg-amber-500/15 text-amber-400"
                        : "bg-primary/15 text-primary"
                    }`}
                  >
                    {rec.priority}
                  </span>
                </div>
                <p className="text-xs text-primary font-medium mb-0.5">{rec.action}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{rec.reason}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explainability */}
      <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle className="w-4 h-4 text-primary" />
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">AI Reasoning</p>
        </div>
        <ul className="space-y-2">
          {reasoning.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="flex items-start gap-2 text-xs text-text-secondary"
            >
              <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <button className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-primary to-emerald-400 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
        Execute Recommendation
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
