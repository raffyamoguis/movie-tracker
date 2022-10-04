import React from 'react'

const headLineStyle = {
    font: "'Lato', sans-serif",
    color: "#00473e",
}

const Headline = ({ text }) => {
    return (
        <h2
            style={headLineStyle}
            className='mt-5'>{text}</h2>
    )
}

export default Headline