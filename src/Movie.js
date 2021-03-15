import PropTypes from "prop-types";
import "./Movie.css";

// 이 경우 movie 컴포넌트는 state를 필요로 하지 않는다
// 따라서 React.Component(클래스 컴포넌트)가 아니라 함수 컴포넌트를 사용할 수 있음

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
            // map returns index
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
