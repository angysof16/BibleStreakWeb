// src/store/authStore.js
import { create } from 'zustand';
import { supabase } from '../config/supabaseClient';
import toast from 'react-hot-toast';

export const useAuthStore = create((set, get) => ({
  user: null,
  profile: null,
  loading: true,
  
  // Inicializar sesión
  initialize: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        const { data: profile } = await supabase
          .from('usuarios_perfil')
          .select('*')
          .eq('user_id', session.user.id)
          .single();
        
        set({ user: session.user, profile, loading: false });
      } else {
        set({ user: null, profile: null, loading: false });
      }
    } catch (error) {
      console.error('Error al inicializar:', error);
      set({ loading: false });
    }
  },

  // Registrar usuario
  signUp: async (email, password, nombre, telefono) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nombre: nombre
          }
        }
      });

      if (error) throw error;

      // Crear perfil adicional
      if (data.user) {
        const { error: profileError } = await supabase
          .from('usuarios_perfil')
          .insert([
            {
              user_id: data.user.id,
              nombre: nombre,
              telefono: telefono || null
            }
          ]);

        if (profileError) throw profileError;
      }

      toast.success('¡Cuenta creada exitosamente!');
      return { success: true };
    } catch (error) {
      console.error('Error en registro:', error);
      toast.error(error.message || 'Error al crear la cuenta');
      return { success: false, error };
    }
  },

  // Iniciar sesión
  signIn: async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      // Obtener perfil
      const { data: profile } = await supabase
        .from('usuarios_perfil')
        .select('*')
        .eq('user_id', data.user.id)
        .single();

      set({ user: data.user, profile });
      toast.success('¡Bienvenido de nuevo!');
      return { success: true };
    } catch (error) {
      console.error('Error en login:', error);
      toast.error('Credenciales inválidas');
      return { success: false, error };
    }
  },

  // Cerrar sesión
  signOut: async () => {
    try {
      await supabase.auth.signOut();
      set({ user: null, profile: null });
      toast.success('Sesión cerrada');
      return { success: true };
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      toast.error('Error al cerrar sesión');
      return { success: false, error };
    }
  },

  // Actualizar perfil
  updateProfile: async (updates) => {
    try {
      const userId = get().user?.id;
      if (!userId) throw new Error('No hay usuario autenticado');

      const { error } = await supabase
        .from('usuarios_perfil')
        .update(updates)
        .eq('user_id', userId);

      if (error) throw error;

      set({ profile: { ...get().profile, ...updates } });
      toast.success('Perfil actualizado');
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      toast.error('Error al actualizar perfil');
      return { success: false, error };
    }
  }
}));    