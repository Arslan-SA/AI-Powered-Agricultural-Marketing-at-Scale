"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown, Filter, Calendar, MapPin, IndianRupee, Sparkles } from "lucide-react";
import { visitRecommendations } from "@/data/mockData";

type SortField = "priority_score" | "estimated_revenue" | "distance_km" | "ai_confidence";

export default function VisitTable() {
  const [sortField, setSortField] = useState<SortField>("priority_score");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("desc");
    }
  };

  const filtered = visitRecommendations
    .filter((v) => filterStatus === "all" || v.status === filterStatus)
    .sort((a, b) => {
      const mul = sortDir === "asc" ? 1 : -1;
      return (a[sortField] - b[sortField]) * mul;
    });

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-500/15 text-yellow-400",
    scheduled: "bg-blue-500/15 text-blue-400",
    completed: "bg-emerald-500/15 text-emerald-400",
    missed: "bg-red-500/15 text-red-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 gap-3 border-b border-border/30">
        <div>
          <h3 className="text-base font-semibold text-text-primary flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            AI Visit Recommendations
          </h3>
          <p className="text-xs text-text-secondary mt-1">
            {filtered.length} visits recommended • Sorted by {sortField.replace("_", " ")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5">
            {["all", "pending", "scheduled"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  filterStatus === status
                    ? "bg-primary/20 text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
          <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-text-secondary">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Retailer / Farmer</th>
              <th
                className="cursor-pointer hover:text-text-primary transition-colors"
                onClick={() => handleSort("priority_score")}
              >
                <span className="flex items-center gap-1">
                  Priority <ArrowUpDown className="w-3 h-3" />
                </span>
              </th>
              <th>Products</th>
              <th
                className="cursor-pointer hover:text-text-primary transition-colors"
                onClick={() => handleSort("estimated_revenue")}
              >
                <span className="flex items-center gap-1">
                  Est. Revenue <ArrowUpDown className="w-3 h-3" />
                </span>
              </th>
              <th
                className="cursor-pointer hover:text-text-primary transition-colors"
                onClick={() => handleSort("distance_km")}
              >
                <span className="flex items-center gap-1">
                  Distance <ArrowUpDown className="w-3 h-3" />
                </span>
              </th>
              <th
                className="cursor-pointer hover:text-text-primary transition-colors"
                onClick={() => handleSort("ai_confidence")}
              >
                <span className="flex items-center gap-1">
                  AI Confidence <ArrowUpDown className="w-3 h-3" />
                </span>
              </th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((visit, i) => (
              <motion.tr
                key={visit.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="cursor-pointer"
              >
                <td>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{visit.retailer.name}</p>
                    <p className="text-xs text-text-secondary flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {visit.retailer.district}, {visit.retailer.state}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{
                        background:
                          visit.priority_score >= 90
                            ? "linear-gradient(135deg, rgba(248,113,113,0.2), rgba(239,68,68,0.1))"
                            : visit.priority_score >= 75
                            ? "linear-gradient(135deg, rgba(251,146,60,0.2), rgba(249,115,22,0.1))"
                            : "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(245,158,11,0.1))",
                        color:
                          visit.priority_score >= 90
                            ? "#F87171"
                            : visit.priority_score >= 75
                            ? "#FB923C"
                            : "#FBBF24",
                        border: `1px solid ${
                          visit.priority_score >= 90
                            ? "rgba(248,113,113,0.3)"
                            : visit.priority_score >= 75
                            ? "rgba(251,146,60,0.3)"
                            : "rgba(251,191,36,0.3)"
                        }`,
                      }}
                    >
                      {visit.priority_score}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {visit.products.slice(0, 2).map((p) => (
                      <span
                        key={p}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {p}
                      </span>
                    ))}
                    {visit.products.length > 2 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-text-secondary">
                        +{visit.products.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  <span className="flex items-center gap-1 text-sm font-medium text-emerald-400">
                    <IndianRupee className="w-3 h-3" />
                    {(visit.estimated_revenue / 1000).toFixed(0)}K
                  </span>
                </td>
                <td>
                  <span className="text-sm text-text-secondary">{visit.distance_km} km</span>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="stat-bar w-16">
                      <div
                        className="stat-bar-fill bg-primary"
                        style={{ width: `${visit.ai_confidence}%` }}
                      />
                    </div>
                    <span className="text-xs text-text-secondary">{visit.ai_confidence}%</span>
                  </div>
                </td>
                <td>
                  <span className={`text-xs px-2 py-1 rounded-lg font-medium ${statusColors[visit.status]}`}>
                    {visit.status.charAt(0).toUpperCase() + visit.status.slice(1)}
                  </span>
                </td>
                <td>
                  <span className="text-xs text-text-secondary flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {visit.recommended_date.split("-").slice(1).join("/")}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
