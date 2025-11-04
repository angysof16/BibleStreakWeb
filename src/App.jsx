// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import PreguntaAvance from './pages/PreguntaAvance';
import RegistroAvance from './pages/RegistroAvance';
import Dashboard from './pages/Dashboard';
import AñadirLectura from './pages/AñadirLectura';
import Estadisticas from './pages/Estadisticas';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pregunta-avance" element={<PreguntaAvance />} />
        <Route path="/registro-avance" element={<RegistroAvance />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/anadir-lectura" element={<AñadirLectura />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/perfil" element={<Perfil />} />
        
        {/* Redirect any unknown route to welcome */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;