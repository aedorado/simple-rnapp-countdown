import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import EventCard from './EventCard';

class EventList extends Component {

    constructor(props){
        super(props);
     
        this.state = {
           events: [],
        }

        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        this.state.events = events;
     }

    render() {
        return (
            <FlatList
                data={this.state.events}
                renderItem={item => <EventCard event={item} />}
                keyExtractor={item => item.name}
            />
        );
    }

}

export default EventList;