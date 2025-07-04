"use client";

import { MapPin, Ruler, Bed, Bath, Home } from "lucide-react";

export default function Hero() {
  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      {/* Title and features section */}
      <section className="bg-white p-6 shadow-md rounded-md border border-gray-200 mb-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Oportunidad! Casa a refaccionar de 3 dormitorios</h1>
          <p className="text-gray-500">Anchorena 469, Rosario - USD 29.000</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-gray-700">
          <div className="flex items-center">
            <Ruler className="mr-2" size={20} /> 96 m² Cub.
          </div>
          <div className="flex items-center">
            <Home className="mr-2" size={20} /> 212 m² Lote
          </div>
          <div className="flex items-center">
            <Bed className="mr-2" size={20} /> 3 Dormitorios
          </div>
          <div className="flex items-center">
            <Bath className="mr-2" size={20} /> 1 Baño
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" size={20} /> Norte
          </div>
        </div>
      </section>

      {/* Gallery and Map Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-200 rounded-md shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Galería de fotos</h2>
            {/* Placeholder for photos gallery */}
            <div className="bg-gray-300 h-64 rounded"></div>
          </div>
        </div>
        <div>
          <div className="bg-gray-200 rounded-md shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Ubicación en el mapa</h2>
            {/* Placeholder for map */}
            <div className="bg-gray-300 h-64 rounded"></div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-white p-6 shadow-md rounded-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Descripción</h2>
        <p>
          Ingresamos a la propiedad por un pasillo único. Encontramos un comedor que se conecta hacia una cocina separada,
          la cual cuenta con ventilación y luz natural. La propiedad requiere refacciones generales, ideal para inversores
          o quien busque remodelar a gusto.
        </p>
      </section>
    </main>
  );
}