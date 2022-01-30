import React from 'react';

const Interactive = ({title, func}) => {
    return (
        <div>
            <button className="btn" onClick={func}>{title}</button>
        </div>
    );
};

export default Interactive;