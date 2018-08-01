import React from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

import Lorem from './Lorem'
import Dolor from './Dolor'
import Ipsum from './Ipsum'

class Home extends React.Component {
   render () {
      const renderTabs = () => {
         const tab = this.props.match.params.tab
         if(tab == 'lorem') {
            return <Lorem />
         }
         else
         if(tab == 'ipsum') {
            return <Ipsum />
         }
         else
         if(tab == 'dolor') {
            return <Dolor />
         }
      }

      return <div className="container mt-5 mb-5">
         <div className="jumbotron">
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
            {renderTabs()}
         </div>
      </div>
   }
}

export default Home