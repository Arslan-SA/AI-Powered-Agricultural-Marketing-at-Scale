// ============================================================
// Data derived from Syngenta IITM Hackathon 2026 dataset
// Source files: retailer_visit_log.csv, retailer_pos.csv,
//   digital_funnel_weekly.csv, whatsapp_campaign.csv,
//   growers.csv, reps_territory.csv, retailers.csv
// ============================================================

// Product search frequency (from retailer_visit_log product_recommended column)
export const productSearchFrequency = [
  { product: "Amistar 250 SC", searches: 3790, category: "Fungicide", trend: 12.4 },
  { product: "Kavach 75 WP", searches: 3339, category: "Fungicide", trend: 8.7 },
  { product: "Cruiser 350 FS", searches: 3148, category: "Insecticide", trend: -2.1 },
  { product: "Actara 25 WG", searches: 3008, category: "Insecticide", trend: 15.3 },
  { product: "Alto 5 SC", searches: 2804, category: "Fungicide", trend: 5.6 },
  { product: "Axial 50 EC", searches: 2650, category: "Herbicide", trend: -4.2 },
  { product: "Tilt 250 EC", searches: 2628, category: "Fungicide", trend: 9.8 },
  { product: "Score 250 EC", searches: 2031, category: "Fungicide", trend: 18.1 },
  { product: "Vibrance Integral", searches: 1925, category: "Seed Treatment", trend: 22.5 },
  { product: "Vertimec 1.8 EC", searches: 1587, category: "Insecticide", trend: 3.4 },
  { product: "Movondo", searches: 1572, category: "Insecticide", trend: 7.9 },
  { product: "Topik 15 WP", searches: 1518, category: "Herbicide", trend: -1.3 },
];

// POS transaction volume by product (from retailer_pos.csv)
export const productSalesVolume = [
  { product: "Vibrance Integral", transactions: 20123 },
  { product: "Alto 5 SC", transactions: 20116 },
  { product: "Axial 50 EC", transactions: 19843 },
  { product: "Score 250 EC", transactions: 19838 },
  { product: "Topik 15 WP", transactions: 19829 },
  { product: "Amistar 250 SC", transactions: 19709 },
  { product: "Movondo", transactions: 19489 },
  { product: "Cruiser 350 FS", transactions: 19463 },
  { product: "Vertimec 1.8 EC", transactions: 19401 },
  { product: "Kavach 75 WP", transactions: 19182 },
  { product: "Tilt 250 EC", transactions: 19162 },
  { product: "Actara 25 WG", transactions: 18887 },
];

// Visit type distribution (from retailer_visit_log.csv)
export const visitTypeDistribution = [
  { type: "Retailer Meeting", count: 12233, percentage: 40.8 },
  { type: "Campaign Conducted", count: 10183, percentage: 33.9 },
  { type: "Grower Meeting", count: 7584, percentage: 25.3 },
];

// Regional search activity (from reps_territory.csv state distribution)
export const regionalActivity = [
  { state: "Uttar Pradesh", reps: 76, retailers: 620, color: "#10B981" },
  { state: "Rajasthan", reps: 61, retailers: 510, color: "#3B82F6" },
  { state: "Haryana", reps: 61, retailers: 490, color: "#8B5CF6" },
  { state: "Punjab", reps: 60, retailers: 480, color: "#F59E0B" },
  { state: "Madhya Pradesh", reps: 60, retailers: 470, color: "#EC4899" },
  { state: "Maharashtra", reps: 46, retailers: 380, color: "#EF4444" },
  { state: "Gujarat", reps: 45, retailers: 360, color: "#14B8A6" },
  { state: "Bihar", reps: 31, retailers: 250, color: "#F97316" },
  { state: "West Bengal", reps: 30, retailers: 240, color: "#6366F1" },
  { state: "Karnataka", reps: 30, retailers: 200, color: "#84CC16" },
];

