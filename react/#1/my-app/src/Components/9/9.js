import React from 'react';
import ReactDOM from 'react-dom';

import './9.css';

function Div_9() {

    const [FormData, setFormData] = React.useState({
        email: "",
        password: "",
        newsletter: false,
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function validateForm() {
        const validEmail = "a@b.c";
        const validPassw = "abcd123"
        let currEmail = FormData.email;
        let currPassw = FormData.password;
        let currNewsL = FormData.newsletter;
        if((currEmail === validEmail) && (currPassw === validPassw)){
            window.alert("Access granted!");
        } else { window.alert("Access denied."); }
        if(currNewsL){
            window.alert("Thankyou for subscribing!");
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        // console.log(FormData);
        validateForm();
    }

    return (
        <div className='Div-9'>
            <form onSubmit={handleSubmit}>
                <input
                    className='inputs'
                    type='email'
                    name='email'
                    value={FormData.email}
                    placeholder='Email'
                    onChange={handleChange}
                ></input>
                <input
                    className='inputs'
                    type='password'
                    name='password'
                    value={FormData.password}
                    placeholder='Password'
                    onChange={handleChange}
                ></input>

                <div className='check'>
                    <input
                        className='inputs'
                        id='newsletter'
                        type='checkbox'
                        name='newsletter'
                        value={FormData.newsletter}
                        onChange={handleChange}
                    ></input>
                    <label htmlFor='newsletter'>Receive Newsletter?</label>
                </div>
                <div className='button'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Div_9