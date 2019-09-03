import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider, connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';

import RootNavigation from './src/Navigations/RootNavigation';
import HomeNav from './src/Navigations/HomeNav';
import AuthNav from './src/Navigations/AuthNav';
import store from './src/Redux/store';
import { theme } from './src/Assets/Styles/theme'

// const AppNav = createReduxContainer([RootNavigation, HomeNav, AuthNav], "root")

// const mapStateToProps = state => ({ state: state.router })

// const AppWithNavigationState = connect(mapStateToProps)(AppNav)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor='#0baa56' />
          <RootNavigation />
        </PaperProvider>
      </Provider>
    )
  }
}