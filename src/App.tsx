import React,{useState} from 'react';
import CenteredTabs from "./Components/Header";
import {TodoForm} from "./Components/TodoForm";

 const App:React.FunctionComponent=()=> {

  return (
      <>
<CenteredTabs/>
<div className="container">
<TodoForm></TodoForm>
</div>
      </>
  );
}

export default App;
