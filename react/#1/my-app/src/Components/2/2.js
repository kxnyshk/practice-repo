import React from 'react';
import ReactDOM from 'react-dom';

import './2.css';

function Div_2() {

    const [count, setCount] = React.useState(0);
    function addCount() {
        setCount(prevCount => (prevCount + 1));
    }
    function subtractCount() {
        setCount(prevCount => (prevCount - 1));
    }

    return(
        <div className='Div-2'>
            <span>
                <button onClick={addCount}>
                    Add
                </button>
                <button onClick={subtractCount}>
                    Subtract
                </button>
            </span>
            <h1>
                {count}
            </h1>
        </div>
    )
}

export default Div_2