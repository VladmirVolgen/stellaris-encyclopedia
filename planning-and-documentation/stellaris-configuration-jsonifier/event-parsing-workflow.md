# Event Parsing Workflow

## Types of events
country_event, ship_event, fleet_event, planet_event, pop_faction_event, pop_event

## Event keys
All event keys won't render if they don't appear
* id: string
* title: string
* desc: object, string. There can be several desc
* picture: string
* show-sound: string
* is_triggered_only: string (yes/no)
* trigger: object
* immediate: object (Sometimes has if else_if statements)
* location: string
* hide_window: string (yes/no)
* trackable
* option: object (There can be several option)
* after: object
* diplomatic: string (yes/no)
* custom_gui: string (Seen with "")
* force_open: string (yes/no)
* picture_event_data: object

## Ideas
* Translate the list of keys into the desired values, maybe some kind of config: stringToBeSearched;transformationToBePerformed
* Will need to add namespace, that will be category
* The configuration file will have all the event keys with the type, so it can identify what to do depending on the object.