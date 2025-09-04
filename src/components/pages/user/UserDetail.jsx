import { useState, useEffect } from "react";
import UserSidebar from "../../organisms/UserSidebar";
import { Navigate, useNavigate } from "react-router";
import EditButton from "../../atoms/EditButton";
import { useUserContext } from "../../../hooks/useContexts";

const UserDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("personal");
  // const { user } = useUserContext();

  const navigate = useNavigate();

  // cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // cambiar sección directamente desde sidebar
  const handleSectionChange = (id) => {
    setActiveSection(id);
  };

  return (
    <section className="flex-1 flex">
      <UserSidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <div className="absolute w-full top-6.5">
        <div className=" 
            relative mx-auto w-36 h-10 place-content-center bg-black/30 
            ">
          {/* arrow left */}
          <div className=" 
                absolute -left-5 top-0 w-0 h-0 border-y-[20px] border-r-[16px] border-y-transparent border-black/30 
              "/>
          {/* Category */}
          <p className=" 
              text-2xl text-center indie-flower-regular text-fuchsia-300 brightness-125 dark:text-slate-300
              "> Usuario
          </p>
          {/* arrow right */}
          <div className=" 
              absolute -right-5 top-0 w-0 h-0 border-y-[20px] border-l-[16px] border-y-transparent border-l-black/30 
              "/>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-8">
        {/* Botón Modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-8 rounded-full size-28
                     hover:shadow-sm transform hover:scale-105 duration-300
                     flex items-center justify-center
                     hover:shadow-slate-950 dark:hover:shadow-[#3d2a35]
         ">
          <img
            src="https://content-historia.nationalgeographic.com.es/medio/2022/07/31/foto-del-dia_9b84feba_550x375.jpg"
            alt="Imagen de perfil"
            className="w-full h-full rounded-full object-cover"
          />
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl max-h-[80vh] animate-in fade-in zoom-in duration-300"
            >
              <img
                src="https://content-historia.nationalgeographic.com.es/medio/2022/07/31/foto-del-dia_9b84feba_550x375.jpg"
                alt="Imagen ampliada"
                className="rounded-2xl shadow-2xl object-contain max-h-[80vh]"
              />
            </div>
          </div>
        )}

        {/* Bloques de detalle */}
        <div className="w-10/12 md:w-6/12 rounded-xl
                        transform transition hover:scale-101 
                        bg-black/50 dark:bg-[#304148]
                        text-shadow-slate-800 text-shadow-lg 
                        flex flex-col gap-12 p-6">

          {/* Primer bloque */}
          <div id="personal"
            className={`
                ${activeSection !== "personal" && "hidden"}
                relative flex flex-col gap-2 py-9 px-20 text-indigo-400 brightness-110 dark:text-slate-400
              `}>
           <div
              className="p-1 text-xl absolute top-0 left-2 cursor-pointer hover:text-slate-50 text-slate-300">
              <EditButton
                // route={() => navigate(`/usuario/${user._id}/editar`)}
                route={() => navigate(`/usuario/personales`)}
                className={`text-lg col-span-1`}
              />
            </div>
            <h2 className="courgette-regular mb-2 text-3xl text-center ">
              Información personal
            </h2>
            <p className=" text-lg merienda-400">
              Nombre Y Apellido:
              <span className="text-sky-50 text-2xl indie-flower-regular"> Naruto Uzumaki</span>
            </p>
            <p className=" text-lg merienda-400">
              Dirección:
              <span className="text-slate-50 text-2xl indie-flower-regular"> Córdoba, Capital...</span>
            </p>
            <p className=" text-lg merienda-400">
              Teléfono:
              <span className="text-slate-50 text-2xl indie-flower-regular"> 351 7413653</span>
            </p>
            <div className="absolute top-0 -right-6 w-1/4 h-10 pt-1.5 rounded-l-md text-center text-sky-100 bg-black/35">
              <p>Personal</p>
            </div>
          </div>

          {/* Segundo bloque */}
          <div id="cuentas"
            className={`
                  ${activeSection !== "cuentas" && "hidden"}
              relative flex flex-col gap-2 py-9 px-20
                          text-indigo-400 brightness-110 dark:text-slate-400
              `}>
            <div
              className="p-1 text-xl absolute top-0 left-2 cursor-pointer hover:text-slate-50 text-slate-300">
              <EditButton
                // route={() => navigate(`/usuario/${user._id}/editar`)}
                route={() => navigate(`/usuario/cuenta`)}
                className={`text-lg col-span-1`}
              />
            </div>
            <h2 className="courgette-regular mb-3 text-3xl text-center ">
              Datos de la cuenta
            </h2>
            <p className=" text-lg merienda-400">
              Usuario:
              <span className="text-sky-50 text-2xl indie-flower-regular"> Naruto Uzumaki</span>
            </p>
            <p className=" text-lg merienda-400">
              Correo:
              <span className="text-slate-50 text-2xl indie-flower-regular"> milan.balcarse@gmail.com</span>
            </p>
            <p className=" text-lg merienda-400">
              Contraseña:
              <span className="text-slate-50 text-2xl indie-flower-regular"> *******</span>
            </p>
            <div className="absolute top-0 -right-6 w-1/4 h-10 rounded-l-md text-center pt-1.5 text-sky-100 bg-black/35">
              Cuenta
            </div>
          </div>

          {/* Tercer bloque */}
          <div id="preferencias"
            className={`
                  ${activeSection !== "preferencias" && "hidden"}
                                  relative flex flex-col gap-2 py-9 px-20 text-indigo-400 brightness-110 dark:text-slate-400
                                  `}>
            <div className="p-1 text-xl left-2 cursor-pointer hover:text-slate-50 text-slate-300"><i className="absolute top-0 bi bi-pencil-square" /></div>
            <h2 className="courgette-regular mb-3 text-3xl text-center ">
              Preferencias
            </h2>
            <p className=" text-lg merienda-400">
              Intereses:
              <span className="text-sky-50 text-2xl indie-flower-regular"> Caca </span>
            </p>
            <p className=" text-lg merienda-400">
              Comentarios:
              <span className="text-sky-50 text-2xl indie-flower-regular"> milan.balcarse@gmail.com</span>
            </p>
            <div className="absolute top-0 -right-6 w-1/4 h-10 pt-1.5 rounded-l-md text-center text-sky-100 bg-black/35">
              <p>Preferencias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
