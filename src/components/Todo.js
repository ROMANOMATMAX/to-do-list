import React from 'react';

const Todo = ({todo, todos, setTodos}) => {
   console.log(todo);
   const {text, completed, id} = todo;

    //Events
    const deleteHandler = (e)=> {
        console.log(e.target);
        console.log(todo);//React es tan inteligente que ya sabe a que todo hace referencia cuando ocurre el evento
        const modifiedTodos = todos.filter(task => task.id !== todo.id)
        setTodos(modifiedTodos)

    }

    const completeHandler = (e) => {
      setTodos(todos.map( item => {
        if(item.id === todo.id) {
            return {
                ...item,
                completed: !item.completed
            }
        }
        return item
    }))  
    }


    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button 
            className="complete-btn"
            onClick={completeHandler}
            >
                <i className="fas fa-check"></i>
            </button>
            <button 
            className="trash-btn"
            onClick={deleteHandler}
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
      );
}
 
export default Todo;