import React,{useState} from 'react';
import CenteredTabs from "./Components/Header";
import {TodoForm} from "./Components/TodoForm";
import {TodoList} from "./Components/TodoList";
import {ITodo} from './intefaces'

 const App:React.FunctionComponent=()=> {
     const[todos,setTodos]=React.useState<ITodo[]>([])
     const addHandler=(title:string)=>{
         const newTodo:ITodo={
             title:title,
             id:Date.now(),
             completed:false
         }
         setTodos(prev=>[newTodo,...todos])
     }
  return (
      <>
<CenteredTabs/>
<div className="container">
<TodoForm onAdd={addHandler}></TodoForm>
    <TodoList todos={todos}></TodoList>
</div>
      </>
  );
}

export default App;
