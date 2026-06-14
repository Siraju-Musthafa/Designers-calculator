import { useState, useEffect } from "react";
import axios from "axios";

// ── decorative glow streak (same as welcome page) ──
const GlowStreak = () => (
  <div style={{ position: "absolute", top: "8%", right: "6%", zIndex: 0, pointerEvents: "none" }}>
    <svg width="80" height="140" viewBox="0 0 80 140" fill="none">
      <defs>
        <linearGradient id="streak" x1="68" y1="6" x2="6" y2="134" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
          <stop offset="45%" stopColor="#f97316" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="68" y1="6" x2="6" y2="134" stroke="url(#streak)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="68" cy="6" r="6" fill="#fbbf24" opacity="0.95" />
    </svg>
  </div>
);

// ── floating purple card (same as welcome page) ──
const FloatingCard = () => (
  <div style={{ position: "absolute", top: "6%", left: "6%", zIndex: 0, transform: "rotate(-12deg)" }}>
    <div style={{
      width: 52, height: 52,
      background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
      borderRadius: 12,
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 8px 28px rgba(124,58,237,0.55)",
    }}>
      <span style={{ fontSize: 28, color: "#fff", fontWeight: 900, fontStyle: "italic", lineHeight: 1 }}>D</span>
    </div>
  </div>
);

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [result, setResult] = useState("");

  const [kol, setKol] = useState("");
  const [viral, setviral] = useState("");
  const [hamsham, sethamsham] = useState("");

  useEffect(() => { data(); }, []);

  const calculate = async () => {
    try {
      const response = await axios.post("https://designers-calculator.onrender.com/api/calculate/", { num1, num2, num3 });
      setResult(response.data.result);
    } catch { alert("Error"); }
  };

  const data = async () => {
    try {
      const response = await axios.get("https://designers-calculator.onrender.com/api/data/1/");
      setKol(response.data.kol);
      setviral(response.data.viral);
      sethamsham(response.data.hamsham);
    } catch { alert("Error"); }
  };

  const update = async () => {
    try {
      await axios.put("https://designers-calculator.onrender.com/api/data/1/", {
        kol: Number(kol), viral: Number(viral), hamsham: Number(hamsham),
      });
      alert("Updated Successfully");
      data();
    } catch { alert("Error updating data"); }
  };

  const clearFields = () => { setNum1(""); setNum2(""); setNum3(""); setResult(""); };

  // ── shared input style ──
  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid #1e293b",
    background: "#0d1526",
    color: "#f1f5f9",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060a14",
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 16px",
      position: "relative",
      overflow: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />

      {/* bg glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 65% 45% at 50% 50%, rgba(109,40,217,0.16) 0%, transparent 70%)",
      }} />

      <FloatingCard />
      <GlowStreak />

      {/* ── Navbar ── */}
      <nav style={{
        position: "absolute", top: 0, left: 0, right: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px 24px", zIndex: 30,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8, background: "#7c3aed",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>D</span>
          </div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em" }}>
            Designers Calculator
          </span>
        </div>
      </nav>

      {/* ── Main Card ── */}
      <div style={{
        position: "relative", zIndex: 10,
        width: "100%", maxWidth: 480,
        marginTop: 64,
        background: "#0a0f1c",
        border: "1px solid #1e293b",
        borderRadius: 20,
        padding: "32px 28px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.08)",
      }}>

        {/* Card header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h1 style={{
            margin: 0,
            color: "#fff",
            fontWeight: 900,
            fontSize: "clamp(28px, 6vw, 40px)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>
            Calculator
          </h1>
          <p style={{ color: "#475569", fontSize: 13, marginTop: 6 }}>
            Enter values to calculate
          </p>
        </div>

        {/* ── Settings Section ── */}
        <div style={{
          background: "#0d1526",
          border: "1px solid #1e293b",
          borderRadius: 14,
          padding: "20px",
          marginBottom: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ color: "#7c3aed", fontSize: 16 }}>⚙</span>
            <h3 style={{ margin: 0, color: "#94a3b8", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Settings
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { placeholder: "Kol", value: kol, setter: setKol },
              { placeholder: "Viral", value: viral, setter: setviral },
              { placeholder: "Hamsham", value: hamsham, setter: sethamsham },
            ].map(({ placeholder, value, setter }) => (
              <input
                key={placeholder}
                type="number"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setter(e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                onBlur={(e) => (e.target.style.borderColor = "#1e293b")}
              />
            ))}
          </div>

          <button
            onClick={update}
            style={{
              marginTop: 14,
              width: "100%",
              padding: "12px",
              borderRadius: 10,
              border: "none",
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              letterSpacing: "0.01em",
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Update Values
          </button>
        </div>

        {/* ── Calculation Section ── */}
        <div style={{
          background: "#0d1526",
          border: "1px solid #1e293b",
          borderRadius: 14,
          padding: "20px",
          marginBottom: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ color: "#fbbf24", fontSize: 16 }}>⚡</span>
            <h3 style={{ margin: 0, color: "#94a3b8", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Calculation
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { placeholder: "കോൽ ", value: num1, setter: setNum1 ,defaultValue: "0"},
              { placeholder: "വിരൽ ", value: num2, setter: setNum2 ,defaultValue: "0"},
              { placeholder: "യവം ", value: num3, setter: setNum3 ,defaultValue: "0"},
            ].map(({ placeholder, value, setter }) => (
              <input
                key={placeholder}
                type="number"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setter(e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                onBlur={(e) => (e.target.style.borderColor = "#1e293b")}
              />
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <button
              onClick={calculate}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: 10,
                border: "none",
                background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Calculate
            </button>
            <button
              onClick={clearFields}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: 10,
                border: "1px solid #1e293b",
                background: "transparent",
                color: "#64748b",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#7c3aed";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#1e293b";
                e.currentTarget.style.color = "#64748b";
              }}
            >
              Clear
            </button>
          </div>
        </div>

        {/* ── Result Box ── */}
        <div style={{
          background: result
            ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))"
            : "#0d1526",
          border: `1px solid ${result ? "#7c3aed" : "#1e293b"}`,
          borderRadius: 14,
          padding: "20px",
          textAlign: "center",
          transition: "all 0.3s",
        }}>
          {result ? (
            <>
              <p style={{ margin: "0 0 4px", color: "#7c3aed", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Result
              </p>
              <h2 style={{ margin: 0, color: "#fff", fontWeight: 900, fontSize: "clamp(28px, 7vw, 44px)", letterSpacing: "-0.03em" }}>
                {result} <span style={{ color: "#7c3aed", fontSize: "0.55em" }}>cm</span>
              </h2>
            </>
          ) : (
            <p style={{ margin: 0, color: "#334155", fontSize: 14 }}>
              Result will appear here
            </p>
          )}
        </div>

      </div>

      {/* bottom label */}
      <p style={{ color: "#1e293b", fontSize: 12, marginTop: 24, position: "relative", zIndex: 10 }}>
        Designers Calculator · sirajul muathafa
      </p>
    </div>
  );
}

export default Calculator;
