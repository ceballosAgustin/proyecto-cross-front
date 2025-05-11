import type { Ejercicio } from "./ejercicio"

export interface CategoriaEjercicio {
    idCategoria: number
    nombre: string
    descripcion: string
    ejercicios: Ejercicio[]
}

