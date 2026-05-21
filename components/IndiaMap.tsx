"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { districts } from "@/data/districts";

interface IndiaMapProps {
  onDistrictClick?: (districtId: string) => void;
  className?: string;
}

export default function IndiaMap({ onDistrictClick, className = "" }: IndiaMapProps) {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  const getRiskFill = (level: string) => {
    switch (level) {
      case "critical": return "#F87171";
      case "high": return "#FB923C";
      case "medium": return "#FBBF24";
      case "low": return "#34D399";
      default: return "#64748B";
    }
  };

  const hoveredData = districts.find((d) => d.id === hoveredDistrict);

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 420 560"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 0 20px rgba(45,75,49,0.08))" }}
      >
        {/* India outline - simplified */}
        <path
          d="M 195 60 C 170 65 155 80 145 95 C 135 110 140 120 150 115
             C 155 112 160 108 170 105 C 175 103 180 100 185 98
             C 195 94 200 96 205 100 C 212 106 218 108 225 112
             C 230 116 232 125 228 135 C 224 145 222 155 225 162
             C 228 168 235 172 240 178 C 248 188 255 195 265 200
             C 278 208 290 215 298 225 C 305 235 310 245 315 255
             C 320 268 325 280 328 292 C 330 300 325 308 318 312
             C 312 315 305 310 298 305 C 290 298 280 295 272 298
             C 265 300 260 308 255 318 C 250 328 248 340 250 352
             C 252 360 255 368 255 378 C 255 388 252 398 248 408
             C 244 418 238 428 235 440 C 232 452 230 462 225 470
             C 218 482 210 490 202 498 C 195 505 188 510 182 508
             C 175 505 172 498 175 488 C 178 478 180 468 178 458
             C 176 448 170 440 165 432 C 158 422 150 415 145 405
             C 140 395 138 385 135 375 C 132 365 128 355 122 348
             C 115 340 108 332 105 320 C 102 308 100 296 95 285
             C 90 275 88 262 90 250 C 92 238 98 228 105 218
             C 108 212 110 205 115 198 C 122 188 128 180 132 170
             C 138 158 145 148 152 138 C 158 130 162 120 168 112
             C 175 102 180 90 185 78 C 188 70 192 62 195 60 Z"
          fill="rgba(45,75,49,0.12)"
          stroke="rgba(45,75,49,0.25)"
          strokeWidth="1.5"
        />

        {/* State borders - simplified lines */}
        <line x1="100" y1="260" x2="330" y2="260" stroke="rgba(45,75,49,0.15)" strokeWidth="0.5" strokeDasharray="4,4" />
        <line x1="130" y1="320" x2="300" y2="320" stroke="rgba(45,75,49,0.15)" strokeWidth="0.5" strokeDasharray="4,4" />
        <line x1="140" y1="390" x2="270" y2="390" stroke="rgba(45,75,49,0.15)" strokeWidth="0.5" strokeDasharray="4,4" />
        <line x1="200" y1="100" x2="200" y2="500" stroke="rgba(45,75,49,0.08)" strokeWidth="0.5" strokeDasharray="4,4" />

        {/* District dots */}
        {districts.map((district) => {
          const isHovered = hoveredDistrict === district.id;
          const color = getRiskFill(district.risk_level);
          return (
            <g key={district.id}>
              {/* Pulse ring for critical */}
              {district.risk_level === "critical" && (
                <circle
                  cx={district.coordinates.x}
                  cy={district.coordinates.y}
                  r={isHovered ? 18 : 14}
                  fill="none"
                  stroke={color}
                  strokeWidth="1"
                  opacity="0.3"
                  className="animate-alert-pulse"
                />
              )}

              {/* Glow */}
              <circle
                cx={district.coordinates.x}
                cy={district.coordinates.y}
                r={isHovered ? 16 : 10}
                fill={color}
                opacity={isHovered ? 0.2 : 0.1}
                style={{ transition: "all 0.3s ease" }}
              />

              {/* Main dot */}
              <circle
                cx={district.coordinates.x}
                cy={district.coordinates.y}
                r={isHovered ? 7 : 5}
                fill={color}
                stroke={isHovered ? "white" : "transparent"}
                strokeWidth={isHovered ? 2 : 0}
                className="map-dot cursor-pointer"
                onMouseEnter={() => setHoveredDistrict(district.id)}
                onMouseLeave={() => setHoveredDistrict(null)}
                onClick={() => onDistrictClick?.(district.id)}
                style={{ transition: "all 0.3s ease" }}
              />

              {/* Label */}
              {isHovered && (
                <text
                  x={district.coordinates.x + 12}
                  y={district.coordinates.y + 4}
                  fill="var(--color-text-primary)"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="Inter, sans-serif"
                >
                  {district.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoveredData && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 p-3 rounded-xl w-52"
          style={{
            background: "var(--color-inverse-surface)",
            border: "1px solid var(--color-outline)",
            backdropFilter: "blur(12px)",
          }}
        >
          <p className="font-semibold text-sm text-text-primary">{hoveredData.name}</p>
          <p className="text-xs text-text-secondary mb-2">{hoveredData.state}</p>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-text-secondary">Risk Level</span>
              <span
                className="font-medium capitalize"
                style={{ color: getRiskFill(hoveredData.risk_level) }}
              >
                {hoveredData.risk_level}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-text-secondary">Pest Index</span>
              <span className="text-text-primary font-medium">{hoveredData.pest_index}%</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-text-secondary">Rainfall Dev.</span>
              <span
                className={`font-medium ${
                  hoveredData.rainfall_deviation < 0 ? "text-danger" : "text-success"
                }`}
              >
                {hoveredData.rainfall_deviation > 0 ? "+" : ""}
                {hoveredData.rainfall_deviation}%
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-text-secondary">Retailers</span>
              <span className="text-text-primary font-medium">{hoveredData.retailers}</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Legend */}
      <div className="absolute bottom-3 left-3 flex items-center gap-3">
        {[
          { level: "Critical", color: "#F87171" },
          { level: "High", color: "#FB923C" },
          { level: "Medium", color: "#FBBF24" },
          { level: "Low", color: "#34D399" },
        ].map((item) => (
          <div key={item.level} className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: item.color, boxShadow: `0 0 6px ${item.color}40` }}
            />
            <span className="text-[10px] text-text-secondary">{item.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
