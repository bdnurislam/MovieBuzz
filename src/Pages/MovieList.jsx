import { useEffect } from "react";
import { MovieCards } from "../Components/MovieCards";
import { useTitle, useFetch } from "../hooks";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  const pageTitle = useTitle(`${title}`);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-3">
        <div className="flex justify-start flex-wrap mobile:justify-evenly desktop:justify-evenly">
          {movies.map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
