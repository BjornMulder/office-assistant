import React, { Component } from 'react';
import Header from "./components/organisms/Header";
import LoadingScreen from "./components/pages/LoadingScreen";
import EmployeeList from "./components/molecules/EmployeeList";
import Employee from "./components/atoms/Employee";
import Card from "./components/atoms/Card";
import Main from "./components/atoms/Main";
import Container from "./components/atoms/Container";
import Title from "./components/atoms/Title";
import * as moment from "moment";

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
    fetch("https://office-assistant.defser.nl/backend/public/api/getpresent")
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
          <Container>
            <Main>
              <Title>Aanwezige collega's </Title>
              <Card>
                <EmployeeList>
                  {items.map(item => (
                    <Employee key={item}>
                      {item.name}
                      <span>{moment(item.arrived).fromNow()}</span>
                    </Employee>
                  ))}
                </EmployeeList>
              </Card>
            </Main>
          </Container>
        </>
      );
    }
  }
}

export default App;
