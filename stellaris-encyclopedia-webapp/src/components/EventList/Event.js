import React from 'react';
import { func } from 'prop-types';

function Event() {

    const event = {
        id: "story.1",
        title: "A test story title",
        description: "This is a  test description, lore ipsum, lore ipsum",
        moreStuff: "There will be more keys"
    }

    return(
        <div className="event-box">
            <h4>{event.id}</h4>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
        </div>

    )
}

export default Event;