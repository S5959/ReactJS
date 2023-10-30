import PropTypes from "prop-types";
import styles from './Detail.module.css';

function MovieDetail({ bgImage, coverImage, title, year, runtime, language, rating, genres, desc }) {
    return (
        <div className={styles.movie}>
            <img src={bgImage} className={styles.movie_bg_img} />
            <div className={styles.movie_header}>
                <img src={coverImage} className={styles.movie_img} />
                <div>
                    <h2 className={styles.movie_title}>{title}</h2>
                    <div className={styles.movie_info}>
                        <span>{year}년</span>
                        <span>{runtime}분</span>
                        <span>{language.toUpperCase()}</span>
                    </div>
                    <div className={styles.movie_evaluation}>
                        <span>평점: {rating} </span>
                    </div>
                    <ul className={styles.movie_category}>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <p>{desc}</p>
            </div>
        </div>
    );
}

MovieDetail.propTypes = {
    bgImage: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}
export default MovieDetail;