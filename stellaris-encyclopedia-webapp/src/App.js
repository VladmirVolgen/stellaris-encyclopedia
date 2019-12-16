import React from 'react';
import './App.css';
import Title from './components/Title';
import SearchFilter from './components/SearchFilter/SearchFilter';
import EventList from './components/EventList/EventList';

function App() {
  return (
    <div className="App">
      <Title />
      <SearchFilter />
      <EventList />
    </div>
  );
}

export default App;
