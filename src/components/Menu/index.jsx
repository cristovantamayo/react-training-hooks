import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "1rem",
        background: "black",
        color: "white",
      }}
      className="Menu"
    >
      <Link to="/">Home</Link>
      <a href="/">Home (A)</a>
      <Link to="/abc">Abc</Link>
      <a href="/abc">Abc (A)</a>
    </nav>
  );
};
