import React from 'react';
import uuid from 'uuid/dist/v4';


const Form = ({inputText,setInputText, setTodos, todos}) => {


    

    const todoTask = (e) => {
        console.log("Hello World I am a new task");
        setInputText(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Enviando datos del form");
        setTodos([
            ...todos,
            {    text: inputText,
                 completed: false, 
                 id: uuid() 
            }
        ])
        setInputText("");
    }

    return ( 
        <form
            onSubmit= {submitForm}
        >
            <input 
            type="text" 
            className="todo-input"
            onChange = {todoTask}
            value= {inputText}
            />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
     );
}
 
export default Form;