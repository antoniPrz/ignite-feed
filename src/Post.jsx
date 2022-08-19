export function Post(props) {
  return (
    <>
      <h1>{props.autor || 'Autor'}</h1>
      <p>{props.contenido || 'Lorem aLKF  AS SF   d sf s '}</p>
    </>
  );
}
