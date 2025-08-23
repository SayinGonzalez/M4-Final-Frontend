
//  Mensaje de lista vacía
const EmptyMsg = ({message}) => {
  return (
    <div className="text-zinc-800 dark:text-zinc-300 my-auto">
      <div className="w-fit h-fit mx-auto my-4">
        <i className="bi bi-emoji-tear text-4xl"></i>
      </div>
      <p className="text-center text-2xl merienda-400">{message}</p>
    </div>
  )
}

export default EmptyMsg