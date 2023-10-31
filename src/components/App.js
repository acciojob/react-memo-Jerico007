import React from 'react';
import "../styles/App.css";
import Todos from './Todos';
import Count from './Count';
import Memo from './Memo';
const App = () => {
    return (
        <div className='App' id='main'>
            <h1>React.useMemo</h1>
            <br></br>
            <Todos/>
            <hr></hr>
            <br></br>
            <Count/>
            <br></br>
            <h1 id='calc'>1000000000</h1>
            <br></br>
            <p>1000000000</p>
            <hr></hr>
            <br></br>
            <hr></hr>
            <Memo/>
        </div>
    );
}

export default App;
