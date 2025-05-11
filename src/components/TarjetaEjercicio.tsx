import { Link } from "react-router-dom";
import type { Ejercicio } from "../types/ejercicio";

interface TarjetaEjercicioProps {
    ejercicio: Ejercicio
}

export const TarjetaEjercicio = ({ ejercicio }: TarjetaEjercicioProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{ejercicio.nombre}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
                {ejercicio.descripcion}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {ejercicio.categorias.map((categoria, index) => (
                    <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                        {categoria.nombre}
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {ejercicio.gruposMusculares.map((grupo, index) => (
                    <span 
                    key={index}
                    className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                        {grupo.nombre}
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {ejercicio.nivelesDificultad.map((nivel, index) => (
                    <span 
                    key={index}
                    className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                        {nivel.nombre}
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {ejercicio.equipamientos.map((equipamiento, index) => (
                    <span 
                    key={index}
                    className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                        {equipamiento.nombre}
                    </span>
                ))}
            </div>

            <Link
                to={`/ejercicios/${ejercicio.idEjercicio}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
                Ver Detalles
            </Link>
        </div>
    )
}

export default TarjetaEjercicio
