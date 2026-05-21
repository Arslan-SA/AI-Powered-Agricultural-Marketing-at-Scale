"use client";

import { motion } from "framer-motion";
import { User, MapPin, Phone, TrendingUp, Calendar, Star, ShoppingBag } from "lucide-react";
import { retailers } from "@/data/mockData";
import { formatCurrency } from "@/lib/utils";

interface ProfileCardProps {
  retailerId?: string;
}

export default function ProfileCard({ retailerId = "r001" }: ProfileCardProps) {
  const retailer = retailers.find((r) => r.id === retailerId) || retailers[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-5"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-primary/20">
          {retailer.type === "retailer" ? (
            <ShoppingBag className="w-6 h-6" />
          ) : (
            <User className="w-6 h-6" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-text-primary">{retailer.name}</h3>
          <p className="text-xs text-text-secondary flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3" />
            {retailer.region} • {retailer.district}, {retailer.state}
          </p>
          <p className="text-xs text-text-secondary flex items-center gap-1 mt-0.5">
            <Phone className="w-3 h-3" />
            {retailer.phone}
          </p>
        </div>
        <span
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
            retailer.type === "retailer"
              ? "bg-blue-500/15 text-blue-400"
              : "bg-amber-500/15 text-amber-400"
          }`}
        >
          {retailer.type === "retailer" ? "Retailer" : "Farmer"}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {[
          {
            icon: <Star className="w-4 h-4 text-amber-400" />,
            label: "Performance",
            value: `${retailer.performance_score}/100`,
            color: retailer.performance_score >= 80 ? "text-emerald-400" : retailer.performance_score >= 60 ? "text-amber-400" : "text-red-400",
          },
          {
            icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
            label: "Revenue YTD",
            value: formatCurrency(retailer.revenue_ytd),
            color: "text-emerald-400",
          },
          {
            icon: <Calendar className="w-4 h-4 text-blue-400" />,
            label: "Last Visit",
            value: retailer.last_visit.split("-").slice(1).join("/"),
            color: "text-text-primary",
          },
          {
            icon: <TrendingUp className="w-4 h-4 text-primary" />,
            label: "Acceptance Rate",
            value: `${retailer.recommendation_acceptance}%`,
            color: "text-primary",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-3 rounded-xl bg-white/3 border border-border/20"
          >
            <div className="flex items-center gap-2 mb-1">
              {stat.icon}
              <span className="text-[10px] text-text-secondary uppercase tracking-wider">{stat.label}</span>
            </div>
            <p className={`text-sm font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Crop Focus */}
      <div className="mt-4">
        <p className="text-xs text-text-secondary mb-2">Crop Focus</p>
        <div className="flex gap-2">
          {retailer.crop_focus.map((crop) => (
            <span
              key={crop}
              className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium"
            >
              {crop}
            </span>
          ))}
        </div>
      </div>

      {/* Outstanding */}
      {retailer.outstanding > 0 && (
        <div className="mt-3 p-3 rounded-xl bg-red-500/5 border border-red-500/20">
          <div className="flex items-center justify-between">
            <span className="text-xs text-red-400">Outstanding Balance</span>
            <span className="text-sm font-bold text-red-400">{formatCurrency(retailer.outstanding)}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
