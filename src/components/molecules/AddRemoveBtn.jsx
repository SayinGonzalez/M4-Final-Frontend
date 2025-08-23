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
            ${className} bg-black/60
            text-rose-700 hover:text-rose-500
            font-medium mx-auto h-fit p-2 rounded-full
          `}
        >
          <i className="bi bi-suit-heart-fill md:text-[22px] flex gap-2 items-center justify-center" />
        </button>
      ) : (
        /*  Btn para añadir  */
        <button
          onClick={addChar}
          className={`
            ${className} bg-black/60
            text-white hover:text-rose-700
            font-medium mx-auto h-fit p-2 rounded-full
          `}
        >
          <i className="bi bi-suit-heart md:text-[22px] flex gap-2 items-center justify-center" />
        </button>
      )}
    </>
  )
}


export default AddRemoveBtn