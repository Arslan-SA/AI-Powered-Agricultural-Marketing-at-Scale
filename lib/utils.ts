import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}

export function formatCurrency(num: number): string {
  return "₹" + formatNumber(num);
}

export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

export function getRiskColor(level: string): string {
  switch (level) {
    case "critical":
      return "text-danger";
    case "high":
      return "text-warning";
    case "medium":
      return "text-gold";
    case "low":
      return "text-success";
    default:
      return "text-text-secondary";
  }
}

export function getRiskBg(level: string): string {
  switch (level) {
    case "critical":
      return "bg-danger/15 border-danger/25";
    case "high":
      return "bg-warning/15 border-warning/25";
    case "medium":
      return "bg-gold/15 border-gold/25";
    case "low":
      return "bg-success/15 border-success/25";
    default:
      return "bg-outline/15 border-outline/25";
  }
}
