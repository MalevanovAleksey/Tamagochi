import React from 'react';

const Characteristic = ({title, progress, color}) => {
   
    const divStyle = {
        background: 'linear-gradient(to right,' + color + ' ' + progress +'%, transparent ' + progress +'%)',
    }
    console.log(color)
    return (
        <div className="containerBar">
            <div className="progressBarText">{title}</div>
            <div className="progressBar" style={divStyle}> </div>
        </div>
    );
};
export default Characteristic;