function TaskList({ tareas, onDeleteTask }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tareas.map((tarea) => (
        <li
          key={tarea.id}
          style={{
            background: '#fff',
            marginBottom: '10px',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <span>{tarea.texto}</span>
          <button
            onClick={() => onDeleteTask(tarea.id)}
            style={{
              background: 'red',
              color: 'white',
              border: 'none',
              padding: '5px'
            }}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
