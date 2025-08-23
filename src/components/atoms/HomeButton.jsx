import { useNavigate } from "react-router";

const HomeButton = ({className}) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate('/inicio')}
            className={`${className || "text-3xl text-slate-100 dark:text-slate-300"} hover:cursor-pointer`}>
            <i className="bi bi-house-heart"></i>
        </button>
    )
}

export default HomeButton