import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import AssetDetail from './src/components/AssetDetail';

const RootNavigator = StackNavigator({
  Home: { screen: Home },
  AssetDetail: { screen: AssetDetail },
});

export default class App extends Component {
  // eslint-disable-next-line
  render() {
    return (
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <RootNavigator />
      </View>
    );
  }
}
