import React, { useState } from 'react';
import './App.css';
import ListaNotas from './ListaNotas';
import FormularioNotas from './FormularioNotas';

function App() {
  const [notas, setNotas] = useState([]);

  const agregarNota = (nuevaNota) => {
    setNotas([...notas, nuevaNota]);
  };

  const editarNota = (id, nuevoContenido) => {
    const nuevasNotas = notas.map((nota) =>
      nota.id === id ? { ...nota, contenido: nuevoContenido } : nota
    );
    setNotas(nuevasNotas);
  };

  const eliminarNota = (id) => {
    const nuevasNotas = notas.filter((nota) => nota.id !== id);
    setNotas(nuevasNotas);
  };

  const marcarFavorita = (id) => {
    const nuevasNotas = notas.map((nota) =>
      nota.id === id ? { ...nota, esFavorita: !nota.esFavorita } : nota
    );
    setNotas(nuevasNotas);
  };

  return (
    <div className="App">
      <h1>Aplicación de Notas</h1>
      <FormularioNotas agregarNota={agregarNota} />
      <ListaNotas
        notas={notas}
        editarNota={editarNota}
        eliminarNota={eliminarNota}
        marcarFavorita={marcarFavorita}
      />
    </div>
  );
}

export default App;
