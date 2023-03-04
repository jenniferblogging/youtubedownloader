import React from 'react'
import { useState } from "react";

export default function AddTodo({todos,submit}) {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  let Sno;
  let todo;

  if(todos.length===0){
    Sno=1;
  }
  else{
    Sno=todos[todos.length-1].Sno+1;
  }
  todo={
    Sno:Sno,
    Heading:heading,
    Description:description
   }

  return (
    <>
         {/*
         <div className='container'>
      <form className='formContainer my-3' onSubmit={(e)=>{submit(e,todo);
      //setHeading('');
      setDescription(todo.Description);
      }}>
  <div className="form-group my-3 text-center">
    <label htmlFor="textInputHeading"><h1>Youtube Downloader</h1></label>
    <input type="text" className="form-control my-3 form-control-lg" value={heading} placeholder="Enter Youtube URL here" onChange={(e) => setHeading(e.target.value)}/>
    <button type="submit" className="btn btn-primary my-3 btn-lg">Submit</button>
  </div>

    </form>
        </div>*/}
 <div className='container'>
      <form className='formContainer my-3' onSubmit={(e)=>{submit(e,todo);
      //setHeading('');
      setDescription(todo.Description);
      }}>
  <div className="form-group my-3 text-center">
    <label htmlFor="textInputHeading"><h1>Youtube Downloader</h1></label>
    <input type="text" className="form-control my-3 form-control-lg" value={heading} placeholder="Enter Youtube URL here" onChange={(e) => setHeading(e.target.value)}/>
    <button type="submit" className="btn btn-primary my-3 btn-lg">Submit</button>
  </div>

    </form>
        </div>
</>

  
  )
}
