import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Menu from './Menu'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
   render () {return (
      <BrowserRouter>
         <div>
            <Menu />
            <Switch>
               <Route path="/home" component={Home} />
               <Route path="/about" component={About} />
               <Route component={Home} />
            </Switch>
         </div>
         
      </BrowserRouter>
   )}
}

export default App