// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PreguntaAvance from './pages/PreguntaAvance/PreguntaAvance';
import RegistroAvance from './pages/RegistroAvance/RegistroAvance';
import Dashboard from './pages/Dashboard/Dashboard';
import AñadirLectura from './pages/AñadirLectura/AñadirLectura';
import Estadisticas from './pages/Estadisticas/Estadisticas';
import Perfil from './pages/Perfil/Perfil';

function App() {
  return (
    <>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#0D1521',
            color: '#FFFFFF',
            border: '1px solid rgba(54, 142, 240, 0.3)'
          },
          success: {
            iconTheme: {
              primary: '#368EF0',
              secondary: '#FFFFFF',
            },
          },
          error: {
            iconTheme: {
              primary: '#FF4444',
              secondary: '#FFFFFF',
            },
          },
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Rutas protegidas */}
          <Route path="/pregunta-avance" element={
            <ProtectedRoute>
              <PreguntaAvance />
            </ProtectedRoute>
          } />
          <Route path="/registro-avance" element={
            <ProtectedRoute>
              <RegistroAvance />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/anadir-lectura" element={
            <ProtectedRoute>
              <AñadirLectura />
            </ProtectedRoute>
          } />
          <Route path="/estadisticas" element={
            <ProtectedRoute>
              <Estadisticas />
            </ProtectedRoute>
          } />
          <Route path="/perfil" element={
            <ProtectedRoute>
              <Perfil />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;