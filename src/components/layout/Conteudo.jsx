import Artigo from "../Artigo";

const Conteudo = () => {
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
          <Artigo />
          <Artigo />
          <Artigo />
        </section>
      </main>
    </>
  );
};

export default Conteudo;
