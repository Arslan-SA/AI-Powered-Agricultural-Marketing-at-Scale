"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  IndianRupee,
  Users,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Activity,
  Sparkles,
} from "lucide-react";
import IndiaMap from "@/components/IndiaMap";
import RiskCards from "@/components/Dashboard/RiskCards";
import AlertsCarousel from "@/components/Dashboard/AlertsCarousel";
import {
  PestRiskChart,
  SalesOpportunityChart,
  WeeklyVisitsChart,
  RevenueByProductChart,
} from "@/components/Dashboard/Charts";
import { kpiData } from "@/data/mockData";
import { formatCurrency } from "@/lib/utils";

const kpiIcons: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-5 h-5" />,
  IndianRupee: <IndianRupee className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />,
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      >
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
            <Activity className="w-6 h-6 text-primary" />
            Operations Dashboard
          </h1>
          <p className="text-sm text-text-secondary mt-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            AI-powered insights for May 19, 2026 • Western Region
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ backgroundColor: "var(--color-primary-fixed)", color: "var(--color-on-primary-fixed)", border: "1px solid var(--color-outline-variant)" }}>
            Live Data
          </span>
          <span className="px-3 py-1.5 rounded-lg text-xs" style={{ backgroundColor: "var(--color-surface-container)", color: "var(--color-text-secondary)", border: "1px solid var(--color-outline-variant)" }}>
            Last updated: 2 min ago
          </span>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass-card p-5 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                {kpiIcons[kpi.icon]}
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-semibold ${
                  kpi.change >= 0 ? "text-success" : "text-danger"
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
              {kpi.unit === "₹" ? formatCurrency(kpi.value) : kpi.value}
            </p>
            <p className="text-xs text-text-secondary mt-1">{kpi.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Map + Alerts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-text-primary">District Risk Map</h3>
              <span className="text-xs text-text-secondary">15 districts tracked</span>
            </div>
            <IndiaMap className="h-[380px]" />
          </motion.div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <AlertsCarousel />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-5"
          >
            <h3 className="text-sm font-semibold text-text-primary mb-3">Quick Stats</h3>
            <div className="space-y-3">
              {[
                { label: "Pest Alerts Active", value: "4", color: "text-danger", bar: 72, grad: "linear-gradient(90deg, #ba1a1a, #93000a)" },
                { label: "Weather Warnings", value: "3", color: "text-tertiary", bar: 55, grad: "linear-gradient(90deg, #5b3e29, #422815)" },
                { label: "Market Opportunities", value: "6", color: "text-secondary", bar: 85, grad: "linear-gradient(90deg, #4a6549, #2d4b31)" },
                { label: "Visits Pending", value: "12", color: "text-primary", bar: 45, grad: "linear-gradient(90deg, #2d4b31, #17341c)" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-text-secondary">{stat.label}</span>
                    <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                  <div className="stat-bar">
                    <div
                      className="stat-bar-fill"
                      style={{
                        width: `${stat.bar}%`,
                        background: stat.grad,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* High Risk Districts */}
      <div>
        <h2 className="text-base font-semibold text-text-primary mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          High Risk Districts
        </h2>
        <RiskCards />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PestRiskChart />
        <SalesOpportunityChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyVisitsChart />
        <RevenueByProductChart />
      </div>
    </div>
  );
}
