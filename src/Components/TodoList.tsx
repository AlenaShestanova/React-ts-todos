import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Todo} from '../intefaces'


 interface TodoListProps {

    todos: Todo[],
    onToggle(id:number):void,
    onRemove(id:number):void

}

export const TodoList= (props:TodoListProps) => {

    const [checked, setChecked] = React.useState([0]);

    // const handleToggle = (value: number) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];
    //
    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }
    //
    //     setChecked(newChecked);
    // };
if(props.todos.length===0){
    return <p className='pCenter'>Пока дел нет</p>
}
    return (

        <List className='listCenter'>
            {props.todos.map((value, index) => {
                const labelId = `checkbox-list-label-${value.id}`;
                let addClassName;
                if (value.completed) {
                    addClassName = 'line'
                }
                return (
                    <ListItem  key={value.id} role={undefined} dense button
                             >
                        <ListItemIcon >
                            <Checkbox
                                edge="start"
                                checked={value.completed}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{'aria-labelledby': labelId}}
                                onChange={props.onToggle.bind(null,value.id)}
                            />
                        </ListItemIcon>
                        <ListItemText   className={addClassName} id={labelId} primary={value.title}/>
                        <ListItemSecondaryAction>
                            {/*<IconButton edge="end" aria-label="comments">*/}
                                <DeleteIcon onClick={()=>props.onRemove(value.id)}/>
                            {/*</IconButton>*/}
                        </ListItemSecondaryAction>
                    </ListItem>

                );

            })}

        </List>
    );
}