import React, { useState } from 'react'

export default function App()  {

  const [Task,setTask]=useState([]);
  const [newTask,setnewTask]=useState("")




  function addTask(e){
    e.preventDefault();
    let newTsk = {id: Task.length+1,task : newTask}
    setTask([...Task,newTsk]);
    setnewTask("");

  }

  function delTask(id){
    const updatedTask =  Task.filter((task)=> task.id != id);
    setTask(updatedTask)
  }


  function EditTask(id){
    
     //e.preventDefault();
     const oldTask =  Task.find((task)=> task.id == id);
     console.log(oldTask)
     setnewTask(oldTask.task)
     delTask(id)
    addTask(Event)

  }
  return (

    <>
    <form onSubmit={(e)=>addTask(e)}>
    <input type='text' name='task' id='Task' onChange={(e)=>setnewTask(e.target.value)} value={newTask}></input>

<button type='submit' on>Add</button> 

    </form>
    

    <br>
    </br>
{
    Task.map((task)=>(
    <div>
      <p key={task.id}> {task.task}</p>
      <button onClick={()=>EditTask(task.id)}> Edit</button>
      <button onClick={()=>delTask(task.id)}> Delete</button>
      </div>
    ))
}
    </>
  )
}
