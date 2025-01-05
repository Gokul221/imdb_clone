import {useEffect, useState} from "react";
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import genreIDs from "../utilities/genreIDs.js";

function Watchlist({watchList, setWatchList, handleRemoveFromWatchList}) {

    const [search, setSearch] = useState('')
    const [genreList, setGenreList] = useState(['All Genres'])
    const [currGenre, setCurrGenre] = useState('All Genres')

    let handleFilter = (genre) => {
        setCurrGenre(genre)
    }

    let handleSearch = (e) => {
        setSearch(e.target.value)
    }

    let sortRatingsInIncreasing = () => {
        let sortedIncreasing = watchList.sort((movieA, movieB) => {
            return movieA.vote_average - movieB.vote_average
        })
        setWatchList([...sortedIncreasing])
    }

    let sortRatingsInDecreasing = () => {
        let sortedIncreasing = watchList.sort((movieA, movieB) => {
            return movieB.vote_average - movieA.vote_average
        })
        setWatchList([...sortedIncreasing])
    }

    useEffect(() => {
        let temp = watchList.map((movieObj) => {
            return genreIDs[movieObj.genre_ids[0]]
        })
        temp = new Set(temp)
        setGenreList(['All Genres', ...temp])
    }, [watchList]);

    return <main className='justify-items-center'>
        <div className='flex justify-center flex-wrap p-5 mt-14'>
            {genreList.map((genre) => {
                return <div onClick={() => handleFilter(genre)}
                            key={genre}
                            className={currGenre === genre ? 'h-[2rem] w-[100px] text-white flex items-center ' +
                                'justify-center m-2 rounded-xl bg-blue-500/80'
                                : 'h-[2rem] w-[100px] text-white flex items-center justify-center m-2 rounded-xl ' +
                                'bg-gray-600/60 hover:cursor-pointer hover:scale-110 duration-200'}>{genre}
                </div>
            })}

        </div>

        <div className='flex justify-center my-4'>
            <input type='text' placeholder='Search Movies or Keywords'
                   className='h-[3rem] w-[400px] px-6 bg-gray-200 outline-none rounded-[30px]'
                   onChange={handleSearch}
                   value={search}/>
        </div>

        <div className='w-[85%] rounded-lg border border-gray-300 m-10'>
            <table className='w-full text-gray-500 text-center'>
                <thead className='border-b-4 border-gray-300'>
                <tr>
                    <th className='w-[25%]'>Poster</th>
                    <th className='w-[18%]'>Name</th>
                    <th className='flex justify-center'>
                        <div onClick={sortRatingsInIncreasing}
                             className='px-2 hover:cursor-pointer hover:scale-125 duration-100'>
                            <FontAwesomeIcon icon={faArrowUp}/></div>
                        Ratings
                        <div onClick={sortRatingsInDecreasing}
                             className='pl-2 hover:cursor-pointer hover:scale-125 duration-100'>
                            <FontAwesomeIcon icon={faArrowDown}/></div>
                    </th>
                    <th>Popularity</th>
                    <th>Genre</th>
                    <th className='w-[12%]'></th>
                </tr>
                </thead>
                <tbody>
                {watchList.filter((movieObj) => {
                    if (currGenre === 'All Genres') return true
                    else return genreIDs[movieObj.genre_ids[0]] === currGenre
                }).filter((movieObj) => {
                    return movieObj.title.toLowerCase().includes(search.toLowerCase())
                }).map((movieObj) => {
                    return (
                        <tr key={movieObj.id} className='border-b-2'>
                            <td className='justify-items-center py-4'>
                                <img className='h-[8rem] w-[8rem] rounded-xl bg-cover hover:scale-110 duration-100'
                                     src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
                                     alt={movieObj.original_title}
                                />
                            </td>
                            <td>{movieObj.original_title}</td>
                            <td>{movieObj.vote_average.toFixed(1)}</td>
                            <td>{movieObj.popularity.toFixed(2)}</td>
                            <td>{genreIDs[movieObj.genre_ids[0]]}</td>
                            <td onClick={() => handleRemoveFromWatchList(movieObj)}
                                className='text-white place-items-center hover:cursor-pointer px-8 hover:scale-110 duration-100'>
                                <div title='Remove from Watchlist' className='w-[6rem] p-2 rounded-xl text-center bg-red-600/90'>Remove</div>

                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    </main>;
}

export default Watchlist;
