"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, CheckCircle, Target, Clock } from "lucide-react";
import { analyticsKPI } from "@/data/mockData";
import { formatCurrency } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  CheckCircle: <CheckCircle className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
};

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {analyticsKPI.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-5"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              {iconMap[kpi.icon]}
            </div>
            <span
              className={`flex items-center gap-1 text-xs font-semibold ${
                kpi.change >= 0 ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {kpi.change >= 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {kpi.change >= 0 ? "+" : ""}
              {kpi.change}%
            </span>
          </div>
          <p className="text-2xl font-bold text-text-primary">
            {kpi.unit === "₹" ? formatCurrency(kpi.value) : `${kpi.value}${kpi.unit}`}
          </p>
          <p className="text-xs text-text-secondary mt-1">{kpi.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
