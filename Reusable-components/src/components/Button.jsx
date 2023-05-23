import React from 'react';

const Button = ({type, style, children}) => {
    return (
        <button typeof={type} style={style}>{children}</button>
    );
};

export default Button;