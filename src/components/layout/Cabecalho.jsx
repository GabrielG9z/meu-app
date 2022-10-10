import Menu from "../Menu";

const estilos = {
  color: "red",
  backgroundcolor: "lightblue",
};

const Cabecalho = () => {
  return (
    <>
      {/* CSS IN JS */}

      {/* CSS inline (usa propriedade style e sintaxe de objeto) */}
      <header style={{ backgroundColor: "lightblue", textAlign: "center" }}>
        <h1 style={estilos}>Interface React</h1>
        <Menu />
      </header>
    </>
  );
};

export default Cabecalho;
