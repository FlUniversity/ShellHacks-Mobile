import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Announcements from './src/Components/MainPages/Interface_Contents/Announcements/Announcements.js';
import Interface from './src/Components/MainPages/Interface/Header/Interface.js';

import AppMenu from './AppMenuTest.js'
import Landing from './src/Components/wlecome/Landing_components/Landing.js';
import Menu from './src/Components/MainPages/Interface/MenuBar/menuBar.js'

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
