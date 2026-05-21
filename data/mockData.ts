export interface Retailer {
  id: string;
  name: string;
  region: string;
  district: string;
  state: string;
  crop_focus: string[];
  performance_score: number;
  visit_frequency: number;
  last_visit: string;
  recommendation_acceptance: number;
  revenue_ytd: number;
  outstanding: number;
  phone: string;
  type: "retailer" | "farmer";
}

export interface VisitRecommendation {
  id: string;
  retailer: Retailer;
  priority_score: number;
  reason: string;
  recommended_date: string;
  estimated_revenue: number;
  products: string[];
  distance_km: number;
  ai_confidence: number;
  status: "pending" | "scheduled" | "completed" | "missed";
}

export interface Alert {
  id: string;
  type: "pest" | "weather" | "competitor" | "market";
  severity: "critical" | "high" | "medium" | "low";
  title: string;
  description: string;
  district: string;
  state: string;
  timestamp: Date;
  action_required: boolean;
  impact_score: number;
}

export interface KPIData {
  label: string;
  value: number;
  change: number;
  unit: string;
  icon: string;
}

// Retailers & Farmers
export const retailers: Retailer[] = [
  {
    id: "r001",
    name: "Rajesh Agrovet",
    region: "Western Maharashtra",
    district: "Nashik",
    state: "Maharashtra",
    crop_focus: ["Cotton", "Sugarcane"],
    performance_score: 82,
    visit_frequency: 3,
    last_visit: "2026-05-12",
    recommendation_acceptance: 76,
    revenue_ytd: 485000,
    outstanding: 32000,
    phone: "+91 9876543210",
    type: "retailer",
  },
  {
    id: "r002",
    name: "Punjab Agri Centre",
    region: "Central Punjab",
    district: "Ludhiana",
    state: "Punjab",
    crop_focus: ["Wheat", "Rice"],
    performance_score: 91,
    visit_frequency: 4,
    last_visit: "2026-05-15",
    recommendation_acceptance: 88,
    revenue_ytd: 720000,
    outstanding: 0,
    phone: "+91 9876543211",
    type: "retailer",
  },
  {
    id: "r003",
    name: "Krishna Farm Supplies",
    region: "North Karnataka",
    district: "Belgaum",
    state: "Karnataka",
    crop_focus: ["Cotton", "Maize"],
    performance_score: 67,
    visit_frequency: 2,
    last_visit: "2026-05-08",
    recommendation_acceptance: 62,
    revenue_ytd: 310000,
    outstanding: 45000,
    phone: "+91 9876543212",
    type: "retailer",
  },
  {
    id: "r004",
    name: "Sharma Seeds & Fertilizers",
    region: "Eastern Rajasthan",
    district: "Jaipur",
    state: "Rajasthan",
    crop_focus: ["Wheat", "Maize"],
    performance_score: 74,
    visit_frequency: 2,
    last_visit: "2026-05-10",
    recommendation_acceptance: 71,
    revenue_ytd: 395000,
    outstanding: 18000,
    phone: "+91 9876543213",
    type: "retailer",
  },
  {
    id: "r005",
    name: "Indore Krishi Kendra",
    region: "Western MP",
    district: "Indore",
    state: "Madhya Pradesh",
    crop_focus: ["Soybean", "Wheat"],
    performance_score: 85,
    visit_frequency: 3,
    last_visit: "2026-05-14",
    recommendation_acceptance: 83,
    revenue_ytd: 560000,
    outstanding: 12000,
    phone: "+91 9876543214",
    type: "retailer",
  },
  {
    id: "r006",
    name: "Guntur Agri Hub",
    region: "Coastal AP",
    district: "Guntur",
    state: "Andhra Pradesh",
    crop_focus: ["Cotton", "Rice"],
    performance_score: 72,
    visit_frequency: 2,
    last_visit: "2026-05-09",
    recommendation_acceptance: 68,
    revenue_ytd: 420000,
    outstanding: 28000,
    phone: "+91 9876543215",
    type: "retailer",
  },
  {
    id: "r007",
    name: "Patil Crop Care",
    region: "Western Maharashtra",
    district: "Pune",
    state: "Maharashtra",
    crop_focus: ["Sugarcane", "Soybean"],
    performance_score: 88,
    visit_frequency: 4,
    last_visit: "2026-05-16",
    recommendation_acceptance: 85,
    revenue_ytd: 640000,
    outstanding: 5000,
    phone: "+91 9876543216",
    type: "retailer",
  },
  {
    id: "r008",
    name: "Haryana Kisan Store",
    region: "Southern Haryana",
    district: "Karnal",
    state: "Haryana",
    crop_focus: ["Wheat", "Rice", "Sugarcane"],
    performance_score: 79,
    visit_frequency: 3,
    last_visit: "2026-05-13",
    recommendation_acceptance: 75,
    revenue_ytd: 510000,
    outstanding: 22000,
    phone: "+91 9876543217",
    type: "retailer",
  },
  {
    id: "f001",
    name: "Suresh Kumar (Farmer)",
    region: "Western Maharashtra",
    district: "Nashik",
    state: "Maharashtra",
    crop_focus: ["Cotton"],
    performance_score: 65,
    visit_frequency: 1,
    last_visit: "2026-05-06",
    recommendation_acceptance: 58,
    revenue_ytd: 120000,
    outstanding: 8000,
    phone: "+91 9876543218",
    type: "farmer",
  },
  {
    id: "f002",
    name: "Amrit Singh (Farmer)",
    region: "Central Punjab",
    district: "Ludhiana",
    state: "Punjab",
    crop_focus: ["Wheat", "Rice"],
    performance_score: 78,
    visit_frequency: 2,
    last_visit: "2026-05-11",
    recommendation_acceptance: 72,
    revenue_ytd: 280000,
    outstanding: 0,
    phone: "+91 9876543219",
    type: "farmer",
  },
];

