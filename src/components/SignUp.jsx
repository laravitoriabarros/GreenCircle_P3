import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebase/config';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import cellimage from "../assets/Imagem.svg";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cidade, setCidade] = useState('');
  const [grupo, setGrupo] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer login com o Google:', error.message);
    }
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setProfileImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Initialize storage object here
      const storage = getStorage();

      // Upload da imagem de perfil para o armazenamento do Firebase
      const storageRef = ref(storage, `profile_images/${userCredential.user.uid}`);
      await uploadBytes(storageRef, profileImage);
      const imageUrl = await getDownloadURL(storageRef);

      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: imageUrl // Define a URL da imagem de perfil no perfil do usuário
      });

      alert('Conta criada com sucesso:', userCredential.user);
      navigate('/');
      const userRef = doc(db, "users", userCredential.user.uid);
      await setDoc(userRef, {
        name: name,
        email: email,
        cidade: cidade,
        grupo: grupo,
        perfilImagemUrl: imageUrl
      });
      alert('Dados salvos com sucesso!');
    } catch (error) {
      console.error('Erro:', error.message);
    }
  };


  return (
    <div className="flex w-screen h-screen justify-center py-[10%] px-[10%] items-center bg-gradient-to-b from-green-400 to-green-700">
            <div className="container rounded-lg flex w-full justify-evenly items-center bg-[#F7FAFC] p-[5%] h-auto">
            <div className="flex flex-col h-full justify-center ">
                <div className="py-4">
                <img
                    src={logo}
                    alt="Logotipo GreenCircles"
                    width={249}
                    height={52}
                />
                </div>
                <div className="flex flex-col pb-10">
                <h2 className="text-black font-bold text-[24px] mb-3">
                    Cadastre-se!
                </h2>
                <p className="text-black text-[14px] mb-5">
                    Venha conhecer um novo leque de oportunidades!
                </p>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="text-black text-[14px]">Nome
                    <input className="text-black border rounded-lg text-[14px] py-2 px-2 mb-5" type="text" placeholder="Nome"
                    value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>         
                    <label className="text-black text-[14px]">E-mail
                    <input
                    className="text-black text-[14px] py-2 px-2 border rounded-lg mb-5" type="email" placeholder="E-mail" 
                    value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label className="text-black text-[14px]">Senha
                    <input className="text-black text-[14px] py-2 px-2 border rounded-lg mb-5" type="password"
                    placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required 
                    />
                    </label>
                    <label className="text-black text-[14px]">
                    Escolha onde você mora:
                    </label>
                    <select
                    name="Cidades"
                    className="text-black text-[14px] py-2 px-2 border rounded-lg dark:text-gray-400 bg-transparent dark:focus:border-gray-600 mb-5"
                    value={cidade} onChange={(e) => setCidade(e.target.value)} required
                    >
                    <option selected>Cidade</option>
                    <option value="Água Branca">Água Branca</option>
                    <option value="Anadia">Anadia</option>
                    <option value="Arapiraca">Arapiraca</option>
                    <option value="Atalaia">Atalaia</option>
                    <option value="Barra de Santo Antônio">Barra de Santo Antônio</option>
                    <option value="Barra de São Miguel">Barra de São Miguel</option>
                    <option value="Batalha">Batalha</option>
                    <option value="Belém">Belém</option>
                    <option value="Belo Monte">Belo Monte</option>
                    <option value="Boca da Mata">Boca da Mata</option>
                    <option value="Branquinha">Branquinha</option>
                    <option value="Cacimbinhas">Cacimbinhas</option>
                    <option value="Cajueiro">Cajueiro</option>
                    <option value="Campestre">Campestre</option>
                    <option value="Campo Alegre">Campo Alegre</option>
                    <option value="Campo Grande">Campo Grande</option>
                    <option value="Canapi">Canapi</option>
                    <option value="Capela">Capela</option>
                    <option value="Carneiros">Carneiros</option>
                    <option value="Chã Preta">Chã Preta</option>
                    <option value="Coité do Nóia">Coité do Nóia</option>
                    <option value="Colônia Leopoldina">Colônia Leopoldina</option>
                    <option value="Coqueiro Seco">Coqueiro Seco</option>
                    <option value="Coruripe">Coruripe</option>
                    <option value="Craíbas">Craíbas</option>
                    <option value="Delmiro Gouveia">Delmiro Gouveia</option>
                    <option value="Dois Riachos">Dois Riachos</option>
                    <option value="Estrela de Alagoas">Estrela de Alagoas</option>
                    <option value="Feira Grande">Feira Grande</option>
                    <option value="Feliz Deserto">Feliz Deserto</option>
                    <option value="Flexeiras">Flexeiras</option>
                    <option value="Girau do Ponciano">Girau do Ponciano</option>
                    <option value="Ibateguara">Ibateguara</option>
                    <option value="Igaci">Igaci</option>
                    <option value="Igreja Nova">Igreja Nova</option>
                    <option value="Inhapi">Inhapi</option>
                    <option value="Jacaré dos Homens">Jacaré dos Homens</option>
                    <option value="Jacuípe">Jacuípe</option>
                    <option value="Japaratinga">Japaratinga</option>
                    <option value="Jaramataia">Jaramataia</option>
                    <option value="Jequiá da Praia">Jequiá da Praia</option>
                    <option value="Joaquim Gomes">Joaquim Gomes</option>
                    <option value="Jundiá">Jundiá</option>
                    <option value="Junqueiro">Junqueiro</option>
                    <option value="Lagoa da Canoa">Lagoa da Canoa</option>
                    <option value="Limoeiro de Anadia">Limoeiro de Anadia</option>
                    <option value="Maceió">Maceió</option>
                    <option value="Major Isidoro">Major Isidoro</option>
                    <option value="Maragogi">Maragogi</option>
                    <option value="Maravilha">Maravilha</option>
                    <option value="Marechal Deodoro">Marechal Deodoro</option>
                    <option value="Maribondo">Maribondo</option>
                    <option value="Mata Grande">Mata Grande</option>
                    <option value="Matriz de Camaragibe">Matriz de Camaragibe</option>
                    <option value="Messias">Messias</option>
                    <option value="Minador do Negrão">Minador do Negrão</option>
                    <option value="Monteirópolis">Monteirópolis</option>
                    <option value="Murici">Murici</option>
                    <option value="Novo Lino">Novo Lino</option>
                    <option value="Olho d'Água das Flores">Olho d'Água das Flores</option>
                    <option value="Olho d'Água do Casado">Olho d'Água do Casado</option>
                    <option value="Olho d'Água Grande">Olho d'Água Grande</option>
                    <option value="Olivença">Olivença</option>
                    <option value="Ouro Branco">Ouro Branco</option>
                    <option value="Palestina">Palestina</option>
                    <option value="Palmeira dos Índios">Palmeira dos Índios</option>
                    <option value="Pão de Açúcar">Pão de Açúcar</option>
                    <option value="Pariconha">Pariconha</option>
                    <option value="Paripueira">Paripueira</option>
                    <option value="Passo de Camaragibe">Passo de Camaragibe</option>
                    <option value="Paulo Jacinto">Paulo Jacinto</option>
                    <option value="Penedo">Penedo</option>
                    <option value="Piaçabuçu">Piaçabuçu</option>
                    <option value="Pilar">Pilar</option>
                    <option value="Pindoba">Pindoba</option>
                    <option value="Piranhas">Piranhas</option>
                    <option value="Poço das Trincheiras">Poço das Trincheiras</option>
                    <option value="Porto Calvo">Porto Calvo</option>
                    <option value="Porto de Pedras">Porto de Pedras</option>
                    <option value="Porto Real do Colégio">Porto Real do Colégio</option>
                    <option value="Quebrangulo">Quebrangulo</option>
                    <option value="Rio Largo">Rio Largo</option>
                    <option value="Roteiro">Roteiro</option>
                    <option value="Santa Luzia do Norte">Santa Luzia do Norte</option>
                    <option value="Santana do Ipanema">Santana do Ipanema</option>
                    <option value="Santana do Mundaú">Santana do Mundaú</option>
                    <option value="São Brás">São Brás</option>
                    <option value="São José da Laje">São José da Laje</option>
                    <option value="São José da Tapera">São José da Tapera</option>
                    <option value="São Luís do Quitunde">São Luís do Quitunde</option>
                    <option value="São Miguel dos Campos">São Miguel dos Campos</option>
                    <option value="São Miguel dos Milagres">São Miguel dos Milagres</option>
                    <option value="São Sebastião">São Sebastião</option>
                    <option value="Satuba">Satuba</option>
                    <option value="Senador Rui Palmeira">Senador Rui Palmeira</option>
                    <option value="Tanque d'Arca">Tanque d'Arca</option>
                    <option value="Taquarana">Taquarana</option>
                    <option value="Teotônio Vilela">Teotônio Vilela</option>
                    <option value="Traipu">Traipu</option>
                    <option value="União dos Palmares">União dos Palmares</option>
                    <option value="Viçosa">Viçosa</option>
                    </select>
                    <label className="text-black text-[14px]">
                    Escolha o grupo que representa:
                    </label>
                    <select
                    name="Grupos"
                    className="text-black text-[14px] py-2 px-2 border rounded-lg dark:text-gray-400 bg-transparent dark:focus:border-gray-600 mb-5"
                    value={grupo} onChange={(e) => setGrupo(e.target.value)} required
                    >
                    <option selected>Grupo</option>
                    <option value="Grupo 1">Grupo 1</option>
                    <option value="Grupo 2">Grupo 2</option>
                    <option value="Grupo 3">Grupo 3</option>
                    <option value="Grupo 4">Grupo 4</option>
                    <option value="Grupo 5">Grupo 5</option>
                    </select>
                    <label className="text-black text-[14px]">Foto de Perfil</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="text-black border rounded-lg text-[14px] py-2 px-2 mb-5"
                      required
                    />
                    <button className="bg-green-400 text-white rounded-[8px] py-2 mb-3" type="submit">Cadastrar</button>
                </form>
               <p className="text-gray-400 text-[14px] flex items-center justify-center mb-2">
              ou
            </p>
            <div className="flex justify-center">
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg mb-5" onClick={handleGoogleSignUp}>
                Cadastre-se com sua conta Google
              </button>
            </div>
            <p className="text-gray-400 text-[14px] flex items-center justify-center mb-2">
              ou
            </p>
            <div className="flex justify-center">
              <p className="text-black text-[14px]">
                Já tem uma conta?{" "}
                <Link to="/login" className="text-green-400 text-[14px]">
                  Clique aqui e faça login
                </Link>
              </p>
            </div>
           
          </div>
        </div>
        <div>
          <img
            className="mt-[70px]"
            src={cellimage}
            alt="Celular e Pessoa"
            width={785 * 0.75}
            height={818 * 0.75}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
