import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
  return (
    <>
      <article className={styles.post}>
        {/* header  */}
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src={props.avatar} alt='' />
            <div className={styles.authorInfo}>
              <strong>{props.autor}</strong>
              <span>{props.cargo}</span>
            </div>
          </div>
          <time title='18 Agosto 13:00' dateTime=' 2022-08-13 13:00:34'>
            Publicado hace 1h
          </time>
        </header>

        {/* Contenido */}
        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            <a href='#'> jane.design/doctorcare</a>
          </p>
          <p>
            <a href='#'>#novoprojeto </a>
            {''}
            <a href='#'>#nlw</a>
            {''}
            <a href='#'> #rocketseat</a>
          </p>
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
