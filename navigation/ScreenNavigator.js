import React from 'react';
import { createStackNavigator } from 'react-navigation';

import TestScreen from '../screens/TestScreen';

const TestStack = createStackNavigator({
  Test: TestScreen,
});

export default TestStack;
