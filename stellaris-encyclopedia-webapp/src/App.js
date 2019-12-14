import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Here goes the title component</h1>
      <div>
        <select name="categories" id="categories-dropdown">
          <option value="">--Please select a category--</option>
          <option value="all">All</option>
          
        </select>
        <label>Here goes the search event bar</label>
        <input />
      </div>
      <div>Here goes the Events components with a list of events found</div>
    </div>
  );
}

export default App;
