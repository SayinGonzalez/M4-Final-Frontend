
const DeleteButton = ({onDelete, className}) => {

  return (
    <i
      onClick={onDelete}
      className={`
        iconify solar--trash-bin-trash-broken 
        cursor-pointer 
        ${className}  
      `}
    />
  )
}

export default DeleteButton