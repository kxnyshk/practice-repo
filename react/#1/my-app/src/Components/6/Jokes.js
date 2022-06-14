import React from "react"
import ReactDOM from 'react-dom';

import './6.css';

export default function Joke(props) {
    
    const [IsShown, setIsShown] = React.useState(false);
    function ToggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    
    return (
        <div>
            <h3>{props.setup}</h3>
            {IsShown && <p>{props.punchline}</p>}
            
            <button onClick={ToggleShown}>
                {IsShown ? "Hide punchline" : "Show punchline"}
            </button>
            <hr/>
        </div>
    )
}