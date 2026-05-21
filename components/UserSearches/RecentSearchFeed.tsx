"use client";

import { motion } from "framer-motion";
import { recentSearches } from "@/data/searchData";
import { Search, Package, Leaf, Clock } from "lucide-react";

export default function RecentSearchFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-text-primary">Recent Searches</h3>
        </div>
        <span className="text-xs text-text-secondary">Live feed</span>
      </div>

      <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
        {recentSearches.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i }}
            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-transparent hover:border-border/30 transition-all cursor-pointer group"
          >
            <div className={`p-2 rounded-lg shrink-0 ${
              item.type === "product"
                ? "bg-blue-500/10 text-blue-400"
                : "bg-emerald-500/10 text-emerald-400"
            }`}>
              {item.type === "product" ? <Package className="w-3.5 h-3.5" /> : <Leaf className="w-3.5 h-3.5" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-text-primary truncate group-hover:text-primary transition-colors">
                {item.query}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] text-text-secondary">{item.user}</span>
                <span className="text-[10px] text-text-secondary/50">•</span>
                <span className="text-[11px] text-text-secondary/70">{item.time}</span>
              </div>
            </div>
            <Search className="w-3.5 h-3.5 text-text-secondary/30 group-hover:text-primary/50 transition-colors shrink-0 mt-1" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
