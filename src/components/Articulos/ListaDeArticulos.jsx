import React, { useState, useEffect } from "react";

import * as ArticuloServer from "./ArticuloServer";

const ListaDeArticulos = () => {
  const [articulos, setArticulos] = useState([]);

  const articulosLista = async () => {
    try {
      const res = await ArticuloServer.ApiArticulos();
      const data = await res.json();
      setArticulos(data.manufacture);
    } catch (error) {
      console.log(error);
    }
  };

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
              </tr>
            
          ))}
        </tbody>
      </table>
    
  );
};

export default ListaDeArticulos;
