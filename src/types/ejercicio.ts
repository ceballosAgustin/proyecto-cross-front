import type { CategoriaEjercicio } from "./categoriaEjercicio"
import type { Equipamiento } from "./equipamiento"
import type { GrupoMuscular } from "./GrupoMuscular"
import type { NivelDificultad } from "./nivelDificultad"

export interface Ejercicio {
    idEjercicio: number
    nombre: string
    descripcion: string
    urlVideo?: string
    gruposMusculares: GrupoMuscular[]
    categorias: CategoriaEjercicio[]
    nivelesDificultad: NivelDificultad[]
    equipamientos: Equipamiento[]
}