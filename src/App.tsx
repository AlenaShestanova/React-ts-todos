import React, {useState, useEffect} from 'react';
import CenteredTabs from "./Components/Header";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {TodoPage} from "./pages/TodoPage";
import {AboutPage} from "./pages/AboutPage";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <CenteredTabs/>
                <div className="container">
                    <Switch>
                        <Route component={TodoPage} path='/' exact></Route>
                        <Route component={AboutPage} path='/about'></Route>

                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
