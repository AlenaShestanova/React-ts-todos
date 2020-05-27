import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {ITodo} from '../intefaces'


interface TodoListProps {

    todos: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = (props) => {

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List className='listCenter'>
            {props.todos.map((value,index) => {
                const labelId = `checkbox-list-label-${value.id}`;

                return (
                    <ListItem key={value.id} role={undefined} dense button onClick={handleToggle(index)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={value.completed}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value.title}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments">
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );

            })}
        </List>
    );
}