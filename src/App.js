import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import './App.css';

function App() {
  const [inputValue ,setInputValue] =useState("");
  const [todos,setTodos] = useState([]);
  const [completed,setCompleted] =useState([]);
  
  const addTodo = () =>{
    const updatedTodo = [{todoText: inputValue,id:uuidv1()},...todos]
    setTodos(updatedTodo);
    setInputValue('');
  }

  const deleteTodo = (id) =>{
    console.log(id);
    const filteredTodos = todos.filter((item)=>item.id!==id);
    setTodos(filteredTodos);
  }



  return (<center>
    <div className="app">
     <div className="topic">TO DO APPLICATION</div>
      <center className="task">
        <div><input className='text'  type="text"onChange={(e)=> setInputValue(e.target.value)} value={inputValue} alt="name of work" /></div>
         <button className="btn" onClick={addTodo}>ADD TASK</button>
      </center>
      <div className='taskflex'>
      {todos.map((v)=>{
        return(
          <section className={`tasklist ${completed.includes(v.id) ? 'mark' : ''}`} key={v.id}>
          <div>{v.todoText}</div>
           <section className="btnflex">
               <button className="btndel" onClick={() => deleteTodo(v.id)}>Delete</button>
               <button className="btndone" onClick={()=>{setCompleted([...completed,v.id])}}>Done</button>
           </section>
     </section>
        );}
        )}
      
      </div>
    </div>
    </center>
  );
};

export default App;
