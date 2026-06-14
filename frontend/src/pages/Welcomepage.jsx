import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FloatingCard = () => (
  <div
    style={{
      position: "absolute",
      top: "20%",
      left: "50%",
      transform: "translateX(-140px) rotate(-12deg)",
      zIndex: 20,
    }}
  >
    <div
      style={{
        width: 64,
        height: 64,
        background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
        borderRadius: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 32px rgba(124,58,237,0.6)",
      }}
    >
      <span style={{ fontSize: 36, color: "#fff", fontWeight: 900, fontStyle: "italic", lineHeight: 1 }}>
        D
      </span>
    </div>
  </div>
);

const GlowStreak = () => (
  <div
    style={{
      position: "absolute",
      top: "12%",
      right: "18%",
      zIndex: 10,
      pointerEvents: "none",
    }}
  >
    <svg width="90" height="160" viewBox="0 0 90 160" fill="none">
      <defs>
        <linearGradient id="streak" x1="75" y1="8" x2="8" y2="152" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
          <stop offset="45%" stopColor="#f97316" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="75" y1="8" x2="8" y2="152" stroke="url(#streak)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="75" cy="8" r="6" fill="#fbbf24" opacity="0.95" />
    </svg>
  </div>
);

export default function WelcomePage() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    const timer = setTimeout(() => navigate("/calculator"), 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060a14",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
        rel="stylesheet"
      />

      {/* Purple radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 55%, rgba(109,40,217,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <FloatingCard />
      <GlowStreak />

      {/* ── Navbar ── */}
      <nav
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",   /* ← CENTER */
          padding: "24px 16px",
          position: "relative",
          zIndex: 30,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: "#7c3aed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>D</span>
          </div>
          <span
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            Designers Calculator
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",      /* ← CENTER horizontally */
          justifyContent: "center",  /* ← CENTER vertically */
          textAlign: "center",       /* ← CENTER text */
          position: "relative",
          zIndex: 10,
          padding: "0 20px",
        }}
      >
        {/* Big headline */}
        <h1
          style={{
            margin: 0,
            color: "#ffffff",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            fontSize: "clamp(52px, 13vw, 140px)",  /* responsive font */
            textAlign: "center",
          }}
        >
          Designers
          <br />
          Calculator
        </h1>

        {/* Sub text */}
        <p
          style={{
            marginTop: 28,
            color: "#64748b",
            fontSize: "clamp(14px, 2vw, 18px)",
            lineHeight: 1.7,
            maxWidth: 360,
            textAlign: "center",
          }}
        >
          Professional calculator built for designers.
          <br />
          Fast, precise, and beautiful.
        </p>

        {/* Countdown ring */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ position: "relative", width: 68, height: 68 }}>
            <svg width="68" height="68" viewBox="0 0 68 68">
              {/* track */}
              <circle cx="34" cy="34" r="28" fill="none" stroke="#1e293b" strokeWidth="4" />
              {/* progress */}
              <circle
                cx="34"
                cy="34"
                r="28"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 28}
                strokeDashoffset={2 * Math.PI * 28 * (seconds / 5)}
                transform="rotate(-90 34 34)"
                style={{ transition: "stroke-dashoffset 0.95s linear" }}
              />
            </svg>
            <span
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 800,
                fontSize: 22,
              }}
            >
              {seconds}
            </span>
          </div>
          <span style={{ color: "#475569", fontSize: 13, letterSpacing: "0.01em" }}>
            Redirecting to calculator…
          </span>
        </div>
      </section>

      {/* ── Bottom badges ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 10,
          padding: "24px 16px 36px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {["Precision tools", "Designer focused", "Instant results"].map((label) => (
          <span
            key={label}
            style={{
              color: "#475569",
              fontSize: 12,
              padding: "5px 14px",
              borderRadius: 999,
              border: "1px solid #1e293b",
              background: "rgba(255,255,255,0.02)",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
