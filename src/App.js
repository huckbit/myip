import React from "react";
import ipLogo from "./asset/ipNetwork.svg";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { loaded: null, data: [] };
  }
  style = {
    display: "flex",
    height: "80vh",
    flexDirection: "column",
    justifyContent: "center",
  };
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
    const { ip, region, country_name, country_code, isp } = this.state.data;
    if (this.state.loaded == null) {
      return (
        <div className="columns" style={this.style}>
          <div className="column is-6 is-offset-3 has-text-centered">
            <h1 className="is-size-3">Gathering information ...</h1>
          </div>
        </div>
      );
    }
    return (
      <div className="container" style={this.style}>
        <div class="columns">
          <div class="column is-6 is-offset-3 has-text-centered">
            <div className="mt-5">
              <h2 className="is-size-1 has-text-weight-bold">Your IP</h2>
              <div className="notification">
                <img src={ipLogo} alt="ip" width="50" />
                <h1 className="is-size-3 has-text-weight-bold">{ip}</h1>
                <p>
                  <b>Location</b>: {region} - {country_name}({country_code})
                </p>
                <p>
                  <b>ISP</b>: {isp}
                </p>
              </div>
              <button className="button is-large is-dark mt-3" onClick={this.handleClick}>
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
