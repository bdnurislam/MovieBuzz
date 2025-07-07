import { useSearchParams } from "react-router-dom";
import { useFetch, useTitle } from "../hooks/index";
import { MovieCards } from "../Components/MovieCards";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const quearyTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, quearyTerm);
  const pageTitle = useTitle(`Search For ${quearyTerm}`);

  return (
    <main>
      <section className="py-7">
        <div className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `Result Not Found For '${quearyTerm}'`
            : `Result Found For '${quearyTerm}'`}
        </div>
      </section>
      <section className="mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
