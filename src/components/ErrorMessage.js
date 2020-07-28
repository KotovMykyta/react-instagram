import React from 'react'
import img from '../error.png'

const ErrorMessage = () => {
    return(
        <>
            <p>Unfortunately servise is not available now :(</p>
            <img src={img} alt="error"></img>
        </>
    )
}

export default ErrorMessage; 