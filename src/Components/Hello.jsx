import React from 'react'

const About = props => (
   <div className="jumbotron">
      <h1 className="display-3">
         Hello <small>{props.match.params.name}</small>
      </h1>
   </div>
)

export default About