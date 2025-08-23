import { useNavigate } from "react-router";
import MagicCard from "../../atoms/MagicCard";
import { usePetContext } from "../../../hooks/useContexts";
import PetCard from "../../molecules/PetCard";

const PetsProfiles = () => {

  const navigate = useNavigate();
  const { pets, removeCurrentPet, removePet } = usePetContext();

  console.log(pets)

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-6">
      <div className="absolute w-full top-6.5">
        <h2 className="
          h-12 w-1/4 lg:w-1/6 mx-auto
          rounded-2xl p-2
          text-center text-4xl text-slate-100
          font-bold clicker-script-regular
        ">PetsProfiles</h2>
      </div>

      {/* CARDS DE PERFILES */}
      <div className="flex flex-wrap gap-6 justify-center size-full">
        {pets?.map((pet) => (
          <div
            key={pet.id}
            className="w-56 h-72 my-auto"
          >
            <MagicCard
              radiusMain={200}
              radiusHalo={100}
            >
              <PetCard
                origen='profiles'
                pet={pet}
                onRemove={removeCurrentPet}
                onDelete={async () => { await removePet(pet.id) }}
              />
            </MagicCard>
          </div>
        ))}

        {/* BTN CREAR MASCOTA */}
        <div
          onClick={() => navigate(`/mascotas/crear`, { state: { origen: 'profiles' } })}
          className="size-36 my-auto rounded-full">
          <MagicCard
            className={'rounded-full'}
            radiusMain={100}
            radiusHalo={50}
            mainOpacity={0}
            haloOpacity={0}
          >
            <div className="size-full rounded-full bg-[#C2A0B6] dark:bg-[#4B636D]">
              <div className="bg-black/50 absolute inset-0 rounded-full text-center content-center">
                <i className="bi bi-plus text-7xl text-slate-300" />
              </div>
            </div>
          </MagicCard>
          <p className="
            w-full my-2 text-center text-slate-200 hover:text-transparent
            bg-gradient-to-r from-[#9E7AFF] to-[#FE8BBB] bg-clip-text 
          ">Agregar Mascota</p>
        </div>
      </div>
    </div >
  )
}

export default PetsProfiles