export default function Informacion() {
  return (
    <section id="quien-soy" className="
          flex flex-col justify-center 
          gap-6 p-8 
          md:p-12">
            
      <h1 className="
            text-4xl 
            font-bold 
            md:text-6xl
            dark:text-[#04BF20]">
        Pablo Martín
      </h1>

      <p className="
          max-w-2xl 
          text-base 
          leading-relaxed 
          text-gray-600 
          dark:text-[#078C1B] 
          md:text-lg">
        Soy estudiante de Ingeniería del Software en U-tad,
        interesado en el desarrollo de software y la ciberseguridad.
        Me gusta aprender nuevas tecnologías, afrontar retos
        y desarrollar proyectos que me permitan seguir creciendo
        tanto personal como profesionalmente.
      </p>
    </section>
  );
}

