import React, { useState } from 'react';
import './App.css';

function App() {
  const [publicaciones, setPublicaciones] = useState([]); // Estado para almacenar las publicaciones
  const [nuevaPublicacion, setNuevaPublicacion] = useState(''); // Estado para el texto de la nueva publicación
  const [nombreUsuario, setNombreUsuario] = useState(''); // Estado para el nombre de usuario

  const handleInputChange = (event) => {
    setNuevaPublicacion(event.target.value);
  };

  const handleNombreUsuarioChange = (event) => {
    setNombreUsuario(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nuevaPublicacion.trim() !== '' && nombreUsuario.trim() !== '') {
      const publicacionConUsuario = `${nombreUsuario}: ${nuevaPublicacion}`;
      setPublicaciones([...publicaciones, publicacionConUsuario]);
      setNuevaPublicacion('');
      setNombreUsuario('');
    }
  };

  return (
    <div className='fondo'>
    <div className="App">
      <header className="App-header">
        <p className='titulo'>
          Blog Universo 25
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre de Usuario:
            <input
              type="text"
              name="nombreUsuario"
              placeholder='Ingrese su nombre de usuario'
              value={nombreUsuario}
              onChange={handleNombreUsuarioChange}
            />
          </label>
          <label>
             ¿Qué queres decir a la gente? :)
            <input
              type="text"
              name="publicacion"
              placeholder='Escribe una publicación'
              value={nuevaPublicacion}
              onChange={handleInputChange}
            />
          </label>
          <input type="submit" value="Publicar" />
        </form>
        </header>
        <div className="publicaciones">
          <h2 className='publis'>Publicaciones:</h2>
          
             {publicaciones.map((publicacion, index) => (
              <li key={index}>{publicacion}</li>
            ))}
          
        </div>
      
    </div>
    </div>

  );
}

export default App;
