function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Bienvenido a Proyecto CrossFit
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tu portal definitivo para explorar y aprender ejercicios de CrossFit
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Qué encontrarás aquí?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Ejercicios Detallados</h3>
              <p className="text-gray-600">
                Accede a una amplia base de datos de ejercicios con descripciones detalladas y videos explicativos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Filtros Avanzados</h3>
              <p className="text-gray-600">
                Encuentra ejercicios por grupo muscular, categoría, nivel de dificultad y equipamiento necesario.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Recursos Educativos</h3>
              <p className="text-gray-600">
                Aprende sobre grupos musculares, técnicas correctas y progresiones para cada ejercicio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-gray-300">Ejercicios</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10+</h3>
              <p className="text-gray-300">Grupos Musculares</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">5+</h3>
              <p className="text-gray-300">Categorías</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home