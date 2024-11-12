import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <navbar>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/sobre"}>Sobre</NavLink>
    </navbar>
  );
};

export default Navbar;
