import { useNavigate } from "react-router";
import AddRemoveBtn from "./AddRemoveBtn";
import EditButton from "../atoms/EditButton";
import DeleteButton from "../atoms/DeleteButton";

// const PetCard = ({ origen, pet, onNext, onRemove, addToFavs }) => {
const PetCard = ({ origen, pet, onNext, onRemove, onDelete }) => {

  const navigate = useNavigate();

  // console.log(`origen: ${origen}`) // 'adoptions' | 'matchcotas' | 'profiles' | 'public'

  return (
    <div className="
      relative size-full
      rounded-lg overflow-hidden">

      {/* Imagen de fondo */}
      <div
        onClick={() => navigate(`/mascotas/${pet.id}/perfil`, { state: { origen } })}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pet.image})` }}
      />

      {/* Degradado CARD*/}
      <div className={`
          size-full absolute inset-0
          bg-gradient-to-t from-black to-40% to-transparent
        `} />


      {/* Contenido */}
      <div className="absolute bottom-0 left-0 text-white w-full z-10">

        {/* Pet Detail */}
        <div className={`text-center ${(origen === 'matchcotas') ? 'my-2' : 'my-4'} relative`}>

          {(origen === 'profiles') &&
            <>
              {/* Btn Delete */}
              <DeleteButton 
                onDelete={onDelete}
                className='absolute left-4 text-lg'
              />

              {/*  btn edit  */}
              <EditButton
                route={() => navigate(`/mascotas/${pet.id}/editar`, { state: { origen } })}
                className='absolute right-4 bottom-32 text-lg'
              />
            </>
          }

          <h2 className="text-lg lg:text-base font-bold">{pet.petName}</h2>
          <p className={`text-lg font-bold ${(origen === 'profiles') && 'hidden'}`}>{pet.sexo === 'female' ? 'Hembra' : 'Macho'} - {pet.age}</p>

        </div>

        {/* Icons */}
        <div className={`flex items-center justify-between ${(origen === 'matchcotas') && 'my-4 mx-6'}`}>

          {/* Btn Delete */}
          {onRemove && (
            <i
              className={`
                  bi bi-x-square-fill text-teal-700 text-3xl cursor-pointer
                  ${origen !== 'matchcotas' && "hidden"}
                `}
              onClick={onRemove}
            />
          )}

          {/* Btn Heart */}
          {(origen === 'adoptions' || origen === 'matchcotas') &&
            <AddRemoveBtn
              charId={pet.id}
              char={pet}
              className={`
                  ${origen === 'adoptions' && "absolute right-4 bottom-64"}
                `}
            />
          }

          {/* Btn Next */}
          {onNext && (
            <i
              className="bi bi-arrow-right-square-fill text-slate-300 text-3xl cursor-pointer"
              onClick={onNext}
            />
          )}
        </div>
      </div>
    </div>
  );
};


export default PetCard;