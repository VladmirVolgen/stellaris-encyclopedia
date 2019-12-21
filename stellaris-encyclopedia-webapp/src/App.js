import React from 'react';
import './App.css';
import Title from './components/Title';
import SearchFilter from './components/SearchFilter/SearchFilter';
import EventList from './components/EventList/EventList';
import eventList from './data/event-data';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      eventsData: null,
      selectedEvents: null
    }
  }

  componentDidMount() {
    const jsonEventList = JSON.parse(eventList);
    this.setState({eventsData: jsonEventList})
    // TODO: It will fetch from REST API
    // fetch('../../test-data-sets/json-output/events-output.json')
    //   .then(response => response.json())
    //   .then(data => this.setState({eventsData: JSON.parse(data)}))
  }

  render() {
    return (
      <div className="App">
        <Title />
        <SearchFilter />
        <EventList />
      </div>
    );
  }

 
}

export default App;
