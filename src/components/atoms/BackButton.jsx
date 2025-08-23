import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}
      className="text-3xl text-slate-100 dark:text-slate-300 hover:cursor-pointer">
      <i className="bi bi-arrow-left-circle"></i>
    </button>
  )
}

export default BackButton