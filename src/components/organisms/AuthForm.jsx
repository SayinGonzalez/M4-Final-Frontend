import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "../../validations/userSchema";
import { Link } from "react-router";

const AuthForm = ({ onSubmit, formType = "register" }) => {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "onSubmit",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#693b59]
               dark:bg-[#334451] 
               text-pink-300 h-fit
               dark:text-teal-400 text-3xl m-auto
               rounded-2xl shadow-lg shadow-slate-800 space-y-6
               ">
      {formType === "login" && (
        <div className="flex flex-col w-xl h-fit p-12 gap-8">
          <div className="
              relative z-0 bg-inherit merienda-400 
              ">
            <input {...register("identifier")} className={`
              block py-2.5 w-full appearance-none peer
              text-sm bg-inherit
              border-0 border-b-2 border-gray-300 text-gray-50
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
            `}
              placeholder=" " />
            <label className="
              absolute text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">Usuario o email
            </label>
            <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.username?.message}</p>
          </div>
          <div className="relative z-0 bg-inherit merienda-400">
            <input {...register("password")} type="password" className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50 bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
            `}
              placeholder=" " />
            <label className="absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              ">Contraseña
            </label>
            <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.password?.message}</p>
          </div>
          <button type="submit"
            className="  
                  px-3 py-2 float-right text-xl merienda-400 mt-3
                  dark:bg-[#663851] dark:hover:brightness-110
                  bg-slate-900 text-white rounded-2xl hover:brightness-120 border-slate-950 focus:border-b-0 
                  focus:border-t-4 focus:border-transparent
                  focus:brightness-95 border-b-4 dark:border-[#402132] focus:translate-y-1">
            Ingresar
          </button>
          <div className=" text-sm merienda-400 flex gap-3">
            <p className="text-slate-400"> No tienes cuenta?</p>
              <Link to="/usuario/register" className="text-slate-300 hover:text-slate-50 cursor-pointer">Registrarse</Link>
          </div>
        </div>
      )}

      {formType === "register" && (
        <div className="grid grid-rows-[1rem, auto]">
          {step === 0 && (
            <div className="flex flex-col w-md h-[400px] px-12 py-8 gap-8 ">
              <div className="relative z-0 bg-inherit merienda-400 mt-8">
                <input {...register("firstName")} className={`
              block py-2.5 w-full appearance-none peer
              text-sm bg-inherit
              border-0 border-b-2 border-gray-300 text-gray-50
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
            `}
                  placeholder=" " />
                <label className="
              absolute text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">Nombre
                </label>
                <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.firstName?.message}</p>
              </div>
              <div className="relative z-0 bg-inherit merienda-400">
                <input {...register("lastName")} className={`
              block py-2.5 w-full appearance-none peer
              text-sm bg-inherit
              border-0 border-b-2 border-gray-300 text-gray-50
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
            `}
                  placeholder=" " />
                <label className="
              absolute text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">Apellido
                </label>
                <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.lastName?.message}</p>
              </div>
              <div className=" relative z-0 bg-inherit merienda-400 ">
                <input {...register("localidad")} type="localidad" className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50 bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
            `}
                  placeholder=" " />
                <label className="absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              ">Localidad</label>
                <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.localidad?.message}</p>
              </div>
              <div className="relative z-0 bg-inherit merienda-400">
                <input {...register("zipCode")} type="Codigo Postal" className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50 bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
            `}
                  placeholder=" " />
                <label className="absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              ">Codigo Postal</label>
                <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.zipCode?.message}</p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="
                  grid grid-cols-6 gap-x-4 gap-y-4
                  w-3xl h-[250px] mx-auto my-8 py-8 px-10 rounded-3xl merienda-400 text-2xl
                  bg-[#93627c] dark:bg-[#334451]
                  shadow-lg shadow-gray-700">
              <div className="
              relative z-0 bg-inherit merienda-400 col-span-3
              ">
                <input {...register("username")} className={`
              block py-2.5 w-full appearance-none peer
              text-sm bg-inherit
              border-0 border-b-2 border-gray-300 text-gray-50
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
            `}
                  placeholder=" " />
                <label className="absolute text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            ">Usuario</label>
                <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.username?.message}</p>
              </div>
              <div className="relative z-0 bg-inherit merienda-400 col-span-3">
                <input {...register("email")} type="email" className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50 bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
            `}
                  placeholder=" " />
                <label className="absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              ">Email</label>
                <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.email?.message}</p>
              </div>
              <div className="relative z-0 bg-inherit merienda-400 col-span-3">
                <input {...register("password")} type="password" className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50 bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
            `}
                  placeholder=" " />
                <label className="absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              ">Contraseña</label>
                <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.password?.message}</p>
              </div>
              <div className="relative z-0 bg-inherit merienda-400 col-span-3">
                <input {...register("confirmPassword")} type="password" className={`
              block py-2.5 w-full appearance-none peer
              text-sm text-gray-50 bg-inherit
              border-0 border-b-2 border-gray-300
              focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-[#93627c]
            `}
                  placeholder=" " />
                <label className="absolute
              text-sm text-gray-100 dark:text-gray-300
              duration-300 transform -translate-y-6 scale-[85%]
              top-3 origin-[0]
              peer-focus:font-medium peer-focus:text-slate-900 dark:peer-focus:text-[#93627c]
              peer-focus:scale-[85%] peer-focus:-translate-y-6
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              ">Confirmar contraseña</label>
                <p className="text-[#560606] dark:text-[#ff9794] text-sm">{errors.confirmPassword?.message}</p>
              </div>
            </div>
          )}

          <div className="pb-4 px-12 flex justify-between relative">
            {step > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="
                  text-xl
                  px-3 py-2 merienda-400
                  dark:bg-[#663851] dark:hover:brightness-110
                  bg-slate-900 text-white rounded-2xl 
                  hover:brightness-120 border-slate-950 
                  focus:border-b-0 focus:border-t-4 
                  focus:border-transparent
                  focus:brightness-95 border-b-4 dark:border-[#402132] focus:translate-y-1"
              >
                Atrás
              </button>
            )}
            {step < 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="
               relative left-60 px-3 py-2 
               dark:bg-[#663851] dark:hover:brightness-110
               bg-slate-900 text-white merienda-400 text-xl rounded-2xl   hover:brightness-120 border-slate-950      focus:border-b-0 focus:border-t-4    focus:border-transparent
               focus:brightness-95 border-b-4 dark:border-[#402132] focus:translate-y-1"
              >
                Siguiente
              </button>
            ) : (
              <button
                type="submit"
                className="  
                 px-3 py-2 text-xl
               dark:bg-[#663851] dark:hover:brightness-110
               bg-slate-900 text-white merienda-400 rounded-2xl hover:brightness-120 border-slate-950 focus:border-b-0 focus:border-t-4  focus:border-transparent
               focus:brightness-95 border-b-4 dark:border-[#402132] focus:translate-y-1
                 ">
                Registrarse
              </button>
            )}
          </div>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
