import React, { useState } from 'react';

function ListaNotas({ notas, editarNota, eliminarNota, marcarFavorita }) {
  const [notaEditando, setNotaEditando] = useState(null);
  const [nuevoContenido, setNuevoContenido] = useState('');

  const handleEditarClick = (nota) => {
    setNotaEditando(nota);
    setNuevoContenido(nota.contenido);
  };

  const handleCancelarEdicion = () => {
    setNotaEditando(null);
  };

  const handleGuardarEdicion = () => {
    if (notaEditando && nuevoContenido.trim() !== '') {
      editarNota(notaEditando.id, nuevoContenido);
      setNotaEditando(null);
    }
  };

  return (
    <div>
      <ul>
        {notas.map((nota) => (
          <li key={nota.id} className={nota.esFavorita ? 'li-favorita' : ''}>
            <h3>{nota.titulo}</h3>
            {notaEditando === nota ? (
              <textarea
                value={nuevoContenido}
                onChange={(e) => setNuevoContenido(e.target.value)}
              />
            ) : (
              <p>{nota.contenido}</p>
            )}
            <div className="buttons">
              {notaEditando === nota ? (
                <>
                  <button onClick={handleGuardarEdicion}>Guardar Cambios</button>
                  <button onClick={handleCancelarEdicion}>Cancelar Edición</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditarClick(nota)}>Editar</button>
                  <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
                </>
              )}
              <button onClick={() => marcarFavorita(nota.id)}>
                {nota.esFavorita ? 'Desmarcar Favorita' : 'Marcar Favorita'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNotas;
