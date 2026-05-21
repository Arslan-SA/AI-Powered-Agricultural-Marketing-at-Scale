"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { productSearchFrequency } from "@/data/searchData";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

const COLORS = ["#10B981", "#34D399", "#6EE7B7", "#3B82F6", "#60A5FA", "#93C5FD", "#F59E0B", "#FBBF24", "#8B5CF6", "#A78BFA", "#EC4899", "#F472B6"];

export default function TopProductsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-text-primary">Most Searched Products</h3>
        </div>
        <span className="text-xs text-text-secondary">By field rep recommendations</span>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={productSearchFrequency} layout="vertical" margin={{ left: 10, right: 30 }}>
            <XAxis type="number" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis
              dataKey="product"
              type="category"
              tick={{ fill: "#CBD5E1", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={120}
            />
            <Tooltip
              contentStyle={{
                background: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(51,65,85,0.8)",
                borderRadius: 10,
                padding: "10px 14px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              }}
              labelStyle={{ color: "#F1F5F9", fontWeight: 600, marginBottom: 4 }}
              itemStyle={{ color: "#94A3B8", fontSize: 12 }}
              formatter={(value: any) => [`${value ? Number(value).toLocaleString() : "0"} searches`, "Count"]}
            />
            <Bar dataKey="searches" radius={[0, 6, 6, 0]} barSize={18}>
              {productSearchFrequency.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} fillOpacity={0.85} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Trend badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {productSearchFrequency.slice(0, 5).map((p) => (
          <span
            key={p.product}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium ${
              p.trend >= 0
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-red-500/10 text-red-400 border border-red-500/20"
            }`}
          >
            {p.trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {p.product.split(" ")[0]} {p.trend >= 0 ? "+" : ""}{p.trend}%
          </span>
        ))}
      </div>
    </motion.div>
  );
}
