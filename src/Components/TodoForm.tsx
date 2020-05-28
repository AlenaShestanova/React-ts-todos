import React,{useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


interface TodoFormProps{
    onAdd(title:string):void
}
export const TodoForm=(props:TodoFormProps)=> {
const [title,setTitle]=React.useState<string>('')
const changeHandler=(e:string)=>{
    setTitle(e)
}

const keyPressHandler=(event:React.KeyboardEvent)=>{
    if(event.key==='Enter'){
        event.preventDefault()
        props.onAdd(title)
        //console.log(title)
        setTitle('')
    }
}
    return (
        <form className='inp' noValidate autoComplete="off">
            <TextField value={title} onChange={(event)=>changeHandler(event.target.value)} onKeyPress={keyPressHandler} id="standard-basic" label="Введите название дела" />

        </form>
    );
}