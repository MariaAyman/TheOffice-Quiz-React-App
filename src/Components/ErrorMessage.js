import React from 'react';

function ErrorMessage({children}) {
    return (
        <div className='error-msg'>
            {children}
        </div>
    );
}

export default ErrorMessage;