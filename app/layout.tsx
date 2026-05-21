import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import AIAssistant from "@/components/AIAssistant";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FieldOps AI — Agricultural Operations Dashboard",
  description:
    "Enterprise-grade SaaS dashboard for agricultural field teams. AI-powered visit planning, pest prediction, and sales optimization across Indian districts.",
  keywords: ["agriculture", "AI", "dashboard", "field operations", "pest management", "India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <AuthProvider>
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-[240px] flex flex-col overflow-hidden transition-all duration-300">
              <Navbar />
              <main className="flex-1 overflow-y-auto">
                <div className="p-6">{children}</div>
              </main>
            </div>
          </div>

          {/* Floating AI Assistant */}
          <AIAssistant />
        </AuthProvider>
      </body>
    </html>
  );
}
