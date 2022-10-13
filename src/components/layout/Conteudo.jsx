import Artigo from "../Artigo";

const Conteudo = () => {
  const artigos = [
    {
      titulo: "Artigo 1",
      subtitulo: "Este é subtitulo do artigo 1",
      texto: "Este é o conteúdo do artigo 1",
      curso: "JS Avançado",
    },
    {
      titulo: "Artigo 2",
      subtitulo: "Este é subtitulo do artigo 2",
      texto: "Este é o conteúdo do artigo 2",
      curso: "React",
    },
    {
      titulo: "Artigo 3",
      subtitulo: "Este é subtitulo do artigo 3",
      texto: "Este é o conteúdo do artigo 3",
      curso: "Node.JS",
    },
  ];

  return (
    <>
      <main>
        <section>
          <h2>Conteúdo do site...</h2>
          <p></p>

          {artigos.map((artigo) => {
            return (
              <Artigo
                titulo={artigo.titulo}
                subtitulo={artigo.subtitulo}
                curso={artigo.curso}
              >
                {artigo.texto}
              </Artigo>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Conteudo;
