import LinkNav from "../atoms/LinkNav"

const Navbar = () => {
  return (
    <div className="
      flex items-center gap-10 z-10
      indie-flower-regular text-xl text-slate-200
    ">
      
      <LinkNav route={'/inicio'} name={'Inicio'}/>
      <LinkNav route={'/matchcotas'} name={'Matchcotas'}/>
      <LinkNav route={'/adopciones'} name={'Adopciones'}/>

    </div>
  )
}

export default Navbar