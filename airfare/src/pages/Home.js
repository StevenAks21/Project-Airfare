import Navbar from "../elements/Navbar";
import style from "../styles/Home.module.css";

function Home() {
  return (
    <div className="Home">
      <title>CheapFares - Home</title>
      <Navbar/>
      <p className = {style.Red}>Welcome to DailyFares.</p>
      <p className = {style.Red}>Hello there!</p>
    </div>
  );
}



export default Home;
