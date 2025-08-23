
const DeleteButton = ({onDelete, className}) => {
  return (
    <i
      onClick={onDelete}
      className={`
        bi bi-trash3 
        cursor-pointer
        ${className}  
      `}
    />
  )
}

export default DeleteButton