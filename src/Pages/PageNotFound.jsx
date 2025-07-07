import { useEffect } from "react";
import PageNotFoundImage from "../assets/NoMovieFound.jpg";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Opps! Sorry | Movie Buzz`;
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="dark:text-white text-7xl text-gray-700 my-10 font-bold">
            404, Oops!
          </p>
          <div className="max-w-lg h-100">
            <img className="rounded" src={PageNotFoundImage} alt="" />
          </div>
        </div>
        <div className="dark:text-white flex justify-center text-2xl my-5">
          <Link to="/">
            <button className="cursor-pointer">Back To Movie Home</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
