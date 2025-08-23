//  Botón para alternar el tema claro/oscuro

import { useThemeContext } from "../../hooks/useContexts";

const ThemeButton = ({className}) => {

  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className={`
        font-bold
        hover:shadow-sm transform hover:scale-105 duration-300 
        bg-[#263846]  hover:brightness-140 shadow-[#354e62] text-white 
        dark:bg-[#e0c01f] dark:hover:bg-[#E6C520] dark:hover:shadow-[#B4CF66] dark:text-black
        ${className}
      `}
    >
      {
        theme === 'dark'
          ? <i className="bi bi-sun"></i>
          : <i className="bi bi-moon-stars"></i>
      }
    </button>
  )
}

export default ThemeButton