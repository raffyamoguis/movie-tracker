import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';

const AppButton = ({ message, onClick, buttonStyle, roundedPill }) => {
    return (
        <Button
            className={`shadow-none ${roundedPill && 'rounded-pill'}`}
            style={buttonStyle}
            onClick={(e) => onClick(e)}
        >
            {message}
        </Button>
    )
}

AppButton.propTypes = {
    message: PropTypes.string,
    onClick: PropTypes.func,
    buttonStyle: PropTypes.object,
    roundedPill: PropTypes.bool,
}

AppButton.defaultProp = {
    roundedPill: false,
}

export default AppButton