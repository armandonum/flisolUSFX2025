
import React, { useState } from 'react';



const Home: React.FC = () => {

    const [show, setShow] = useState(false);
    
    const handleClick = () => {
        setShow(!show);
    };
    
    return (
        <div className="home">
        <h1>Welcome to the Home Page</h1>
        <button onClick={handleClick}>
            {show ? 'Hide' : 'Show'} Details
        </button>
        {show && <p>Here are some details...</p>}
        </div>
    );
    }

    export default Home;

