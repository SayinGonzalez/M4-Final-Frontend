
const EditButton = ({ route, className }) => {

  return (
    <i
      onClick={route}
      className={`
        iconify solar--pen-new-square-broken
        cursor-pointer
        ${className}
      `}
    />
  )
}

export default EditButton