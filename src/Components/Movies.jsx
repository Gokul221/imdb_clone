import MovieCard from "./MovieCard";
import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "./Pagination.jsx";

function Movies({handleAddToWatchList, handleRemoveFromWatchList, watchList}) {

    const [movies, setMovies] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const baseUrl = import.meta.env.VITE_API_URL

    // dynamic URL fill-up
    const apiUrl = `${baseUrl}&page=${pageNumber}`

    // const streamingProvidersURL = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`

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
            <div className="p-5">
                <div className="text-2xl font-bold text-center">Trending Movies</div>
            </div>
            <div className="flex flex-row flex-wrap justify-around m-5">
                {movies.map((movieObj) => {
                    return (
                        <MovieCard key={movieObj.id} poster_path={movieObj.poster_path}
                                   original_title={movieObj.original_title}
                                   handleAddToWatchList={handleAddToWatchList}
                                   handleRemoveFromWatchList={handleRemoveFromWatchList}
                                   watchList={watchList}
                                   movieObj={movieObj}df
                        />
                    )
                })}
            </div>
            <Pagination previous_page={prevPage} next_page={nextPage} page_no={pageNumber}/>
        </>
    );
}

export default Movies;
