// src/pages/Welcome.jsx
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import logo from '../assets/blanco.png';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #001937 0%, #000C1A 100%)",
        minHeight: "100vh",
        color: "#FFFFFF",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(13, 65, 120, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
            top: "-200px",
            right: "-200px",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />

        <style>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.1); opacity: 0.5; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>

        <div
          style={{
            width: "100px",
            height: "100px",
            background: "linear-gradient(135deg, #0D4178 0%, #368EF0 100%)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "48px",
            marginBottom: "2rem",
            boxShadow: "0 20px 60px rgba(54, 142, 240, 0.4)",
            animation: "float 3s ease-in-out infinite",
            zIndex: 10,
          }}
        >
          <img
            src={logo}
            alt="BibleStreak logo"
            style={{
              width: "60%",
              height: "60%",
              objectFit: "contain",
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 8vw, 64px)",
            fontWeight: "800",
            letterSpacing: "2px",
            marginBottom: "1rem",
            zIndex: 10,
          }}
        >
          BIBLESTREAK
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 4vw, 24px)",
            marginBottom: "1rem",
            color: "rgba(255, 255, 255, 0.9)",
            zIndex: 10,
          }}
        >
          ¡Bienvenido a{" "}
          <span style={{ color: "#368EF0", fontWeight: "700" }}>
            BibleStreak
          </span>
          !
        </p>

        <p
          style={{
            fontSize: "clamp(14px, 3vw, 18px)",
            color: "rgba(255, 255, 255, 0.6)",
            marginBottom: "3rem",
            zIndex: 10,
          }}
        >
          Mantén tu racha de lectura bíblica
        </p>

        <button
          onClick={() => navigate("/login")}
          style={{
            width: "70px",
            height: "70px",
            background: "linear-gradient(135deg, #0D4178 0%, #368EF0 100%)",
            border: "none",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 10px 30px rgba(54, 142, 240, 0.5)",
            zIndex: 10,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(54, 142, 240, 0.7)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(54, 142, 240, 0.5)";
          }}
        >
          <ChevronRight size={30} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Welcome;
