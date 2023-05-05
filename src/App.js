import "./App.css";
import Clock from "./images/icon-clock.svg";
import Logo from "./images/icon-ethereum.svg";
import Imag from "./images/image-avatar.png";
import pic from "./images/pic.jpg";
function App() {
  return (
    <div className="all">
      <div className="App">
        <div className="first"></div>
        <img src={pic} width={280} height={280} className="imag" alt="imag" />
        <p className="par1">Equilibrium #3429</p>
        <p className="par2">
          Our Equilibrium collection promotes balance and calm .{" "}
        </p>
        <div className="line">
          <span className="one">
            <img src={Logo} className="logo" width={9} alt="logo" />
            <span className="eth">0.041 ETH</span>
          </span>
          <span className="days">
            <img src={Clock} className="clock" width={15} alt="clock" />
            <span className="dy">3 days left</span>
          </span>
        </div>
        <hr />
        <img src={Imag} alt="pic" width={40} className="pic" />
        <span className="creation">
          Creation of <span className="me"> Sehabi Sirine</span>
        </span>
      </div>
    </div>
  );
}

export default App;
