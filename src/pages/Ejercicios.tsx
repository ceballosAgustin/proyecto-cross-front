
function Ejercicios() {
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-semibold mb-2">Ejercicio de ejemplo</h3>
                    <p className="text-gray-600 mb-4">
                        Descripción breve del ejercicio...
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Ver detalles
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Ejercicios