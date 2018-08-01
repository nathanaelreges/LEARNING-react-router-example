import React from 'react'
import { NavLink, Link, Redirect } from 'react-router-dom'

class Menu extends React.Component { 
   constructor (props) {
      super(props)

      this.state = {search: '', redirect: ''}

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getRedirection = this.getRedirection.bind(this)
   }
   
   handleChange (e) {
      this.setState({search: e.target.value})
   }

   handleSubmit (e) {
      this.setState({redirect: this.state.search})
      e.preventDefault()
   }

   componentDidUpdate() {
      if(this.state.redirect != ''){
         this.setState({ redirect: '' })
      }
   }

   getRedirection () {
      const str = this.state.redirect || ''
      const trimedStr = str.trim()
      const url = '/hello/' + trimedStr
      return trimedStr? <Redirect push to={url} /> : undefined
   }
   
   render () {return (
      <nav className="navbar navbar-expand navbar-dark bg-primary">
         {this.getRedirection()}   

         <Link to='/' className="navbar-brand">Navbar</Link>
         <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
               <li className="nav-item">
                  <NavLink to='/home' className="nav-link" activeClassName="active">
                     Home
                  </NavLink>
               </li>
               <li className="nav-item">
                  <NavLink to='/about' className="nav-link" activeClassName="active">About</NavLink>
               </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
               <input className="form-control mr-sm-2" type="text" value={this.state.search}
                  placeholder="Hello..." onChange={this.handleChange}
               />
            </form>
         </div>
      </nav>
   )}
}

export default Menu