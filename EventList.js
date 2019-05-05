import React, {Component} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20, 
        backgroundColor: '#F3F3F3'
    }
});

export default class EventList extends React.Component {

    constructor(props){
        super(props);

        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        
        this.state = {
           events: events,
        }

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

    handleAddEvent = () => {
      this.props.navigation.navigate('Form')
    }

    render() {
        return (
            <React.Fragment>
                <FlatList
                    style={styles.list}
                    data={this.state.events}
                    renderItem={item => <EventCard event={item} />}
                    keyExtractor={item => item.id}
                />
                <ActionButton
                  key="fab"
                  buttonColor="rgba(231,76,60,1)"
                  onPress={this.handleAddEvent}
                />
            </React.Fragment>
        );
    }

}

