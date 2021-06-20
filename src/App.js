import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>FELIZ DIA DEL PADRE!</h1>

      <img
        className="dark"
        src="https://i.pinimg.com/564x/08/eb/5e/08eb5e9465ab3d65f406f852e5e35ad6.jpg"
        alt="imagen"
      />
      <Link to="/cards" className="bn31" href="/">
        <span className="bn31span">Sigue</span>
      </Link>
    </div>
  );
}

export default App;
