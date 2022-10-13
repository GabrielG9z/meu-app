import Artigo from "../Artigo";

const Conteudo = () => {
  const artigos = [
    {
      id: 1,
      titulo: "Artigo 1",
      subtitulo: "Este é subtitulo do artigo 1",
      texto: "Este é o conteúdo do artigo 1",
      curso: "JS Avançado",
    },
    {
      id: 2,
      titulo: "Artigo 2",
      subtitulo: "Este é subtitulo do artigo 2",
      texto: "Este é o conteúdo do artigo 2",
      curso: "React",
    },
    {
      id: 3,
      titulo: "Artigo 3",
      subtitulo: "Este é subtitulo do artigo 3",
      texto: "Este é o conteúdo do artigo 3",
      curso: "Node.JS",
    },
  ];

  /* Versão refatorada */
  return (
    <>
      <main>
        <section>
          <h2>Conteúdo do site...</h2>
          <p></p>

          {artigos.map((artigo) => (
            <Artigo
              key={artigo.id}
              titulo={artigo.titulo}
              subtitulo={artigo.subtitulo}
              curso={artigo.curso}
            >
              {artigo.texto}
            </Artigo>
          ))}
        </section>
      </main>
    </>
  );
};

export default Conteudo;
