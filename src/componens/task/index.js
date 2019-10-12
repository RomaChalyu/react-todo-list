import React from 'react'
import './styles.css'

class Task extends React.Component {
    render() {
        const { id, complete, onChange, deleteTask, title } = this.props 
        return (
        <div className='btnWrapp'>
            <p>{title}</p>
            <button 
                onClick={ () => onChange(id) }
                className={`btn ${complete ? 'complete' : 'notComplete'}`}
            >
                {complete ? 'Complete' : 'Not complete'}
            </button>
            <div className='delete' onClick={() => deleteTask(id)}></div>
        </div>
        )
    }
}

export default Task