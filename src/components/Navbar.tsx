import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold">Proyecto CrossFit</h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Inicio
                            </Link>
                            <Link to="/ejercicios" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Ejercicios
                            </Link>
                            <Link to="/grupos-musculares" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Grupos Musculares
                            </Link>
                            <Link to="/categorias" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Categorías
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar