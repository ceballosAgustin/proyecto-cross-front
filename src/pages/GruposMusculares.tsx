import { useEffect, useState } from "react"
import type { GrupoMuscular } from "../types/GrupoMuscular"
import { grupoMuscularService } from "../services/api"
import ListaGruposMusculares from "../components/ListaGruposMusculares"

function GruposMusculares() {
    const [gruposMusculares, setGruposMusculares] = useState<GrupoMuscular[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    
    useEffect(() => {
        const cargarGruposMusculares = async () => {
            try {
                const data = await grupoMuscularService.getAll()
                setGruposMusculares(data)
            } catch (err) {
                setError("Error al cargar los grupos musculares")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        cargarGruposMusculares()    
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
                Grupos Musculares
            </h1> 

            <ListaGruposMusculares gruposMusculares={gruposMusculares} />
        </div>
    ) 
}

export default GruposMusculares