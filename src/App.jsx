import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cabecalho from "./components/layout/Cabecalho";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Browser Router é o container das rotas */}
        <Cabecalho />
        <Switch>
          {/*  */}
          <Route exact path="/">
            {/*  */}
            <Home />
          </Route>
          <Route path="/produtos">
            <Produtos />
          </Route>
          <Route path="/servicos">
            <Servicos />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
