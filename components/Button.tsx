'use client'

import React from "react"



function Button({ text, onClick, style }) {
    return (
        <button
            onClick={onClick}
            style={style}
        >
            {text}

        </button>
    )

}


export default Button;