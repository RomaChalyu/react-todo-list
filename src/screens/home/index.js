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
        newTask: {title: ''},
        InputTextMessage: '',
        inputValue: '',
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
        const { tasks, newTask } = this.state;
        const newTasks = [...tasks];
        const newStr = newTask.title.split(' ').filter(item => !!item).join(' ');
        let lastItem;
        tasks.length > 0 ? lastItem = tasks[tasks.length -1].title : lastItem = '';
        if(newStr && newStr !== lastItem && newStr.length < 26){
            newTask.title = newStr
            newTasks.push(newTask)
            this.onChangeInput()
            this.setState(
                {
                    tasks: newTasks,
                }
            )
        }
        else if(newStr === lastItem){
                this.setState({
                    InputTextMessage: 'Task with the same name already exists!'
                })
        }
        else if (newStr.length >= 26){
            this.setState({ 
                InputTextMessage : 'Task name is too long!'
            })
        }
        else{
            this.setState({ 
                InputTextMessage : 'Cannot create an empty task!'
            })
        }
    }

    onChangeInput = (str) => {
        this.setState({
            inputValue: ''
        })
    }

    onChange = (str) => {
        const leng = this.state.tasks.length + 1;
        const task = {id: leng, title: str, complete: false}
        this.setState(
            {
                newTask: task,
                inputValue: str
                
            }
        )
    }

    deleteTask = (taskId) =>{
        const { tasks } = this.state;
        
        const newTasks = tasks.filter((task) => task.id !== taskId )
        this.setState({
            tasks: newTasks,
        })
    }

    render(){
        const { tasks, InputTextMessage, inputValue } = this.state  // { tasks: [], newTask:{}}
        return (
            <div className='wrapp'>
                <div className='wrapper'>
                    <h1 className='title'>Todo list</h1>
                    <div className='input-container'>
                        <Input onChange={this.onChange} inputValue={inputValue} onChangeInput={this.onChangeInput} />
                            <button className="btnAdd" onClick={()=>{this.addTask()} }>add</button>
                            <p className={InputTextMessage ? 'unhidden' : 'hidden'}>{InputTextMessage}</p>
                    </div>
                {
                    tasks.map((task) => {
                        return (
                            <Task 
                                title={task.title} 
                                complete={task.complete}
                                key={task.id} 
                                id={task.id} 
                                onChange={this.toggleTask}
                                deleteTask={this.deleteTask}
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
