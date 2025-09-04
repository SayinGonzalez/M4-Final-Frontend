import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import LogoutButton from "../atoms/LogoutButton";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Cerrar con Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Cerrar al hacer click fuera
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative z-20" ref={menuRef}>
      {/* Botón hamburguesa */}
      <button onClick={toggleMenu} className="p-2 text-3xl relative z-50">
        {isOpen ? (
          <span className="iconify solar--close-square-bold-duotone text-slate-400 hover:text-slate-50" />
        ) : (
          <span className="iconify solar--hamburger-menu-bold-duotone text-slate-400 hover:text-slate-50" />
        )}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div onClick={handleClose}
           className="fixed inset-0 bg-black/70 z-40">
          <div className="absolute left-50 top-18 w-60 bg-[#765265] dark:bg-[#263846] shadow shadow-black dark:shadow-slate-500 rounded-b-xl py-3 z-50 merienda-400">
            <h3 className="px-4 pb-2 text-gray-100 font-semibold text-xl">
              Perfiles
              <hr className="text-slate-400" />
            </h3>
            <ul className="flex flex-col gap-2 px-4 pt-3">
              <li className="flex gap-4 text-slate-300 hover:text-slate-50 transition-colors">
                <i className="iconify solar--emoji-funny-circle-broken text-xl"/>
                <Link
                  to="/usuario/:id/perfil"
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  Usuario
                </Link>
              </li>
              <li className="flex gap-4 text-slate-300 hover:text-slate-50 transition-colors">
                <i className="iconify solar--cat-broken text-xl"/>
                <Link
                  to="/mascotas/perfiles"
                  className="block text-slate-300 hover:text-slate-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Mascotas
                </Link>
              </li>
              <hr className="text-slate-400 my-2" />
              <li className="flex gap-4 text-slate-300 hover:text-slate-50 transition-colors cursor-pointer">
                <LogoutButton />
                <span>Salir</span>
              </li>
            </ul>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
