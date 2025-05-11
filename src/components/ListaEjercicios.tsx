import TarjetaEjercicio from './TarjetaEjercicio'
import type { Ejercicio } from '../types/ejercicio'

interface ListaEjerciciosProps {
    ejercicios: Ejercicio[]
}

export const ListaEjercicios = ({ ejercicios }: ListaEjerciciosProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ejercicios.map((ejercicio) => (
                <TarjetaEjercicio key={ejercicio.idEjercicio} 
                ejercicio={ejercicio}
                />
            ))}
        </div>
    )
}

export default ListaEjercicios