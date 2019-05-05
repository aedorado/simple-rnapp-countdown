import {React} from 'react';

import EventList from './EventList';

import EventForm from './EventForm';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Events List',
    })
  },
  Form: {
    screen: EventForm,
    title: 'Add Events'
  }
});

export default createAppContainer(AppNavigator);
