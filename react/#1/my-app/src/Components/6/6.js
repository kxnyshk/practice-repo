import React from 'react';
import ReactDOM from 'react-dom';

import './6.css';
import JokeData from './JokeData.js'
import Jokes from './Jokes.js'

function Div_6() {

    const JokeElements = JokeData.map(joke => {
        return (
            <Jokes
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })

    return (
        <div className='Div-6'>
            {JokeElements}
        </div>
    )
}

export default Div_6