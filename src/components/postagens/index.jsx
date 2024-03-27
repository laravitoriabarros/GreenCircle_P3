
import { Link } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';
import iconMais from '../../assets/icones/add-1 3.png';
import LikesEmoji from './like/like';

const Index = ({ postagens, handlePublicar, novoTitulo, novoConteudo, setNovoTitulo, setNovoConteudo, setFiltro }) => {
    return (
        <div className='tela-postagem'>
            <div className="filtro-container">
                <button className="filtro-button">
                    <img src="./src/assets/filter.svg" alt="Filtrar" />
                </button>
                <ul className="filtro-lista">
                    <li onClick={() => setFiltro('recentes')}>Mais Recentes</li>
                    <li onClick={() => setFiltro('antigos')}>Mais Antigos</li>
                    <li onClick={() => setFiltro('populares')}>Mais Populares</li>
                </ul>
            </div>
            {postagens && postagens.map((post, index) => (
                <div key={index} className="postagem">
                    <div>
                        <img src={post.image} alt={`Imagem da Postagem ${index}`} />
                        <h2>{post.title}</h2>
                    </div>
                    <p>{post.content}</p>
                    {/* Comentários */}
                    {post.comments && post.comments.slice(0, 2).map((comment, commentIndex) => (
                        <div key={commentIndex} className={`comentario ${commentIndex === 0 ? 'primeiro-comentario' : 'segundo-comentario'}`}>
                            <div>
                                <img src={comment.userImage} alt={`Imagem do Usuário ${comment.userId}`} />
                            </div>
                            <p>{comment.content}</p>
                        </div>

                    ))}
                    <div className='alinhar'>
                        <div className=' lista-emojis'>  <LikesEmoji postId={post.id} /></div>
                        <div className='iconMais'>
                            <Link to={`/discussao?postId=${post.id}`}><img src={iconMais} alt="ver conteudo" /></Link>
                        </div>
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
Index.propTypes = {
    postagens: PropTypes.array.isRequired,
    handlePublicar: PropTypes.func.isRequired,
    novoTitulo: PropTypes.string.isRequired,
    novoConteudo: PropTypes.string.isRequired,
    setNovoTitulo: PropTypes.func.isRequired,
    setNovoConteudo: PropTypes.func.isRequired,
    setFiltro: PropTypes.func.isRequired,
};
export default Index;
