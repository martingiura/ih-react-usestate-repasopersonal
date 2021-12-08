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

      <form
        onSubmit={(event) => {
          agregarComentario(event);
        }}
      >
        <h3>Escribe un titulo</h3>
        <input
          name="title"
          value={comentario.title}
          onChange={(event) => {
            capturarDatos(event);
          }}
        />
        <h3>Escribe una descripcion</h3>
        <input
          name="description"
          value={comentario.description}
          onChange={(event) => capturarDatos(event)}
        />
        <br />
        <br />
        <button>Crear comentario</button>
      </form>

      <hr />

      <h2>Listado de Comentarios</h2>

      {listadoComentarios.map((elem) => {
        return (
          <>
            <h4>{elem.title}</h4>
            <p>{elem.description}</p>
          </>
        );
      })}
    </>
  );
}
export default App;
