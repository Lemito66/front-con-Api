import React from "react";

const API_URL = "http://127.0.0.1:8000/api/articulos/";

export const ApiArticulos = async () => {
    return await fetch(API_URL);
};