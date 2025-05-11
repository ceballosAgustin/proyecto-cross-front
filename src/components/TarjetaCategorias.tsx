import type { CategoriaEjercicio } from "../types/categoriaEjercicio"

interface TarjetaCategoriasProps {
    categoria: CategoriaEjercicio
}

export const TarjetaCategorias = ({ categoria }: TarjetaCategoriasProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{categoria.nombre}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
                {categoria.descripcion}
            </p>
        </div>
    )
}   
