import React, {useEffect, useState} from 'react';
import './todoList.css';


function TodoList () {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  
  const [inputValue, setInputValue] = useState('')

  // Store user todo list items in local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  
  function handleChange(e){
    setInputValue(e.target.value)
  }

  
  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue('')
  }
  
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Make form for user to input todo items
  return (
    <div>
      <h1>Todo List / Practice Goals</h1>
      <form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <button className = 'addTodo' onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo,index) => (
          <li key={index}>{todo}
           <button className = 'deleteTodo' onClick ={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
