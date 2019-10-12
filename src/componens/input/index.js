import React from 'react'
import './styles.css'

class Input extends React.Component {  
    render() {
        return (
        <input onChange ={ (event) => this.props.onChange(event.target.value)} 
         value= { this.props.inputValue } 
        className='input'/>
        )
    }
}

export default Input