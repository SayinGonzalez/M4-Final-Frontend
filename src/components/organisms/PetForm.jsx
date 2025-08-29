import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import petSchema from '../../validations/petSchema';

const PetForm = ({ onSubmit, defaultValues = '', formType = 'send' }) => {

  // console.log('defaultValues PetForm ➜', defaultValues)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(petSchema),
    defaultValues
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
          grid grid-cols-6 gap-x-4 gap-y-4
          sm:w-3/4 lg:w-[45%] mx-auto my-8 py-8 px-10 rounded-3xl merienda-400 text-2xl
          bg-[#93627c] dark:bg-[#334451]
          shadow-sm shadow-gray-200
          ">
      {/* Nombre */}
      <div className="relative z-0 col-span-4 group bg-inherit">
        <input id="petName"
          {...register("petName")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.petName && 'border-b-[#560606] dark:border-b-[#ff9794]'}
            `}
          placeholder=" " />
        <label htmlFor="petName"
          className="
              absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">Nombre de la mascota</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.petName?.message}</p>
      </div>

      {/* Edad */}
      <div className="relative z-0 col-span-2 group bg-inherit">
        <select id="age"
          {...register("age")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.age && 'border-b-[#560606] dark:border-b-[#ff9794]'}
            `}
          defaultValue="">
          <option value="" />
          <option value="cachorro">Cachorro</option>
          <option value="adulto">Adulto</option>
          <option value="senior">Senior</option>
        </select>
        <label htmlFor="age"
          className="
              absolute 
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-[:has(option:checked[value='']):not(:focus)]:scale-100
              peer-[:has(option:checked[value='']):not(:focus)]:translate-y-0
            ">Edad</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.age?.message}</p>
      </div>

      {/* Imagen */}
      <div className="relative z-0 col-span-4 group bg-inherit">
        <input id="image"
          {...register("image")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.image && 'border-b-[#560606] dark:border-b-[#ff9794]'}
            `}
          // placeholder="https://..."
          placeholder=" " />
        <label htmlFor="image"
          className="
              absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">URL de imagen</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.image?.message}</p>
      </div>

      {/* Sexo */}
      <div className="relative z-0 col-span-2 group bg-inherit">
        <select id="sexo"
          {...register("sexo")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.sexo && 'border-b-[#560606] dark:border-b-[#ff9794]'}
            `}
          defaultValue="">
          <option value="" />
          <option value="female">Hembra</option>
          <option value="male">Macho</option>
        </select>
        <label htmlFor="sexo"
          className="
              absolute 
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-[:has(option:checked[value='']):not(:focus)]:scale-100
              peer-[:has(option:checked[value='']):not(:focus)]:translate-y-0
            ">Sexo</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.sexo?.message}</p>
      </div>

      {/* Especie */}
      <div className="relative z-0 col-span-3 group bg-inherit">
        <select id="animalType"
          {...register("animalType")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.animalType && 'border-b-[#560606] dark:border-b-[#ff9794]'}
            `}
          defaultValue="">
          <option value="" />
          <option value="dog">Perro</option>
          <option value="cat">Gato</option>
          <option value="other">Otro</option>
        </select>
        <label htmlFor="animalType"
          className="
              absolute 
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-[:has(option:checked[value='']):not(:focus)]:scale-100
              peer-[:has(option:checked[value='']):not(:focus)]:translate-y-0
            ">Especie</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.animalType?.message}</p>
      </div>

      {/* Raza */}
      <div className="relative z-0 col-span-3 group bg-inherit">
        <input id="breed"
          {...register("breed")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.breed && 'border-b-[#560606] dark:border-b-[#ff9794]'}
            `}
          placeholder=" " />
        <label htmlFor="breed"
          className="
              absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">Raza</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.breed?.message}</p>
      </div>

      {/* Descripción */}
      <div className="relative z-0 col-span-6 group bg-inherit">
        <textarea
          id="description"
          {...register("description")}
          rows={1}
          placeholder=" "
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.description && 'border-b-[#560606] dark:border-b-[#ff9794]'}
              max-h-40 resize-none
            `}
          onInput={(e) => {
            e.currentTarget.style.height = "auto"; // resetea la altura
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; // ajusta a contenido
            e.currentTarget.style.overflowY =
              (e.currentTarget.scrollHeight > 160)
                ? 'auto'
                : 'hidden'
          }}
        />

        <label
          htmlFor="description"
          className="
              absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">
          Descripción
        </label>

        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.description?.message}</p>
      </div>

      {/* Estado médico */}
      <div className="relative z-0 col-span-6 group bg-inherit">
        <input id="medicalStatus"
          {...register("medicalStatus")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.medicalStatus && 'border-b-[#560606] dark:border-b-[#ff9794]'}
            `}
          placeholder=" " />
        <label htmlFor="medicalStatus"
          className="
              absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">Estado médico</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.medicalStatus?.message}</p>
      </div>

      {/* Rasgos de comportamiento */}
      <div className="relative z-0 col-span-6 group bg-inherit">
        <input id="behaviorTraits"
          {...register("behaviorTraits")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.behaviorTraits && 'border-b-[#560606] dark:border-b-[#ff9794]'}
            `}
          placeholder=" " />
        <label htmlFor="behaviorTraits"
          className="
              absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">Comportamiento</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.behaviorTraits?.message}</p>
      </div>

      {/* Gustos */}
      <div className="relative z-0 col-span-6 group bg-inherit">
        <input id="preferences"
          {...register("preferences")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.preferences && 'border-b-[#560606] dark:border-b-[#ff9794]'}
            `}
          placeholder=" " />
        <label htmlFor="preferences"
          className="
              absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">Gustos</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.preferences?.message}</p>
      </div>

      {/* Categoría */}
      <div className="relative z-0 col-span-6 group bg-inherit">
        <select id="category"
          {...register("category")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              ${errors.category && 'border-b-[#560606] dark:border-b-[#ff9794]'}
            `}
          defaultValue="">
          <option value="" />
          <option value="adoption">Adopción</option>
          <option value="match">Match</option>
        </select>
        <label htmlFor="category"
          className="
              absolute 
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-[:has(option:checked[value='']):not(:focus)]:scale-100
              peer-[:has(option:checked[value='']):not(:focus)]:translate-y-0
            ">Categoría</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.category?.message}</p>
      </div>

      {<button
        type="submit"
        className="
          col-span-6 px-2 py-1 
         dark:bg-[#663851] dark:hover:brightness-110
         bg-slate-900 text-white p-2 rounded hover:brightness-120 border-slate-950 focus:border-b-0 
         focus:border-t-4 focus:border-transparent
         focus:brightness-95 border-b-4 dark:border-[#402132] focus:translate-y-1
      ">
        {formType === 'edit' && 'Actualizar Mascota'}
        {formType === 'add' && 'Crear Mascota'}
        {formType === 'send' && 'Enviar'}
      </button>}
    </form>)
}

export default PetForm