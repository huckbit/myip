import React, { Component } from "react";
import ipLogo from "./../asset/ipNetwork.svg";
import Location from "./../asset/mapMarker.svg";
import IspImage from "./../asset/access-point-network.svg";

export class IpCard extends Component {
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
      <div className="container wrapper">
        <div className="columns">
          <div className="column is-6 is-offset-3 has-text-centered">
            <div className="mt-5">
              <h2 className="is-size-1 has-text-weight-bold">Your IP</h2>
              <div className="notification mt-2">
                <img src={ipLogo} alt="ip" width="60" />
                <h1 className="is-size-3 has-text-weight-bold">{ip}</h1>
                <p className="mt-5">
                  <img className="inline-img" src={Location} alt="Location" /> {region} -
                  {country_name}({country_code})
                </p>
                <p className="mt-5">
                  <img className="inline-img" src={IspImage} alt="ispImage" /> {isp}
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

export default IpCard;
