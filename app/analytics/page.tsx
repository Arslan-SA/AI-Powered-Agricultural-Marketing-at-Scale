"use client";

import { motion } from "framer-motion";
import { BarChart3, Sparkles } from "lucide-react";
import KPICards from "@/components/Analytics/KPICards";
import Heatmap from "@/components/Analytics/Heatmap";
import {
  RevenueChart,
  PerformanceRadar,
  ConversionChart,
  VisitEfficiencyChart,
} from "@/components/Analytics/Charts";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      >
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            Analytics Dashboard
          </h1>
          <p className="text-sm text-text-secondary mt-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Performance metrics and trend analysis
          </p>
        </div>
        <div className="flex items-center gap-2">
          {["7D", "30D", "90D", "YTD"].map((range, i) => (
            <button
              key={range}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                i === 1
                  ? "bg-primary/20 text-primary"
                  : "bg-white/5 text-text-secondary hover:text-text-primary"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </motion.div>

      <KPICards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <PerformanceRadar />
      </div>

      <Heatmap />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConversionChart />
        <VisitEfficiencyChart />
      </div>
    </div>
  );
}
