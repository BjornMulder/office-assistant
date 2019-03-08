import React, { Component } from 'react';
import Header from "./components/organisms/Header";
import LoadingScreen from "./components/pages/LoadingScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  };

  componentDidMount() {
    fetch("https://office-assistant.defser.nl/backend/public/getpresent")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <LoadingScreen/>;
    } else {
      return (
        <>
          <Header />
          <ul>
            {items.map(item => (
              <li key={item.device_owner}>
                {item.device_owner}
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default App;
