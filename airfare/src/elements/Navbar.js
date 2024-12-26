import { Link, Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

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
