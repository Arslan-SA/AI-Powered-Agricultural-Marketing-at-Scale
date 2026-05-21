"use client";

import { motion } from "framer-motion";
import { campaignFunnel } from "@/data/searchData";
import { Funnel, Eye, MousePointer, UserCheck } from "lucide-react";

function formatNum(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

export default function CampaignFunnel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Funnel className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-text-primary">Campaign Search Funnel</h3>
        </div>
        <span className="text-xs text-text-secondary">Digital funnel · Rabi 2025-26</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {campaignFunnel.map((camp, i) => (
          <motion.div
            key={camp.campaign}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="rounded-xl p-4 border border-border/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: camp.color }} />
              <span className="text-xs font-semibold text-text-primary">{camp.campaign}</span>
            </div>

            {/* Funnel steps */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-text-secondary">
                  <Eye className="w-3 h-3" />
                  <span className="text-[11px]">Impressions</span>
                </div>
                <span className="text-sm font-bold text-text-primary">{formatNum(camp.totalImpressions)}</span>
              </div>
              <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: "100%", background: camp.color, opacity: 0.7 }} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-text-secondary">
                  <MousePointer className="w-3 h-3" />
                  <span className="text-[11px]">Page Visits</span>
                </div>
                <span className="text-sm font-bold text-text-primary">{formatNum(camp.totalVisits)}</span>
              </div>
              <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(camp.totalVisits / camp.totalImpressions) * 100 * 20}%`,
                    background: camp.color,
                    opacity: 0.7,
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-text-secondary">
                  <UserCheck className="w-3 h-3" />
                  <span className="text-[11px]">Leads</span>
                </div>
                <span className="text-sm font-bold text-text-primary">{formatNum(camp.totalLeads)}</span>
              </div>
              <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${camp.conversionRate * 5}%`,
                    background: camp.color,
                    opacity: 0.7,
                  }}
                />
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-border/20 flex items-center justify-between">
              <span className="text-[11px] text-text-secondary">Conv. Rate</span>
              <span className="text-sm font-bold" style={{ color: camp.color }}>{camp.conversionRate}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
