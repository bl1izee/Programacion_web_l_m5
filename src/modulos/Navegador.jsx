export default function Navegador() {
  
  // Ayuda de IA para que el nav se quede estático
  // sticky: hace que el elemento se comporte como un elemento normal hasta que alcanza una posición determinada durante el scroll. A partir de ahí, permanece pegado.
  // top-0: - : indica que debe quedarse pegado a 0 píxeles del borde superior de la ventana de scroll.
  // establece una altura equivalente al 100% de la altura de la ventana del navegador
  // Es lo que permite que el navegador te siga mientras bajas por la página.
  
  // hidden oculta el navegador
  // md aplica los atributos para 768px o más
  return (
    <nav className="
        hidden 
        md:sticky md:top-0 md:flex md:h-screen 
        md:flex-col md:items-center md:justify-center 
        md:border-r 
        md:border-gray-300 md:p-6 
        dark:md:border-green-600">

      <a href="#quien-soy" className="
          p-3
          text-sm
          hover:text-blue-500
          dark:text-[#00FF41]
          dark:hover:bg-[#00FF41]
          dark:hover:rounded-sm
          dark:hover:dark:text-neutral-950
          transition-colors">
        WHOAMI</a>

      <a href="#experiencia" className="
          p-3
          text-sm
          hover:text-blue-500
          dark:text-[#00FF41]
          dark:hover:bg-[#00FF41]
          dark:hover:rounded-sm
          dark:hover:dark:text-neutral-950
          transition-colors">
        EXPERIENCIA
      </a>

      <a href="#proyectos" className="
          p-3
          text-sm
          hover:text-blue-500
          dark:text-[#00FF41]
          dark:hover:bg-[#00FF41]
          dark:hover:rounded-sm
          dark:hover:dark:text-neutral-950
          transition-colors">
        PROYECTOS
      </a>
    </nav>
  );
}

