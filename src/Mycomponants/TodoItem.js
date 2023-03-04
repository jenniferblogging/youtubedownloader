import React from 'react';
import TodoItempart from '../Mycomponants/TodoItempart';

export default function TodoList(props) {
  let newDescription;
  let newList;
  let catchError='';

  try{
  newDescription = JSON.parse(props.todo.Description);
  newList = newDescription.list;
  }
  catch{
    catchError='Error'
  }
  return (
    <div className='container my-3'>
      {catchError.includes('Error')?<div className='container'>{props.todo.Description.includes('Loading Please wait..')?<><div className="spinner-grow text-primary" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-light" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="sr-only"></span>
</div></>:props.todo.Description}</div>:newList.map((newJson) => {
        return (
          <TodoItempart key={newList.indexOf(newJson)} newJson={newJson}  newDescription={newDescription}/>
        )
      })}

    </div>
  )

}
