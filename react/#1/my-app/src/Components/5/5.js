import React from 'react';
import ReactDOM from 'react-dom';

import './5.css';
import BoxData from './boxes.js';
import Box from './Box.js';

function Div_5() {

    const [Boxes, setBoxes] = React.useState(BoxData);
    const BoxElements = Boxes.map(element => (
        <Box 
            key={element.id} 
            id={element.id} 
            on={element.on} 
            switchColor={switchColor}
        />
    ))

    function switchColor(id) {
        setBoxes(prevBoxes => {
            return prevBoxes.map(element => (
                element.id === id ? {...element, on: !element.on} : element
            ))
        })
    }

    return (
        <div className='Div-5'>
            {BoxElements}
        </div>
    )
}

export default Div_5
