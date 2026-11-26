import Navegador from "./modulos/Navegador"
import Informacion from "./modulos/Informacion";
import Experiencia from "./modulos/Experiencia";
import Proyectos from "./modulos/Proyectos";

function App() {
  return (
    <div className=" flex dark:bg-neutral-950">
      <Navegador />
      <main>
        <Informacion></Informacion>
        <Experiencia></Experiencia>
        <Proyectos></Proyectos>
      </main>
    </div>
  );
}

export default App
