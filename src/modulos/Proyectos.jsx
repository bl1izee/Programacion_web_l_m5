import Proyecto from "./Proyecto";

export default function Proyectos() {
  return (
    <div
      id="proyectos"
      className="flex flex-col gap-8 p-8 md:p-12"
    >
      <h2 className="text-2xl dark:text-[#04BF20] font-bold md:text-3xl">
        Proyectos
      </h2>

      <div className="flex flex-col gap-6">

        <Proyecto
          titulo="Get Next Line"
          descripcion="Proyecto desarrollado en el programa de Fundación 42 Telefónica, centrado en la lectura y procesamiento de líneas de archivos en lenguaje C."
        />

        <Proyecto
          titulo="Clasificación de perros y gatos"
          descripcion="Desarrollo de un modelo de clasificación binaria de imágenes creando una CNN propia y utilizando técnicas de Transfer Learning."
        />

        <Proyecto
          titulo="eJPTv2"
          descripcion="Certificación de ciberseguridad de INE Security, orientada a la evaluación de conocimientos prácticos de pentesting y seguridad ofensiva."
        />

        <Proyecto
          titulo="Gestión de caché con Redis"
          descripcion="Desarrollo de un sistema de gestión de caché de reservas de conciertos utilizando Redis y Python."
          link="https://github.com/bl1izee/abd-p3-redis"
        />

      </div>
    </div>
  );
}