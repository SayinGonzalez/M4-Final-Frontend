import { Link } from 'react-router'

const LinkNav = ({route, name}) => {
  return (
    <Link to={route} className="hover:text-slate-50 hover:scale-110 transition duration-200">
      {name}
    </Link>
  )
}

export default LinkNav