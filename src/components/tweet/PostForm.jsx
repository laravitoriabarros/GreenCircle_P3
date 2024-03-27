import { useState } from 'react';
import { db, storage } from '../../Firebase/config'; 
import { collection, addDoc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
//import { Heart } from '@phosphor-icons/react';
import './Tweet.css';


function PostForm() {
    const [postText, setPostText] = useState('');
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        try {
            let imageUrl = '';
            if (image) {
                const imageRef = ref(storage, `images/${image.name}`);
                const snapshot = await uploadBytes(imageRef, image);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            await addDoc(collection(db, "posts"), {
                text: postText,
                imageUrl,
                createdAt: new Date()
            });

            setPostText('');
            setImage(null);
        } catch (error) {
            console.error('Erro ao enviar o post:', error);
        }

        setUploading(false);
    };

    return (
        <div className='tweet'>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px' }}>
                <textarea
                    placeholder='Compartilhe o que está pensando!'
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg mb-5"type="submit" disabled={uploading}>Postar</button>
            </form>
        </div>
    );
}

export default PostForm;