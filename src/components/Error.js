import React from 'react'
import './styles/Error.css'

function Error(props) {
    return (<div className="Error">
        <h1>{props.mensaje}</h1>
    </div>)
}

export default Error