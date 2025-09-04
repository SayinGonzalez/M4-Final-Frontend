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
import NotFound from '../components/pages/NotFound'
import UserDetail from '../components/pages/user/UserDetail'
import UserForm from '../components/organisms/UserForm'
import AuthForm from '../components/organisms/AuthForm'
import Login from '../components/pages/user/Login'

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

        <Route path='/register' element={<AuthForm formType='register' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/usuario/personales' element={<UserForm formType='personales' />} /> {/* Pasar ID */}
        <Route path='/usuario/cuenta' element={<UserForm formType='cuenta' />} /> {/* Pasar ID */}
      </Route>

      <Route element={<ProfilesLayout />}>
        <Route path='/mascotas/perfiles' element={<PetsProfiles />} />
        <Route path='/mascotas/:id/perfil' element={<PetDetail />} />
        <Route path='/usuario/:id/perfil' element={<UserDetail />} />
      </Route>

      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default AppRouter