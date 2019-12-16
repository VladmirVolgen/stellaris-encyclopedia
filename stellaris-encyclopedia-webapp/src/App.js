import React from 'react';
import './App.css';
import Title from './components/Title';
import SearchFilter from './components/SearchFilter/SearchFilter';

function App() {
  return (
    <div className="App">
      <Title />
      <SearchFilter />
      <div>Here goes the Events components with a list of events found</div>
    </div>
  );
}

export default App;
