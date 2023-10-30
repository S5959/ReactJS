import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImage, title, year, summary, genres }) {
    return (
        <div>
            <img src={coverImage} />
            <h2>
                <Link to="/movie">{title} ({year})</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired
};

export default Movie;