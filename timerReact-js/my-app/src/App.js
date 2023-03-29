import React from 'react';
import Timer from './Timer';
import './App.css';

function App() {
  const [current, setCurrent] = React.useState([1]);

  const addTimer = () => {
    setCurrent([1, ...current])
  }

  
  return (
    <div className="body">
        {current.map(() => {
          return (
            <Timer/>
          )
        })}
      <div className="addButton__container">
        <button className="addButton" onClick={addTimer}>

        </button>
      </div>
    </div>
  );
}

export default App;
