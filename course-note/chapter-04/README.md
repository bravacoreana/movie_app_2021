#### 4.0 Fetching Movies from API

통상적으로 사람들이 JS 에서 데이터를 fetch 하는 방법은 `fetch` 를 사용하는 것이다. 하지만 `axios` 라고 하는 좋은 것도 있음! axios는 마치 fetch 위에 있는 작은 layer다. 예를 들면 axios는 땅콩을 감싸고 있는 초콜렛!
<br/><br/>
`npm install axios`

```JSX
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // axios.get 이 느릴 수도 있음!
    // 따라서 우리는 JS에게 componentDidMount 함수가 끝날 때까지 시간이 걸릴수도 있다고 말해줘야 한다
    // 👉🏼 axios 에 async-await 를 사용한다!

    const {data:{data:{movies}}} = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
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
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
```

**👉🏼 코드 뜯어보기**<br/>

1. mounting
   1. 처음에 컴포넌트가 마운트가 되면 isLoading 은 true.
   2. render() 함수로 감
      1. isLoading === true ∴ Loading 띄워줌.
   3. componentDidMount() 함수가 실행됨
      1. getMovies() 함수를 실행: 이때 getMovies()의 axios가 async-await 이므로 기다림
      2. 로딩이 완료되면 setState를 호출. 이때 초기에 지정해준 movies array에 원하는 데이터를 담고, isLoading:false 값을 함께 내보냄
   4. setState()로 인해 다시 로딩됨
2. updating
   1. setState()로 인해 다시 렌더링됨
   2. 렌더링이 끝나면 isLoading 값이 false 이므로 we are ready 가 뜸!

#### 4.1 Rendering the Movies

```JSX
// Movie.js
// 이 경우 movie 컴포넌트는 state를 필요로 하지 않는다
// 따라서 React.Component(클래스 컴포넌트)가 아니라 함수 컴포넌트를 사용할 수 있음

import PropTypes from "prop-types";

function Movie({ id, title, year, summary, poster }) {
  return (
    <div>
      <h5>{title}</h5>
      <img src={poster} alt={title} />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
```

```JSX
// App.js

import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading"
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
```

#### 4.2 Styling the Movies

CSS를 더하는 방법은 두 가지 방법이 있다.

1. curly bracket을 두 개 넣어주고 JS way로 CSS를 직접 넣는 방법

   ```JSX
   <h3 class="movie__title" style={{ backgroundColor: "pink" }}>
   ```

2. 직접 CSS 파일을 만들고 JS 파일에 직접 임포트 하는 방법

[목록으로](../../README.md) / [이전으로](../chapter-03/README.md) / [다음으로](../chapter-05/README.md)

1. [SETUP](../chapter-01/README.md)
2. [JSX & PROPS](../chapter-02/README.md)
3. [STATE](../chapter-03/README.md)
4. [MAKING THE MOVIE APP](../chapter-04/README.md)
5. [CONCLUSIONS](../chapter-05/README.md)
6. [ROUTING BONUS](../chapter-06/README.md)
