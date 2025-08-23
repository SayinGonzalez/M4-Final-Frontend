//  Diseño de la Card para los personajes en el sidebar

import { useFavsContext } from "../../hooks/useContexts";

//  Card para los personajes en el sidebar
const FavsCardSidebar = ({ char }) => {

  const { removeFromFavs } = useFavsContext();

  return (
    <li key={char.id} className="bg-[#263846] dark:bg-[#765265] flex items-center justify-between p-2 mb-3 rounded-lg">

      {/*  Imágen del personaje */}
      <div className="min-w-18 max-w-16 h-fit overflow-hidden rounded-lg">
        <img
          src={char.image}
          alt={char.petName}
          className="w-full h-full object-contain"
        />
      </div>

      {/*  Nombre del personaje  */}
      <span className="text-white text-center">{char.petName}</span>

      <div className="flex gap-4 items-center text-slate-200 dark:text-slate-400">
        {/*  Btn para remover el personaje  */}
        <button
          className="bg-transparent hover:text-white dark:hover:text-slate-50 w-8 h-8 rounded-md"
          onClick={() => removeFromFavs(char.id)}
        >
          <i className="bi bi-trash3 text-lg"></i>
        </button>
      </div>

    </li>
  )
}

export default FavsCardSidebar