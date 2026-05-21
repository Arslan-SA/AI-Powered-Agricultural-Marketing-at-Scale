"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { categoryBreakdown } from "@/data/searchData";
import { Layers } from "lucide-react";

export default function CategoryBreakdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="glass-card p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-text-primary">Search by Category</h3>
      </div>

      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryBreakdown}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={3}
              dataKey="count"
              strokeWidth={0}
            >
              {categoryBreakdown.map((entry, idx) => (
                <Cell key={idx} fill={entry.color} fillOpacity={0.85} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(51,65,85,0.8)",
                borderRadius: 10,
                padding: "8px 12px",
              }}
              formatter={(value: any) => [value ? Number(value).toLocaleString() : "0", "Searches"]}
              labelStyle={{ color: "#F1F5F9", fontWeight: 600 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2.5 mt-2">
        {categoryBreakdown.map((cat) => (
          <div key={cat.category} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: cat.color }} />
              <span className="text-xs text-text-secondary">{cat.category}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-text-primary">{cat.percentage}%</span>
              <div className="w-16 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${cat.percentage}%`, background: cat.color }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
