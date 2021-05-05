import React, { Component } from "react";
import netflixLogo from "./netflix-logo.png";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenuBar: false,
    };
  }

  scrollEffect = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
        ? this.setState({ showMenuBar: true })
        : this.setState({ showMenuBar: false });
    });
    return () => {
      window.removeEventListener("scroll");
    };
  };
  componentDidMount() {
      this.scrollEffect();
  }
  render() {
    return (
      <div className={`navContainer ${this.state.showMenuBar  && 'nav_black'}`}>
        <img src={netflixLogo} alt="netflix_logo" className="logo" />
        <button className={`btn  ${this.state.showMenuBar  && 'btnStyleChange'}`}>Get Started</button>
      </div>
    );
  }
}

export default Nav;
