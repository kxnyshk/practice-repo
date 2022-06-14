import React from 'react';
import ReactDOM from 'react-dom';

import './3.css';

function Div_3() {

    const [text, setText] = React.useState("Yes");
    function switchText() {
        setText(prevText => (
            prevText == "Yes" ? "No" : "Yes"
        ))
    }

    return(
        <div className='Div-3'>
            <button onClick={switchText}>
                Switch
            </button>
            <h1>
                {text}
            </h1>
        </div>
    )
}

export default Div_3