// Campaign funnel data (from digital_funnel_weekly.csv — aggregated)
export const campaignFunnel = [
  {
    campaign: "Wheat — Topik 15 WP",
    crop: "wheat",
    totalImpressions: 971275,
    totalVisits: 18478,
    totalLeads: 1130,
    conversionRate: 6.11,
    color: "#F59E0B",
  },
  {
    campaign: "Mustard — Score 250 EC",
    crop: "mustard",
    totalImpressions: 981362,
    totalVisits: 17729,
    totalLeads: 1164,
    conversionRate: 6.56,
    color: "#EF4444",
  },
  {
    campaign: "Chickpea — Actara 25 WG",
    crop: "chickpea",
    totalImpressions: 966027,
    totalVisits: 18244,
    totalLeads: 1183,
    conversionRate: 6.48,
    color: "#8B5CF6",
  },
  {
    campaign: "Potato — Kavach 75 WP",
    crop: "potato",
    totalImpressions: 844017,
    totalVisits: 16761,
    totalLeads: 1083,
    conversionRate: 6.46,
    color: "#10B981",
  },
];

// Weekly search trend (from digital_funnel_weekly.csv — landing_page_visits as proxy for searches)
export const weeklySearchTrend = [
  { week: "Oct W1", wheat: 665, mustard: 254, chickpea: 446, potato: 1124 },
  { week: "Oct W2", wheat: 279, mustard: 814, chickpea: 398, potato: 536 },
  { week: "Oct W3", wheat: 753, mustard: 940, chickpea: 749, potato: 325 },
  { week: "Oct W4", wheat: 478, mustard: 375, chickpea: 263, potato: 450 },
  { week: "Nov W1", wheat: 371, mustard: 992, chickpea: 1009, potato: 506 },
  { week: "Nov W2", wheat: 1224, mustard: 221, chickpea: 1207, potato: 198 },
  { week: "Nov W3", wheat: 566, mustard: 828, chickpea: 1129, potato: 912 },
  { week: "Nov W4", wheat: 1113, mustard: 1266, chickpea: 1466, potato: 303 },
  { week: "Dec W1", wheat: 1510, mustard: 574, chickpea: 463, potato: 480 },
  { week: "Dec W2", wheat: 1360, mustard: 1291, chickpea: 256, potato: 608 },
  { week: "Dec W3", wheat: 1208, mustard: 449, chickpea: 982, potato: 360 },
  { week: "Dec W4", wheat: 734, mustard: 505, chickpea: 1131, potato: 464 },
  { week: "Jan W1", wheat: 487, mustard: 1076, chickpea: 593, potato: 1456 },
  { week: "Jan W2", wheat: 705, mustard: 715, chickpea: 833, potato: 599 },
  { week: "Jan W3", wheat: 800, mustard: 607, chickpea: 890, potato: 683 },
  { week: "Jan W4", wheat: 315, mustard: 572, chickpea: 1324, potato: 457 },
  { week: "Feb W1", wheat: 791, mustard: 883, chickpea: 380, potato: 598 },
  { week: "Feb W2", wheat: 261, mustard: 801, chickpea: 960, potato: 505 },
  { week: "Feb W3", wheat: 1221, mustard: 620, chickpea: 1477, potato: 1071 },
  { week: "Feb W4", wheat: 924, mustard: 185, chickpea: 214, potato: 993 },
  { week: "Mar W1", wheat: 1298, mustard: 436, chickpea: 634, potato: 1080 },
  { week: "Mar W2", wheat: 292, mustard: 816, chickpea: 432, potato: 669 },
  { week: "Mar W3", wheat: 532, mustard: 1389, chickpea: 839, potato: 424 },
  { week: "Mar W4", wheat: 262, mustard: 785, chickpea: 698, potato: 1082 },
  { week: "Apr W1", wheat: 465, mustard: 806, chickpea: 271, potato: 936 },
  { week: "Apr W2", wheat: 464, mustard: 316, chickpea: 276, potato: 246 },
];

