import type { GrupoMuscular } from "../types/GrupoMuscular";
import { TarjetaGruposMusculares } from "./TarjetaGruposMusculares";

interface ListaGruposMuscularesProps { 
    gruposMusculares: GrupoMuscular[]
}

export const ListaGruposMusculares = ({ gruposMusculares }: ListaGruposMuscularesProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gruposMusculares.map((grupoMuscular) => (
                <TarjetaGruposMusculares key={grupoMuscular.idGrupoMuscular} 
                grupoMuscular={grupoMuscular} />
            ))}
        </div>
    )
}

export default ListaGruposMusculares

