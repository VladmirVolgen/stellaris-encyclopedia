const processStellarisEvent = require('./stellaris_event_processor');

let eventString;
let configuration;

beforeEach(() => {
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
})

test ('A Stellaris event key (id) with type string is parsed successfully to JSON format', () => {
    const eventObject = JSON.parse(processStellarisEvent(eventString, configuration));
    expect(eventObject.id).toBe('leviathans.9');

})

test ('A Stellaris event key (notPresent) is not present and not parsed to JSON format', () => {
    const eventObject = JSON.parse(processStellarisEvent(eventString, configuration));
    expect(eventObject.notPresent).toBe(undefined);
})

test ('A Stellaris event key (trigger) with type object is parsed successfully to JSON format', () => {
    configuration = {
        eventKeys: [
            {
                name: "trigger",
                startKey: "trigger =",
                valueType: "object"
            }
        ]
    }
    const eventObject = JSON.parse(processStellarisEvent(eventString, configuration));

    expect(eventObject.trigger).toMatch(/is_guardian_country = yes/);
    expect(eventObject.trigger).toMatch(/OR = {/);
    expect(eventObject.trigger).toMatch(/is_country_type = default/);
    expect(eventObject.trigger).toMatch(/is_country_type = fallen_empire/);
    expect(eventObject.trigger).toMatch(/is_country_type = awakened_fallen_empire/);
    expect(eventObject.trigger).not.toMatch(/immediate = {/);
    
})