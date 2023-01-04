import React from "react";

const API_URL = "http://127.0.0.1:8000/api/articulos/";

export const ApiArticulos = async () => {
  return await fetch(API_URL);
};

export const registrarArticulo = async (nuevoArticulo) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //id: String(nuevoArticulo.id).trim(),
      codigo_articulo: String(nuevoArticulo.codigo_articulo).trim(),
      nombre_articulo: String(nuevoArticulo.nombre_articulo).trim(),
      descripcion_articulo: String(nuevoArticulo.descripcion_articulo).trim(),
      cantidad_disponible_del_articulo: parseInt(
        nuevoArticulo.cantidad_disponible_del_articulo),
    }),
  });
};

export const eliminarArticulo = async (articuloId) => {
    return await fetch(`${API_URL}${articuloId}`, {
      method: "DELETE",
      
    });
  };

