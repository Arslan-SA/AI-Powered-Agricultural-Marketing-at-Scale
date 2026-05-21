"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, Sparkles } from "lucide-react";
import SearchKPICards from "@/components/UserSearches/SearchKPICards";
import TopProductsChart from "@/components/UserSearches/TopProductsChart";
import SearchTrendChart from "@/components/UserSearches/SearchTrendChart";
import CategoryBreakdown from "@/components/UserSearches/CategoryBreakdown";
import RecentSearchFeed from "@/components/UserSearches/RecentSearchFeed";
import RegionalHeatmap from "@/components/UserSearches/RegionalHeatmap";
import CampaignFunnel from "@/components/UserSearches/CampaignFunnel";

export default function UserSearchesPage() {
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
            <Search className="w-6 h-6 text-primary" />
            User Search Analytics
          </h1>
          <p className="text-sm text-text-secondary mt-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Rabi Season 2025–26 • Syngenta Field Operations Data
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
            30,000 Visits Analyzed
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/5 text-text-secondary text-xs border border-border/30">
            235K Transactions
          </span>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <SearchKPICards />

      {/* Top Products + Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TopProductsChart />
        </div>
        <CategoryBreakdown />
      </div>

      {/* Search Trend Over Time */}
      <SearchTrendChart />

      {/* Regional Heatmap + Recent Searches */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RegionalHeatmap />
        <RecentSearchFeed />
      </div>

      {/* Campaign Funnel */}
      <CampaignFunnel />
    </div>
  );
}
