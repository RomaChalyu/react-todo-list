import React from 'react'
import './styles.css'

class Input extends React.Component {
      input(event) {
        return this.props.onChange(event.target.value)
      }
    
    render() {
        return (
        <input onChange ={(event) => this.input(event)} className='input'/>
        )
    }
}

export default Input