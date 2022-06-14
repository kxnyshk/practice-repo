import React from 'react';
import ReactDOM from 'react-dom';

import './5.css'

export default function Box(props){
    
    const styles = {
        backgroundColor: props.on ? "rgb(20, 20, 20)" : "transparent"
    }
    
    return (
        <div 
            onClick={() => props.switchColor(props.id)}
            style={styles} 
            className='Boxes'
        ></div>
    )
}