import React from "react"


import './Textarea.css'

const Textarea = ({ label, ...rest}) => {
    return (
        <div className="field">
            <label>{label}</label>
            <textarea {...rest}/>
        </div>
    )
}

export default Textarea;