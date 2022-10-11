import Artigo from "./Artigo";
import estilos from "./Conteudo.module.css";

const Conteudo = () => {
  return (
    <>
      <main>
        <section>
          <h2 className={estilos.subtitulo}>Conteúdo do site</h2>
          <p>
            <span className={`${estilos.destaque} ${estilos.sombra}`}>
              Lorem
            </span>
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
