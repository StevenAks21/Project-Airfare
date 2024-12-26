import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Hey1</Link>
          </li>
          <li>
            <Link to={"/About"}>Hey2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
