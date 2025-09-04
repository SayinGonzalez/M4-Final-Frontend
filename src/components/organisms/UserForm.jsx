import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "../../validations/userSchema";

const UserForm = ({ onSubmit, defaultValues = {}, formType = "personales" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        grid grid-cols-1
        sm:w-3/4 lg:w-[50%]
        h-3/4 mx-auto my-8 py-8 px-10 rounded-3xl merienda-400 text-lg
        bg-[#93627c] dark:bg-[#334451]
        shadow-lg shadow-slate-800
      ">
      {formType === 'personales' &&
        (
        <div className="flex flex-col gap-7 m-8">
          {/* Nombre */}
          <div className="relative z-0 col-span-3 group bg-inherit">
            <input
              id="firstName"
              {...register("firstName")}
              className={`flex flex-col py-2.5 w-full appearance-none peer text-sm text-gray-50 bg-inherit
            border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0
            focus:border-slate-900 dark:focus:border-[#93627c]
            ${errors.username && "border-b-[#560606] dark:border-b-[#ff9794]"}`}
              placeholder=" "
            />
            <label
              htmlFor="firstName"
              className="absolute text-sm text-gray-100 dark:text-gray-300 duration-300 transform -translate-y-6 scale-[85%]
            top-3 origin-[0] peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
            peer-focus:scale-[85%] peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
            >
              Nombre
            </label>
            <p className="text-[#560606] dark:text-[#ff9794] text-sm">
              {errors.firstName?.message}
            </p>
          </div>

          {/* Apellido */}
          <div className="relative z-0 col-span-3 group bg-inherit">
            <input
              id="lastName"
              {...register("lastName")}
              className={`block py-2.5 w-full appearance-none peer text-sm text-gray-50 bg-inherit
            border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0
            focus:border-slate-900 dark:focus:border-[#93627c]
            ${errors.lastName && "border-b-[#560606] dark:border-b-[#ff9794]"}`}
              placeholder=" "
            />
            <label
              htmlFor="lastName"
              className="absolute text-sm text-gray-100 dark:text-gray-300 duration-300 transform -translate-y-6 scale-[85%]
            top-3 origin-[0] peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
            peer-focus:scale-[85%] peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
            >
              Apellido
            </label>
            <p className="text-[#560606] dark:text-[#ff9794] text-sm">
              {errors.lastName?.message}
            </p>
          </div>

          {/* Dirección */}
          {/* zipCode */}
          <div className="relative z-0 col-span-3 group bg-inherit">
            <input
              id="address.zipCode"
              {...register("address.zipCode")}
              placeholder=" "
              className={`block py-2.5 w-full appearance-none peer text-sm text-gray-950 bg-inherit
            border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0
            focus:border-slate-900 dark:focus:border-[#93627c]`}
            />
            <label htmlFor="address.zipCode" className="absolute text-sm text-gray-100 dark:text-gray-300 duration-300 transform -translate-y-6 scale-[85%]
            top-3 origin-[0] peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
            peer-focus:scale-[85%] peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Código Postal</label>
          </div>
          {/* localidad */}
          <div className="relative z-0 col-span-3 group bg-inherit">
            <input
              id="address.localidad"
              {...register("address.localidad")}
              placeholder=" "
              className={`block py-2.5 w-full appearance-none peer text-sm text-gray-950 bg-inherit
            border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0
            focus:border-slate-900 dark:focus:border-[#93627c]`}
            />
            <label htmlFor="address.localidad" className="absolute text-sm text-gray-100 dark:text-gray-300 duration-300 transform -translate-y-6 scale-[85%]
            top-3 origin-[0] peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
            peer-focus:scale-[85%] peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            ">Localidad
            </label>
          </div>
        </div>)
      }

      {formType === 'cuenta' &&
        (<div className="flex flex-col gap-7 m-8">
            {/* Usuario */}
          <div className="relative z-0 group bg-inherit">
            <input
              id="username"
              {...register("username")}
              className={`flex flex-col py-2.5 w-full appearance-none peer text-sm text-gray-50 bg-inherit
            border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0
            focus:border-slate-900 dark:focus:border-[#93627c]
            ${errors.username && "border-b-[#560606] dark:border-b-[#ff9794]"}`}
              placeholder=" "
            />
            <label htmlFor="username" className="absolute text-sm text-gray-100 dark:text-gray-300 duration-300 transform -translate-y-6 scale-[85%]
            top-3 origin-[0] peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
            peer-focus:scale-[85%] peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              Usuario
            </label>
            <p className="text-[#560606] dark:text-[#ff9794] text-sm">
              {errors.username?.message}
            </p>
          </div>
          {/* Email */}
          <div className="relative z-0 col-span-3 group bg-inherit">
            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder=" "
              className={`block py-2.5 w-full appearance-none peer text-sm text-gray-950 bg-inherit
            border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0
            focus:border-slate-900 dark:focus:border-[#93627c]
            ${errors.email && "border-b-[#560606] dark:border-b-[#ff9794]"}`}
            />
            <label htmlFor="email" className="absolute text-sm text-gray-100 dark:text-gray-300 duration-300 transform -translate-y-6 scale-[85%]
            top-3 origin-[0] peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
            peer-focus:scale-[85%] peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              Email
            </label>
            <p className="text-[#560606] dark:text-[#ff9794] text-sm">
              {errors.email?.message}
            </p>
          </div>

          {/* Password */}
          <div className="relative z-0 col-span-3 group bg-inherit">
            <input
              id="password"
              {...register("password")}
              type="password"
              placeholder=" "
              className={`block py-2.5 w-full appearance-none peer text-sm text-gray-50 bg-inherit
            border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0
            focus:border-slate-900 dark:focus:border-[#93627c]
            ${errors.password && "border-b-[#560606] dark:border-b-[#ff9794]"}`}
            />
            <label htmlFor="password" className="absolute text-sm text-gray-100 dark:text-gray-300 duration-300 transform -translate-y-6 scale-[85%]
            top-3 origin-[0] peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
            peer-focus:scale-[85%] peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              Contraseña
            </label>
            <p className="text-[#560606] dark:text-[#ff9794] text-sm">
              {errors.password?.message}
            </p>
          </div>

          {/* Confirm Password */}
          <div className="relative z-0 col-span-3 group bg-inherit">
            <input
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
              placeholder=" "
              className={`block py-2.5 w-full appearance-none peer text-sm text-gray-50 bg-inherit
            border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0
            focus:border-slate-900 dark:focus:border-[#93627c]
            ${errors.confirmPassword && "border-b-[#560606] dark:border-b-[#ff9794]"}`}
            />
            <label htmlFor="confirmPassword" className="absolute text-sm text-gray-100 dark:text-gray-300 duration-300 transform -translate-y-6 scale-[85%]
            top-3 origin-[0] peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
            peer-focus:scale-[85%] peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              Confirmar contraseña
            </label>
            <p className="text-[#560606] dark:text-[#ff9794] text-sm">
              {errors.confirmPassword?.message}
            </p>
          </div>
        </div>)
      }

      <button
        type="submit"
        className="px-3 py-2 h-fit m-3
         dark:bg-[#663851] mt-4 dark:hover:brightness-110
         bg-slate-900 text-white rounded-xl hover:brightness-120 border-slate-950 focus:border-b-0
         focus:border-t-4 focus:border-transparent
         focus:brightness-95 border-b-4 dark:border-[#402132] focus:translate-y-1"
      > Actualizar datos
      </button>
    </form>
  );
};

export default UserForm;
