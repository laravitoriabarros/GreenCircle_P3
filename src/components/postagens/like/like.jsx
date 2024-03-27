import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/config';
import { increment } from 'firebase/firestore';
import './like.css';

const Like = ({ postId }) => {
  const [totalLikes, setTotalLikes] = useState(0);
  const [likeImage, setLikeImage] = useState('./src/assets/like.svg'); 

  useEffect(() => {
    const postRef = doc(db, 'posts-forum', postId);

    const unsubscribe = onSnapshot(postRef, (snapshot) => {
      const likes = snapshot.data()?.likes || 0;
      setTotalLikes(likes);
    });

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const handleLike = async () => {
    try {
      const postRef = doc(db, 'posts-forum', postId);

      await updateDoc(postRef, {
        likes: increment(1),
      });

      setLikeImage('./src/assets/like_blue.svg'); 
    } catch (error) {
      console.error('Erro ao lidar com o like: ', error);
    }
  };

  return (
    <div className="likes-emoji-container">
      <div className="emoji-list">
        <span onClick={handleLike}>
          <img id="like" src={likeImage} alt="Curtir" />
        </span>
        <div className="total-likes"> {totalLikes}</div>
      </div>
    </div>
  );
};

Like.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default Like;
