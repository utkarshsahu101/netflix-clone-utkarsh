import React, { Component } from "react";
import instance from "./axios";
import "./banner.css";

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieOnBanner: "",
    };
  }
  componentDidMount() {
    instance.get(this.props.whichRequest).then((data) => {
      let get_random_movie_index = Math.floor(
        Math.random() * data.data.results.length
      );
      let get_random_movie = data.data.results[get_random_movie_index];
      this.setState({
        movieOnBanner: get_random_movie,
      });
    });
  }
  truncate_description = (text, size) => {
    return text?.length > size ? text.substring(0, size) + '...' : text
  }
  render() {
    let { movieOnBanner } = this.state;
    return (
      <header className="banner">
        <div
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/w500/${movieOnBanner.poster_path})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: '85%'
          }}
        >
          <div className="banner-text">
            <h1 className="banner_title">{movieOnBanner.title}</h1>
            <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">{this.truncate_description(movieOnBanner?.overview, 100)}</h1>
          </div>
          <div className="banner_bottom" />
        </div>
      </header>
    );
  }
}

export default Banner;
