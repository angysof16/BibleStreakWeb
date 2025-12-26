// src/pages/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/NavBar";
import logo from "../assets/blanco.png";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #001937 0%, #000C1A 100%)",
        minHeight: "100vh",
        color: "#FFFFFF",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            ¡Hola, Usuario!
          </h1>

          <div
            style={{
              background: "#0D1521",
              borderRadius: "16px",
              padding: "2rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
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
                margin: "0 auto 1.5rem",
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

            <div style={{ marginBottom: "2rem" }}>
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "#368EF0",
                }}
              >
                24
              </span>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "0.5rem",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                días de{" "}
                <span style={{ color: "#368EF0", fontWeight: "bold" }}>
                  racha
                </span>
              </p>
            </div>

            <Button onClick={() => navigate("/anadir-lectura")}>
              Continuar leyendo
            </Button>

            <div
              style={{
                marginTop: "2rem",
                padding: "1rem",
                background: "#001937",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: "0.5rem",
                }}
              >
                Progreso general
              </p>
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  background: "#001937",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: "1px solid rgba(54, 142, 240, 0.3)",
                }}
              >
                <div
                  style={{
                    width: "10%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #0D4178 0%, #368EF0 100%)",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#368EF0",
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                10%
              </p>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Dashboard;
