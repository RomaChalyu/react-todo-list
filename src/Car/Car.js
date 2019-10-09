import React from 'react'

function Car (props) {
   return(<div className='Car'>
        <p>{props.name.toUpperCase()} </p>
        <p>{props.age}</p>
        {props.children}
    </div>
   )
}

export default Car;