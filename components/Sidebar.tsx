"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/", icon: "dashboard" },
  { label: "User Searches", href: "/user-searches", icon: "search" },
  { label: "Visit Planner", href: "/visit-planner", icon: "route" },
  { label: "Next Best Action", href: "/next-best-action", icon: "bolt" },
  { label: "Alerts", href: "/alerts", icon: "notifications_active" },
  { label: "Analytics", href: "/analytics", icon: "bar_chart" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen z-40 flex flex-col transition-all duration-300 ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
      style={{
        backgroundColor: "var(--color-surface-container-low)",
        borderRight: "1px solid var(--color-outline-variant)",
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 px-5 h-16 shrink-0"
        style={{ borderBottom: "1px solid var(--color-outline-variant)" }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "var(--color-primary)", color: "var(--color-on-primary-container)" }}
        >
          <span className="material-symbols-outlined fill" style={{ fontSize: 20, color: "#c8ecc8" }}>
            grass
          </span>
        </div>
        {!collapsed && (
          <div>
            <span
              className="st-headline-sm"
              style={{ fontSize: 18, color: "var(--color-primary-dark)", fontWeight: 700 }}
            >
              FieldOps
            </span>
            <span
              className="block st-label-md"
              style={{
                fontSize: 10,
                color: "var(--color-text-secondary)",
                marginTop: -2,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              AI Platform
            </span>
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`sidebar-item flex items-center gap-3 ${
                  isActive ? "active" : ""
                } ${collapsed ? "justify-center px-3" : ""}`}
              >
                <span
                  className={`material-symbols-outlined ${isActive ? "fill" : ""}`}
                  style={{ fontSize: 20 }}
                >
                  {item.icon}
                </span>
                {!collapsed && (
                  <span className="st-label-md whitespace-nowrap">{item.label}</span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Collapse Button */}
      <div style={{ padding: 12, borderTop: "1px solid var(--color-outline-variant)" }}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg transition-colors"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
            {collapsed ? "chevron_right" : "chevron_left"}
          </span>
          {!collapsed && <span className="st-label-md">Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
