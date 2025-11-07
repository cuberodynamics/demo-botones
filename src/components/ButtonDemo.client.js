'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useMetricsStore from '../store/useMetricsStore';

export default function ButtonDemo() {
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingResults, setLoadingResults] = useState(false);
  const router = useRouter();

  const addCreateClick = useMetricsStore((state) => state.addCreateClick);
  const addResultsClick = useMetricsStore((state) => state.addResultsClick);

  const handleClick = async (type) => {
    if (type === 'create') {
      setLoadingCreate(true);
      addCreateClick();

      if (window?.gtag) {
        window.gtag('event', 'click_crear_sesion', {
          event_category: 'interaccion',
          event_label: 'boton_crear_sesion'
        });
      }
    } else {
      setLoadingResults(true);
      addResultsClick();

      if (window?.gtag) {
        window.gtag('event', 'click_ver_resultados', {
          event_category: 'interaccion',
          event_label: 'boton_ver_resultados'
        });
      }
    }

    try {
      const res = await fetch(`/api/${type}`);
      const json = await res.json();

      if (type === 'create') {
        setLoadingCreate(false);
        alert(`Sesión creada ✅ - ${json.message}`);
        router.push('/');
      } else {
        setLoadingResults(false);
        alert(`Resultados cargados 📊 - ${json.message}`);
        router.push('/results');
      }

    } catch (e) {
      setLoadingCreate(false);
      setLoadingResults(false);
      alert('Error en la simulación del backend');
    }
  };

const trackABTest = (variant) => {
  console.log("A/B Test click →", variant);

  // Analytics: evento separado según el botón
  if (window?.gtag) {
    if (variant === 'ugly') {
      window.gtag('event', 'click_boton_feo', {
        event_category: 'ab_test',
        event_label: 'boton_feo',
        value: 1,
      });
    } else {
      window.gtag('event', 'click_boton_bonito', {
        event_category: 'ab_test',
        event_label: 'boton_bonito',
        value: 1,
      });
    }
  }

  // Confeti solo para el botón bonito
  if (variant === 'pretty') {
    import('canvas-confetti')
      .then((confetti) => {
        confetti.default({
          spread: 80,
          startVelocity: 50,
          particleCount: 120,
        });
      })
      .catch((err) => console.warn("Error cargando confeti", err));
  }
};

  

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-4">
        <button
          onClick={() => handleClick('create')}
          disabled={loadingCreate}
          className="btn"
        >
          {loadingCreate ? 'Creando sesión...' : 'Crear sesión'}
        </button>

        <button
          onClick={() => handleClick('results')}
          disabled={loadingResults}
          className="btn"
        >
          {loadingResults ? 'Cargando resultados...' : 'Ver resultados'}
        </button>
      </div>

      {/* --- A/B Testing Buttons --- */}
      <div className="mt-10 text-center">
        <h2 className="text-lg font-semibold mb-4">¿Qué botón te llama más la atención?</h2>

        <div className="flex gap-6 justify-center">
          {/* Feo */}
          <button
           onClick={() => trackABTest("ugly")}
            className="px-4 py-2 bg-gray-600 text-white border border-gray-400 rounded-md"
          >
            Botón Feo
          </button>

          {/* Bonito */}
          <button
            onClick={() => trackABTest("pretty")}
            className="px-6 py-3 text-white font-semibold rounded-md"
            style={{
              background: "linear-gradient(180deg, #2F76F7 0%, #479DFD 100%)",
              borderRadius: "6.2px",
              boxShadow: "0px 4px 10px rgba(47, 118, 247, 0.4)",
            }}
          >
            ✨ Botón Bonito ✨
          </button>
        </div>
      </div>
    </div>
  );
}
