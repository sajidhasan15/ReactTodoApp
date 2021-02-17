import React from 'react'

function Todo({ text, todo, todos, setTodos }) {
    //Delete handeler event

    const deleteHandeler = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id));
        // console.log(todo);
    }
    const completehandeler = () =>{
        setTodos(todos.map((item) =>{
            if (item.id === todo.id) {
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : "" } `}>
                {text}
            </li>
                <button onClick={completehandeler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandeler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            
        </div>
    )
}

export default Todo
