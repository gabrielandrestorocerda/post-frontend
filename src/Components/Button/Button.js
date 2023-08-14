import React from "react"


import './Button.css'

const Button = ({ children, klass, onClick }) => {
    return (
        <button className={klass} onClick={onClick}>{children}</button>
    )
}

export default Button;