import { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();

    if (nuevaTarea.trim() === ''){
      alert('Por favor, escribí una tarea antes de agregarla.');
      return;
    } 

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
    };

    setTareas([tarea, ...tareas]);
    setNuevaTarea('');
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(t => t.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', background: '#f1f1f1', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Lista de Tareas</h2>

      <form onSubmit={agregarTarea} style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Escribí una tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          style={{ flex: 1, padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Agregar</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map((tarea) => (
          <li key={tarea.id} style={{ background: '#fff', marginBottom: '10px', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <span>{tarea.texto}</span>
            <button onClick={() => eliminarTarea(tarea.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '5px' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
