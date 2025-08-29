//  Formulario para crea una Mascota

import PetForm from '../../organisms/PetForm';
import BackButton from '../../atoms/BackButton';
import { usePetContext } from '../../../hooks/useContexts';
import { useNavigate } from 'react-router';

const PetCreate = () => {
  const { addPet } = usePetContext();  // traemos la función del contexto
  const navigate = useNavigate();      // para redirigir

  const handleSubmit = async (data) => {
    console.log("INGRESO HANDLE SUBMIT");
    console.log("Datos enviados ➜", data);

    try {
      await addPet(data);
      navigate("/mascotas/perfiles");  // redirigir automáticamente a perfiles
    } catch (error) {
      console.error("Error al crear la mascota:", error);
      alert("Hubo un error al crear la mascota ❌");
    } finally {
      document.activeElement.blur();  // Quita el foco después del click
    }
  };

  return (
    <section className="w-full flex-1 content-center text-gray-200">
      <div className="absolute inset-0 top-25 left-11/12">
        <BackButton />
      </div>

      <PetForm
        onSubmit={handleSubmit}
        formType={'add'}
      />
    </section>
  );
};

export default PetCreate;