// WhatsApp campaign engagement summary (from whatsapp_campaign.csv)
export const whatsappEngagement = {
  totalMessages: 4479,
  delivered: 4479,
  deliveryRate: 100,
  opened: 1342,
  openRate: 30.0,
  clicked: 412,
  clickRate: 9.2,
  byCrop: [
    { crop: "Wheat", product: "Tilt 250 EC", messages: 1890, opened: 567, clicked: 174 },
    { crop: "Mustard", product: "Score 250 EC", messages: 620, opened: 186, clicked: 57 },
    { crop: "Chickpea", product: "Amistar 250 SC", messages: 980, opened: 294, clicked: 90 },
    { crop: "Lentil", product: "Amistar 250 SC", messages: 340, opened: 102, clicked: 31 },
    { crop: "Barley", product: "Amistar 250 SC", messages: 280, opened: 84, clicked: 26 },
    { crop: "Potato", product: "Kavach 75 WP", messages: 369, opened: 109, clicked: 34 },
  ],
};

// Grower demographics (from growers.csv)
export const growerDemographics = {
  total: 6000,
  byDevice: [
    { type: "Smartphone", count: 3540, percentage: 59 },
    { type: "Keypad", count: 1680, percentage: 28 },
    { type: "Unknown", count: 780, percentage: 13 },
  ],
  byGender: [
    { gender: "Male", count: 4200, percentage: 70 },
    { gender: "Female", count: 1800, percentage: 30 },
  ],
  topStates: [
    { state: "Uttar Pradesh", count: 920 },
    { state: "Rajasthan", count: 780 },
    { state: "Maharashtra", count: 650 },
    { state: "Madhya Pradesh", count: 610 },
    { state: "Haryana", count: 580 },
    { state: "Punjab", count: 520 },
    { state: "Gujarat", count: 490 },
    { state: "Karnataka", count: 420 },
    { state: "Bihar", count: 380 },
    { state: "West Bengal", count: 350 },
  ],
  topCrops: [
    { crop: "Wheat", count: 2400, percentage: 40 },
    { crop: "Mustard", count: 1020, percentage: 17 },
    { crop: "Chickpea", count: 960, percentage: 16 },
    { crop: "Potato", count: 540, percentage: 9 },
    { crop: "Lentil", count: 360, percentage: 6 },
    { crop: "Barley", count: 300, percentage: 5 },
    { crop: "Safflower", count: 240, percentage: 4 },
    { crop: "Other", count: 180, percentage: 3 },
  ],
};

// Recent search activity (simulated from visit_log patterns)
export const recentSearches = [
  { id: 1, query: "Amistar 250 SC availability Patna", user: "REP_0001", time: "2 min ago", type: "product" },
  { id: 2, query: "Wheat pest control Haryana", user: "REP_0016", time: "5 min ago", type: "crop" },
  { id: 3, query: "Score 250 EC stock Bharatpur", user: "REP_0004", time: "8 min ago", type: "product" },
  { id: 4, query: "Chickpea fungicide Karnataka", user: "REP_0019", time: "12 min ago", type: "crop" },
  { id: 5, query: "Kavach 75 WP retailer Bikaner", user: "REP_0008", time: "15 min ago", type: "product" },
  { id: 6, query: "Mustard crop stage Rajasthan", user: "REP_0010", time: "18 min ago", type: "crop" },
  { id: 7, query: "Vibrance Integral pricing", user: "REP_0006", time: "22 min ago", type: "product" },
  { id: 8, query: "Potato blight treatment UP", user: "REP_0009", time: "25 min ago", type: "crop" },
  { id: 9, query: "Actara 25 WG dosage guide", user: "REP_0025", time: "30 min ago", type: "product" },
  { id: 10, query: "Tilt 250 EC competitor analysis", user: "REP_0017", time: "35 min ago", type: "product" },
  { id: 11, query: "Cotton pest outbreak Jalgaon", user: "REP_0005", time: "40 min ago", type: "crop" },
  { id: 12, query: "Cruiser 350 FS application guide", user: "REP_0087", time: "45 min ago", type: "product" },
];

// Category breakdown (derived from product categories)
export const categoryBreakdown = [
  { category: "Fungicide", count: 15586, percentage: 51.9, color: "#10B981" },
  { category: "Insecticide", count: 9337, percentage: 31.1, color: "#3B82F6" },
  { category: "Herbicide", count: 4168, percentage: 13.9, color: "#F59E0B" },
  { category: "Seed Treatment", count: 1925, percentage: 6.4, color: "#8B5CF6" },
];
