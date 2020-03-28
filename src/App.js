import React, { useState } from 'react';
import Header from './Header';

function App() {
    const [count, setCounter] = useState(0);
    function incrementar() {
        setCounter(count + 1);
    }
    return (
        <div>
            <Header> Be the Hero {count}</Header>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}

export default App;
