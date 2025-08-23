// 🧽 Rutas

import { Routes, Route, Navigate } from 'react-router'
import Home from '../components/pages/Home'
import MainLayout from '../components/layouts/MainLayout'
import Matchcotas from '../components/pages/pets/Matchcotas'
import PetCreate from '../components/pages/pets/PetCreate'
import PetEdit from '../components/pages/pets/PetEdit'
import PetDetail from '../components/pages/pets/PetDetail'
import Adoptions from '../components/pages/pets/Adoptions'
import PetsProfiles from '../components/pages/pets/PetsProfiles'
import ProfilesLayout from '../components/layouts/ProfilesLayout'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Navigate to={'/inicio'} />} />   // Redirige a Home
        <Route path='/inicio' element={<Home />} />
        <Route path='/adopciones' element={<Adoptions />} />
        <Route path='/matchcotas' element={<Matchcotas />} />
        <Route path='/mascotas/crear' element={<PetCreate />} />
        <Route path='/mascotas/:id/editar' element={<PetEdit />} />
      </Route>

      <Route element={<ProfilesLayout />}>
        <Route path='/mascotas/perfiles' element={<PetsProfiles />} />
        <Route path='/mascotas/:id/perfil' element={<PetDetail />} />
      </Route>
      
      {/* <Route path='*' element={<NotFound />} /> */}

    </Routes>
  )
}

export default AppRouter