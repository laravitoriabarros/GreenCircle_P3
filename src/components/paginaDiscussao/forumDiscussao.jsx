import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import Index from './index';


const PostForum = ({ postId }) => {
  
    const [mostrarTextAreaResposta, setMostrarTextAreaResposta] = useState(false);
    const [post, setPost] = useState(null);
    const [comentarioId, setComentarioId] = useState(null);

    useEffect(() => {
        const carregarPost = async () => {
          try {
      
            const postDocRef = doc(db, 'posts-forum', postId);
            const docSnap = await getDoc(postDocRef);
        
            if (docSnap.exists()) {
              const postData = { id: docSnap.id, ...docSnap.data() };
              setPost(postData);
            } else {
              console.log('Nenhuma postagem encontrada com o ID fornecido.');
            }
          } catch (error) {
            console.error('Erro ao carregar postagem: ', error);
          }
        };
        
        carregarPost();
      }, [ postId]);

    const lidarComCliqueBotaoResposta = (comentarioId) => {
        setComentarioId(comentarioId);
        setMostrarTextAreaResposta(!mostrarTextAreaResposta);
    };

    const lidarComResponder = async (conteudoResposta) => {
        try {
            const novaResposta = {
                id: Date.now().toString(),
                userImage: 'src/assets/icones/pessoa6.jpeg',
                userName: 'Julio Noronha',
                content: conteudoResposta,
            };

            const updatedComments = comentarioId ?
                post.comments.map(comment =>
                    comment.id === comentarioId ?
                    { ...comment, replies: [...comment.replies, novaResposta] } :
                    comment
                ) :
                [...post.comments, { ...novaResposta, replies: [] }];

            const postDocRef = doc(db, 'posts-forum', post.id);
            await updateDoc(postDocRef, { comments: updatedComments });

            setPost({ ...post, comments: updatedComments });
            setMostrarTextAreaResposta(false);
            setComentarioId(null);
        } catch (error) {
            console.error('Erro ao adicionar nova resposta: ', error);
        }
    };

    return (
        <Index
            post={post}
            onResponder={lidarComResponder}
            mostrarTextAreaResposta={mostrarTextAreaResposta}
            comentarioId={comentarioId}
            lidarComCliqueBotaoResposta={lidarComCliqueBotaoResposta}
            lidarComResponder={lidarComResponder}
        />
    );
};

PostForum.propTypes = {
    postId: PropTypes.string.isRequired
};

export default PostForum;
