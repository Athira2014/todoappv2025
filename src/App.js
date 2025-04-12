import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import TodoForm from './components/TodoForm';

function App() {

  /*const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: 'Feed puppy',
      rowAssigned: 'User One'
    },
    {
      rowNumber: 2,
      rowDescription: 'Water plants',
      rowAssigned: 'User Two'
    },
    {
      rowNumber: 3,
      rowDescription: 'Make Dinner',
      rowAssigned: 'User Three'
    },
    {
      rowNumber: 4,
      rowDescription: 'Charge mobile',
      rowAssigned: 'User four'
    }
  ]); */

  const [showTodoForm, setShowTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One' },
    { rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One' }
  ]
  );
  
  const addTodo = (description, assigned) => {

    let rowNumber = 0;
    rowNumber = todos.length > 0 ? todos[todos.length - 1].rowNumber : 1;
    const newTodos = ({
      rowNumber : rowNumber,
      rowDescription : description,
      rowAssigned : assigned
    });

    setTodos(todos => [...todos, newTodos]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {

    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your ToDos
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo = {deleteTodo}/>
          <button className='btn btn-primary' onClick={() => setShowTodoForm(!showTodoForm)}>
              {showTodoForm ? 'Close Todo' : 'Add Todo'}
          </button>
          {showTodoForm && <TodoForm addTodo = {addTodo}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
