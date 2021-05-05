import React, { Component } from "react";
import Row from "./Row";
import requests from "./requests";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import YouTube from "react-youtube";

class App extends Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div className="App">
        <Nav />
        <Banner whichRequest={requests.hitActionMovies} />
        <Row
          title="NETFLIX ORIGINALS"
          whichRequest={requests.hitNetflixOriginals}
          isLargePoster
        />
        <Row title="Trending Now" whichRequest={requests.hitTrending} />
        {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />; */}
        <Row title="Top Rated" whichRequest={requests.hitTopRated} />
        <Row title="Action Movies" whichRequest={requests.hitActionMovies} />
        <Row title="Comedy Movies" whichRequest={requests.hitComedyMovies} />
        <Row title="Horror Movies" whichRequest={requests.hitHorrorMovies} />
        <Row title="Romance Movies" whichRequest={requests.hitRomanceMovies} />
        <Row title="Documentaries" whichRequest={requests.hitDocumentaries} />
        <Row
          title="Science Fiction Movies"
          whichRequest={requests.hitSciFictionMovies}
        />
      </div>
    );
  }
}

export default App;
