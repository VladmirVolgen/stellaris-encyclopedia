const {createJSONEvent} = require('./event');

let eventString;
let configuration;

test ('A Stellaris event key (id) is parsed successfully to JSON format', () => {
    eventString = `{
        id = leviathans.9
        hide_window = yes
        is_triggered_only = yes
        trigger = {
            from = {
                is_guardian_country = yes
            }
            OR = {
                is_country_type = default
                is_country_type = fallen_empire
                is_country_type = awakened_fallen_empire
            }
        }
    
        immediate = {
            from = {
                establish_communications_no_message = root
                save_event_target_as = leviathan_story_country
            }
            country_event = { id = story.8 days = 15 }
        }
    }
    `
    configuration = {
        eventKeys: [
            {
                name: "id",
                startKey: "id =",
                endValue: "\n",
                valueType: "string"
            }
        ]
    }

    const eventObject = JSON.parse(createJSONEvent(eventString, configuration));
    expect(eventObject.id).toBe('leviathans.9');
})