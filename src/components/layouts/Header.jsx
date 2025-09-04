import { useFavsContext } from "../../hooks/useContexts";
import ThemeButton from "../atoms/ThemeButton"
import Navbar from "../molecules/Navbar"
import BurgerMenu from "../organisms/burguerMenu";
import pets from '/assets/Pets.png';
import { useNavigate } from "react-router";


const Header = () => {

  const { setIsSidebarOpen } = useFavsContext();
  const navigate = useNavigate();


  const handleOpenSidebar = () => setIsSidebarOpen(true)

  return (
    <header className="
      h-[72px] text-white p-4 flex
      sticky top-0 z-10 justify-around
    ">
      {/* icono de perfiles */}
      <BurgerMenu/>
      {/* <button
        onClick={ () => navigate('/mascotas/perfiles')}
        className="
          flex z-10 size-12
          p-2 rounded-full
          hover:shadow-sm transform hover:scale-105 duration-300 items-center justify-center
          bg-[#263846] hover:bg-[#2e4555] hover:shadow-slate-950
          dark:bg-[#765265] dark:hover:bg-[#9a6a84] dark:hover:shadow-[#3d2a35]
          text-slate-300 dark:text-white">
        <img src={pets} alt="Icono" className="w-6 h-6" />
      </button> */}

      {/* bg header */}
      <div className="
        absolute inset-0 z-0
        shadow shadow-black dark:shadow-slate-500
        bg-[#765265] dark:bg-[#263846]
      "/>

      {/*  Btn para cambiar el tema Claro/Oscuro */}
      <ThemeButton className="
        absolute -z-10 left-2 top-13
        rounded-b-3xl py-2 px-4
        transition duration-500
        hover:translate-y-5
      "/>

      {/* Barra de Navegación */}
      <Navbar />

      {/*  Btn para abrir el sidebar de "Favoritos"  */}
      <button
        onClick={handleOpenSidebar}
        className="
          relative
          flex gap-2.5
          py-2 px-4 rounded-md
          hover:shadow-sm transform hover:scale-105 duration-300 
          bg-[#263846] hover:bg-[#2e4555] hover:shadow-slate-950
          dark:bg-[#765265] dark:hover:bg-[#9a6a84] dark:hover:shadow-[#3d2a35]
          text-slate-300 dark:text-white
        "
      >
        Pet <i className="bi bi-suit-heart-fill md:text-lg font-medium flex gap-2 items-center justify-center" /> Loves
      </button>
      
    </header>
  )
}

export default Header
