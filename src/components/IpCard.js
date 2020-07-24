import React, { Component } from "react";
import ipLogo from "./../asset/ipNetwork.svg";
import Location from "./../asset/mapMarker.svg";
import IspImage from "./../asset/access-point-network.svg";

export class IpCard extends Component {
  render() {
    const { ip, region, country_name, country_code, isp } = this.props.data;
    if (this.props.loaded == null) {
      return (
        <div className="section wrapper">
          <div className="columns">
            <div className="column is-6 is-offset-3 has-text-centered">
              {ip ? (
                <div>
                  <h1 className="is-size-3">Gathering information ...</h1>
                </div>
              ) : (
                <div>
                  <h1 className="is-size-3 is-bold">Something went wrong! </h1>
                  <p>It seems you're having problem connecting to the Internet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    if (ip) {
      return (
        <div className="section wrapper">
          <div className="columns is-centered-mobile">
            <div className="column is-10-mobile is-offset-1-mobile is-6 is-offset-3 has-text-centered">
              <h2 className="is-size-1 has-text-weight-bold">Your IP</h2>
              <div className="notification p-5 mt-2">
                <img src={ipLogo} alt="ip" width="60" />
                <h1 className="is-size-1 is-size-3-mobile has-text-weight-bold">{ip}</h1>
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
    } else {
      return (
        <div>
          <h1 className="is-size-3 is-bold">Something went wrong! </h1>
          <p>It seems you're having problem connecting to the Internet.</p>
        </div>
      );
    }
  }
}

export default IpCard;
