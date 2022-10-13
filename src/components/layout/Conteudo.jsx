import Artigo from "../Artigo";

const Conteudo = () => {
  /*1) Crie um array com o nome de 3 cursos 
    2) Dentro das chamadas do artigos, passe como uma nova prop chamada curso o nome de cada curso.
  */
  const curso = ["ReactJS", "NodeJS", "JavaScript"];

  return (
    <>
      <main>
        <section>
          {/* AQUI É COMENTÁRIO DENTRO DO JSX */}
          <h2>Conteúdo do Site</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro
            maxime dolores laudantium illo commodi et excepturi accusamus odit
            hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores, cumque.
          </p>
          <Artigo
            titulo="Artigo 1"
            subtitulo="Subtitulo do artigo 1 "
            /* Sempre que o react espera uma informação programada ele espera chaves para interpretar */
            curso={curso[0]}
          >
            Este é o texto do primeiro artigo...
          </Artigo>

          <Artigo
            titulo="Artigo 2"
            subtitulo="Subtitulo do artigo 2"
            /* Sempre que o react espera uma informação programada ele espera chaves para interpretar */
            curso={curso[1]}
          >
            Este é o texto do segundo artigo...
          </Artigo>
          <Artigo
            titulo="Artigo 3"
            subtitulo="Subtitulo do artigo 3"
            /* Sempre que o react espera uma informação programada ele espera chaves para interpretar */
            curso={curso[2]}
          >
            Este é o texto do terceiro artigo...
          </Artigo>
        </section>
      </main>
    </>
  );
};

export default Conteudo;
