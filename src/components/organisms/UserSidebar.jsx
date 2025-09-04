import { useState } from "react";
import DeleteButton from "../atoms/DeleteButton";

const UserSidebar = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleDelete = async (id) => {
  //   try {
  //     await removePet(id)
  //   } catch (error) {
  //     console.error("Error al actualizar la mascota:", error);
  //   }
  // }

  const sections = [
    { id: "personal", label: "Información personal", icon: "solar--user-circle-broken" },
    { id: "cuentas", label: "Datos de la cuenta", icon: "solar--user-id-broken" },
    { id: "preferencias", label: "Preferencias", icon: "solar--settings-broken" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="fixed top-33 z-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute top-4 z-50 px-3 py-1 rounded-r-lg transition-all duration-300 bg-[#693b59]
          dark:bg-[#304148] text-pink-300 dark:text-teal-400 text-3xl
          ${!isOpen &&
            "shadow-[0_-4px_5px_rgba(0,0,0,0.3),-4px_0_5px_rgba(0,0,0,0.3),4px_0_5px_rgba(0,0,0,0.3)]"}
          `}
        >
          {isOpen ? (
            <i className="iconify solar--double-alt-arrow-left-bold-duotone mt-1"></i>
          ) : (
            <i className="iconify solar--double-alt-arrow-right-bold-duotone mt-1"></i>
          )}
        </button>

        <div
          className={`w-72 h-[400px] bg-[#693b59] dark:bg-[#304148] shadow-xl z-10 transform transition-transform duration-300 pl-2 text-slate-200 merienda-400 rounded-r-2xl
          ${isOpen ? "translate-x-0" : "-translate-x-full left-0"}
          `}
        >
          <div className="p-6 space-y-4">
            <h2 className="text-lg text-right font-bold border-b pb-3">
              Información General
            </h2>

            {sections.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => onSectionChange(id)}
                className={`w-full font-semibold flex items-center py-2 gap-4 cursor-pointer transition-colors
                  ${activeSection === id ? "text-indigo-400 brightness-110 dark:text-sky-300" : "text-slate-300 hover:text-slate-50"}
                `}
              >
                <i className={`iconify ${icon} text-xl`} /> {label}
              </button>
            ))}
          </div>
          <hr className="m-6"/>
           <div className="flex gap-4 ml-5">
             <DeleteButton className="size-5"/>
             <span className="cursor-pointer hover:text-slate-50">Eliminar Usuario</span>
           </div>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
