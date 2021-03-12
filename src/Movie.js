import PropTypes from "prop-types";
import "./Movie.css";

// 이 경우 movie 컴포넌트는 state를 필요로 하지 않는다
// 따라서 React.Component(클래스 컴포넌트)가 아니라 함수 컴포넌트를 사용할 수 있음

function Movie({ title, year, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} />
      <div class="movie__data">
        <h3 class="movie__title" style={{ backgroundColor: "pink" }}>
          {title}
        </h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
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
