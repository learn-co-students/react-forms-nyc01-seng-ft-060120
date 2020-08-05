import React from 'react'


function DisplayData(props) {
    return (
        <div>
            <h1>DisplayData</h1> 
            <h2>{props.formData.firstName}</h2>
            <h2>{props.formData.lastName}</h2>
        </div>
    )
}


export default DisplayData