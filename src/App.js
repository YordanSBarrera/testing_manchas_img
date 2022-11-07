import i1 from "./img/i1.png";
import Formulario from "./Formulario";
import CardZone from "./CardZone";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>
          Encabezado<div className="huevo">Huevo</div>
        </h1>
        <br />
        <div className="zonaTest">
        
          <div className="up left">
            <div className="figura1"></div>
          </div>
          <div className="up right">
            <div className="figura2"></div>
          </div>
          <div className="down left">
            <div className="figura3"></div>
          </div>
          <div className="down right">
            <div className="figura4"></div>
          </div>
        </div>
      </header>
      <section>
        <CardZone />
        <img src={i1} alt="mancha1" height="200" width="200" />
      </section>
      <hr />
      <br />
      <footer>
        <Formulario />
      </footer>
    </div>
  );
};

export default App;
