import React, { Component } from 'react';
import './App.css';
import List from './Todo/TodoList'
import Car from './Car/Car'
import Par from './Par/Par'


class App extends Component {
  //state хринит состояния обекта, здесь зранить все данные
  state = {
    cars: [{name: 'audi', age: "2000"},
             {name: 'reno', age : "1980"},
             {name: 'pego', age : "2001"}],
    buttonTitle : 'click me',
    buttonPaps: 'click me',
    pars: [{name: 'audi pars', age:' 2000 p'},
            {name: 'reno pars', age: '1980 p'},
          {name: 'pego pars', age: '2001 p'}]
  }

  //создаем свою функцию (которая будет методом  нашего компонента)
  superFn = () => {
    const oldButtonTitle = this.state.buttonTitle;
    const newButtonTitle = oldButtonTitle + '( new)'
    this.setState({
      buttonTitle: newButtonTitle
    })
    // метод setState отвечает за состояние внутри компонента
  }
  superFn2 = (title) => {
    this.setState({
      buttonPaps: title
    })
  }
  render(){
    let arr = [
      {id:1, competed: false, title:'купить хлеба'},
      {id:2, competed: false, title:'купить молока'},
      {id:3, competed: false, title:'купить пиццу'},
  
    ]
    // в методе render мы записываем переменную, которая хранится в нашем state, в компоненте Car будем правильно передавать значение
    const arrCars = this.state.cars
    const arrPars = this.state.pars
    return (
      <div className='Wrapper'>
        <div>
          <h1>react totorial</h1>
          <List arr = {arr} ></List>
        </div>
        <div className='Cars'>
          <Car name = {arrCars[0].name} age = {arrCars[0].age}></Car>
          <Car name = {arrCars[1].name} age = {arrCars[1].age}><p>tes paragraf</p></Car>
          <Car name = 'pego' age = '2001'></Car>
          <button onClick={this.superFn}>{this.state.buttonTitle}</button>
        </div>
        <div className ='Pars'>
        <Par name={arrPars[0].name} age={arrPars[0].age} sobitie = {this.superFn2.bind(this, arrPars[0].name)}></Par>
        <Par name={arrPars[1].name} age={arrPars[1].age} sobitie = {this.superFn2.bind(this, arrPars[1].name)}></Par>
        <Par name={arrPars[2].name} age={arrPars[2].age} sobitie = {() => this.superFn2(arrPars[2].name)}></Par>
          <button onClick={this.superFn2.bind(this, 'new click')}>
            {this.state.buttonPaps}
          </button>
        </div>
      </div>
    );
  }
  // List elem = {arr} мы передали наш массив элементу List
}

export default App;