// Visit Recommendations
export const visitRecommendations: VisitRecommendation[] = [
  {
    id: "v001",
    retailer: retailers[0],
    priority_score: 94,
    reason: "Critical pest outbreak in Nashik region. Cotton crop at flowering stage requires immediate protective action. High revenue potential with pesticide upsell.",
    recommended_date: "2026-05-20",
    estimated_revenue: 85000,
    products: ["Insecticide-XR", "Crop Shield Plus", "Growth Booster"],
    distance_km: 12,
    ai_confidence: 92,
    status: "pending",
  },
  {
    id: "v002",
    retailer: retailers[1],
    priority_score: 87,
    reason: "High-performing retailer due for scheduled visit. New wheat fungicide launch opportunity. Low stock detected for flagship products.",
    recommended_date: "2026-05-20",
    estimated_revenue: 120000,
    products: ["WheatGuard Pro", "FungiClear", "Soil Boost"],
    distance_km: 45,
    ai_confidence: 88,
    status: "pending",
  },
  {
    id: "v003",
    retailer: retailers[2],
    priority_score: 81,
    reason: "Declining recommendation acceptance rate. Competitor activity detected in Belgaum. Relationship maintenance visit recommended.",
    recommended_date: "2026-05-21",
    estimated_revenue: 55000,
    products: ["MaizeMax", "Pesticide Premium", "Seed Pack"],
    distance_km: 28,
    ai_confidence: 79,
    status: "pending",
  },
  {
    id: "v004",
    retailer: retailers[3],
    priority_score: 76,
    reason: "Rainfall deficit in Jaipur indicates drought stress. Recommend irrigation solutions and drought-resistant seed varieties.",
    recommended_date: "2026-05-21",
    estimated_revenue: 68000,
    products: ["DroughtShield", "Water Retainer", "Hardy Seed Mix"],
    distance_km: 95,
    ai_confidence: 74,
    status: "pending",
  },
  {
    id: "v005",
    retailer: retailers[4],
    priority_score: 72,
    reason: "Soybean pod formation stage—critical window for yield maximization products. High potential for premium product upsell.",
    recommended_date: "2026-05-22",
    estimated_revenue: 92000,
    products: ["PodMax", "Nutrient Spray", "Yield Booster"],
    distance_km: 156,
    ai_confidence: 85,
    status: "scheduled",
  },
  {
    id: "v006",
    retailer: retailers[5],
    priority_score: 69,
    reason: "Cotton pest risk elevated. Outstanding balance follow-up required. Cross-sell rice protection products.",
    recommended_date: "2026-05-22",
    estimated_revenue: 72000,
    products: ["CottonCare", "RiceGuard", "Balance Settle"],
    distance_km: 210,
    ai_confidence: 71,
    status: "pending",
  },
  {
    id: "v007",
    retailer: retailers[6],
    priority_score: 65,
    reason: "Top performer quarterly review. Discuss expansion plans and new territory coverage. Loyalty reward eligibility.",
    recommended_date: "2026-05-23",
    estimated_revenue: 110000,
    products: ["Premium Bundle", "Loyalty Reward", "Territory Kit"],
    distance_km: 18,
    ai_confidence: 82,
    status: "scheduled",
  },
  {
    id: "v008",
    retailer: retailers[7],
    priority_score: 58,
    reason: "Stock replenishment due. Sugarcane grand growth phase products needed. Training on new product line.",
    recommended_date: "2026-05-23",
    estimated_revenue: 48000,
    products: ["SugarBoost", "Training Kit", "Stock Pack"],
    distance_km: 67,
    ai_confidence: 68,
    status: "pending",
  },
];

