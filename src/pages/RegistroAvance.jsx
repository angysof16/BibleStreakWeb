// src/pages/RegistroAvance.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2 } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';

const RegistroAvance = () => {
  const navigate = useNavigate();
  const [avanceList, setAvanceList] = useState([]);
  const [currentAvance, setCurrentAvance] = useState({
    libro: '',
    capituloInicio: 1,
    capituloFin: 1
  });

  const libros = [
    { id: 1, nombre: 'Génesis', capitulos: 50 },
    { id: 2, nombre: 'Éxodo', capitulos: 40 },
    { id: 3, nombre: 'Levítico', capitulos: 27 },
    { id: 4, nombre: 'Números', capitulos: 36 },
    { id: 5, nombre: 'Deuteronomio', capitulos: 34 },
    { id: 6, nombre: 'Josué', capitulos: 24 },
    { id: 7, nombre: 'Jueces', capitulos: 21 },
    { id: 8, nombre: 'Rut', capitulos: 4 },
    { id: 9, nombre: '1 Samuel', capitulos: 31 },
    { id: 10, nombre: '2 Samuel', capitulos: 24 }
  ];

  const handleAvanceChange = (e) => {
    const { name, value } = e.target;
    setCurrentAvance({
      ...currentAvance,
      [name]: name === 'libro' ? value : parseInt(value) || 1
    });
  };

  const agregarAvance = () => {
    if (currentAvance.libro) {
      const libro = libros.find(l => l.nombre === currentAvance.libro);
      setAvanceList([...avanceList, {
        ...currentAvance,
        capituloFin: Math.min(currentAvance.capituloFin, libro.capitulos)
      }]);
      setCurrentAvance({
        libro: '',
        capituloInicio: 1,
        capituloFin: 1
      });
    }
  };

  const eliminarAvance = (index) => {
    setAvanceList(avanceList.filter((_, i) => i !== index));
  };

  const handleContinuar = () => {
    console.log('Avances registrados:', avanceList);
    navigate('/dashboard');
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: '#0D1521',
    border: 'none',
    borderRadius: '12px',
    color: '#FFFFFF',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box'
  };

  return (
    <div style={{
      background: 'linear-gradient(180deg, #001937 0%, #000C1A 100%)',
      minHeight: '100vh',
      color: '#FFFFFF',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <div style={{
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Registra tu avance
          </h1>

          {/* Lista de avances */}
          <div style={{
            background: '#0D1521',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '2rem',
            minHeight: '150px'
          }}>
            {avanceList.length === 0 ? (
              <p style={{
                color: 'rgba(255, 255, 255, 0.4)',
                textAlign: 'center',
                padding: '2rem 0'
              }}>
                Nada que mostrar...
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {avanceList.map((avance, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px',
                      background: '#001937',
                      borderRadius: '8px',
                      borderLeft: '3px solid #368EF0'
                    }}
                  >
                    <span style={{ fontSize: '15px' }}>
                      {avance.libro} {avance.capituloInicio}-{avance.capituloFin}
                    </span>
                    <button
                      onClick={() => eliminarAvance(index)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '5px'
                      }}
                    >
                      <Trash2 size={18} color="#FF4444" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Formulario de nuevo avance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <select
              name="libro"
              value={currentAvance.libro}
              onChange={handleAvanceChange}
              style={inputStyle}
            >
              <option value="">Selecciona un libro</option>
              {libros.map(libro => (
                <option key={libro.id} value={libro.nombre}>
                  {libro.nombre}
                </option>
              ))}
            </select>

            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flex: 1 }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  Desde capítulo
                </label>
                <Input
                  type="number"
                  name="capituloInicio"
                  value={currentAvance.capituloInicio}
                  onChange={handleAvanceChange}
                  style={{ minWidth: 0 }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  Hasta capítulo
                </label>
                <Input
                  type="number"
                  name="capituloFin"
                  value={currentAvance.capituloFin}
                  onChange={handleAvanceChange}
                  style={{ minWidth: 0 }}
                />
              </div>
            </div>

            <Button onClick={agregarAvance}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}>
                <Plus size={20} />
                Añadir
              </div>
            </Button>

            <Button variant="secondary" onClick={handleContinuar}>
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroAvance;