import { useNavigate } from "react-router"


const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //  Borrar token / info de usuario (simulado)
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");

    //  Redirigir al inicio
    navigate("/inicio");
  };

  return (
    <button
      onClick={handleLogout}
                className="dark:text-slate-950 text-lg text-[#910f54]">
            <i className="iconify solar--logout-3-line-duotone" />
        </button>
    )
}

export default LogoutButton