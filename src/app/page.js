// // // src/app/page.js
// // import ButtonDemo from '../components/ButtonDemo.client';

// // export default function Home() {
// //   return (
// //     <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-900 text-white p-6">
// //       <h1 className="text-2xl font-bold">Demostración: ¿Qué pasa al hacer clic?</h1>
// //       <p className="text-sm text-gray-300 max-w-lg text-center">
// //         Interactúa con los botones para simular dos flujos: crear sesión y ver resultados.
// //       </p>

// //       <ButtonDemo />
// //     </main>
// //   );
// // }

// 'use client';

// export default function ButtonDemo() {

//   const handleCreateSession = async () => {
//     if (typeof window !== 'undefined' && window.gtag) {
//       window.gtag('event', 'click_crear_sesion', {
//         event_category: 'interaccion',
//         event_label: 'boton_crear_sesion'
//       });
//     }

//     try {
//       const start = Date.now();
//       const res = await fetch('/api/create');
//       const data = await res.json();
//       alert(`Sesión creada ✅ (📡 ${Date.now() - start} ms)\n\n${data.message}`);
//     } catch (err) {
//       alert('Error en la simulación del backend');
//     }
//   };

//   const handleViewResults = async () => {
//     if (typeof window !== 'undefined' && window.gtag) {
//       window.gtag('event', 'click_ver_resultados', {
//         event_category: 'interaccion',
//         event_label: 'boton_ver_resultados'
//       });
//     }

//     try {
//       const start = Date.now();
//       const res = await fetch('/api/results');
//       const data = await res.json();
//       window.location.href = '/results';
//     } catch (err) {
//       alert('Error en la simulación del backend');
//     }
//   };

//   return (
//     <main style={{ textAlign: 'center' }}>
//       <button onClick={handleCreateSession}>Crear sesión</button>
//       <button onClick={handleViewResults}>Ver resultados</button>
//     </main>
//   );
// }

// src/app/page.js
import ButtonDemo from '../components/ButtonDemo.client';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold">Demostración: ¿Qué pasa al hacer clic?</h1>
      <p className="text-sm text-gray-300 max-w-lg text-center">
        Interactúa con los botones para simular dos flujos: crear sesión y ver resultados.
      </p>

      <ButtonDemo />
    </main>
  );
}
