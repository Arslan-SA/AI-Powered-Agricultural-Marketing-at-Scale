"use client";

import { motion } from "framer-motion";
import { Route, Calendar, Sparkles } from "lucide-react";
import VisitTable from "@/components/VisitPlanner/VisitTable";
import AIExplanation from "@/components/VisitPlanner/AIExplanation";
import RouteOptimization from "@/components/VisitPlanner/RouteOptimization";

export default function VisitPlannerPage() {
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
            <Route className="w-6 h-6 text-primary" />
            AI Visit Planner
          </h1>
          <p className="text-sm text-text-secondary mt-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            8 visits recommended for the next 4 days
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Generate Schedule
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Table - 2/3 */}
        <div className="xl:col-span-2">
          <VisitTable />
        </div>

        {/* Side Panel - 1/3 */}
        <div className="space-y-6">
          <AIExplanation />
          <RouteOptimization />
        </div>
      </div>
    </div>
  );
}
