// src/pages/PreguntaAvance.jsx
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import logo from "../assets/blanco.png";

const PreguntaAvance = () => {
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
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #0D4178 0%, #368EF0 100%)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              margin: "0 auto 2rem",
              boxShadow: "0 15px 40px rgba(54, 142, 240, 0.4)",
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

          <h2
            style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "3rem",
              lineHeight: "1.4",
            }}
          >
            ¿Tienes algún progreso o avance en la lectura de la Biblia?
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "150px" }}>
              <Button onClick={() => navigate("/registro-avance")}>Sí</Button>
            </div>
            <div style={{ width: "150px" }}>
              <Button onClick={() => navigate("/dashboard")}>No</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntaAvance;
