import React from 'react'
import Input from '../../componens/input'
import Task from '../../componens/task'
import './style.css'


class Home extends React.Component {
    state = {
        tasks: [
            {id: 1, title: 'do home work', complete: false, buttonClass: ''},
            {id: 2, title: 'do dish', complete: true, buttonClass: 'active'},
            {id: 3, title: 'learn react', complete: false, buttonClass: ''}   
        ],
    }

    toggleTask = (id) => {
        const newTasks = this.state.tasks.map(t => {
            if(t.id === id){
                t.buttonClass === 'active' ? t.buttonClass='': t.buttonClass='active';
                return {...t, complete: !t.complete}
            }
            else{
                return {...t}
            }
        })
        this.setState(
            {
                tasks: newTasks
            }
        )
    }

    render(){
        return (
            <div className='wrapp'>
                <div className='wrapper'>
                    <div>Todo list</div>
                    <div className='input'>
                        <Input />
                        <button>add</button>
                    </div>
                {
                    this.state.tasks.map((task) => {
                        return (
                            <Task 
                                title={task.title} 
                                complete={task.complete}
                                key={task.id} 
                                id={task.id} 
                                onChange={this.toggleTask}
                                btnClass = {task.buttonClass}
                            />
                            )
                        })  
                    }    
                </div>
            </div>
        )
    }
}

export default Home;

