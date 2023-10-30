import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

function Detail() {
   const { id } = useParams();
   const [loading, setLoading] = useState(true);
   const [movie, setMovie] = useState();
   const getMovie = async () => {
      const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      console.log(json);
      setMovie(json.data.movie);
      setLoading(false);
   };
   useEffect(() => {
      getMovie();
   }, []);
   return (
      <div className={styles.container}>
         {loading ? null : (
            <div className={styles.movie}>
               <img src={movie.background_image} className={styles.movie_bg_img} />
               <div className={styles.movie_header}>
                  <img src={movie.medium_cover_image} className={styles.movie_img} />
                  <div>
                     <h2 className={styles.movie_title}>{movie.title}</h2>
                     <div className={styles.movie_info}>
                        <span>{movie.year}년</span>
                        <span>{movie.runtime}분</span>
                        <span>{movie.language.toUpperCase()}</span>
                     </div>
                     <div className={styles.movie_evaluation}>
                        <span>평점 : {movie.rating} </span>
                     </div>
                     <ul className={styles.movie_category}>
                        {movie.genres.map((g) => (
                           <li key={g}>{g}</li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div>
                  <p>{movie.description_full}</p>
               </div>
            </div>
         )}
      </div>
   );
}
export default Detail;
