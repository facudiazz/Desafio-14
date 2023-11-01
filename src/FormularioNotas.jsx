import React, { useState } from 'react';

function FormularioNotas({ agregarNota }) {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!titulo.trim() || !contenido.trim()) {
      setError("El título y el contenido no pueden estar vacíos.");
      return;
    }

    const nuevaNota = {
      id: Date.now(),
      titulo,
      contenido,
      esFavorita: false,
    };
    agregarNota(nuevaNota);
    setTitulo('');
    setContenido('');
    setError(''); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />
        <button type="submit">Agregar Nota</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default FormularioNotas;
