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
     const toggleHandler=(id:number)=>{
         setTodos(prev=>prev.map(todo=>{
             if(todo.id===id){
                 todo.completed=!todo.completed
             }
             return todo
         }))
     }
     const removeHandler=(id:number)=>{
         setTodos(prev=>prev.filter(todo=>todo.id!==id))
     }
  return (
      <>
<CenteredTabs/>
<div className="container">
<TodoForm onAdd={addHandler}></TodoForm>
    <TodoList  todos={todos} onToggle={toggleHandler} onRemove={removeHandler}></TodoList>
</div>
      </>
  );
}

export default App;
