import type { GrupoMuscular } from "../types/GrupoMuscular";

interface TarjetaGruposMuscularesProps {
    grupoMuscular: GrupoMuscular
}

export const TarjetaGruposMusculares = ({ grupoMuscular }: TarjetaGruposMuscularesProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{grupoMuscular.nombre}</h3>
            
        </div>
    )
}

