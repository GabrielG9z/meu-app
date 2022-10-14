import Cabecalho from "./components/layout/Cabecalho";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
const App = () => {
  return (
    <>
      <Cabecalho />
      <Home />
      <Produtos />
      <Servicos />
      <Footer />
    </>
  );
};
export default App;
