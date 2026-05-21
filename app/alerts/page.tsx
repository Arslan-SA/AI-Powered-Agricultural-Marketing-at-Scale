"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell, Bug, CloudRain, ShoppingCart, Shield,
  AlertTriangle, TrendingUp, Clock, Filter,
  ChevronDown, Sparkles, Zap,
} from "lucide-react";
import { alerts } from "@/data/mockData";
import { getRelativeTime } from "@/lib/utils";

const typeIcons: Record<string, React.ReactNode> = {
  pest: <Bug className="w-4 h-4" />,
  weather: <CloudRain className="w-4 h-4" />,
  market: <ShoppingCart className="w-4 h-4" />,
  competitor: <Shield className="w-4 h-4" />,
};

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  pest: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
  weather: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  market: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  competitor: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
};

const severityColors: Record<string, string> = {
  critical: "bg-red-500/15 text-red-400 border-red-500/30",
  high: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  medium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  low: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

const demandSpikes = [
  { product: "Insecticide-XR", spike: 40, region: "Maharashtra", icon: "🧪" },
  { product: "CottonCare", spike: 28, region: "Karnataka", icon: "🌿" },
  { product: "DroughtShield", spike: 35, region: "Rajasthan", icon: "💧" },
];

export default function AlertsPage() {
  const [activeType, setActiveType] = useState<string>("all");
  const [activeSeverity, setActiveSeverity] = useState<string>("all");

  const filtered = alerts
    .filter((a) => activeType === "all" || a.type === activeType)
    .filter((a) => activeSeverity === "all" || a.severity === activeSeverity)
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      >
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
            <Bell className="w-6 h-6 text-primary" />
            Alerts & Opportunities
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            {alerts.filter((a) => a.action_required).length} alerts requiring action
          </p>
        </div>
        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 text-xs font-semibold border border-red-500/20">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          {alerts.filter((a) => a.severity === "critical").length} Critical
        </span>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5">
          {["all", "pest", "weather", "market", "competitor"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeType === type ? "bg-primary/20 text-primary" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {type !== "all" && typeIcons[type]}
              {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5">
          {["all", "critical", "high", "medium", "low"].map((sev) => (
            <button
              key={sev}
              onClick={() => setActiveSeverity(sev)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeSeverity === sev ? "bg-primary/20 text-primary" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {sev === "all" ? "All" : sev.charAt(0).toUpperCase() + sev.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Alert Feed */}
        <div className="xl:col-span-2 space-y-3">
          <AnimatePresence>
            {filtered.map((alert, i) => {
              const colors = typeColors[alert.type];
              return (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05 }}
                  className={`glass-card p-4 border ${colors.border}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`p-2 rounded-lg shrink-0 ${colors.bg} ${colors.text}`}>
                      {typeIcons[alert.type]}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="text-sm font-semibold text-text-primary">{alert.title}</p>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded border font-semibold uppercase ${severityColors[alert.severity]}`}>
                          {alert.severity}
                        </span>
                        {alert.action_required && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold flex items-center gap-1">
                            <Zap className="w-2.5 h-2.5" /> Action Required
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed mb-2">{alert.description}</p>
                      <div className="flex items-center gap-4 text-[11px] text-text-secondary">
                        <span className="flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Impact: {alert.impact_score}/100</span>
                        <span>{alert.district}, {alert.state}</span>
                        <span className="flex items-center gap-1" suppressHydrationWarning><Clock className="w-3 h-3" /> {getRelativeTime(alert.timestamp)}</span>
                      </div>
                    </div>
                    {alert.action_required && (
                      <button className="shrink-0 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors border border-primary/20">
                        Take Action
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Demand Spikes */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-400" /> Demand Spikes
            </h3>
            <div className="space-y-3">
              {demandSpikes.map((spike) => (
                <div key={spike.product} className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/15">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{spike.icon}</span>
                    <p className="text-sm font-medium text-text-primary">{spike.product}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">{spike.region}</span>
                    <span className="text-xs font-bold text-amber-400">+{spike.spike}% demand</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Alert Summary
            </h3>
            <div className="space-y-2">
              {(["pest", "weather", "market", "competitor"] as const).map((type) => {
                const count = alerts.filter((a) => a.type === type).length;
                const colors = typeColors[type];
                return (
                  <div key={type} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/3 transition-colors">
                    <span className={`flex items-center gap-2 text-xs ${colors.text}`}>
                      {typeIcons[type]}
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${colors.bg} ${colors.text}`}>{count}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
