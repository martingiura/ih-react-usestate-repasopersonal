import "./App.css";
import React, { useState } from "react";

function App() {
  // A. SE DEFINE UN NUEVO COMENTARIO EN EL FORMULARIO
  const [comentario, setComentario] = useState({
    title: "",
    description: "",
  });

  //B SE DEFINE EL LISTADO DE TODOS LOS COMENTARIOS DE LA APLICACION
  const [listadoComentarios, setListadoComentarios] = useState([]);

  //2. FUNCIONES DEL COMPONENTE

  const generarMensaje = (event) => {
    return console.log("Hola Mundo");
  };

  const capturarDatos = (e) => {
    return setComentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
  };

  // CRUD
  //CREAR

  const agregarComentario = (e) => {
    e.preventDefault();

    setListadoComentarios([...listadoComentarios, comentario]);

    setComentario({
      title: "",
      description: "",
    });
  };

  // RETORNO DEFINIDO AQUI

  return (
    <>
      <button onClick={() => generarMensaje()}> Crear mensaje</button>
      <hr />
      <h2> Crea tu comentario</h2>
    </>
  );
}

export default App;
