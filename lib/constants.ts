export const APP_NAME = "FieldOps AI";
export const APP_DESCRIPTION = "AI-Powered Agricultural Operations Dashboard";

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: "LayoutDashboard" },
  { label: "User Searches", href: "/user-searches", icon: "Search" },
  { label: "Visit Planner", href: "/visit-planner", icon: "Route" },
  { label: "Next Best Action", href: "/next-best-action", icon: "Zap" },
  { label: "Alerts", href: "/alerts", icon: "Bell" },
  { label: "Analytics", href: "/analytics", icon: "BarChart3" },
] as const;

export const COLORS = {
  primary: "#2d4b31",
  primaryDark: "#17341c",
  primaryLight: "#c8ecc8",
  background: "#f9f9f7",
  card: "#ffffff",
  textPrimary: "#1a1c1b",
  textSecondary: "#424841",
  gold: "#5b3e29",
  success: "#4a6549",
  warning: "#5b3e29",
  danger: "#ba1a1a",
} as const;

export const CHART_COLORS = [
  "#10B981",
  "#F59E0B",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#F97316",
] as const;

export const RISK_LEVELS = ["critical", "high", "medium", "low"] as const;

export const ALERT_TYPES = ["pest", "weather", "competitor", "market"] as const;

export const CROP_TYPES = [
  "Cotton",
  "Sugarcane",
  "Wheat",
  "Maize",
  "Rice",
  "Soybean",
] as const;
