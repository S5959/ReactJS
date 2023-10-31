import PropTypes from "prop-types";
import styles from './MovieDetail.module.css';

function MovieDetail({ bgImage, coverImage, title, year, runtime, language, rating, url, genres, desc }) {
    return (
        <div className={styles.movie}>
            <img src={bgImage} className={styles.movie__bg_img} />
            <div className={styles.header}>
                <img src={coverImage} className={styles.movie__img} />
                <div className={styles.box_contents}>
                    <h2 className={styles.movie__title}>  
                        <a href={url} target="_blank">{title}</a>
                    </h2>
                    <span className={styles.movie__year}>{year}년</span>
                    <div className={styles.movie__score}>
                        <span>평점 <strong>{rating}</strong></span>
                        <span>{runtime}분</span>
                        <span><strong>{language.toUpperCase()}</strong></span>
                    </div>
                    <a className={styles.movie__download}>다운로드</a>
                </div>
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.movie__desc}>
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
    url: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    desc: PropTypes.string.isRequired
}
export default MovieDetail;