import React from 'react';
import ReactDOM from 'react-dom';

import './8.css';

function Div_8() {

    const [FormData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        textArea: "",
        haveEaten: false,
        relationship: "",
        color: "",
    });

    // console.log(FormData);
    function handleChange(event) {
        const {
            name, 
            value, 
            type, 
            checked,
        } = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(FormData);
    }

    return (
        <div className='Div-8'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='firstName'
                    value={FormData.firstName}
                    placeholder='First name'
                    onChange={handleChange}
                ></input>
                <input
                    type='text'
                    name='lastName'
                    value={FormData.lastName}
                    placeholder='Last name'
                    onChange={handleChange}
                ></input>
                <input
                    type='email'
                    name='email'
                    value={FormData.email}
                    placeholder='Email'
                    onChange={handleChange}
                ></input>

                <div>  
                    <textarea
                        type='text'
                        name='textArea'
                        value={FormData.text}
                        placeholder='type text here..'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type='checkbox'
                        id='haveEaten'
                        name='haveEaten'
                        checked={FormData.haveEaten}
                        onChange={handleChange}
                    ></input>
                    <label htmlFor='haveEaten'>Did you eat?</label>
                </div>
                <div>
                    <fieldset>
                        <legend>Relationship status</legend>
                        <input
                            type="radio"
                            id='married'
                            name='relationship'
                            value="married"
                            checked={FormData.relationship === "married"}
                            onChange={handleChange}
                        ></input>
                        <label htmlFor='married'>Married</label>
                        <input
                            type="radio"
                            id='single'
                            name='relationship'
                            value="single"
                            checked={FormData.relationship === "single"}
                            onChange={handleChange}
                        ></input>
                        <label htmlFor='single'>Single</label>
                        <input
                            type="radio"
                            id='dating'
                            name='relationship'
                            value="dating"
                            checked={FormData.relationship === "dating"}
                            onChange={handleChange}
                        ></input>
                        <label htmlFor='dating'>Dating</label>
                    </fieldset>
                </div>
                <div>
                    <select 
                        id='color' 
                        name='color'
                        value={FormData.color}
                        onChange={handleChange}>
                            <option value=''>Select color</option>
                            <option value='red'>Red</option>
                            <option value='green'>Green</option>
                            <option value='blue'>Blue</option>
                    </select>
                </div>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Div_8