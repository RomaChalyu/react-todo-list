import React from 'react'
import './styles.css'

class Task extends React.Component {
    render() {
        return (
        <div>
            <p>{this.props.title}</p>
            <button 
                onClick={ () => this.props.onChange(this.props.id)}
                className={this.props.btnClass}
            >
                {this.props.complete ? 'Complete' : 'Not complete'}
            </button>
        </div>
        )
    }
}

export default Task