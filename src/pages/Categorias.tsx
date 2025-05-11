import { useEffect, useState } from "react"
import type { CategoriaEjercicio } from "../types/categoriaEjercicio"
import { categoriaEjercicioService } from "../services/api"
import ListaCategorias from "../components/ListaCategorias"           

function Categorias() {
    const [categorias, setCategorias] = useState<CategoriaEjercicio[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const cargarCategorias = async () => {  
            try {
                const data = await categoriaEjercicioService.getAll()
                setCategorias(data)
            } catch (err) {
                setError("Error al cargar las categorías")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        cargarCategorias()
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <p className="text-red-600">{error}</p>
            </div>
        ) 
    }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Categorías de Ejercicios
            </h1>

            <ListaCategorias categorias={categorias} />
        </div>
    )
}

export default Categorias