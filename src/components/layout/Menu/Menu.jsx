import estilo from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={estilo.a}>
      <a href="">Home</a>
      <a href="">Produtos</a>
      <a href="">Serviços</a>
    </nav>
  );
};

export default Menu;
