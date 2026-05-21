"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { weeklySearchTrend } from "@/data/searchData";
import { Activity } from "lucide-react";

export default function SearchTrendChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-text-primary">Search Volume Over Time</h3>
        </div>
        <span className="text-xs text-text-secondary">Oct 2025 – Apr 2026 (Landing page visits)</span>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={weeklySearchTrend} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="gWheat" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gMustard" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gChickpea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gPotato" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="week" tick={{ fill: "#94A3B8", fontSize: 10 }} axisLine={false} tickLine={false} interval={2} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(51,65,85,0.8)",
                borderRadius: 10,
                padding: "10px 14px",
              }}
              labelStyle={{ color: "#F1F5F9", fontWeight: 600, marginBottom: 4 }}
              itemStyle={{ fontSize: 12 }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 11, color: "#94A3B8", paddingBottom: 8 }}
            />
            <Area type="monotone" dataKey="wheat" stroke="#F59E0B" fill="url(#gWheat)" strokeWidth={2} dot={false} />
            <Area type="monotone" dataKey="mustard" stroke="#EF4444" fill="url(#gMustard)" strokeWidth={2} dot={false} />
            <Area type="monotone" dataKey="chickpea" stroke="#8B5CF6" fill="url(#gChickpea)" strokeWidth={2} dot={false} />
            <Area type="monotone" dataKey="potato" stroke="#10B981" fill="url(#gPotato)" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
