import React, {Component} from 'react';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAYhdFzRpkeT2S0-J2CP6r8EpH_TFDui6U',
      authDomain: 'manager-react-native-4.firebaseapp.com',
      databaseURL: 'https://manager-react-native-4.firebaseio.com',
      projectId: 'manager-react-native-4',
      storageBucket: 'manager-react-native-4.appspot.com',
      messagingSenderId: '146642562870',
      appId: '1:146642562870:web:77eaa6b827a0f9d231cd97',
      measurementId: 'G-01DWJSR9PE',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
