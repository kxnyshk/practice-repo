import React from 'react';
import ReactDOM from 'react-dom';

import './4.css';
import Star from './star.png'
import Favourite from './favourite.png'

function Div_4() {

    const [Contact, setContact] = React.useState({
        firstName: "Vanilla",
        lastName: "Strings",
        phone: "+00 1234 567890",
        email: "vanilla@email.xyz",
        isFavourite: false,
    })

    function switchIcon() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavourite: !prevContact.isFavourite,
            }
        })
    }

    return(
        <div className='Div-4'>
            <img 
                onClick={switchIcon}
                src={Contact.isFavourite ? Favourite : Star} 
                className='Icon'> 
            </img>
            <h1 className='contact-Name'>
                {Contact.firstName} {Contact.lastName}
            </h1>
            <h1 className='contact-Phone'>
                {Contact.phone}
            </h1>
            <h1 className='contact-Email'>
                {Contact.email}
            </h1>
        </div>
    )
}

export default Div_4