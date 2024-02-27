import { useState } from 'react';
import { Link } from 'react-router-dom';
import posts from './postagens.json';
import iconMais from '../../assets/icones/add-1 3.png';
import fotoPerfil from '../../assets/icones/pessoa7.jpeg';
import './style.css';


const Index = () => {
    const [postagens, setPostagens] = useState(posts);
    const [novoTitulo, setNovoTitulo] = useState('');
    const [novoConteudo, setNovoConteudo] = useState('');

    const handlePublicar = () => {
        const novaPostagem = {
            id: postagens.length + 1,
            title: novoTitulo,
            content: novoConteudo,
            image: fotoPerfil, 
            comments: []
        };

        setPostagens([novaPostagem, ...postagens]);

        // Limpar os campos de entrada
        setNovoTitulo('');
        setNovoConteudo('');
    };

    return (
        <div className='tela-postagem'>
            {postagens.map(post => (
                <div key={post.id} className="postagem">
                    <div>
                        <img src={post.image} alt={`Imagem da Postagem ${post.id}`} />
                        <h2>{post.title}</h2>
                    </div>
                    <p>{post.content}</p>

                    {post.comments && post.comments.slice(0, 2).map((comment, index) => (
                        <div key={comment.id} className={`comentario ${index === 0 ? 'primeiro-comentario' : 'segundo-comentario'}`}>
                            <div>
                                <img src={comment.userImage} alt={`Imagem do Usuário ${comment.userId}`} />
                                {/* <h3>{comment.userName}</h3> */}
                            </div>
                            <p>{comment.content}</p>
                        </div>
                    ))}
                    <div className='iconMais'>
                        <Link to="/discussao"><img src={iconMais} alt="ver conteudo" /></Link>
                    </div>
                </div>
            ))}
            <div className='novo-forum'>
                <label >Inicie um novo tópico</label>
                <input
                    type="text"
                    id="titulo"
                    className="titulo"
                    placeholder='Digite o título'
                    value={novoTitulo}
                    onChange={(e) => setNovoTitulo(e.target.value)}
                />
                <textarea
                    id="conteudo"
                    className="conteudo"
                    placeholder='Digite o conteúdo'
                    value={novoConteudo}
                    onChange={(e) => setNovoConteudo(e.target.value)}
                ></textarea>
                <button className="botao-novo-topico" onClick={handlePublicar}>
                    Publicar
                </button>
            </div>
        </div>
    );
};

export default Index;
