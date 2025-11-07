'use client';

import { useEffect, useState } from 'react';

export default function ResultsPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadResults() {
      try {
        const res = await fetch('/api/results');
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error("Error al cargar resultados", e);
      }
    }

    loadResults();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Resultados de la sesión
      </h1>

      {!data ? (
        <p className="text-gray-400">Cargando resultados...</p>
      ) : (
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl text-center w-full max-w-md">
          <p className="font-semibold text-lg mb-4">
            Paciente: {data.patientName}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-700 p-3 rounded-lg">
              <p className="font-bold text-xl">{data.score}</p>
              <p>Puntuación</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-lg">
              <p className="font-bold text-xl">{data.movements}</p>
              <p>Movimientos</p>
            </div>
          </div>

          <p className="text-gray-300 text-sm mt-4 italic">
            {data.comment}
          </p>
        </div>
      )}

      <a href="/" className="underline mt-6">Volver</a>
    </main>
  );
}
