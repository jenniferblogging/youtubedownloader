import React from 'react'
import TodoItem from '../Mycomponants/TodoItem';

export default function TodoList({todo,todos}) { 
    let todoLength=(todos)=>{
        if (todos.length===0){
            return(<p>No video/audio found to download!!</p>)
        }
    } 
    return(
        <div className='container'>
        <h3 className='header text-center'>Download Below</h3>
            {todoLength(todos)}
            {todos.map((todo,index)=>{
                todo.Sno=index+1;
                    return (
                        <TodoItem key={todos.indexOf(todo)} todo={todo}/>
                        )
                    })                  
                }
                </div>
                )
                
            }
