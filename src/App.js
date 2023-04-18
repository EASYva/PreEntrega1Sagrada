import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/Nav/Nav";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria" element={<ItemListContainer />} />
          <Route path="/detalle" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<h1>CARRITO</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
