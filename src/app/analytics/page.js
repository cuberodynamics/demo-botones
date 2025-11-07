'use client';

import { useEffect } from 'react';
import useMetricsStore from '../../store/useMetricsStore';

export default function AnalyticsPage() {
  const { createClicks, resultsClicks, setCreateClicks, setResultsClicks } = useMetricsStore();

  // ✅ Cargar desde localStorage al entrar
  useEffect(() => {
    try {
      const raw = localStorage.getItem('demo_clicks');
      if (raw) {
        const data = JSON.parse(raw);
        setCreateClicks(data.create || 0);
        setResultsClicks(data.results || 0);
      }
    } catch (e) {
      console.warn("No se pudo leer localStorage", e);
    }
  }, [setCreateClicks, setResultsClicks]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-900 text-red p-6">
      <h1 className="text-2xl font-bold">Panel de Métricas (Demo)</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl text-center">
          <p className="text-lg font-semibold">Crear Sesión</p>
          <p className="text-4xl font-bold mt-2">{createClicks}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-xl text-center">
          <p className="text-lg font-semibold">Ver Resultados</p>
          <p className="text-4xl font-bold mt-2">{resultsClicks}</p>
        </div>
      </div>

      <a href="/" className="underline mt-4">Volver</a>
    </main>
  );
}
