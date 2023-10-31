import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      /** 
       * 방법_1
      fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
       */
  
      /** 
       * 방법_2
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
       */
  
      /** 방법_3 */
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, []);
    return (
      <div className={styles.container}>
        {loading ? (
          <h1>Loading...</h1>
         ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie 
                key={movie.id}
                id={movie.id}
                coverImage={movie.medium_cover_image} 
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
         )
        }
      </div>
    );
}

export default Home;