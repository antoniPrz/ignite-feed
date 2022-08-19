import styles from './Post.module.css';

export function Post(props) {
  return (
    <>
      <div className={styles.post}>
        <h1>{props.autor || 'Autor'}</h1>
        <p>{props.contenido || 'Lorem aLKF  AS SF   d sf s '}</p>
      </div>
    </>
  );
}
