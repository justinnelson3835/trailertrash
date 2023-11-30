import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm.jsx';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post('/api/auth', formData);

    if (res.data.success) {
      navigate('/movies');
    }
  };

  return (
    <>
      <div className="login-background">


        <div className="d-flex align-self-center justify-content-center">
        
        <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </>
  );
}
