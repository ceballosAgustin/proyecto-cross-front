import type { Ejercicio } from "./ejercicio"

export interface NivelDificultad {
    idNivel: number
    nombre: string
    nivel: number
    descripcion: string
    ejercicios: Ejercicio[]
}
