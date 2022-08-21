import { format, formatDistanceToNow } from 'date-fns';
import { formatDistance } from 'date-fns/esm';
// import { es } from 'date-fns/locale/es';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const publishedDataFormated = format(
    publishedAt,
    "d 'de' LLLL 'a las' HH:mm"
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  return (
    <>
      <article className={styles.post}>
        {/* header  */}
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time
            title={publishedDataFormated}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>

        {/* Contenido */}
        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === 'paragraph') {
              return <p>{line.content}</p>;
            } else if (line.type === 'link') {
              return (
                <p>
                  <a href='#'>{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        {/* Formulario */}
        <form action='' className={styles.commentForm}>
          <strong>Deje su Feedback</strong>
          <textarea placeholder='Su comentario aqui' />
          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  );
}
