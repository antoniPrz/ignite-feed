import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <>
      {/* comentario */}
      <div className={styles.comment}>
        {/* Avatar */}
        <img src='https://github.com/FabioNeves00.png' alt='' />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>nombre</strong>
                <time title='18 Agosto 13:00' dateTime=' 2022-08-13 13:00:34'>
                  Publicado hace 1h
                </time>
              </div>
              <button>
                <Trash size={20} />
              </button>
            </header>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
          <footer>
            <button>
              <ThumbsUp size={20} />
              Aplaudir <span>21</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
