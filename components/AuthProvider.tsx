"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userRepId: string | null;
  login: (repId: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRepId, setUserRepId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem("fieldops_auth");
    const savedRep = localStorage.getItem("fieldops_rep_id");
    if (savedAuth === "true" && savedRep) {
      setIsAuthenticated(true);
      setUserRepId(savedRep);
    }
    setMounted(true);
  }, []);

  const login = (repId: string, pass: string) => {
    const formattedId = repId.trim().toUpperCase();
    const repMatch = formattedId.match(/^REP_\d{4}$/) || formattedId === "ADMIN";
    if (!repMatch) {
      setError("Please enter a valid Field Representative ID (e.g. REP_0001) or 'ADMIN'");
      return false;
    }
    if (pass.length < 4) {
      setError("Password must be at least 4 characters.");
      return false;
    }
    localStorage.setItem("fieldops_auth", "true");
    localStorage.setItem("fieldops_rep_id", formattedId);
    setIsAuthenticated(true);
    setUserRepId(formattedId);
    setError("");
    return true;
  };

  const logout = () => {
    localStorage.removeItem("fieldops_auth");
    localStorage.removeItem("fieldops_rep_id");
    setIsAuthenticated(false);
    setUserRepId(null);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      login(username, password);
      setLoading(false);
    }, 800);
  };

  if (!mounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center animate-pulse"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <span className="material-symbols-outlined fill" style={{ color: "#c8ecc8" }}>grass</span>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRepId, login, logout }}>
      {!isAuthenticated ? (
        <div
          className="min-h-screen w-full flex items-center justify-center p-4"
          style={{ backgroundColor: "var(--color-background)" }}
        >
          <div className="w-full" style={{ maxWidth: 420 }}>
            {/* Header */}
            <div className="flex flex-col items-center mb-8">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "var(--color-primary)",
                  boxShadow: "0 4px 24px rgba(45, 75, 49, 0.2)",
                }}
              >
                <span className="material-symbols-outlined fill" style={{ fontSize: 32, color: "#c8ecc8" }}>
                  grass
                </span>
              </div>
              <h1 className="st-headline-lg" style={{ color: "var(--color-primary-dark)" }}>
                FieldOps AI
              </h1>
              <p
                className="st-label-md mt-1 flex items-center gap-1"
                style={{ color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 14, color: "var(--color-primary)" }}>
                  auto_awesome
                </span>
                Syngenta 2026 Operations Portal
              </p>
            </div>

            {/* Login Card */}
            <div
              className="glass-card p-8 relative overflow-hidden"
              style={{ border: "1px solid var(--color-outline-variant)" }}
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 inset-x-0 h-1"
                style={{ background: "linear-gradient(to right, var(--color-primary), var(--color-secondary), var(--color-primary-dark))" }}
              />

              <h2 className="st-headline-sm" style={{ color: "var(--color-text-primary)", marginBottom: 4 }}>
                Welcome back
              </h2>
              <p className="st-body-sm" style={{ color: "var(--color-text-secondary)", marginBottom: 24 }}>
                Enter your credentials to access the analytics workspace
              </p>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {error && (
                  <div
                    className="p-3 rounded-lg st-body-sm flex items-start gap-2"
                    style={{
                      backgroundColor: "var(--color-error-container)",
                      color: "var(--color-on-error-container)",
                      border: "1px solid rgba(186,26,26,0.2)",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 16, marginTop: 2 }}>error</span>
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="st-label-md block" style={{ color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
                    Representative ID
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-3"
                      style={{ fontSize: 18, color: "var(--color-text-secondary)" }}
                    >
                      person
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. REP_0001 or ADMIN"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg st-body-sm transition-all"
                      style={{
                        backgroundColor: "var(--color-card)",
                        border: "1px solid var(--color-outline-variant)",
                        color: "var(--color-text-primary)",
                        outline: "none",
                      }}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="st-label-md block" style={{ color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
                    Security Password
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-3"
                      style={{ fontSize: 18, color: "var(--color-text-secondary)" }}
                    >
                      lock
                    </span>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg st-body-sm transition-all"
                      style={{
                        backgroundColor: "var(--color-card)",
                        border: "1px solid var(--color-outline-variant)",
                        color: "var(--color-text-primary)",
                        outline: "none",
                      }}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3 rounded-lg st-label-md flex items-center justify-center gap-2 cursor-pointer transition-all active:opacity-80"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "#ffffff",
                    border: "none",
                    boxShadow: "0 2px 8px rgba(45, 75, 49, 0.2)",
                  }}
                >
                  {loading ? (
                    <span
                      className="animate-spin"
                      style={{
                        width: 20, height: 20, border: "2px solid rgba(255,255,255,0.3)",
                        borderTop: "2px solid white", borderRadius: "50%", display: "inline-block",
                      }}
                    />
                  ) : (
                    <>
                      <span>Authenticate Portal</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                    </>
                  )}
                </button>
              </form>

              <div
                className="mt-6 pt-5 st-body-sm flex items-start gap-2"
                style={{
                  borderTop: "1px solid var(--color-outline-variant)",
                  color: "var(--color-text-secondary)",
                  fontSize: 11,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 14, color: "var(--color-primary)", marginTop: 2 }}>
                  verified_user
                </span>
                <span>
                  Try logging in with <strong>REP_0001</strong> and password <strong>admin</strong>.
                </span>
              </div>
            </div>

            <p className="text-center mt-8" style={{ fontSize: 10, color: "var(--color-outline)" }}>
              Strictly Confidential • Syngenta IITM Hackathon Data System 2026
            </p>
          </div>
        </div>
      ) : (
        <div className="h-full w-full">{children}</div>
      )}
    </AuthContext.Provider>
  );
}
