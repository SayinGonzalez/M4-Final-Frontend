import { useParams } from "react-router"
import { usePetContext } from "../../../hooks/useContexts";
import { useEffect } from "react";

const PetDetail = () => {

  const { id } = useParams();

  const { currentPet: pet, getPetById, loading, error } = usePetContext(); // 👈 funciones desde el contexto

  console.log('selectPet PetEdit -> ', pet)

  loading && (<p className="text-center">Cargando mascotas...</p>)
  error && (<p className="text-center text-red-500">Error: {error.message}</p>)

  // 🔹 cargar mascota por id
  useEffect(() => {
    getPetById(id)
  }, [id, getPetById]);

  return (
    <section className='flex-1 flex items-center'>

      <div className="absolute w-full top-6.5">
        <div className="
          relative mx-auto
          w-36 h-10 place-content-center
          bg-black/30 dark:bg-purple-300/20
        ">
          {/* arrow left */}
          <div className="
            absolute -left-5 top-0 w-0 h-0
            border-y-[20px] border-r-[16px] border-y-transparent
            border-r-black/30 dark:border-r-purple-300/20" />

          {/* Category */}
          <p className="
            text-lg text-center
            macondo-regular
            dark:text-purple-300
          ">{pet?.category}</p>

          {/* arrow right */}
          <div className="
            absolute -right-5 top-0 w-0 h-0
            border-y-[20px] border-l-[16px] border-y-transparent 
            border-l-black/30 dark:border-l-purple-300/20" />
        </div>
      </div>

      {/* GRID */}
      <div className="
        h-[530px] max-h-[530px] w-10/12 
        lg:h-[530px] lg:max-h-[530px] lg:w-3/4 
        mx-auto p-4 
        rounded-xl
        grid grid-cols-7 grid-rows-5 gap-2.5
      ">

        {/* 1° izq */}
        <div className="
          col-span-3 row-span-3
          rounded-xl p-4
          bg-black/50 dark:bg-purple-300/20 relative
        ">Info general
          <p>Nombre: {pet?.petName}</p>
          <p>Sexo: {pet?.sexo}</p>
          <p>Raza: {pet?.breed}</p>
          <p>Edad: {pet?.age}</p>
          <div className="
            absolute top-3 right-0
            w-1/4 h-8 rounded-l-md
            text-center text-sky-100
            bg-black/35
          ">
            <p>{pet?.animalType}</p>
          </div>
        </div>

        {/* 1° ➜ */}
        <div className="
          col-span-4 row-span-2
          rounded-xl p-4
          bg-black/50 dark:bg-purple-300/20
        ">Gustos y Comportamientos
          <p>{pet?.preferences}</p>
          <p>{pet?.behaviorTraits}</p>
        </div>

        {/* mid */}
        <div className="
          col-span-1 row-span-1 
          rounded-lg bg-black/50 dark:bg-purple-300/20
        ">
          <img
            src={pet?.image}
            alt="pet.petName"
            className="size-full object-cover rounded-lg" />
        </div>

        {/* 2° ➜ */}
        <div className="
          col-span-3 row-span-3 col-start-5 row-start-3
          rounded-xl p-4
          bg-black/50 dark:bg-purple-300/20
        ">Características
          <p>{pet?.description}</p>
        </div>

        {/* 2° izq */}
        <div className="
          col-span-4 row-span-2 col-start-1
          rounded-xl p-4
          bg-black/50 dark:bg-purple-300/20
        ">Estado Médico
          <p>{pet?.medicalStatus}</p>
        </div>
      </div>
    </section>
  )
}

export default PetDetail