"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { monthlyRevenue, weeklyVisits } from "@/data/mockData";

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) => {
  if (!active || !payload) return null;
  return (
    <div className="tooltip-custom">
      <p className="text-xs font-semibold text-text-primary mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} className="text-xs" style={{ color: entry.color }}>
          {entry.name}: {typeof entry.value === "number" && entry.value > 10000
            ? `₹${(entry.value / 100000).toFixed(1)}L`
            : entry.value}
        </p>
      ))}
    </div>
  );
};

const radarData = [
  { metric: "Revenue", value: 85 },
  { metric: "Visits", value: 78 },
  { metric: "Acceptance", value: 74 },
  { metric: "Coverage", value: 82 },
  { metric: "Efficiency", value: 69 },
  { metric: "Retention", value: 88 },
];

const conversionData = [
  { month: "Jan", rate: 62 },
  { month: "Feb", rate: 65 },
  { month: "Mar", rate: 68 },
  { month: "Apr", rate: 72 },
  { month: "May", rate: 74 },
];

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-text-primary mb-4">Revenue vs Target</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={monthlyRevenue}>
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,65,85,0.3)" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fontSize: 11, fill: "#94A3B8" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="url(#revGrad)" strokeWidth={2} name="Revenue" />
          <Line type="monotone" dataKey="target" stroke="#F59E0B" strokeWidth={2} strokeDasharray="6 3" dot={false} name="Target" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export function PerformanceRadar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-text-primary mb-4">Performance Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="rgba(51,65,85,0.4)" />
          <PolarAngleAxis
            dataKey="metric"
            tick={{ fontSize: 11, fill: "#94A3B8" }}
          />
          <PolarRadiusAxis
            tick={{ fontSize: 9, fill: "#64748B" }}
            axisLine={false}
          />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#10B981"
            fill="#10B981"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export function ConversionChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-text-primary mb-4">Recommendation Acceptance Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={conversionData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,65,85,0.3)" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} domain={[50, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="rate"
            stroke="#F59E0B"
            strokeWidth={3}
            dot={{ fill: "#F59E0B", r: 5, stroke: "#0F172A", strokeWidth: 2 }}
            name="Acceptance %"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export function VisitEfficiencyChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-text-primary mb-4">Visit Efficiency</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={weeklyVisits} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,65,85,0.3)" />
          <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="planned" fill="rgba(59,130,246,0.4)" radius={[4, 4, 0, 0]} name="Planned" />
          <Bar dataKey="completed" fill="#10B981" radius={[4, 4, 0, 0]} name="Completed" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
