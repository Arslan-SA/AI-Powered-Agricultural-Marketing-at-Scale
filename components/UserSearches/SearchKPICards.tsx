"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Users, TrendingUp } from "lucide-react";

const kpis = [
  { label: "Total Product Searches", value: "30,000", change: 12.4, icon: Search, color: "text-primary" },
  { label: "POS Transactions", value: "235,042", change: 8.7, icon: ShoppingCart, color: "text-blue-400" },
  { label: "Active Field Reps", value: "500", change: 3.2, icon: Users, color: "text-purple-400" },
  { label: "Avg. Conversion Rate", value: "6.4%", change: 15.3, icon: TrendingUp, color: "text-amber-400" },
];

export default function SearchKPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, i) => {
        const Icon = kpi.icon;
        return (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass-card p-5 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2.5 rounded-xl bg-white/5 ${kpi.color} group-hover:bg-white/10 transition-colors`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`flex items-center gap-1 text-xs font-semibold ${kpi.change >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                <TrendingUp className="w-3 h-3" />
                +{kpi.change}%
              </span>
            </div>
            <p className="text-2xl font-bold text-text-primary">{kpi.value}</p>
            <p className="text-xs text-text-secondary mt-1">{kpi.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
