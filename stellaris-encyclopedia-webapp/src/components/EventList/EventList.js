import React from 'react';
import Event from './Event'

function EventList({eventsData}) {

    const events = eventsData.map(event => {
        console.log(event);
        return <Event eventData={event} key={`event ${event.id}`}/>
    });
    console.log(`Events: ${events}`)


    return(
        <React.Fragment>
            {events}

        </React.Fragment>
    )
}

export default EventList;