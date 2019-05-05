/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
// import YellowBox from 'react-native';
import EventList from './EventList';
import StackNavigator from 'react-navigation';

// YellowBox.ignoreWarnings([
//   'Warning: Component will mount is deprecated',
//   'Warning: ComponentWillReceiveProps will mount is deprecated',
// ]);

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default StackNavigator({
  list: {
    screen: EventList
  }
});

export default class App extends React.Component {
  render() {
    return (
      <EventList />
    );
  }
}
