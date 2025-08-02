
import  { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
    };
    setTareas([nuevaTarea, ...tareas]);
  };

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((t) => t.id !== id);
    setTareas(nuevasTareas);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', background: '#f1f1f1', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Lista de Tareas</h2>
      <TaskForm onAddTask={agregarTarea} />
      <TaskList tareas={tareas} onDeleteTask={eliminarTarea} />
    </div>
  );
}

export default App;