// Alerts
export const alerts: Alert[] = [
  {
    id: "a001",
    type: "pest",
    severity: "critical",
    title: "Armyworm Outbreak Detected",
    description: "Fall Armyworm infestation reported across 12 villages in Nashik district. Immediate intervention required for Cotton and Maize crops.",
    district: "Nashik",
    state: "Maharashtra",
    timestamp: new Date(Date.now() - 1800000),
    action_required: true,
    impact_score: 95,
  },
  {
    id: "a002",
    type: "weather",
    severity: "high",
    title: "Severe Rainfall Deficit",
    description: "Jodhpur experiencing 45% below normal rainfall. Drought conditions expected to worsen. Recommend irrigation advisory.",
    district: "Jodhpur",
    state: "Rajasthan",
    timestamp: new Date(Date.now() - 3600000),
    action_required: true,
    impact_score: 88,
  },
  {
    id: "a003",
    type: "pest",
    severity: "high",
    title: "Whitefly Surge Warning",
    description: "Whitefly population index exceeding threshold in Guntur. Cotton bollgard varieties at risk. Preventive spray recommended.",
    district: "Guntur",
    state: "Andhra Pradesh",
    timestamp: new Date(Date.now() - 7200000),
    action_required: true,
    impact_score: 82,
  },
  {
    id: "a004",
    type: "market",
    severity: "medium",
    title: "Demand Spike: Insecticides",
    description: "40% surge in insecticide demand across Maharashtra due to pest alerts. Ensure stock availability at key retail points.",
    district: "Nashik",
    state: "Maharashtra",
    timestamp: new Date(Date.now() - 10800000),
    action_required: false,
    impact_score: 74,
  },
  {
    id: "a005",
    type: "competitor",
    severity: "medium",
    title: "Competitor Price Cut",
    description: "AgriCorp reduced fungicide prices by 15% in Karnataka region. Monitor impact on market share. Counter-offer may be needed.",
    district: "Belgaum",
    state: "Karnataka",
    timestamp: new Date(Date.now() - 14400000),
    action_required: false,
    impact_score: 65,
  },
  {
    id: "a006",
    type: "weather",
    severity: "medium",
    title: "Temperature Anomaly Alert",
    description: "Unseasonal temperature rise (38°C+) in Punjab. Wheat crops at post-harvest storage risk. Advise proper storage practices.",
    district: "Ludhiana",
    state: "Punjab",
    timestamp: new Date(Date.now() - 18000000),
    action_required: false,
    impact_score: 58,
  },
  {
    id: "a007",
    type: "pest",
    severity: "low",
    title: "Leaf Spot Observation",
    description: "Minor leaf spot symptoms observed in Soybean fields around Indore. Monitor closely, no immediate action required.",
    district: "Indore",
    state: "Madhya Pradesh",
    timestamp: new Date(Date.now() - 21600000),
    action_required: false,
    impact_score: 35,
  },
  {
    id: "a008",
    type: "market",
    severity: "high",
    title: "Stock-Out Alert: CottonCare",
    description: "CottonCare product stock depleted at 8 retailers in Dharwad. Immediate replenishment required to prevent competitor substitution.",
    district: "Dharwad",
    state: "Karnataka",
    timestamp: new Date(Date.now() - 25200000),
    action_required: true,
    impact_score: 78,
  },
  {
    id: "a009",
    type: "competitor",
    severity: "low",
    title: "New Entrant: GreenCorp",
    description: "GreenCorp launching new bio-pesticide range in Tamil Nadu. Low immediate threat but monitor adoption rates.",
    district: "Coimbatore",
    state: "Tamil Nadu",
    timestamp: new Date(Date.now() - 36000000),
    action_required: false,
    impact_score: 42,
  },
  {
    id: "a010",
    type: "weather",
    severity: "critical",
    title: "Cyclone Warning: Bay of Bengal",
    description: "IMD cyclone warning for coastal AP. Heavy rainfall expected in Guntur, Krishna districts. Crop damage risk elevated.",
    district: "Guntur",
    state: "Andhra Pradesh",
    timestamp: new Date(Date.now() - 900000),
    action_required: true,
    impact_score: 96,
  },
];

