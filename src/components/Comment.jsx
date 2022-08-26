import { HandsClapping, ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikesComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <>
      {/* comentario */}
      <div className={styles.comment}>
        <Avatar hasBorder={false} src='https://github.com/FabioNeves00.png' />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header className={styles.commentContentHeader}>
              <div className={styles.authorAndTime}>
                <strong>nombre</strong>
                <time title='18 Agosto 13:00' dateTime=' 2022-08-13 13:00:34'>
                  Publicado hace 1h
                </time>
              </div>
              <button onClick={handleDeleteComment}>
                <Trash size={24} />
              </button>
            </header>
            <p>{content}</p>
          </div>
          <footer>
            <button onClick={handleLikesComment}>
              <HandsClapping size={20} />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
