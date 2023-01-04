import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import "../../inputText.css";
import * as ArticuloServer from "./ArticuloServer";


const FormularioArticulo = () => {

  const history = useNavigate();
  
  const initialState = {
    id: 0,
    codigo_articulo: "",
    nombre_articulo: "",
    descripcion_articulo: "",
    cantidad_disponible_del_articulo: 0,
  };
  const [articulo, setArticulo] = useState(initialState);

  const handleInputChange = (event) => {
    /* console.log(event.target.name);
    console.log(event.target.value); */
    setArticulo({...articulo, [event.target.name]: event.target.value}); // Tomar el valor actual y modifica sus valores
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let res;
      res = await ArticuloServer.registrarArticulo(articulo);
      const data = await res.json();
      if (data.message === "Exito") {
        setArticulo(initialState);
      }
      history('/');
    } catch (error) {
      console.log(error);
    }
    
  };

  
  return (
    <div>
      {/* Crear un formulario para 4 campos */}
      <form className="shadow-sm p-3 mb-5 bg-body rounded" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNombre"
            aria-describedby="emailHelp"
            required
            placeholder="Nombre del artículo"
            value={articulo.nombre_articulo}
            onChange={handleInputChange}
            name="nombre_articulo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Código
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNombre"
            aria-describedby="emailHelp"
            required
            placeholder="Código del artículo"
            value={articulo.codigo_articulo}
            onChange={handleInputChange}
            name="codigo_articulo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNombre"
            aria-describedby="emailHelp"
            required
            placeholder="Descripción del artículo"
            value={articulo.descripcion_articulo}
            onChange={handleInputChange}
            name="descripcion_articulo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Cantidad Inicial
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputNombre"
            aria-describedby="emailHelp"
            required
            placeholder="Nombre del artículo"
            value={articulo.cantidad_disponible_del_articulo}
            onChange={handleInputChange}
            name="cantidad_disponible_del_articulo"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioArticulo;
