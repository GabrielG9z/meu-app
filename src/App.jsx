import Cabecalho from "./components/layout/Cabecalho";
import Conteudo from "./components/layout/Conteudo";
import Footer from "./components/layout/Footer";
import Artigo from "./components/Artigo";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Cabecalho />
      <Conteudo />
      <Artigo />
      <Artigo />

      <Footer />
    </>
  );
};
export default App;
