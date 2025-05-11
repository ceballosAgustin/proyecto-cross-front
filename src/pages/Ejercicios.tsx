import { useEffect, useState } from "react"
import type { Ejercicio } from "../types/ejercicio"
import { ejercicioService } from "../services/api"
import ListaEjercicios from "../components/ListaEjercicios"

function Ejercicios() {
    const [ejercicios, setEjercicios] = useState<Ejercicio[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const cargarEjercicios = async () => {
            try {
                const data = await ejercicioService.getAll()
                setEjercicios(data)
            } catch (err) {
                setError("Error al cargar los ejercicios")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        cargarEjercicios()
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
                Ejercicios de Proyecto CrossFit
            </h1>

            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Filtros</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <select className="border rounded-md p-2">
                        <option value="">Grupo Muscular</option>
                    </select>
                    <select className="border rounded-md p-2">
                        <option value="">Categoría</option>
                    </select>
                    <select className="border rounded-md p-2">
                        <option value="">Nivel</option>
                    </select>
                    <select className="border rounded-md p-2">
                        <option value="">Equipamiento</option>
                    </select>
                </div>
            </div>

            <ListaEjercicios ejercicios={ejercicios} />
        </div>
    )
}

export default Ejercicios