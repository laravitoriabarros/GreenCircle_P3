import { useState } from 'react';
/*const foto = 'caminho_para_foto';*/
import './paginaDiscussao.css'
import PropTypes from 'prop-types';

const posts = [
  {
    id: 1,
    image: 'src/assets/icones/pessoa1.png',
    userName: 'Ana Souza',
    title: 'Problemas com pragas na plantação',
    content: 'Caros agricultores, estou enfrentando sérios problemas com pragas na minha plantação. As culturas estão sendo prejudicadas e não sei como lidar com essa situação. Alguma sugestão para controlar as pragas de forma eficaz e sustentável?',
    comments: [
      {
        id: 101,
        userImage: 'src/assets/icones/pessoa2.jpg',
        userName: 'Martins Pereira Silva',
        content: 'Já tive esse problema antes. Recomendo experimentar métodos naturais, como o uso de predadores naturais das pragas. Por exemplo, joaninhas são ótimas para controlar pulgões.',
        comments: [
          {
            id: 102,
            userImage: 'src/assets/icones/pessoa3.jpeg',
            userName: 'Carlos',
            content: 'Eu uso neem oil na minha plantação. É um pesticida orgânico eficaz e não prejudica o meio ambiente. Já experimentou?',
          },
          {
            id: 103,
            userImage: 'src/assets/icones/pessoa4.jpeg',
            userName: 'João Gomes',
            content: 'Além das joaninhas, também recomendo introduzir plantas atrativas para insetos predadores, como o crisântemo. Isso pode ajudar a manter um equilíbrio natural no ecossistema da sua plantação.',
          }
        ]
      },
      {
        id: 104,
        userImage:'src/assets/icones/pessoa5.jpeg',
        userName: 'Ricardo',
        content: 'A rotação de culturas também pode ser uma estratégia eficaz. Isso ajuda a quebrar o ciclo de vida das pragas, reduzindo sua incidência.',
      },
      {
        id: 105,
        userImage: 'src/assets/icones/pessoa10.jpg',
        userName: 'Emanoel Ferreira',
        content: 'Outra opção é usar armadilhas específicas para determinadas pragas. Elas podem ajudar a controlar a população de forma direcionada.',
      },
      {
        id: 106,
        userImage: 'src/assets/icones/pessoa9.jpg',
        userName: 'Roberto',
        content: 'Certifique-se também de manter a plantação limpa, removendo restos de culturas antigas. Isso evita que as pragas tenham locais para se abrigar e se reproduzir.',
        comments: [
          {
            id: 107,
            userImage: 'src/assets/icones/pessoa11.png',
            userName: 'AgroCampo',
            content: 'Uma boa prática é implementar a compostagem dos restos de culturas. Isso não só ajuda a manter a plantação limpa, mas também enriquece o solo com nutrientes essenciais.',
          },
          {
            id: 108,
            userImage: 'src/assets/icones/pessoa12.jpeg',
            userName: 'Felipe',
            content: 'Além disso, considere o uso de coberturas vegetais entre as fileiras de plantas. Elas podem ajudar a suprimir o crescimento de ervas daninhas e reduzir a incidência de pragas.',
          }
        ]
      },
    ],
  },
];

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
    <textarea className="resposta-textarea"
      value={conteudoResposta}
      onChange={(event) => setConteudoResposta(event.target.value)}
      onKeyDown={lidarComKeyDownTextAreaResposta}
      placeholder="Digite sua resposta..."
    />
  );
};
const Comment = ({ comment, onResponder }) => {
  const [mostrarTextAreaResposta, setMostrarTextAreaResposta] = useState(false);
  const [setConteudoResposta] = useState('');

  const lidarComCliqueBotaoResposta = () => {
    setMostrarTextAreaResposta(!mostrarTextAreaResposta);
  };

  const lidarComResponder = (conteudoResposta) => {
    const novaResposta = {
      id: Date.now(),
      userImage: 'src/assets/icones/pessoa6.jpeg',
      userName: 'Julio Noronha',
      content: conteudoResposta,
    };

    if (comment.comments) {
      comment.comments.push(novaResposta);
    } else {
      comment.comments = [novaResposta];
    }

    onResponder(conteudoResposta);

    setMostrarTextAreaResposta(false);
    setConteudoResposta('');
  };

  return (
    <div key={comment.id} className="commentario">
      <div className='pos'>
        <div className="post-header">
          <img src={comment.userImage} alt={`Imagem do Usuário ${comment.userName}`} />
          <h3>{comment.userName}</h3>
        </div>
        <p>{comment.content}</p>

        <button className="botao-resposta" onClick={lidarComCliqueBotaoResposta}>
          Responder
        </button>
        {mostrarTextAreaResposta && (
          <>
            <RespostaForm onResponder={lidarComResponder} />
          </>
        )}
      </div>
      {comment.comments && comment.comments.map(subComment => (
        <Comment key={subComment.id} comment={subComment} onResponder={onResponder} />
      ))}
    </div>
  );
};
RespostaForm.propTypes = {
  onResponder: PropTypes.func.isRequired,
};
Comment.propTypes = {
  comment: PropTypes.object.isRequired, 
  onResponder: PropTypes.func.isRequired,
};

const Index = () => {
  const [mostrarTextAreaResposta, setMostrarTextAreaResposta] = useState(false);

  const lidarComCliqueBotaoResposta = () => {
    setMostrarTextAreaResposta(!mostrarTextAreaResposta);
  };

  const lidarComResponder = (conteudoResposta) => {
    const novaRespostaPrincipal = {
      id: Date.now(),
      userImage:'src/assets/icones/pessoa6.jpeg',
      userName: 'Julio Noronha',
      content: conteudoResposta,
    };

    if (posts[0].comments) {
      posts[0].comments.push(novaRespostaPrincipal);
    } else {
      posts[0].comments = [novaRespostaPrincipal];
    }

    // Fechar o campo de resposta
    setMostrarTextAreaResposta(false);
  };

  return (
    <div className="forum-container">
      <div className="containe">
      {posts.map(post => (
        <div key={post.id} className="post-container">
          <div className='pos'>
            <div className="post-header">
              <img src={post.image} alt={`Imagem do Usuário ${post.userName}`} />
              <h3>{post.userName}</h3>
            </div>
            <h2 className="titulo">{post.title}</h2>
            <p>{post.content}</p>
            <button className="botao-resposta" onClick={lidarComCliqueBotaoResposta}>
              Responder
            </button>
            {mostrarTextAreaResposta && <RespostaForm onResponder={lidarComResponder} />}
          </div>

          {post.comments && post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} onResponder={lidarComResponder} />
          ))}
        </div>
      ))}
    </div>
  
    </div>
  );
}

export default Index;
