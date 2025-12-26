// src/pages/Estadisticas.jsx
import Navbar from "../components/NavBar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Element,
} from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Estadisticas = () => {
  // Datos de ejemplo (después vendrán del backend)
  const stats = {
    semana: 9,
    mes: 25,
    metaMensual: 50,
    librosProgreso: [
      { nombre: "Rut", leidos: 3, total: 4 },
      { nombre: "Salmos", leidos: 10, total: 150 },
      { nombre: "San Mateo", leidos: 12, total: 28 },
    ],
    diasSemana: ["D", "L", "M", "M", "J", "V", "S"],
    lecturasPorDia: [2, 3, 1, 4, 2, 3, 0], // Datos para la gráfica
  };

  const porcentajeMeta = (stats.mes / stats.metaMensual) * 100;

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
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Estadísticas
          </h1>

          {/* Bloques de Esta Semana y Este Mes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                background: "#0D1521",
                borderRadius: "16px",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: "0.5rem",
                }}
              >
                Esta semana
              </p>
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#368EF0",
                }}
              >
                {stats.semana}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                capítulos
              </p>
            </div>

            <div
              style={{
                background: "#0D1521",
                borderRadius: "16px",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: "0.5rem",
                }}
              >
                Este mes
              </p>
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#368EF0",
                }}
              >
                {stats.mes}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                capítulos
              </p>
            </div>
          </div>

          {/* Gráfico de Meta Mensual */}
          <div
            style={{
              background: "#0D1521",
              borderRadius: "16px",
              padding: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                Meta mensual
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                {stats.mes}/{stats.metaMensual} capítulos leídos
              </p>
            </div>

            {/* Barra de progreso */}
            <div
              style={{
                width: "100%",
                height: "12px",
                background: "#001937",
                borderRadius: "6px",
                overflow: "hidden",
                marginBottom: "1.5rem",
                border: "1px solid rgba(54, 142, 240, 0.3)",
              }}
            >
              <div
                style={{
                  width: `${porcentajeMeta}%`,
                  height: "100%",
                  background:
                    "linear-gradient(90deg, #0D4178 0%, #368EF0 100%)",
                  transition: "width 0.3s ease",
                }}
              />
            </div>

            {/* AQUI EMPIEZO A EXPERIMENTAR - GRAFICO DE LINEAS */}
            {/* AQUI TERMINO DE EXPERIMENTAR - GRAFICO DE LINEAS */}


            {/* Gráfica "racha" semanal */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                height: "120px",
                gap: "0.5rem",
              }}
            >
              {stats.lecturasPorDia.map((lecturas, index) => {
                const maxLecturas = Math.max(...stats.lecturasPorDia);
                const altura =
                  maxLecturas > 0 ? (lecturas / maxLecturas) * 100 : 0;

                return (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: `${altura}%`,
                        minHeight: lecturas > 0 ? "20px" : "0px",
                        background:
                          "linear-gradient(180deg, #368EF0 0%, #0D4178 100%)",
                        borderRadius: "4px",
                        transition: "height 0.3s ease",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      {stats.diasSemana[index]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lista de Libros en Progreso */}
          <div
            style={{
              background: "#0D1521",
              borderRadius: "16px",
              padding: "1.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Libros en progreso
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {stats.librosProgreso.map((libro, index) => {
                const porcentaje = (libro.leidos / libro.total) * 100;

                return (
                  <div
                    key={index}
                    style={{
                      background: "#001937",
                      borderRadius: "12px",
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "16px", fontWeight: "500" }}>
                        {libro.nombre}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#368EF0",
                          fontWeight: "600",
                        }}
                      >
                        {libro.leidos}/{libro.total}
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "6px",
                        background: "rgba(54, 142, 240, 0.2)",
                        borderRadius: "3px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${porcentaje}%`,
                          height: "100%",
                          background:
                            "linear-gradient(90deg, #0D4178 0%, #368EF0 100%)",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Estadisticas;
