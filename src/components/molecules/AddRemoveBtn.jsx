// Funcionalidad de añadir y remover de Favs

import { toast } from "react-toastify";
import { useFavsContext } from "../../hooks/useContexts";

const AddRemoveBtn = ({ charId, char, className }) => {

  const { addToFavs, isInFavs, removeFromFavs } = useFavsContext();

  const removeChar = () => {
    console.log("toast");
    removeFromFavs(charId) && toast.success('Eliminado de favoritos!');
  }

  const addChar = () => {
    addToFavs(char) && toast.success('Agregado a favoritos!');
  }

  return (
    <>
      {isInFavs(charId) ? (
        /*  Btn para remover  */
        <button
          onClick={removeChar}
          className={`
            ${className}
            font-medium mx-auto h-fit p-2 rounded-full
          `}
        >
          <i className="iconify-color streamline-stickies-color--love md:text-[30px] flex gap-2 items-center justify-center cursor-pointer hover:scale-105 
          shadow-2xl shadow-slate-900" />
        </button>
      ) : (
        /*  Btn para añadir  */
        <button
          onClick={addChar}
          className={`
            ${className}
            font-medium mx-auto h-fit p-2 rounded-full
          `}
        >
          <i className="iconify-color streamline-stickies-color--love-duo  md:text-[26px] flex gap-2 items-center justify-center cursor-pointer hover:scale-125 shadow-2xl shadow-slate-900" />
        </button>
      )}
    </>
  )
}


export default AddRemoveBtn