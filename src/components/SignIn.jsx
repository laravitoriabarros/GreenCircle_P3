import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/config';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Adicionado o método signInWithPopup e GoogleAuthProvider
import user from "../assets/Profile.svg";
import imgTmp from "../assets/agricultor.jpg";
import { Link } from 'react-router-dom';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login efetuado com sucesso!");
      navigate('/'); // Redireciona para a página inicial, mude para o endereço do feed
    } catch (error) {
      alert(error.message);
    }
  };

  // Função para login com o Google
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Login com o Google efetuado com sucesso!");
      navigate('/'); // Redireciona para a página inicial, mude para o endereço do feed
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-[#F2F3F5] h-screen w-screen flex justify-center items-center">
      <div className="flex w-full max-w-[1160px] justify-between items-center">
        <div className="max-w-[380px] w-full mr-32">
          <h1 className="text-black text-[48px] font-bold">
            A melhor forma de se
            <span className="text-[#35B276]"> informar.</span> Faça parte do
            <span className="text-[#35B276]"> círculo!</span>
          </h1>
          <p className="text-black text-[20px]">
            Venha conhecer a forma mais rápida de savber tudo o que acontece no
            mundo agro. Cadastre-se agora e comece a fazer negócios com
            especialistas da sua região.
          </p>
        </div>
        <div className="container bg-white w-full max-w-[840px] flex justify-between items-center rounded-[16px]">
          <div className="flex flex-col w-full items-center my-6">
            <img className="mb-4 w-[50px]"
            src={user}
            alt="Imagem de perfil padrão" />
            <h2 className="text-black text-[28px] font-bold mb-4">Login</h2>
            <p className="text-black text-[14px] mb-2">Bem-vindo de volta!</p>
            <form className="flex flex-col w-full max-w-[310px]" onSubmit={handleSubmit}>
              <label className="text-black text-[14px]" htmlFor="email">E-mail</label>
              <input
                className="mb-4 border py-2 px-2 text-[14px] rounded-[8px] text-black"
                type="email"
                placeholder="example@gmail.com"
                value={email} onChange={(e) => setEmail(e.target.value)} required
              />
              <label className="text-black text-[14px]" htmlFor="password">Password</label>
              <input
                className="border py-2 px-2 text-[14px] rounded-[8px] mb-5 text-black"
                type="password"
                placeholder="********"
                value={password} onChange={(e) => setPassword(e.target.value)} required
              />
              <div className="w-full flex justify-end mb-5">
                <Link to='/forgotpassword'
                  className="text-green-400 text-[14px] underline justify-"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <button className="bg-green-400 text-white rounded-[8px] py-2 mb-5" type="submit">
                Entrar
              </button>
              <p className="text-gray-400 text-[14px] flex items-center justify-center mb-2">
              ou
            </p>
              <button className="bg-green-400 text-white rounded-[8px] py-2 mb-5" onClick={handleGoogleSignIn}>
                Faça login com sua conta Google
              </button>
            </form>
            <p className="text-gray-400 text-[14px] flex items-center justify-center mb-2">
              ou
            </p>
            <div>
              <p className="text-black text-[14px]">
                Não tem uma conta?
                <Link to="/createaccount" className="text-green-400"> Clique aqui e crie uma!</Link>
              </p>
            </div>
          </div>
          <div className="mr-10">
            <img className="border-[8px] border-green-400 rounded-xl"
                src={imgTmp}
                width={400}
                height={512}
                alt="Imagem temporaria"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
