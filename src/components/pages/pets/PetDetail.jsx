import { useParams } from "react-router"
import { usePetContext } from "../../../hooks/useContexts";
import { useEffect, useState } from "react";

const PetDetail = () => {

  const { id } = useParams();

  const { currentPet: pet, getPetById, loading, error } = usePetContext(); // 👈 funciones desde el contexto

  console.log('selectPet PetEdit -> ', pet)

  const [zoomed, setZoomed] = useState(false); // 👈 estado para controlar el zoom

  loading && (<p className="text-center">Cargando mascotas...</p>)
  error && (<p className="text-center text-red-500">Error: {error.message}</p>)

  // 🔹 cargar mascota por id
  useEffect(() => {
    getPetById(id)
  }, [id, getPetById]);

  // ✅ Cierra con ESC sin depender del foco
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setZoomed(false);
      }
    };

    if (zoomed) {
      window.addEventListener("keydown", handleEsc);
    }

    // Limpieza cuando se desmonta o cambia el estado
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [zoomed]);

  return (
    <section className='flex-1 flex items-center'>

      <div className="absolute w-full top-6.5">
        <div className="
          relative mx-auto
          w-36 h-10 place-content-center
          bg-black/30 
        ">
          {/* arrow left */}
          <div className="
            absolute -left-5 top-0 w-0 h-0
            border-y-[20px] border-r-[16px] border-y-transparent
            border-black/30"/>

          {/* Category */}
          <p className="
            text-xl text-center 
            indie-flower-regular
            dark:text-slate-300
          ">{pet?.category}</p>

          {/* arrow right */}
          <div className="
            absolute -right-5 top-0 w-0 h-0
            border-y-[20px] border-l-[16px] border-y-transparent 
            border-l-black/30" />
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
          rounded-xl p-9 transform transition hover:scale-101 
          text-shadow-slate-800 text-shadow-lg 
          bg-black/50 dark:bg-teal-300/20 relative
          flex flex-col gap-2
        ">
          <h2 className="
              courgette-regular mb-2
              text-3xl text-center text-sky-400">
            Info general</h2>
            <p className="
              text-sky-300 text-lg 
                merienda-400
            ">Nombre:
              <span className="
                  text-sky-50 text-2xl indie-flower-regular
                  "> {pet?.petName}
              </span>
            </p>
            <p className="
               text-sky-300 text-lg 
                 merienda-400
               ">Sexo:
                <span className="
                       text-slate-50 text-2xl 
                         indie-flower-regular
                      "> {pet?.sexo}
              </span></p>
            <p className="
                  text-sky-300 text-lg 
                  merienda-400
                ">Raza:
                <span className="text-slate-50 text-2xl indie-flower-regular"> {pet?.breed}
              </span>
            </p>
            <p className="
                  text-sky-300 text-lg 
                  merienda-400
                ">Edad:
                <span className="text-slate-50 text-2xl indie-flower-regular"> {pet?.age}
              </span>
            </p>
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
          rounded-xl p-9 transform transition hover:scale-101
          bg-black/50 dark:bg-purple-300/20
          text-shadow-slate-800 text-shadow-lg
          flex flex-col gap-2.5
        ">
          <h2 className="courgette-regular mb-2
              text-3xl text-center text-purple-400">Gustos y Comportamientos</h2>
          <p className="text-purple-300 text-xl merienda-400 text-left">
            {pet?.preferences}
          </p>
          <p className="text-purple-300 text-xl merienda-400 text-left">
            {pet?.behaviorTraits}
          </p>
        </div>

        {/* mid */}
        {/* Overlay cuando la imagen está en zoom */}
        {/* IMAGEN */}
        <div
          className="
          col-span-1 row-span-1
          rounded-lg bg-black/50 
          cursor-pointer shadow-sm shadow-current
        "
          onClick={() => setZoomed(true)}
        >
          <img
            src={pet?.image}
            alt={pet?.petName}
            className="size-full object-cover rounded-lg"
          />
        </div>

        {/* --- MODAL ZOOM --- */}
        {zoomed && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setZoomed(false)} // clic afuera = cerrar
          >
            <img
              src={pet?.image}
              alt={pet?.petName}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl transform transition-all duration-300 ease-out scale-100"
              onClick={(e) => e.stopPropagation()} // evita que clic en la img cierre
            />
          </div>
        )}

        {/* 2° ➜ */}
        <div className="
          col-span-3 row-span-3 col-start-5 row-start-3
          rounded-xl p-9 transform transition hover:scale-101 
          bg-black/50 dark:bg-red-400/20
          text-shadow-slate-800 text-shadow-lg
          flex flex-col gap-2
        ">
          <h2 className="
              courgette-regular mb-2
              text-3xl text-center text-pink-500"> Características</h2>
          <p className="text-xl text-left mt-5 text-pink-200 merienda-400">{pet?.description}</p>
        </div>

        {/* 2° izq */}
        <div className="
               col-span-4 row-span-2 col-start-1
               rounded-xl p-9 transform transition hover:scale-101 
             bg-black/50 dark:bg-amber-500/20
             text-shadow-slate-800 text-shadow-lg
             flex flex-col gap-2
        ">
          <h2 className="text-amber-800 text-center
               courgette-regular text-3xl">
          Estado Médico
          </h2>
          <p className="
            merienda-400 text-xl 
            text-left text-amber-200
            mt-5">{pet?.medicalStatus}</p>
        </div>
      </div>
    </section>
  )
}

export default PetDetail