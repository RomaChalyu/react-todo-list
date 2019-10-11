import React from 'react'
import Input from '../../componens/input'
import Task from '../../componens/task'
import './style.css'


class Home extends React.Component {
    state = {
        tasks: [
            {id: 1, title: 'do home work', complete: false},
            {id: 2, title: 'do dish', complete: true},
            {id: 3, title: 'learn react', complete: false},   
        ],
        newTask : {title: null},
        InputShowMessage: 'hidden',
        InputTextMessage : '',
    }

    toggleTask = (id) => {
        const newTasks = this.state.tasks.map(t => {
            if(t.id === id){
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
    addTask = () => {
        const arrTask = this.state.tasks  ;  
        let newStr = this.state.newTask.title.split(' ').join('');
        const lastItem = this.state.tasks[this.state.tasks.length -1].title;
        if(newStr && newStr !== lastItem){
            arrTask.push(this.state.newTask)
            this.setState(
                {
                    InputShowMessage : 'hidden',
                    tasks: arrTask
                }
            )
        }
        else if(newStr === lastItem){
            (() => {
                this.setState({
                    InputShowMessage: 'unhidden',
                    InputTextMessage: 'Task with the same name already exists!'
                })
            })();
        }
        else{
            (() => {
                this.setState({ 
                    InputShowMessage: 'unhidden',
                    InputTextMessage : 'Cannot create an empty task!'
                })
            })();
        }
    }

    onChange = (str) => {
        const leng = this.state.tasks.length + 1;
        const task = {id: leng, title: str, complete: false}
        this.setState(
            {
                newTask: task
            }
        )
    }

    render(){
        return (
            <div className='wrapp'>
                <div className='wrapper'>
                    <h1 className='title'>Todo list</h1>
                    <div className='input-container'>
                        <Input onChange={this.onChange}/>
                            <button className="btnAdd" onClick={()=>{this.addTask()} }>add</button>
                            <p className={this.state.InputShowMessage}>{this.state.InputTextMessage}</p>
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
