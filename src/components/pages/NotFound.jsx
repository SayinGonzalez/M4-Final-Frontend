import HomeButton from "../atoms/HomeButton"

const NotFound = () => {
    return (
        <div className="
        text-zinc-950 text-center 
        indie-flower-regular 
        dark:text-zinc-300 my-auto">

            <div className="w-fit h-fit mx-auto my-4">
                <i className="bi bi-emoji-tear text-4xl"></i>
            </div>

            <h2 className="text-4xl">NotFound</h2>
            <p className="my-2 text-xl">Ups!! Pagina no encontrada</p>
            <HomeButton
                className="
                    relative top-20 text-5xl 
                    text-pink-500 dark:text-teal-300 
                    hover:brightness-95 dark:hover:brightness-110 hover:scale-120
                "
            />
            
        </div>
    )
}

export default NotFound