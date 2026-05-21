"use client";

import { motion } from "framer-motion";
import { districtPerformance } from "@/data/mockData";

export default function Heatmap() {
  const maxRevenue = Math.max(...districtPerformance.map((d) => d.revenue));

  const getColor = (value: number, max: number) => {
    const ratio = value / max;
    if (ratio >= 0.8) return { bg: "bg-emerald-500/30", text: "text-emerald-400" };
    if (ratio >= 0.6) return { bg: "bg-emerald-500/20", text: "text-emerald-400" };
    if (ratio >= 0.4) return { bg: "bg-amber-500/20", text: "text-amber-400" };
    return { bg: "bg-red-500/20", text: "text-red-400" };
  };

  const getEfficiencyColor = (val: number) => {
    if (val >= 80) return "text-emerald-400";
    if (val >= 60) return "text-amber-400";
    return "text-red-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-text-primary mb-4">District Performance Heatmap</h3>

      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>District</th>
              <th>Revenue (₹K)</th>
              <th>Visits</th>
              <th>Acceptance %</th>
              <th>Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {districtPerformance.map((d, i) => {
              const colors = getColor(d.revenue, maxRevenue);
              return (
                <motion.tr
                  key={d.district}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <td className="font-medium text-text-primary">{d.district}</td>
                  <td>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${colors.bg} ${colors.text}`}>
                      ₹{d.revenue}K
                    </span>
                  </td>
                  <td>{d.visits}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="stat-bar w-12">
                        <div
                          className="stat-bar-fill bg-primary"
                          style={{ width: `${d.acceptance}%` }}
                        />
                      </div>
                      <span className="text-xs">{d.acceptance}%</span>
                    </div>
                  </td>
                  <td>
                    <span className={`text-sm font-bold ${getEfficiencyColor(d.efficiency)}`}>
                      {d.efficiency}%
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border/30">
        <span className="text-[10px] text-text-secondary">Revenue Scale:</span>
        {[
          { label: "High", color: "bg-emerald-500/30" },
          { label: "Good", color: "bg-emerald-500/20" },
          { label: "Moderate", color: "bg-amber-500/20" },
          { label: "Low", color: "bg-red-500/20" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1">
            <span className={`w-3 h-3 rounded ${item.color}`} />
            <span className="text-[10px] text-text-secondary">{item.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
