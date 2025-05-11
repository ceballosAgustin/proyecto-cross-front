import type { Ejercicio } from "./ejercicio"

export interface GrupoMuscular {
    idGrupoMuscular: number
    nombre: string
    ejercicios: Ejercicio[]
}
