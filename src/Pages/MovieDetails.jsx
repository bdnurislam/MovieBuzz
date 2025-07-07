import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackupImage from "../assets/BackUpMovie.jpg";
import { useTitle } from "../hooks";

export const MovieDetails = () => {
  const params = useParams();
  const [movies, setMovies] = useState({});
  const pageTitle = useTitle(`${movies.title}`);
  const image = movies.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
    : BackupImage;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=3eb2243bd6a789dac8c6495fa92920d8`
      );
      const josnData = await response.json();
      setMovies(josnData);
    }
    fetchMovie();
  }, []);

  return (
    <main className="h-auto">
      <section className="flex justify-around flex-wrap py-4">
        <div className="max-w-sm ">
          <img className="rounded" src={image} alt={movies.title} />
        </div>
        <div className="dark:text-textColor text-lg max-w-2xl text-gray-700">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movies.title}
          </h1>
          <p className="my-4">{movies.overview}</p>
          <p className="flex flex-wrap gap-2">
            {movies.genres &&
              movies.genres.map((genre) => (
                <span
                  className="dark:text-textColor border border-green-600 rounded p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
          </p>

          <div className="flex items-center py-5">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {movies.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {movies.vote_count} Reviews
            </a>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">RunTime:</span>
            <span>{movies.runtime} min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budge:</span>
            <span>{movies.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movies.revenue} </span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Pupolarity:</span>
            <span>{movies.popularity} People Likes</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${movies.imdb_id}`}
              target="_blank"
            >
              {movies.imdb_id}
            </a>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Status:</span>
            <span>{movies.status} </span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movies.release_date} </span>
          </p>
        </div>
      </section>
    </main>
  );
};
