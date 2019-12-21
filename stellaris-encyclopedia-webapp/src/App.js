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
      eventsData: [],
      selectedEvents: []
    }
  }

  componentDidMount() {
    const jsonEventList = JSON.parse(eventList);
    this.setState({eventsData: jsonEventList})
    // TODO: It will fetch from REST API
    //temporary for testing
    this.setState({selectedEvents: jsonEventList})
  }

  render() {
    return (
      <div className="App">
        <Title />
        <SearchFilter />
        <EventList eventsData={this.state.selectedEvents}/>
      </div>
    );
  }

 
}

export default App;
