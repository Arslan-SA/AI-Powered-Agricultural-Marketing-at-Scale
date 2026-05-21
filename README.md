# FieldOps AI — Agricultural Operations Dashboard

An enterprise-grade SaaS dashboard for agricultural field teams, built for the **Syngenta × IIT Madras Hackathon 2026**. Provides AI-powered visit planning, pest risk prediction, real-time alerts, and sales optimization across Indian districts.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)

## ✨ Features

- **Operations Dashboard** — KPI cards, district risk map, live alert carousel, and performance charts
- **AI Visit Planner** — AI-ranked retailer visits with route optimization and confidence scoring
- **Next Best Action** — Context-aware recommendations with crop stage analysis and pest indicators
- **User Search Analytics** — Product search trends, campaign funnel analysis, and regional heatmaps
- **Real-time Alerts** — Pest outbreaks, weather warnings, market opportunities, and competitor intelligence
- **Analytics Dashboard** — Revenue trends, performance radar, district heatmap, and conversion metrics
- **AI Chat Assistant** — Floating chatbot for quick field operations queries
- **Authentication** — Role-based login with Field Representative IDs

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS 4 + Custom Design System |
| Charts | Recharts 3 |
| Animations | Framer Motion 12 |
| Icons | Lucide React + Material Symbols |
| Typography | Inter + Source Serif 4 (Google Fonts) |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Demo Credentials

| Role | ID | Password |
|------|----|----------|
| Field Rep | `REP_0001` | `admin` |
| Admin | `ADMIN` | `admin` |

## 📁 Project Structure

```
paradox/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Operations Dashboard
│   ├── alerts/             # Alerts & Opportunities
│   ├── analytics/          # Analytics Dashboard
│   ├── next-best-action/   # AI Recommendations
│   ├── user-searches/      # Search Analytics
│   └── visit-planner/      # AI Visit Planner
├── components/             # Reusable UI components
│   ├── Dashboard/          # Dashboard widgets
│   ├── Analytics/          # Analytics charts
│   ├── NextBestAction/     # NBA components
│   ├── UserSearches/       # Search analytics
│   ├── VisitPlanner/       # Visit planning
│   ├── AIAssistant.tsx     # Floating chat
│   ├── AuthProvider.tsx    # Authentication
│   ├── IndiaMap.tsx        # Interactive map
│   ├── Navbar.tsx          # Top navigation
│   └── Sidebar.tsx         # Side navigation
├── data/                   # Mock datasets
│   ├── mockData.ts         # Core data models
│   ├── searchData.ts       # Search analytics data
│   ├── crops.ts            # Crop definitions
│   └── districts.ts        # District coordinates
└── lib/                    # Utilities
    ├── constants.ts        # App constants
    └── utils.ts            # Helper functions
```

## 📊 Data Sources

Built using the Syngenta IITM Hackathon 2026 dataset:
- `retailer_visit_log.csv` — Field visit records
- `retailer_pos.csv` — Point-of-sale transactions
- `digital_funnel_weekly.csv` — Campaign performance
- `whatsapp_campaign.csv` — Messaging engagement
- `growers.csv` — Farmer demographics
- `reps_territory.csv` — Territory assignments

## 📄 License

Built for the Syngenta × IIT Madras Hackathon 2026 by **Team Paradox**.
