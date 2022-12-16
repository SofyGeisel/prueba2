import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import Detalles from "./views/Detalles";


function App() {
  return( 
    <div className="App">
      <Navbar />
  <Routes>
  <Route path= "/" element={<Home />} />
  <Route path= "/detalles" element={<Detalles />} />
  <Route path= "/carrito" element={<Carrito />} />
  
  </Routes>
  </div>
  )
}

export default App;
