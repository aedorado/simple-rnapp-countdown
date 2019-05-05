import React, {Component} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20, 
        backgroundColor: '#F3F3F3'
    }
});

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

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now()
                }))
            });
        }, 1000);
    }

    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.state.events}
                renderItem={item => <EventCard event={item} />}
                keyExtractor={item => item.name}
            />
        );
    }

}

export default EventList;