import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {


  //states


  //Este es el estado que representa un todo individual
  const [inputText, setInputText] = useState(""); //dado que tengo mi estado declarado aqui podre utilizarlo en toda la app

  //Este es el estado donde agrupamos los todo
  const [todos, setTodos]= useState([]);

  return (
    <div className="App">
      <header>
        <h1>Mati's TOdo List</h1>
      </header>
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList 
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
