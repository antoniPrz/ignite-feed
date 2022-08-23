import { format, formatDistanceToNow } from 'date-fns';
import { formatDistance } from 'date-fns/esm';
import { useState } from 'react';
// import { es } from 'date-fns/locale/es';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['mi primer comentario ']);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDataFormated = format(
    publishedAt,
    "d 'de' LLLL 'a las' HH:mm"
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  function newCommentChange(event) {
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComent(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function deleteComment(comment) {
    const filteredComments = comments.filter((element) => {
      return element !== comment;
    });
    setComments(filteredComments);
  }

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
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return (
                <p key={line.content}>
                  <a href='#'>{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        {/* Formulario */}
        <form onSubmit={handleCreateNewComent} className={styles.commentForm}>
          <strong>Deje su Feedback</strong>
          <textarea
            placeholder='Su comentario aqui'
            onChange={newCommentChange}
            value={newCommentText}
          />
          <footer>
            <button type='submit' disabled={isNewCommentEmpty}>
              Publicar
            </button>
          </footer>
        </form>
        <div className={styles.commentList}></div>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </article>
    </>
  );
}
