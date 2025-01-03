import Navbar from "../elements/Navbar";
import style from "../styles/About.module.css";
function About() {
  return (
    <div className="Home">
      <title>CheapFares - About</title>
      <Navbar/>
      <p className = {style.Blue}>About.</p>
    </div>
  );
}



export default About;
