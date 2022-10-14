import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/servicos">Servicos</NavLink>
    </nav>
  );
};

export default Menu;
