import { useState} from 'react';
import PropTypes from 'prop-types';
import './paginaDiscussao.css';

const Index = ({ post, mostrarTextAreaResposta, comentarioId , lidarComCliqueBotaoResposta, lidarComResponder}) => {
    return (
        <div className="forum-container">
            <div className="containe">
                {post && (
                    <div key={post.id} className="post-container">
                        <div className='pos'>
                            <div className="post-header">
                                <img src={post.image} alt={`Imagem do Usuário ${post.userName}`} />
                                <h3>{post.userName}</h3>
                            </div>
                            <h2 className="titulo">{post.title}</h2>
                            <p>{post.content}</p>
                            <button className="botao-resposta" onClick={() => lidarComCliqueBotaoResposta(null)}>
                                Responder
                            </button>
                            {mostrarTextAreaResposta && comentarioId === null && (
                                <RespostaForm onResponder={lidarComResponder} />
                            )}
                        </div>
                        {post.comments && post.comments.map(comment => (
                            <div key={comment.id} className="commentario">
                                <div className="post-header">
                                    <img src={comment.userImage} alt={`Imagem do Usuário ${comment.userName}`} />
                                    <h3>{comment.userName}</h3>
                                </div>
                                <p>{comment.content}</p>
                                <button className="botao-resposta" onClick={() => lidarComCliqueBotaoResposta(comment.id)}>
                                    Responder
                                </button>
                                {mostrarTextAreaResposta && comentarioId === comment.id && (
                                    <RespostaForm onResponder={lidarComResponder} />
                                )}
                                {/* Verificar e renderizar respostas (replies) */}
                                {comment.replies && comment.replies.length > 0 && (
                                    <div className="respostas-container">
                                        {comment.replies.map(reply => (
                                            <div key={reply.id} className="commentario">
                                                <div className="post-header">
                                                    <img src={reply.userImage} alt={`Imagem do Usuário ${reply.userName}`} />
                                                    <h3>{reply.userName}</h3>
                                                </div>
                                                <p>{reply.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const RespostaForm = ({ onResponder }) => {
    const [conteudoResposta, setConteudoResposta] = useState('');

    const lidarComKeyDownTextAreaResposta = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            onResponder(conteudoResposta);
            setConteudoResposta('');
        }
    };

    return (
        <textarea
            className="resposta-textarea"
            value={conteudoResposta}
            onChange={(event) => setConteudoResposta(event.target.value)}
            onKeyDown={lidarComKeyDownTextAreaResposta}
            placeholder="Digite sua resposta..."
        />
    );
};

RespostaForm.propTypes = {
    onResponder: PropTypes.func.isRequired
};

Index.propTypes = {
    post: PropTypes.object,
    mostrarTextAreaResposta: PropTypes.bool.isRequired,
    comentarioId: PropTypes.string,
    lidarComCliqueBotaoResposta: PropTypes.func.isRequired,
    lidarComResponder: PropTypes.func.isRequired,
};


export default Index;
