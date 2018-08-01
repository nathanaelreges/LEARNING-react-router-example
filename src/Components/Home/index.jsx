import React from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

import Lorem from './Lorem'
import Dolor from './Dolor'
import Ipsum from './Ipsum'

class Home extends React.Component {
   render () {
      return <div className="container mb-3">
         <div className="jumbotron mt-4">
            <h1 className="display-3">Home</h1>
         </div>

         <div className="card">
            <div className="card-header">
               <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/home/lorem" activeClassName="active">Lorem</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/home/ipsum" activeClassName="active">Ipsum</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/home/dolor" activeClassName="active">Dolor</NavLink>
                  </li>
               </ul>
            </div>
            <Switch>
               <Route path='/home/lorem' component={Lorem} />
               <Route path='/home/ipsum' component={Ipsum} />
               <Route path='/home/dolor' component={Dolor} />
               <Redirect from='/home' to='/home/lorem'/>
            </Switch>
         </div>
      </div>
   }
}

export default Home
