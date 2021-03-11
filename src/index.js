//Import react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create react component
const App = () => {
    return (
      <div>
        <label className="label" htmlFor="name">
          Enter name:
        </label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'red', color: 'white'}}>Submit</button>
      </div>
    );
};

function getTime(){
  return (new Date()).toLocaleTimeString();
}

const ExerciseApp = () => {
  return (
    <div>
      <div>Current Time:</div>
      <h3>{getTime()}</h3>
    </div>
  );
};

//Take react component and show it on screen.
ReactDOM.render(
  <ExerciseApp />,
  document.querySelector('#root')  
);