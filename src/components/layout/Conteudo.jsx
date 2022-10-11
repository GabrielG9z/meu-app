import Artigo from "../Artigo";
import "./Conteudo.css";

const Conteudo = () => {
  return (
    <>
      <main>
        <section>
          <h2 className="subtitulo">Conteúdo do site</h2>
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
