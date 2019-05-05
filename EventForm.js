import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet
} from 'react-native';
import { formatDateTime } from './api';
import DateTimePicker from 'react-native-modal-datetime-picker'

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  textInput: {
    height: 40,
    borderWidth: .5,
    margin: 0,
    marginLeft: 7,
    marginRight: 7,
    paddingLeft: 10,
  },
  // borderTop: {
    // borderColor: '#edeeef',
    // borderTopWidth: 0.5,
  // },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default class EventForm extends React.Component {
  state = {
    title: null,
    date: '',
  };

  handleAddPress = () => {
    console.log(this.state);
    this.props.navigation.goBack();
  }

  handleChangeTitle = (value) => {
    this.setState({ title: value });
  }

  handleDatePress = () => {
    this.setState({
      showDatePicker: true,
    });
  }

  handleDatePicked = (date) => {
    this.setState({
      date,
    });
    this.handleDatePickerHide();
  }

  handleDatePickerHide = () => {
    this.setState({showDatePicker: false})
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={styles.fieldContainer}>
          <TextInput style={styles.textInput}
            placeholder="Event Title"
            spellCheck={false}
            value={this.state.title}
            onChangeText={this.handleChangeTitle}>
          </TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="Event Date"
            spellCheck={false}
            value={formatDateTime(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}>
          </TextInput>
          <DateTimePicker
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCanel={this.handleDatePickerHide}
          />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleAddPress}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

