"use client";

import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";

export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);
  const { userRepId, logout } = useAuth();

  return (
    <header
      className="sticky top-0 z-30 h-16 flex items-center justify-between px-6 gap-4"
      style={{
        backgroundColor: "var(--color-background)",
        borderBottom: "1px solid var(--color-outline-variant)",
      }}
    >
      {/* Search */}
      <div
        className={`relative flex items-center transition-all duration-300 ${
          searchFocused ? "w-96" : "w-72"
        }`}
      >
        <span
          className="material-symbols-outlined absolute left-3"
          style={{ fontSize: 18, color: "var(--color-text-secondary)" }}
        >
          search
        </span>
        <input
          type="text"
          placeholder="Search districts, retailers, alerts..."
          className="w-full pl-10 pr-4 py-2 rounded-lg st-body-sm transition-all"
          style={{
            backgroundColor: "var(--color-surface-container)",
            border: "1px solid var(--color-outline-variant)",
            color: "var(--color-text-primary)",
            outline: "none",
          }}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* AI Status */}
        <div
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg"
          style={{
            backgroundColor: "rgba(45,75,49,0.08)",
            border: "1px solid rgba(45,75,49,0.15)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 14, color: "var(--color-primary)" }}>
            auto_awesome
          </span>
          <span className="st-label-md" style={{ color: "var(--color-primary)" }}>AI Active</span>
          <span
            className="animate-pulse"
            style={{
              width: 6, height: 6, borderRadius: "50%",
              backgroundColor: "var(--color-primary)",
              display: "inline-block",
            }}
          />
        </div>

        {/* Notifications */}
        <button
          className="p-2 rounded-lg transition-colors"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>notifications</span>
        </button>

        {/* Settings */}
        <button
          className="p-2 rounded-lg transition-colors"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>
        </button>

        {/* Profile */}
        <div
          className="flex items-center gap-3 pl-3"
          style={{ borderLeft: "1px solid var(--color-outline-variant)" }}
        >
          <div className="text-right hidden sm:block">
            <p className="st-body-sm" style={{ fontWeight: 600, color: "var(--color-text-primary)", lineHeight: "1.2" }}>
              {userRepId === "ADMIN" ? "Administrator" : `Rep ${userRepId || ""}`}
            </p>
            <p className="st-label-md" style={{ color: "var(--color-text-secondary)", fontSize: 11 }}>
              Syngenta Field Team
            </p>
          </div>
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "var(--color-primary)", color: "#c8ecc8" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>person</span>
          </div>
        </div>

        {/* Sign Out */}
        <button
          onClick={logout}
          className="st-label-md px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          style={{
            color: "var(--color-primary)",
            border: "1px solid var(--color-outline-variant)",
          }}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
