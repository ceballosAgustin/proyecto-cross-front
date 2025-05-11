function GruposMusculares() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Grupos Musculares
            </h1> 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Grupo Muscular de ejemplo</h2>
                    <p className="text-gray-600 mb-4">
                        Descripción del grupo muscular...
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver ejercicios
                    </button>
                </div>
            </div>
        </div>
    ) 
}

export default GruposMusculares