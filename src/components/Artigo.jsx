const Artigo = (props) => {
  return (
    <article>
      <h3>{props.titulo}</h3>
      <h4>{props.subtitulo}</h4>
      <h5>{props.curso}</h5>
      {/* Sempre que for o conteúdo entre as tags deve-se ser usado a tag (children). */}
      <p>{props.children}</p>
    </article>
  );
};

export default Artigo;
