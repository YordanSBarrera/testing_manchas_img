import i1 from "./img/i1.png";
import Formulario from "./Formulario";
import CardZone from "./CardZone";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Encabezado</h1>
        <br/>
        <div className="zonaTest">
          1
          <div className="figura1"></div>
          <div className="figura2"></div>
          <div className="figura3"></div>
          <div className="figura4"></div>
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
