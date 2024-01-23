import { useState } from 'react';
import TodoList from './TodoList';


const todos = [
  {
    id: 0,
    text: 'Comprar pan',
    completed: false
  },
  {
    id: 1,
    text: 'Estudiar React',
    completed: false
  },
  {
    id: 2,
    text: 'Entender .map',
    completed: true
  },
  {
    id: 3,
    text: 'Completar login',
    completed: true
  },
]

function TodoMemo() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <button onClick={() => setTab('all')}>
        Todos
      </button>
      <button onClick={() => setTab('active')}>
        Activos
      </button>
      <button onClick={() => setTab('completed')}>
        Completados
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Modo oscuro
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}

export default TodoMemo