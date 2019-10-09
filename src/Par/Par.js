import React from 'react'

export default (props) => (
    <div className='Par'>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <button onClick={props.sobitie}>click</button>
    </div>
)