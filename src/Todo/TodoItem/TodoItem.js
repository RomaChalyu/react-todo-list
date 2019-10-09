import React from 'react'

//приняли обект, и сразу знаем что у него есть obj,  потому запись {obj}
// у обекта есть метот тайтл, его мы и выбрали/
// приняли еще один параметр его мы назвали index
const TodoItem = ({obj,index}) =>{
    return(
        <li ><strong>{index + 1}</strong>{obj.title}</li>
    )
}
export default TodoItem