export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] p-10 grid grid-cols-6 grid-rows-4 gap-6">

      {/* LOGO / HEADER */}
      <div className="col-span-6 flex justify-between items-start">
        <h1 className="text-6xl font-bold tracking-tight">
          ARCHIVO XI
        </h1>

        <p className="text-sm text-gray-500">
          El fútbol no se olvida
        </p>
      </div>

      {/* BLOQUE PRINCIPAL */}
      <div className="col-span-4 row-span-2 border border-black p-8 flex flex-col justify-between">

        <div>
          <p className="text-sm text-gray-500">Final</p>

          <h2 className="text-4xl font-bold mt-2">
            1986
          </h2>

          <p className="mt-2 text-lg">
            Argentina vs Alemania
          </p>
        </div>

        <div className="text-right text-5xl font-bold">
          3 — 2
        </div>

      </div>

      {/* BLOQUE DERECHO */}
      <div className="col-span-2 row-span-2 border border-black p-6 flex flex-col justify-between">

        <div>
          <p className="text-sm text-gray-500">Momento</p>
          <h3 className="text-2xl font-semibold mt-2">
            Maracanazo
          </h3>
          <p className="text-sm mt-1">1950</p>
        </div>

        <div className="text-right font-bold">
          URU 2 — 1 BRA
        </div>

      </div>

      {/* BLOQUE INFERIOR IZQUIERDO */}
      <div className="col-span-3 border border-black p-6 flex flex-col justify-between">

        <div>
          <p className="text-sm text-gray-500">Final</p>
          <h3 className="text-2xl font-semibold mt-2">
            2006
          </h3>
          <p className="text-sm mt-1">Italia vs Francia</p>
        </div>

        <div className="text-right font-bold">
          1 — 1 (5-3)
        </div>

      </div>

      {/* BLOQUE CATEGORÍAS */}
      <div className="col-span-3 border border-black p-6 flex flex-col justify-between">

        <div>
          <p className="text-sm text-gray-500">Categorías</p>

          <ul className="mt-4 space-y-2 text-lg">
            <li>Hazañas</li>
            <li>Tragedias</li>
            <li>Sorpresas</li>
          </ul>
        </div>

        <div className="text-right text-sm text-gray-400">
          Archivo XI ©
        </div>

      </div>

    </main>
  );
}