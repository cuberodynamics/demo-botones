import ButtonDemo from '../components/ButtonDemo.client';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-white text-gray-900 p-6">
      <h1 className="text-2xl font-bold">Demostración: ¿Qué pasa al hacer clic?</h1>
      <p className="text-sm text-gray-700 max-w-lg text-center">
        Interactúa con los botones para simular dos flujos: crear sesión y ver resultados.
      </p>

      <ButtonDemo />
    </main>
  );
}
