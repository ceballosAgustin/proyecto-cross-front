import axios from 'axios'
import type { Ejercicio } from '../types/ejercicio'
import type { GrupoMuscular } from '../types/GrupoMuscular'
import type { CategoriaEjercicio } from '../types/categoriaEjercicio'
import type { NivelDificultad } from '../types/nivelDificultad'
import type { Equipamiento } from '../types/equipamiento'

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export const ejercicioService = {

    getAll: async (): Promise<Ejercicio[]> => {
        const response = await api.get('/ejercicios')
        return response.data
    },

    getById: async (id: number): Promise<Ejercicio> => {
        const response = await api.get(`/ejercicios/${id}`)
        return response.data
    },

    post: async (ejercicio: Ejercicio): Promise<Ejercicio> => {
        const response = await api.post('/ejercicios', ejercicio)
        return response.data
    },

    put: async (ejercicio: Ejercicio): Promise<Ejercicio> => {
        const response = await api.put(`/ejercicios/${ejercicio.idEjercicio}`, ejercicio)
        return response.data
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/ejercicios/${id}`)
    }
}

export const grupoMuscularService = {
    getAll: async (): Promise<GrupoMuscular[]> => {
        const response = await api.get('/grupos-musculares')
        return response.data
    },

    getById: async (id: number): Promise<GrupoMuscular> => {
        const response = await api.get(`/grupos-musculares/${id}`)
        return response.data
    },

    post: async (grupoMuscular: GrupoMuscular): Promise<GrupoMuscular> => {
        const response = await api.post('/grupos-musculares', grupoMuscular)
        return response.data
    },

    put: async (grupoMuscular: GrupoMuscular): Promise<GrupoMuscular> => {
        const response = await api.put(`/grupos-musculares/${grupoMuscular.idGrupoMuscular}`, grupoMuscular)
        return response.data
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/grupos-musculares/${id}`)
    }
}

export const categoriaEjercicioService = {
    getAll: async (): Promise<CategoriaEjercicio[]> => {
        const response = await api.get('/categorias')
        return response.data
    },

    getById: async (id: number): Promise<CategoriaEjercicio> => {
        const response = await api.get(`/categorias/${id}`)
        return response.data
    },

    post: async (categoriaEjercicio: CategoriaEjercicio): Promise<CategoriaEjercicio> => {
        const response = await api.post('/categorias', categoriaEjercicio)  
        return response.data
    },

    put: async (categoriaEjercicio: CategoriaEjercicio): Promise<CategoriaEjercicio> => {
        const response = await api.put(`/categorias/${categoriaEjercicio.idCategoria}`, categoriaEjercicio)
        return response.data    
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/categorias/${id}`)
    }
}

export const nivelDificultadService = {
    getAll: async (): Promise<NivelDificultad[]> => {
        const response = await api.get('/niveles-dificultad')
        return response.data
    },

    getById: async (id: number): Promise<NivelDificultad> => {
        const response = await api.get(`/niveles-dificultad/${id}`)
        return response.data
    },

    post: async (nivelDificultad: NivelDificultad): Promise<NivelDificultad> => {
        const response = await api.post('/niveles-dificultad', nivelDificultad) 
        return response.data
    },

    put: async (nivelDificultad: NivelDificultad): Promise<NivelDificultad> => {
        const response = await api.put(`/niveles-dificultad/${nivelDificultad.idNivel}`, nivelDificultad)
        return response.data
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/niveles-dificultad/${id}`)
    }
}

export const equipamientoService = {
    getAll: async (): Promise<Equipamiento[]> => {
        const response = await api.get('/equipamientos')
        return response.data
    },

    getById: async (id: number): Promise<Equipamiento> => {
        const response = await api.get(`/equipamientos/${id}`)
        return response.data
    },

    post: async (equipamiento: Equipamiento): Promise<Equipamiento> => {
        const response = await api.post('/equipamientos', equipamiento)
        return response.data
    },

    put: async (equipamiento: Equipamiento): Promise<Equipamiento> => {
        const response = await api.put(`/equipamientos/${equipamiento.idEquipamiento}`, equipamiento)
        return response.data
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/equipamientos/${id}`)
    }
}


export default api