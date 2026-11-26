export default function Experiencia() {
  return (
    <div id="experiencia" className=" flex flex-col gap-8 p-8 md:p-12">
      <h2 className="
            text-2xl 
            dark:text-[#04BF20]
            font-bold 
            md:text-3xl">
        Experiencia
      </h2>

      {/* Profesor universitario */}
      <div>
        <h3 className="
                text-lg 
                dark:text-[#078C1B]
                font-semibold 
                md:text-xl">
          Profesor universitario de programación
        </h3>

        <p className="text-sm text-gray-500">
          U-Tad – Madrid, Madrid | 09/2025 - 05/2026
        </p>

        <p className="
              text-base 
              text-gray-700
              dark:text-[#078C1B]">
          Acompañamiento y evaluación de las actividades realizadas
          por los estudiantes de programación en lenguaje C.
        </p>
      </div>

      {/* Server Assistant */}
      <div>
        <h3 className="
              text-lg 
              dark:text-[#078C1B] 
              font-semibold 
              md:text-xl">
          Server
        </h3>

        <p className="text-sm text-gray-500">
          Xanterra Travel Collection – Yellowstone National Park,
          Wyoming | 06/2026 - 09/2026
        </p>

        <p className="
              text-base 
              text-gray-700
              dark:text-[#078C1B]">
          Camarero en el restaurante del Hotel principal de Yellowstone National Park.
        </p>
      </div>
    </div>
  );
}
