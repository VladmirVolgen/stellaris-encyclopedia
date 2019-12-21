import React from 'react';
import { func } from 'prop-types';

function Event({eventData}) {

    return(
        <div className="event-box">
            <h4>{eventData.id}</h4>
            <h3>{eventData.title}</h3>
            <p>{eventData.description}</p>
        </div>

    )
}

export default Event;