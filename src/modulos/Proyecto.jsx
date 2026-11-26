export default function Proyecto({ titulo, descripcion, link }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl ">
      <h3 className="text-lg font-semibold dark:text-[#078C1B]">
        {titulo}
      </h3>

      <p className="text-sm text-gray-500">
        {descripcion}
      </p>

      {link && (
        <a
          href={link}
          className="text-sm font-semibold text-blue-600 hover:underline dark:text-[#04BF20]"
        >
          Ver repositorio en GitHub →
        </a>
      )}
    </div>
  );
}