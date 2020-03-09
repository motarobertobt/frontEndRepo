import React, { useState } from 'react'
import Reload from '../form/index'
import Login from '../login/index'
import Teste1 from '../teste/index1'
import Teste2 from '../teste/index2'
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = (props) => {

    const loggedIn = props.logged

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route  exact path='/' component={loggedIn ? Teste1 : Teste2}/>
                </Switch>
            </BrowserRouter> 
        </div>
    )

}


export default Routes