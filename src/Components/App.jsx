import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Hello from './Hello'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
   render () {return (
      <BrowserRouter>
         <div>
            <Route path="/" component={Menu} />
            <Switch>
               <Route path="/home" component={Home} />
               <Route path="/about" component={About} />
               <Route path="/hello/:name" component={Hello} />
               <Redirect from='/' to='/home'/>
            </Switch>
         </div>
      </BrowserRouter>
   )}
}

export default App