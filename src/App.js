import './App.css';
import { useStore, actions } from './store';
import { useRef } from 'react';

function App() {

  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  const inputRef = useRef()

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }
  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index))
  }

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={todoInput}
        placeholder='Enter..'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>ADD</button>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <span onClick={() => handleDelete(index)}> x</span>
        </li>
      ))}
    </div>
  );
}

export default App;
