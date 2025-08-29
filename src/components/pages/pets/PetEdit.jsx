import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import useOrigen from "../../../hooks/useOrigen";
import { usePetContext } from "../../../hooks/useContexts";
import PetForm from "../../organisms/PetForm";
import BackButton from "../../atoms/BackButton";

const PetEdit = () => {
  const { id } = useParams();
  const origen = useOrigen(); // 'adoptions' | 'matchcotas' | 'profiles' | 'public'
  const navigate = useNavigate();

  const { currentPet, getPetById, editPet, loading, error } = usePetContext();  // funciones desde el contexto

  // console.log('id PetEdit ➜ ', id)
  console.log('currentPet PetEdit ➜ ', currentPet)

  // 🔹 submit para actualizar
  const handleSubmit = async (data) => {
    console.log("INGRESO HANDLE SUBMIT");
    console.log("Datos enviados ➜", data);
    try {
      await editPet(id, data);
      navigate("/mascotas/perfiles");  // redirige después de editar
    } catch (error) {
      console.error("Error al actualizar la mascota:", error);
      alert("Error al actualizar ❌");
    } finally {
      document.activeElement.blur();
    }
  };

  loading && (<p className="text-center">Cargando mascotas...</p>)
  error && (<p className="text-center text-red-500">Error: {error.message}</p>)

  // 🔹 cargar mascota por id
  useEffect(() => { 
    getPetById(id)
  }, [id, getPetById]);

  return (
    origen === "profiles" && currentPet && (
      <section className="flex-1 w-full content-center text-gray-200">
         <div className="absolute inset-0 top-25 left-11/12">
                <BackButton />
              </div>
        <PetForm
          onSubmit={handleSubmit}
          defaultValues={currentPet} // valores iniciales
          formType={'edit'}
        />
      </section>
    )
  );
};

export default PetEdit;
