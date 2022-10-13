import { useState } from "react";
import Menu from "../Menu";
const Cabecalho = () => {
  const exemplo2 = () => {
    console.log("exemplo2");
  };

  /* Exemplo 1 de gerenciamento de states aqui, definimos no useState um valor inicial (colocado entre os parênteses do useState), além de desestruturar o state em uma variável (titulo) e em uma função (setTitulo) que será responsável por atualizar este state/titulo */
  const [titulo, setTitulo] = useState("Exemplo de State");

  const atualizaTitulo = () => {
    setTitulo("Opa, state do titulo foi alterado!");
  };

  return (
    <>
      <header>
        <button onClick={() => console.log("exemplo1")}>Exemplo 1</button>
        <button onClick={exemplo2}>Exemplo 2</button>
        <hr />
        {/* Aqui, aplicamos a variável de state chamada titulo */}
        <h1 onClick={atualizaTitulo}>{titulo}</h1>
        <Menu />
      </header>
    </>
  );
};

export default Cabecalho;
