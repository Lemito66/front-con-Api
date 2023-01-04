import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../inputText.css";
import * as ArticuloServer from "./ArticuloServer";

const FormularioArticulo = () => {
  const history = useNavigate();
  const params = useParams();
  //console.log(params);

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
    setArticulo({ ...articulo, [event.target.name]: event.target.value }); // Tomar el valor actual y modifica sus valores
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await ArticuloServer.registrarArticulo(articulo);
      const data = await res.json();
      if (data.message === "Exito") {
        setArticulo(initialState);
      }
      }else{
        await ArticuloServer.actualizarArticulo(params.id, articulo);
      }
      
      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getArticulo = async (articuloId) => {
    try {
      const res = await ArticuloServer.getArticulo(articuloId);
      const data = await res.json();
      const {
        //id,
        codigo_articulo,
        nombre_articulo,
        descripcion_articulo,
        cantidad_disponible_del_articulo,
      } = data.manufacture;
      setArticulo({
        //id,
        codigo_articulo,
        nombre_articulo,
        descripcion_articulo,
        cantidad_disponible_del_articulo,
      });
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getArticulo(params.id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* Crear un formulario para 4 campos */}
      <form
        className="shadow-sm p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
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
        <div className="d-grip gap-2">
          {params.id ? (
            <button type="submit" className="btn btn-info">
              Modificar
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Registrar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormularioArticulo;
