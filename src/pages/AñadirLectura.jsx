// src/pages/AñadirLectura.jsx
import { useState } from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const AñadirLectura = () => {
  const [formData, setFormData] = useState({
    libro: '',
    capitulo: 1,
    versiculoInicio: 1,
    versiculoFin: 1
  });

  // Lista simplificada de libros - luego actualizo
  const libros = [
    { id: 1, nombre: 'Génesis', capitulos: 50 },
    { id: 2, nombre: 'Éxodo', capitulos: 40 },
    { id: 3, nombre: 'Levítico', capitulos: 27 },
    { id: 4, nombre: 'Números', capitulos: 36 },
    { id: 5, nombre: 'Deuteronomio', capitulos: 34 },
    { id: 6, nombre: 'Josué', capitulos: 24 },
    { id: 7, nombre: 'Jueces', capitulos: 21 },
    { id: 8, nombre: 'Rut', capitulos: 4 },
    { id: 40, nombre: 'Mateo', capitulos: 28 },
    { id: 41, nombre: 'Marcos', capitulos: 16 },
    { id: 42, nombre: 'Lucas', capitulos: 24 },
    { id: 43, nombre: 'Juan', capitulos: 21 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lectura registrada:', formData);
    alert('¡Lectura guardada exitosamente!');
  };

  const libroSeleccionado = libros.find(l => l.nombre === formData.libro);
  const maxCapitulos = libroSeleccionado ? libroSeleccionado.capitulos : 1;

  return (
    <div style={{
      background: 'linear-gradient(180deg, #001937 0%, #000C1A 100%)',
      minHeight: '100vh',
      color: '#FFFFFF',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      paddingBottom: '80px'
    }}>
      <div style={{
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '500px', width: '100%' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Registrar progreso
          </h1>

          <form onSubmit={handleSubmit}>
            <div style={{
              background: '#0D1521',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  Libro
                </label>
                <select
                  value={formData.libro}
                  onChange={(e) => setFormData({
                    ...formData,
                    libro: e.target.value,
                    capitulo: 1,
                    versiculoInicio: 1,
                    versiculoFin: 1
                  })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#001937',
                    border: '1px solid rgba(54, 142, 240, 0.3)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                  required
                >
                  <option value="">Selecciona un libro</option>
                  {libros.map(libro => (
                    <option key={libro.id} value={libro.nombre}>
                      {libro.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  Capítulo
                </label>
                <input
                  type="number"
                  min="1"
                  max={maxCapitulos}
                  value={formData.capitulo}
                  onChange={(e) => setFormData({
                    ...formData,
                    capitulo: parseInt(e.target.value)
                  })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#001937',
                    border: '1px solid rgba(54, 142, 240, 0.3)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  Versículos
                </label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <input
                    type="number"
                    min="1"
                    value={formData.versiculoInicio}
                    onChange={(e) => setFormData({
                      ...formData,
                      versiculoInicio: parseInt(e.target.value)
                    })}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: '#001937',
                      border: '1px solid rgba(54, 142, 240, 0.3)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '16px',
                      outline: 'none',
                      textAlign: 'center'
                    }}
                    required
                  />
                  <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>a</span>
                  <input
                    type="number"
                    min={formData.versiculoInicio}
                    value={formData.versiculoFin}
                    onChange={(e) => setFormData({
                      ...formData,
                      versiculoFin: parseInt(e.target.value)
                    })}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: '#001937',
                      border: '1px solid rgba(54, 142, 240, 0.3)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '16px',
                      outline: 'none',
                      textAlign: 'center'
                    }}
                    required
                  />
                </div>
              </div>

              <Button type="submit">
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default AñadirLectura;