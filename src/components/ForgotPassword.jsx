import { useState } from 'react';
import { auth } from '../Firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';

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
    <div>
      <h2>Esqueceu a Senha</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
