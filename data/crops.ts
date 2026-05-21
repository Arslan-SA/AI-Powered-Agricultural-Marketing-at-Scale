export interface Crop {
  id: string;
  name: string;
  growth_stage: string;
  growth_progress: number;
  disease_risk: "high" | "medium" | "low";
  price_trend: "up" | "down" | "stable";
  price_per_quintal: number;
  season: string;
  icon: string;
}

export const crops: Crop[] = [
  {
    id: "cotton",
    name: "Cotton",
    growth_stage: "Flowering",
    growth_progress: 65,
    disease_risk: "high",
    price_trend: "up",
    price_per_quintal: 6200,
    season: "Kharif",
    icon: "🌿",
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    growth_stage: "Grand Growth",
    growth_progress: 55,
    disease_risk: "medium",
    price_trend: "stable",
    price_per_quintal: 3150,
    season: "Annual",
    icon: "🌾",
  },
  {
    id: "wheat",
    name: "Wheat",
    growth_stage: "Harvested",
    growth_progress: 100,
    disease_risk: "low",
    price_trend: "down",
    price_per_quintal: 2275,
    season: "Rabi",
    icon: "🌾",
  },
  {
    id: "maize",
    name: "Maize",
    growth_stage: "Vegetative",
    growth_progress: 35,
    disease_risk: "medium",
    price_trend: "up",
    price_per_quintal: 1962,
    season: "Kharif",
    icon: "🌽",
  },
  {
    id: "rice",
    name: "Rice",
    growth_stage: "Tillering",
    growth_progress: 40,
    disease_risk: "medium",
    price_trend: "stable",
    price_per_quintal: 2040,
    season: "Kharif",
    icon: "🍚",
  },
  {
    id: "soybean",
    name: "Soybean",
    growth_stage: "Pod Formation",
    growth_progress: 70,
    disease_risk: "high",
    price_trend: "up",
    price_per_quintal: 4600,
    season: "Kharif",
    icon: "🫘",
  },
];

export const growthStages = [
  "Germination",
  "Seedling",
  "Vegetative",
  "Tillering",
  "Flowering",
  "Grand Growth",
  "Pod Formation",
  "Maturation",
  "Harvested",
];
