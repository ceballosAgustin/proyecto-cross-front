import type { CategoriaEjercicio } from "../types/categoriaEjercicio"
import { TarjetaCategorias } from "./TarjetaCategorias"

interface ListaCategoriasProps {
    categorias: CategoriaEjercicio[]
}

export const ListaCategorias = ({ categorias }: ListaCategoriasProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((categoria) => (
                <TarjetaCategorias key={categoria.idCategoria} 
                categoria={categoria} />
            ))}
        </div>
    )
}

export default ListaCategorias
