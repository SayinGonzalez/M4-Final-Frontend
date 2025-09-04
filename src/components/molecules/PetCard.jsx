import { useNavigate } from "react-router";
import AddRemoveBtn from "./AddRemoveBtn";
import EditButton from "../atoms/EditButton";
import DeleteButton from "../atoms/DeleteButton";

const PetCard = ({ origen, pet, onNext, onRemove, onDelete }) => {

  const navigate = useNavigate();

  return (
    <div className="
      relative size-full z-10
      rounded-lg overflow-hidden">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pet.image})` }}
      />

      {/* Degradado CARD*/}
      <div
        onClick={() => navigate(`/mascotas/${pet._id}/perfil`, { state: { origen } })}
        className={`
          size-full absolute inset-0
          bg-gradient-to-t from-black to-40% to-transparent
        `} />


      {/* Contenido */}
      <div className="absolute bottom-0 left-0 text-white w-full z-10">

        {/* Pet Detail */}
        <div className={`
          text-center 
          ${(origen === 'profiles')
            ? 'my-3 grid grid-cols-4 items-end'
            : 'my-4'}
        `}>

          {/* Btn Delete */}
          <DeleteButton
            onDelete={onDelete}
            className={`
              text-lg col-span-1 ml-3
              ${(origen !== 'profiles') && 'hidden'}
            `}
          />

          <h2 className={`
            ${(origen === 'profiles')
              ? 'text-[15px] col-span-2'
              : 'text-lg lg:text-xl'}
            font-bold`}
          >{pet.petName}</h2>
          
          <p className={`
            text-lg font-bold 
            ${(origen === 'profiles') && 'hidden'}`}
          >{pet.sexo === 'female' ? 'Hembra' : 'Macho'} - {pet.age}</p>

          {/*  btn edit  */}
          <EditButton
            route={() => navigate(`/mascotas/${pet._id}/editar`, { state: { origen } })}
            className={`
              text-lg col-span-1 ml-2
              ${(origen !== 'profiles') && 'hidden'}
            `}
          />

        </div>

        {/* Icons */}
        <div className={`flex items-center text-3xl justify-between ${(origen === 'matchcotas') && 'my-4 mx-6'}`}>

          {/* Btn Delete */}
          {onRemove && (
            <i 
              className={`
                  iconify-color streamline-stickies-color--cancel-2-duo  cursor-pointer
                  hover:scale-125
                  ${origen !== 'matchcotas' && "hidden"}
                `}
              onClick={onRemove}
            />
          )}

          {/* Btn Heart */}
          {(origen === 'adoptions' || origen === 'matchcotas') &&
            <AddRemoveBtn
              charId={pet._id}
              char={pet}
              className={`
                  ${origen === 'adoptions' && "absolute right-4 bottom-64"}
                `}
            />
          }

          {/* Btn Next */}
          {onNext && (
            <i
              className="iconify-color streamline-stickies-color--cursor
              rotate-45 text-2xl cursor-pointer
              hover:scale-125"
              onClick={onNext}
            />
          )}
        </div>
      </div>
    </div>
  );
};


export default PetCard;