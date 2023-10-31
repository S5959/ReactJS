import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import styles from "./Detail.module.css";

function Detail() {
   const { id } = useParams();
   const [loading, setLoading] = useState(true);
   const [movie, setMovie] = useState();
   const getMovie = async () => {
      const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      console.log(json.data.movie);
      setMovie(json.data.movie);
      setLoading(false);
   };
   useEffect(() => {
      getMovie();
   }, []);
   return (
      <div className={styles.container}>
        {loading ? (
            <h1 className={styles.loader}>Loading...</h1>
        ) : (
            <MovieDetail 
                bgImage={movie.background_image}
                coverImage={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                runtime={movie.runtime}
                language={movie.language}
                rating={movie.rating}
                url={movie.url}
                genres={movie.genres}
                desc={movie.description_full}
            />
        )}
      </div>
   );
}
export default Detail;
