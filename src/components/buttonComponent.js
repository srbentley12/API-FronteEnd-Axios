import React from 'react';

function ButtonComponent({val, buttonHandler}) {

    return (
        <button className="buttonComp" value={val} onClick={(event => {
            console.log(event);
            buttonHandler(event.target.value);
        })}>
            {val}
        </button>
    );
}

export default ButtonComponent;