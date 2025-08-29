import { useEffect } from "react";
import MagicCard from "../../atoms/MagicCard";
import EmptyMsg from "../../atoms/EmptyMsg";
import { usePetContext } from "../../../hooks/useContexts";
import PetCard from "../../molecules/PetCard";

const Matchcotas = () => {
  const {
    petsMatchcotas,
    loadPetsByCategory,
    currentIndex,
    nextPet,
    removeCurrentPet,
    loading,
    error
  } = usePetContext();

  const currentPet =
    petsMatchcotas && petsMatchcotas.length > 0
      ? petsMatchcotas[currentIndex]
      : null;

  console.log('currentPet Matchcotas ➜', currentPet)

  loading && (<p className="text-center">Cargando mascotas...</p>)
  error && (<p className="text-center text-red-500">Error: {error.message}</p>)

  useEffect(() => {
    if (!petsMatchcotas || petsMatchcotas.length === 0) {
      loadPetsByCategory("match");
    }
  }, [petsMatchcotas, loadPetsByCategory]);
  console.log('pets Matchcotas ➜ ', petsMatchcotas)

  return (
    <section className="flex-1 flex justify-center items-center p-16">
      {currentPet ?
        <div className="h-[450px] w-[350px] relative">
          <MagicCard>
            <PetCard
              origen="matchcotas"
              pet={currentPet}
              onNext={nextPet}
              onRemove={removeCurrentPet}
            />
          </MagicCard>
        </div>
        : <EmptyMsg message={'No hay mascotas actualmente'} />
      }
    </section>
  )
};

export default Matchcotas;