import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, serverTimestamp} from 'firebase/firestore';
import { db } from '../../Firebase/config';
import fotoPerfil from '../../assets/icones/pessoa7.jpeg';
import Index from './index';

const Forum = () => {
    const [postagens, setPostagens] = useState([]);
    const [novoTitulo, setNovoTitulo] = useState('');
    const [novoConteudo, setNovoConteudo] = useState('');
    const [filtro, setFiltro] = useState('recentes');

    const carregarPostagens = async () => {
        try {
            const postagensCollectionRef = collection(db, 'posts-forum');
            const querySnapshot = await getDocs(postagensCollectionRef);
            const postagensData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            let postagensOrdenadas = [...postagensData];

            if (filtro === 'recentes') {
                postagensOrdenadas.sort((a, b) => b.timestamp - a.timestamp);
            } else if (filtro === 'antigos') {
                postagensOrdenadas.sort((a, b) => a.timestamp - b.timestamp);
            } else if (filtro === 'populares') {
                postagensOrdenadas.sort((a, b) => b.comments.length - a.comments.length);
            }

            setPostagens(postagensOrdenadas);
        } catch (error) {
            console.error('Erro ao carregar postagens: ', error);
        }
    };

    useEffect(() => {
        carregarPostagens();
    }, [filtro]);

    const handlePublicar = async () => {
        try {
            const novaPostagem = {
                title: novoTitulo,
                content: novoConteudo,
                image: fotoPerfil,
                comments: [],
                likes: 0,
                timestamp: serverTimestamp()
            };

            const postagensCollectionRef = collection(db, 'posts-forum');
            await addDoc(postagensCollectionRef, novaPostagem);

            carregarPostagens();

            setNovoTitulo('');
            setNovoConteudo('');
        } catch (error) {
            console.error('Erro ao publicar nova postagem: ', error);
        }
    };

    return (
        <Index
            postagens={postagens}
            handlePublicar={handlePublicar}
            novoTitulo={novoTitulo}
            novoConteudo={novoConteudo}
            setNovoTitulo={setNovoTitulo}
            setNovoConteudo={setNovoConteudo}
            setFiltro={setFiltro}
        />
    );
};

export default Forum;