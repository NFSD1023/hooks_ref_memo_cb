import { useMemo } from 'react';
import './todo.css'

function TodoList({ todos, theme, tab }) {
  const visibleTodos = useMemo(() => {
    return filterTodos(todos, tab);
  }, [todos, tab])

  return (
    <div className={theme}>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ?
              <s>{todo.text}</s> :
              todo.text
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

function filterTodos(todos, tab) {
  console.log('starting slow process');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // No hacer nada durante 500 ms para emular un código extremadamente lento
  }
  console.log('finishing slow process');

  return todos.filter(todo => {
    if (tab === 'all') {
      return true;
    } else if (tab === 'active') {
      return !todo.completed;
    } else if (tab === 'completed') {
      return todo.completed;
    }
  });
}

export default TodoList