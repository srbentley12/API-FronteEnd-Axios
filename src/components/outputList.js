import React from 'react';

function OutputList({data, searchString, activeApi}) {
    return (
        <ul className="dataResult">

            {/*Special output case for cats - pictures are rendered so an <img> had to be added.*/}
            {activeApi === "cats" && data[activeApi] && data[activeApi].filter(data => data.toLowerCase().includes(searchString.toLowerCase())).map((dataPoint, index) => (
                 <li className="dataItem" key={index}><img src={dataPoint}/></li>
            ))}

            {activeApi !== "cats" && data[activeApi] && data[activeApi].filter(data => data.toLowerCase().includes(searchString.toLowerCase())).map((dataPoint, index) => (
                <li className="dataItem" key={index}>{dataPoint}</li>
            ))}
        </ul>
    );
}

export default OutputList;