import { useState } from "react";
import Artigo from "../Artigo";

const Conteudo = () => {
  const [corFundo, setCorFundo] = useState();
  const [contador, setContador] = useState(0);

  const fundoAmarelo = () => setCorFundo("#FFEE21");
  const fundoAzul = () => setCorFundo("lightblue");
  const fundoVerde = () => setCorFundo("green");

  const atualizaContagem = () => setContador(contador + 1);

  return (
    <main style={{ backgroundColor: corFundo }}>
      <button onMouseOver={fundoAmarelo}>Amarelo</button>
      <button onMouseOver={fundoAzul}>Azul</button>
      <button onMouseOver={fundoVerde}>Verde</button>

      <section>
        <h2 onClick={atualizaContagem}>Contador: {contador} </h2>
      </section>

      <Artigo />
      <Artigo />
      <Artigo />
    </main>
  );
};

export default Conteudo;
