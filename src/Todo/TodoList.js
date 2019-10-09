import React from 'react'
import TodoItem from './TodoItem/TodoItem'

// перый способ  подклбчить стили - создать переменную
let styles = {
    ul : {
        listStyle: 'none',
        margin : 0,
        padding : 0
    }
}
//List принимает обект, мы знаем что у него есть массив arr
// массив иттерируем,
// для якаждого иттерируемого обекта в реакте нужно свой ключ 
// для каждого обекта передадим свой индекс
export default function List(obj){
    return (
        <ul style={styles.ul}>
            {obj.arr.map((item, index) => {
                return <TodoItem obj ={item} key={item.id} index = {index}></TodoItem>
            })}
        </ul>
    )
}