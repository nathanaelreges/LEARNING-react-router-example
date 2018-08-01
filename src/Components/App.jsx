import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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
               <Redirect exact from='/home' to='/home/lorem'/>
               <Route path="/home/:tab" component={Home} />
               <Route path="/about" component={About} />
               <Route path ="/" component={Home} />
            </Switch>
         </div>
         
      </BrowserRouter>
   )}
}

export default App