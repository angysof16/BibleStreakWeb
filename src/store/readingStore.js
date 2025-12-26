// src/store/readingStore.js
import { create } from 'zustand';
import { supabase } from '../config/supabaseClient';
import toast from 'react-hot-toast';

export const useReadingStore = create((set, get) => ({
  lecturas: [],
  racha: null,
  progreso: null,
  loading: false,

  // Obtener lecturas del usuario
  fetchLecturas: async (userId) => {
    try {
      set({ loading: true });
      const { data, error } = await supabase
        .from('lecturas')
        .select(`
          *,
          libros_biblicos (
            nombre_libro,
            nombre_corto,
            testamento
          )
        `)
        .eq('user_id', userId)
        .order('fecha', { ascending: false });

      if (error) throw error;

      set({ lecturas: data || [], loading: false });
      return { success: true, data };
    } catch (error) {
      console.error('Error al obtener lecturas:', error);
      set({ loading: false });
      return { success: false, error };
    }
  },

  // Registrar nueva lectura
  addLectura: async (userId, libroId, capitulo, versiculoInicio, versiculoFin) => {
    try {
      const fecha = new Date().toISOString().split('T')[0];
      
      const { data, error } = await supabase
        .from('lecturas')
        .insert([
          {
            user_id: userId,
            libro_id: libroId,
            capitulo: capitulo,
            fecha: fecha,
            completado: true
          }
        ])
        .select()
        .single();

      if (error) throw error;

      // Actualizar racha
      await get().updateRacha(userId);
      
      // Refrescar lecturas
      await get().fetchLecturas(userId);

      toast.success('¡Lectura registrada!');
      return { success: true, data };
    } catch (error) {
      console.error('Error al registrar lectura:', error);
      
      // Si es un error de duplicado
      if (error.code === '23505') {
        toast.error('Ya registraste esta lectura hoy');
      } else {
        toast.error('Error al registrar lectura');
      }
      
      return { success: false, error };
    }
  },

  // Registrar múltiples lecturas (para avance inicial)
  addMultipleLecturas: async (userId, lecturas) => {
    try {
      const lecturasFormateadas = lecturas.map(lectura => ({
        user_id: userId,
        libro_id: lectura.libro_id,
        capitulo: lectura.capitulo,
        fecha: new Date().toISOString().split('T')[0],
        completado: true
      }));

      const { error } = await supabase
        .from('lecturas')
        .insert(lecturasFormateadas);

      if (error) throw error;

      // Actualizar racha
      await get().updateRacha(userId);
      
      // Refrescar lecturas
      await get().fetchLecturas(userId);

      toast.success('Avance registrado exitosamente');
      return { success: true };
    } catch (error) {
      console.error('Error al registrar avance:', error);
      toast.error('Error al registrar avance');
      return { success: false, error };
    }
  },

  // Actualizar racha
  updateRacha: async (userId) => {
    try {
      // Llamar a la función de Supabase que actualiza la racha
      const { data, error } = await supabase.rpc('actualizar_racha_usuario', {
        p_user_id: userId
      });

      if (error) throw error;

      await get().fetchRacha(userId);
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar racha:', error);
      return { success: false, error };
    }
  },

  // Obtener racha del usuario
  fetchRacha: async (userId) => {
    try {
      const { data, error } = await supabase
        .from('rachas')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) throw error;

      set({ racha: data });
      return { success: true, data };
    } catch (error) {
      console.error('Error al obtener racha:', error);
      return { success: false, error };
    }
  },

  // Obtener progreso del usuario
  fetchProgreso: async (userId) => {
    try {
      const { data, error } = await supabase
        .from('vista_progreso_usuario')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) throw error;

      set({ progreso: data });
      return { success: true, data };
    } catch (error) {
      console.error('Error al obtener progreso:', error);
      return { success: false, error };
    }
  },

  // Obtener estadísticas
  getEstadisticas: async (userId) => {
    try {
      // Lecturas de esta semana
      const inicioSemana = new Date();
      inicioSemana.setDate(inicioSemana.getDate() - inicioSemana.getDay());
      
      const { data: lecturasSemanales, error: errorSemana } = await supabase
        .from('lecturas')
        .select('*')
        .eq('user_id', userId)
        .gte('fecha', inicioSemana.toISOString().split('T')[0]);

      if (errorSemana) throw errorSemana;

      // Lecturas de este mes
      const inicioMes = new Date();
      inicioMes.setDate(1);
      
      const { data: lecturasMensuales, error: errorMes } = await supabase
        .from('lecturas')
        .select('*')
        .eq('user_id', userId)
        .gte('fecha', inicioMes.toISOString().split('T')[0]);

      if (errorMes) throw errorMes;

      return {
        success: true,
        data: {
          semana: lecturasSemanales?.length || 0,
          mes: lecturasMensuales?.length || 0,
          lecturasPorDia: [] // Calcular según necesites
        }
      };
    } catch (error) {
      console.error('Error al obtener estadísticas:', error);
      return { success: false, error };
    }
  }
}));