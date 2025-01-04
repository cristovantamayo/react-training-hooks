import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">Home</Link>
      <br />
      <Link to="/abc">Abc</Link>
    </nav>
  );
};
