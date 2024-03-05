import { useState } from 'react';
import { auth } from '../Firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import "./ForgotPassword/ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Email de redefinição de senha enviado!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='container'>
      <form className="formulario" onSubmit={handleSubmit}>
      <h2>Esqueceu a Senha?</h2>
        <div>
          <input id="email" type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="btn-reset">Enviar</button>
      </form>
    </div>
  );
}

//<p> Digite seu e-mail no campo abaixo e vamos te enviar um link para redefinir sua senha!</p> 

export default ForgotPassword;
