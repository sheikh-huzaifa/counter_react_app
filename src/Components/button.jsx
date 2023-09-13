import React, { useState } from 'react';
import PropTypes from 'prop-types'



const Button = props => {
    
        
    
    
  return (
    <button type="button" className= {`btn ${props.color}`} onClick={props.handler} style={{width:"120%"}}>{props.text}</button>
  )
}

Button.propTypes = {
    color: PropTypes.string ,
    text: PropTypes.string
}

export default Button