import React from 'react'
import './Spinner.css'

const Spinner = () => {
    return (
        <div className="parent_box">
            <h1>Fill the Registration form to display details</h1>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Spinner