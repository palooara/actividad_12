
import  { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [texto, setTexto] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();
    if (texto.trim() === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }
    onAddTask(texto);
    setTexto('');
  };

  return (
    <form onSubmit={agregarTarea} style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Escribí una tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{ flex: 1, padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Agregar</button>
    </form>
  );
}

export default TaskForm;
