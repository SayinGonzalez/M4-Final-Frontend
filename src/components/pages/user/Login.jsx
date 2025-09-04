import { useNavigate } from 'react-router';
import { useAuthContext } from '../../../hooks/useContexts'
import AuthForm from '../../organisms/AuthForm'
import { toast } from "react-toastify";

const Login = () => {

  const { login } = useAuthContext();
  const { navigate } = useNavigate();

  const handleSubmit = async (data) => {
    const success = await login(data.identifier, data.password)
    if (success) {
      navigate('/inicio')
    } else {
      toast.error('Credenciales incorrectas');
    }
  }

  return (
    <div className='m-auto'>
      <AuthForm
        onSubmit={handleSubmit}
        formType='login' />
    </div>
  )
}

export default Login