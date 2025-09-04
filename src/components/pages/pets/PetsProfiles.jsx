import { useNavigate } from "react-router";
import MagicCard from "../../atoms/MagicCard";
import { usePetContext } from "../../../hooks/useContexts";
import PetCard from "../../molecules/PetCard";
import { useConfirm } from "../../../hooks/useConfirm";
import ConfirmDelete from "../../atoms/ConfirmDelete";
import { toast } from "react-toastify";

const PetsProfiles = () => {

  const navigate = useNavigate();
  const { pets, removePet } = usePetContext();
  const {
    confirm,
    isOpen,
    message,
    handleConfirm,
    handleCancel
  } = useConfirm();

  const handleDelete = async (id) => {
    // Mostramos modal y esperamos la respuesta
    const confirmed = await confirm(`¿Estás seguro de eliminar?`);
    if (!confirmed) {
      console.log("Eliminación cancelada");
      // Notificacion
      return toast.info('Eliminación cancelada!');
    }

    try {
      await removePet(id);
      console.log("Mascota eliminada");
      // Notificacion
      toast.success('Mascota eliminada con exito!')
    } catch (error) {
      console.error("Error al eliminar la mascota:", error);
    }
  };

  console.log(pets)

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-6">
      <div className="absolute w-full top-6.5">
        <h2 className="
          h-12 w-1/4 lg:w-1/6 mx-auto
          rounded-2xl p-2
          text-center md:text-4xl sm:text-2xl text-xl text-slate-100
          font-bold indie-flower-regular
        ">Mis Mascotas</h2>
      </div>

      <ConfirmDelete
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        message={message}
      />

      {/* CARDS DE PERFILES */}
      <div className="flex flex-wrap gap-8 justify-center px-8">
        {pets?.map((pet) => (
          <div
            key={pet._id}
            className="w-40 h-48"
          >
            <MagicCard
              radiusMain={150}
              radiusHalo={50}
            >
              <PetCard
                origen='profiles'
                pet={pet}
                onDelete={async () => { handleDelete(pet._id) }}
              />
            </MagicCard>
          </div>
        ))}

        {/* BTN CREAR MASCOTA */}
        <div
          onClick={() => navigate('/mascotas/crear', { state: { origen: 'profiles' } })}
          className="rounded-full">
          <div className="size-36">
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
          </div>
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