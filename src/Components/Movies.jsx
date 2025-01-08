import {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination.jsx";

function Movies() {
    const [movies, setMovies] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const apiKey = import.meta.env.VITE_API_KEY
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`

    function nextPage() {
        setPageNumber((prevPage) => prevPage + 1)
    }

    function prevPage() {
        setPageNumber((prevPage) => Math.max(prevPage - 1, 1))
    }

    // const url = new URL(apiUrl)
    // const pageNumber = url.searchParams.get('page')

    useEffect(() => {
        axios.get(apiUrl).then(function (res) {
            setMovies(res.data.results)
        })
    }, [apiUrl, pageNumber]);


    return (
        <>
            <div className="mt-[10rem] mb-[4rem]">
                <div className="text-2xl  font-bold text-center">Trending Movies</div>
            </div>
            <div className="flex flex-row flex-wrap justify-around m-5">
                {movies.map((movieObj) => {
                    return (
                        <MovieCard key={movieObj.id} movieObj={movieObj}/>
                    )
                })}
            </div>
            <Pagination previous_page={prevPage} next_page={nextPage} page_no={pageNumber}/>
        </>
    );
}

export default Movies;
