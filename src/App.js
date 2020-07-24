import React from "react";
import IpCard from "./components/IpCard";
import Gdpr from "./components/Gdpr";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { loaded: null, data: [] };
  }

  componentDidMount() {
    this.getClientInfo();
  }

  handleClick = () => {
    this.setState({ loaded: null });
    this.getClientInfo();
  };

  getClientInfo() {
    fetch(`https://api.ipify.org?format=json`)
      .then((res) => res.json())
      .then((res) => {
        const ip = res.ip;
        fetch(`https://json.geoiplookup.io/${ip}`)
          .then((res) => res.json())
          .then((json) => {
            // console.log(json);
            this.setState({ loaded: true });
            this.setState({ data: json });
          });
      });
  }
  render() {
    return (
      <div>
        <IpCard data={this.state.data} loaded={this.state.loaded} handleClick={this.handleClick} />
        <Gdpr />
      </div>
    );
  }
}

export default App;
