import React from 'react';

const MyGradientText = ({ children }) => {
    return (
        <span className='bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text'>{children}</span>
    );
};

export default MyGradientText;