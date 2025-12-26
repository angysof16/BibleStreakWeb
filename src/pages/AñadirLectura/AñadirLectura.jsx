// src/pages/AñadirLectura/AñadirLectura.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useReadingStore } from '../../store/readingStore';
import { LIBROS_BIBLICOS, getLibroByNombre } from '../../data/librosBiblicos';
import Button from '../../components/Button/Button';
import Navbar from "../../components/Navbar/Navbar";
import styles from './AñadirLectura.module.css';

const AñadirLectura = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { addLectura } = useReadingStore();
  const [formData, setFormData] = useState({
    libro: '',
    capitulo: 1,
    versiculoInicio: 1,
    versiculoFin: 1
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.libro) {
      alert('Por favor selecciona un libro');
      return;
    }

    setLoading(true);

    const libro = getLibroByNombre(formData.libro);
    
    const result = await addLectura(
      user.id,
      libro.id,
      formData.capitulo,
      formData.versiculoInicio,
      formData.versiculoFin
    );
    
    if (result.success) {
      navigate('/dashboard');
    }
    
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'libro' ? value : parseInt(value) || 1
    });
  };

  const libroSeleccionado = getLibroByNombre(formData.libro);
  const maxCapitulos = libroSeleccionado ? libroSeleccionado.capitulos : 1;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Registrar progreso</h1>

          <form onSubmit={handleSubmit}>
            <div className={styles.card}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Libro</label>
                <select
                  name="libro"
                  value={formData.libro}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="">Selecciona un libro</option>
                  {LIBROS_BIBLICOS.map(libro => (
                    <option key={libro.id} value={libro.nombre}>
                      {libro.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Capítulo</label>
                <input
                  type="number"
                  name="capitulo"
                  min="1"
                  max={maxCapitulos}
                  value={formData.capitulo}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Versículos</label>
                <div className={styles.inputRow}>
                  <input
                    type="number"
                    name="versiculoInicio"
                    min="1"
                    value={formData.versiculoInicio}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.inputSmall}`}
                    required
                  />
                  <span className={styles.separator}>a</span>
                  <input
                    type="number"
                    name="versiculoFin"
                    min={formData.versiculoInicio}
                    value={formData.versiculoFin}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.inputSmall}`}
                    required
                  />
                </div>
              </div>

              <Button type="submit" disabled={loading}>
                {loading ? 'Guardando...' : 'Guardar'}
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