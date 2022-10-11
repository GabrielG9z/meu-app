import Menu from "../Menu";
import Button from "react-bootstrap/Button";
const Cabecalho = () => {
  return (
    <>
      <header>
        <h1>Interface React</h1>
        <Button variant="primary">Primary</Button>
      </header>

      <Menu />
    </>
  );
};

export default Cabecalho;
