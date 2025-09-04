import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const SearchSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      animalType: "",
      category: "",
      breed: "",
      age: "",
    },
  });

  const onSubmit = (data) => {
    // redirección con query params
    const query = new URLSearchParams(data).toString();
    navigate(`/search?${query}`);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="fixed left-0 z-10 border-2xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute top-4 z-50 px-3 py-1 transition-all duration-300 bg-[#693b59] 
          dark:bg-[#304148] text-pink-300 dark:text-teal-400 text-3xl 
          ${!isOpen &&
            "shadow-[0_-4px_5px_rgba(0,0,0,0.3),-4px_0_5px_rgba(0,0,0,0.3),4px_0_5px_rgba(0,0,0,0.3)]"}
          `}
        >
          {isOpen ? (
            <i className="iconify solar--close-square-bold-duotone" />
          ) : (
            <i className="icon-[healthicons--magnifying-glass]" />
          )}
        </button>

        <div
          className={`bg-[#693b59] dark:bg-[#304148] shadow-lg shadow-slate-800 z-10 transform transition-transform duration-300 pl-2 text-slate-200 merienda-400 rounded-r-2xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 flex flex-col gap-4 text-slate-100 bg-inherit rounded-r-2xl"
          >
            <h2 className="text-lg text-right font-bold border-b pb-3 merienda-400">
              Búsqueda
            </h2>

            {/* Tipo de Animal */}
            <div className="relative z-0 col-span-2 group bg-inherit mt-2">
        <select 
          {...register("animalType")}
          className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
             '}
            `}
          defaultValue="">
          <option value="" />
          <option value="dog">Perro</option>
          <option value="cat">Gato</option>
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
            ">Tipo de animal</label>
        <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.sexo?.message}</p>
      </div>

            {/* Sex */}
            <div className="relative z-0 col-span-2 group bg-inherit">
              <select
                {...register("sexo")}
                className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
              '}
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
            </div>

            {/* Raza */}
            <div className="relative z-0 col-span-4 group bg-inherit">
              <input
                type="text"
                {...register("breed")}
                className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50
              bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
             '}
            `}
          
          placeholder=" " />

              <label className=" absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0">
                Raza</label>
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
              '}
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
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchSidebar;
