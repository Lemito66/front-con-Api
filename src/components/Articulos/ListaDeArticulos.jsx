import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

import * as ArticuloServer from "./ArticuloServer";

const ListaDeArticulos = () => {
  const [articulos, setArticulos] = useState([]);
  const history = useNavigate();

  const articulosLista = async () => {
    try {
      const res = await ArticuloServer.ApiArticulos();
      const data = await res.json();
      setArticulos(data.manufacture);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (articuloId) => {
    await ArticuloServer.eliminarArticulo(articuloId);
    articulosLista();
  }

  useEffect(() => {
    articulosLista();
  }, []);
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Código Articulo</th>
          <th scope="col">Nombre Articulo</th>
          <th scope="col">Descripción Articulo</th>
          <th scope="col">Cantidad Disponible del Articulo</th>
          <th scope="col">Actualizar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {articulos.map((articulo) => (
          <tr>
            <th scope="row">{articulo.id}</th>
            <td>{articulo.codigo_articulo}</td>
            <td>{articulo.nombre_articulo}</td>
            <td>{articulo.descripcion_articulo}</td>
            <td>{articulo.cantidad_disponible_del_articulo}</td>
            <td><button
                className="btn btn-info my-2"
                onClick={() => history(`/modificarArticulo/${articulo.id}`	)}
              >Modificar</button></td>
            <td>
              <button
                className="btn btn-danger my-2"
                onClick={() => articulo.id && handleDelete(articulo.id)}
              >Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaDeArticulos;
