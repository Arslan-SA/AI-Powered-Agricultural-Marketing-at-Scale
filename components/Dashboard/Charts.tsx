"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  pestRiskTrend,
  salesOpportunity,
  weeklyVisits,
  revenueByProduct,
} from "@/data/mockData";
import { CHART_COLORS } from "@/lib/constants";

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) => {
  if (!active || !payload) return null;
  return (
    <div className="tooltip-custom">
      <p className="text-xs font-semibold text-text-primary mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} className="text-xs" style={{ color: entry.color }}>
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
};

export function PestRiskChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-text-primary mb-4">Pest Risk Trend</h3>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={pestRiskTrend}>
          <defs>
            <linearGradient id="cottonGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F87171" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#F87171" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="riceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="soybeanGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,65,85,0.3)" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="cotton" stroke="#F87171" fill="url(#cottonGrad)" strokeWidth={2} name="Cotton" />
          <Area type="monotone" dataKey="rice" stroke="#3B82F6" fill="url(#riceGrad)" strokeWidth={2} name="Rice" />
          <Area type="monotone" dataKey="soybean" stroke="#F59E0B" fill="url(#soybeanGrad)" strokeWidth={2} name="Soybean" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export function SalesOpportunityChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-text-primary mb-4">Sales Opportunity by District</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={salesOpportunity} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,65,85,0.3)" />
          <XAxis dataKey="district" tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="current" fill="#10B981" radius={[4, 4, 0, 0]} name="Current" />
          <Bar dataKey="potential" fill="rgba(16,185,129,0.3)" radius={[4, 4, 0, 0]} name="Potential" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export function WeeklyVisitsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-text-primary mb-4">Weekly Visits & Revenue</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={weeklyVisits}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,65,85,0.3)" />
          <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar yAxisId="left" dataKey="completed" fill="#10B981" radius={[4, 4, 0, 0]} name="Completed" />
          <Bar yAxisId="left" dataKey="planned" fill="rgba(59,130,246,0.4)" radius={[4, 4, 0, 0]} name="Planned" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export function RevenueByProductChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-text-primary mb-4">Revenue by Product</h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={revenueByProduct}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={4}
            dataKey="value"
          >
            {revenueByProduct.map((_, index) => (
              <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value: string) => (
              <span className="text-xs text-text-secondary">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
