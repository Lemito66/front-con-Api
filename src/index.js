import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
//Components
import NavBar from "./components/NavBar/NavBar";
import ListaDeArticulos from "./components/Articulos/ListaDeArticulos";
import FormularioArticulo from "./components/Articulos/FormularioArticulo";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <div className="container my-4">
          <Routes>
            <Route exact path="/" element={<ListaDeArticulos />} />
            <Route
              path="/formularioArticulo"
              element={<FormularioArticulo />}
            />
            <Route exact path="/modificarArticulo/:id" element={<FormularioArticulo />} />
          </Routes>
          {/* <ListaDeArticulos /> */}
        </div>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