// Chart Data
export const pestRiskTrend = [
  { month: "Jan", cotton: 25, rice: 15, wheat: 10, soybean: 20 },
  { month: "Feb", cotton: 30, rice: 18, wheat: 12, soybean: 22 },
  { month: "Mar", cotton: 35, rice: 22, wheat: 8, soybean: 28 },
  { month: "Apr", cotton: 55, rice: 30, wheat: 5, soybean: 45 },
  { month: "May", cotton: 78, rice: 35, wheat: 3, soybean: 62 },
  { month: "Jun", cotton: 85, rice: 42, wheat: 8, soybean: 70 },
];

export const salesOpportunity = [
  { district: "Nashik", current: 48, potential: 85 },
  { district: "Ludhiana", current: 72, potential: 92 },
  { district: "Belgaum", current: 31, potential: 55 },
  { district: "Jaipur", current: 40, potential: 68 },
  { district: "Indore", current: 56, potential: 78 },
  { district: "Guntur", current: 42, potential: 72 },
];

export const weeklyVisits = [
  { week: "W1", planned: 24, completed: 22, revenue: 320000 },
  { week: "W2", planned: 28, completed: 25, revenue: 410000 },
  { week: "W3", planned: 22, completed: 20, revenue: 290000 },
  { week: "W4", planned: 30, completed: 27, revenue: 480000 },
  { week: "W5", planned: 26, completed: 24, revenue: 395000 },
  { week: "W6", planned: 32, completed: 28, revenue: 520000 },
];

export const revenueByProduct = [
  { name: "Insecticides", value: 35 },
  { name: "Fungicides", value: 22 },
  { name: "Herbicides", value: 18 },
  { name: "Seeds", value: 15 },
  { name: "Fertilizers", value: 10 },
];

export const monthlyRevenue = [
  { month: "Jan", revenue: 1800000, target: 2000000 },
  { month: "Feb", revenue: 2100000, target: 2200000 },
  { month: "Mar", revenue: 2450000, target: 2400000 },
  { month: "Apr", revenue: 2800000, target: 2600000 },
  { month: "May", revenue: 3200000, target: 2800000 },
];

export const kpiData: KPIData[] = [
  { label: "Active Districts", value: 15, change: 12, unit: "", icon: "MapPin" },
  { label: "Revenue MTD", value: 3200000, change: 14.5, unit: "₹", icon: "IndianRupee" },
  { label: "Visits Completed", value: 146, change: 8.2, unit: "", icon: "Users" },
  { label: "AI Alerts Active", value: 10, change: -5.3, unit: "", icon: "AlertTriangle" },
];

export const analyticsKPI = [
  { label: "Revenue / Field Day", value: 28500, change: 12.3, unit: "₹", icon: "TrendingUp" },
  { label: "Rec. Acceptance Rate", value: 74, change: 6.1, unit: "%", icon: "CheckCircle" },
  { label: "Coverage Efficiency", value: 82, change: 3.8, unit: "%", icon: "Target" },
  { label: "Avg Visit Duration", value: 42, change: -8.2, unit: "min", icon: "Clock" },
];

export const districtPerformance = [
  { district: "Nashik", revenue: 2340, visits: 45, acceptance: 76, efficiency: 68 },
  { district: "Ludhiana", revenue: 4200, visits: 55, acceptance: 88, efficiency: 91 },
  { district: "Belgaum", revenue: 1890, visits: 38, acceptance: 62, efficiency: 55 },
  { district: "Jaipur", revenue: 2100, visits: 48, acceptance: 71, efficiency: 64 },
  { district: "Indore", revenue: 3450, visits: 57, acceptance: 83, efficiency: 85 },
  { district: "Guntur", revenue: 2680, visits: 43, acceptance: 68, efficiency: 72 },
  { district: "Pune", revenue: 3120, visits: 62, acceptance: 85, efficiency: 88 },
  { district: "Karnal", revenue: 2680, visits: 33, acceptance: 75, efficiency: 78 },
  { district: "Ahmedabad", revenue: 3890, visits: 65, acceptance: 80, efficiency: 82 },
  { district: "Kolkata", revenue: 3560, visits: 58, acceptance: 77, efficiency: 79 },
];
