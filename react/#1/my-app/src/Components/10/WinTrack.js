import React from 'react';
import ReactDOM from 'react-dom';

import './10.css';

export default function WinTrack() {
    
    const [winWidth, setWinWidth] = React.useState(window.innerWidth);
    const [winHeight, setWinHeight] = React.useState(window.innerHeight);
    React.useEffect(() => {
        function watchWindow() {
            setWinWidth(window.innerWidth);
            setWinHeight(window.innerHeight);
        }
        window.addEventListener("resize", watchWindow);
        return function () {
            window.removeEventListener("remove", watchWindow);   // preventing memory leak
        }
    }, [])
    
    return (
        <h1>Window Dimensions: {winWidth} x {winHeight} px</h1>
    )
}