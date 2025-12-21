import React from 'react'
import './Title.css'

const Title = ({ name, age, locat }) => {
    return (
        <div className='title'>
            <h2>Name : {name}</h2>
            <h3>Age :{age}</h3>
            <p>Location : {locat}</p>
        </div>
    )
}

export default Title
