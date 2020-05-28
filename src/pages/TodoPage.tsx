import React, {useEffect} from 'react'
import {TodoForm} from "../Components/TodoForm";
import {TodoList} from "../Components/TodoList";
import {ITodo} from "../intefaces";
export const TodoPage:React.FC=()=>{
    const[todos,setTodos]=React.useState<ITodo[]>([])
    useEffect(()=>{
        const saved=JSON.parse(localStorage.getItem('todos')||'[]') as ITodo[]
        setTodos(saved)
    },[])
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
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
    return(
        <>
        <TodoForm onAdd={addHandler}></TodoForm>
        <TodoList  todos={todos} onToggle={toggleHandler} onRemove={removeHandler}></TodoList>
            </>
    )
}