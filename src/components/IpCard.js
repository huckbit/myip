import React, { Component } from "react";
import ipLogo from "./../asset/ipNetwork.svg";
import Location from "./../asset/mapMarker.svg";
import IspImage from "./../asset/access-point-network.svg";

export class IpCard extends Component {
  render() {
    const { ip, region, country_name, country_code, isp } = this.props.data;
    if (this.props.loaded == null) {
      return (
        <div className="container wrapper">
          <div className="columns">
            <div className="column is-6 is-offset-3 has-text-centered">
              <h1 className="is-size-3">Gathering information ...</h1>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container wrapper">
        <div className="columns is-centered-mobile">
          <div className="column is-10-mobile is-offset-1-mobile is-6 is-offset-3 has-text-centered">
            <h2 className="is-size-1 has-text-weight-bold">Your IP</h2>
            <div className="notification mt-2">
              <img src={ipLogo} alt="ip" width="60" />
              <h1 className="is-size-1 is-size-2-mobile has-text-weight-bold">{ip}</h1>
              <p className="mt-5">
                <img className="inline-img" src={Location} alt="Location" /> {region} -
                {country_name}({country_code})
              </p>
              <p className="mt-5">
                <img className="inline-img" src={IspImage} alt="ispImage" /> {isp}
              </p>
            </div>
            <button
              className="button is-large is-dark mt-3"
              onClick={() => this.props.handleClick()}
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default IpCard;
