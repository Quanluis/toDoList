import React, { Component } from 'react';

class App extends Component {

  

  render() {

    let input = document.getElementById('input')

    function newInput(){
      
    }

    

    return (
    <div>
      <h1>To-Do List App</h1>
      <input id ="input" type="tex"/>
      <button   className = 'inputone'  >Add</button>
    </div>
    );
  }
}

export default App;
