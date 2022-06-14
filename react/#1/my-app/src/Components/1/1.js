import React from 'react';
import ReactDOM from 'react-dom';

import './1.css';

function Div_1() {

    const [Array, setArray] = React.useState([]);
    const ArrayElements = Array.map((element, index) => (
        <h1 key={index}>
            {element}
        </h1>
    ))

    function addItem() {
        setArray(prevArray => (
            [...prevArray, `Item ${prevArray.length + 1}`]
        ))
    }
    function removeItem() {
        let newArr = [...Array];
        newArr.splice(-1);
        // console.log(newArr);
        setArray(newArr)
    }


    return(
        <div className='Div-1'>
            <span>
                <button onClick={addItem}>
                    Add Item
                </button>
                <button onClick={removeItem}>
                    Remove Item
                </button>
            </span>
            <div> {
                ArrayElements.length == 0 
                ? <h1>List empty!</h1> 
                : ArrayElements
            } </div>
        </div>
    )
}

export default Div_1