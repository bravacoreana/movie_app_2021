// import PropTypes from "prop-types";

import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true, // 마운트 되자마자 isLoading은 당연히 true가 된다
    movies: [],
  };
  getMovies = async () => {
    // axios.get 이 느릴 수도 있음!
    // 따라서 우리는 JS에게 componentDidMount 함수가 끝날 때까지 시간이 걸릴수도 있다고 말해줘야 한다
    // 👉🏼 axios 에 async-await 를 사용한다!
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    // this.setState({movies:movies})
    // first movies is movies Array
    // second movies is the data
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;

// axios.get 이 느릴 수도 있음!
// 따라서 우리는 JS에게 componentDidMount 함수가 끝날 때까지 시간이 걸릴수도 있다고 말해줘야 한다
// 👉🏼 axios 에 async-await 를 사용한다!
