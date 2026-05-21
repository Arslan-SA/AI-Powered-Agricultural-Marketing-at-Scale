"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Navigation } from "lucide-react";
import { visitRecommendations } from "@/data/mockData";

const topVisits = visitRecommendations.slice(0, 4);

export default function RouteOptimization() {
  const totalDistance = topVisits.reduce((sum, v) => sum + v.distance_km, 0);
  const estimatedTime = Math.round(totalDistance * 1.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <Navigation className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">Optimized Route</h3>
            <p className="text-[11px] text-text-secondary">AI-optimized visit sequence for May 20</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-text-secondary">Total</p>
          <p className="text-sm font-semibold text-text-primary">{totalDistance} km • ~{Math.round(estimatedTime / 60)}h</p>
        </div>
      </div>

      <div className="space-y-0">
        {topVisits.map((visit, i) => (
          <div key={visit.id} className="relative">
            {/* Connector line */}
            {i < topVisits.length - 1 && (
              <div className="absolute left-[19px] top-[48px] w-[2px] h-[24px] bg-gradient-to-b from-primary/40 to-primary/10" />
            )}

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/3 transition-colors"
            >
              {/* Step number */}
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                {i + 1}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-primary truncate">
                  {visit.retailer.name}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-text-secondary flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {visit.retailer.district}
                  </span>
                  <span className="text-xs text-text-secondary flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    ~{Math.round(visit.distance_km * 1.5)} min
                  </span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <p className="text-xs text-text-secondary">{visit.distance_km} km</p>
                <p className="text-xs text-emerald-400 font-medium">₹{(visit.estimated_revenue / 1000).toFixed(0)}K</p>
              </div>
            </motion.div>

            {i < topVisits.length - 1 && (
              <div className="flex items-center justify-center py-0.5 text-text-secondary/30">
                <ArrowRight className="w-3 h-3 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 flex gap-2">
        <button className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
          <Navigation className="w-4 h-4" />
          Start Route
        </button>
        <button className="px-4 py-2.5 rounded-xl bg-white/5 text-text-secondary text-sm font-medium hover:bg-white/10 transition-colors border border-border/30">
          Edit
        </button>
      </div>
    </motion.div>
  );
}
