import React, { Component } from "react";
import instance from "./axios";
import "./row.css";

class Row extends Component {
  constructor(props) {
    super(props);
    let { whichRequest } = this.props;
    this.state = {
      request: whichRequest,
      movies: "",
    };
  }

  componentDidMount() {
    instance.get(`${this.state.request}`).then((data) => {
      this.setState({
        movies: data,
      });
    });
  }
  test = () => {
    let { movies } = this.state;
    let {isLargePoster} = this.props
    return (
      <div
        className={`eachRow ${
          isLargePoster === true && "eachRowLarge"
        }`}
      >
        {movies.data.results.map((data) => {
          return (
            <div
              key={data.id}
              className='image-container'
            >
              <img
                src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt={data.name ? data.name : data.title}
                className={`image ${isLargePoster === true && 'image-large'}`}
              />
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    let { title } = this.props;
    return (
      <div className="row">
        <h2>{title}</h2>
        {this.state.movies !== "" && this.test()}
      </div>
    );
  }
}

export default Row;
