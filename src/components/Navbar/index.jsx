import Logo from "../Logo";
import Search from "../Search";
import "./style.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Logo />
      <Search />
    </div>
  );
};

export default Navbar;
