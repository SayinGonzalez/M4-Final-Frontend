
const EditButton = ({ route, className }) => {

  return (
    <i
      onClick={route}
      className={`
        bi bi-pencil-square
        cursor-pointer
        ${className}
      `}
    />
  )
}

export default EditButton