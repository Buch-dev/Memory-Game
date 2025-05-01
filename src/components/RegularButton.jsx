import React from 'react';

const RegularButton = ({ onClick, children, className, disabled }) => {
    return (
        <button
            className={`${className} cursor-pointer`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default RegularButton;