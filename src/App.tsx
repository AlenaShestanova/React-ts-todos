import React,{useState} from 'react';
import CenteredTabs from "./Components/Header";
import BasicTextFields from "./Components/TodoForm";

 const App:React.FunctionComponent=()=> {

  return (
      <>
<CenteredTabs/>
<div className="container">
<BasicTextFields/>
</div>
      </>
  );
}

export default App;
