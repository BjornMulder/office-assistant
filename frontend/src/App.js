import React, { Component } from 'react';
import Header from "./components/organisms/Header";
import {askForPermissioToReceiveNotifications} from "./push-notification";

const NotificationButton = () => (
  <button onClick={askForPermissioToReceiveNotifications} >
    Click
  </button>
);

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <NotificationButton/>
      </>
    );
  }
}

export default App;
