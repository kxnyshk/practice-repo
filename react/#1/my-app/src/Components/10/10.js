import React from 'react';
import ReactDOM from 'react-dom';

import './10.css';
import WinTrack from './WinTrack.js'

function Div_10() {

    const [show, setShow] = React.useState(true);
    function toggle() {
        setShow(prevState => !prevState)
    }

    return (
        <div className='Div-10'>
            <button onClick={toggle}>Toggle Window Tracker</button>
            {show && <WinTrack/>}
        </div>
    )
}

export default Div_10