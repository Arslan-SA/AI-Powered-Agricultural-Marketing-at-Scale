"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles } from "lucide-react";
import ProfileCard from "@/components/NextBestAction/ProfileCard";
import CropStage from "@/components/NextBestAction/CropStage";
import PestIndicators from "@/components/NextBestAction/PestIndicators";
import Recommendation from "@/components/NextBestAction/Recommendation";

export default function NextBestActionPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      >
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            Next Best Action
          </h1>
          <p className="text-sm text-text-secondary mt-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            AI-powered recommendation for your next visit
          </p>
        </div>
        <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Analyzing Rajesh Agrovet, Nashik
        </span>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="space-y-6">
          <ProfileCard retailerId="r001" />
          <CropStage cropId="cotton" />
        </div>
        <div className="space-y-6">
          <PestIndicators />
          <Recommendation />
        </div>
      </div>
    </div>
  );
}
