import type { Ejercicio } from "./ejercicio"

export interface Equipamiento {
    idEquipamiento: number
    nombre: string
    descripcion: string
    ejercicios: Ejercicio[]
}
