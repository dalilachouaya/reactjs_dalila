import React from "react";
import "./index.css";
import Cards from "./Components/Cards";
import Forms from "./Components/Forms";
import Carousels from "./Components/Carousels";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Navbars from "./Components/Navbars";

function App() {
  return (
    <div className="App">
      <header>
        <Navbars />
        </header>
        <body>
            <Carousels/>
            <Forms />
            <Cards/>
            
        </body>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}
export default App;
