import React from 'react';

function Form({inputText, setInputText, todos, setTodos, setStatus}) {
    //Javascript function whatever we need to write here for that my self.

    const inputTextHandeler = (e) =>{
        // console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandeler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000}
        ])
        setInputText("");
    }
    const statusHandler = (e) =>{
        setStatus(e.target.value);
    }
    return (
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandeler} 
                type="text" 
                className="todo-input" 
            />
                <button onClick={submitTodoHandeler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form