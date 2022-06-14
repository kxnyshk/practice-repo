import React from 'react';
import ReactDOM from 'react-dom';

import './7.css';

function Div_7() {

    const [messages, setMessages] = React.useState([]);
    const len = messages.length;

    return (
        <div className='Div-7'>
            <h1>
                {len == 0 ? "You are all caught up :)" : (
                    `You have ${len} unread ${
                        len == 1 ? "message." : "messages."
                    }` 
                )}
            </h1>
        </div>
    )
}

export default Div_7