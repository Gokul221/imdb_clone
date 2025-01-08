import {createContext, useContext, useEffect, useState} from "react";

export const WatchListContext = createContext()

export const WatchListProvider = ({children}) => {
    const [watchList, setWatchList] = useState([])

    const handleAddToWatchList = (movieObj) => {
        let newWatchList = [...watchList, movieObj]
        setWatchList(newWatchList)
        console.log(newWatchList)
        localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    }

    useEffect(() => {
        let moviesInLocalStorage = localStorage.getItem('moviesApp')
        if (moviesInLocalStorage) {
            setWatchList(JSON.parse(moviesInLocalStorage))
        }
    }, []);

    const handleRemoveFromWatchList = (movieObj) => {
        let filteredWatchList = watchList.filter((movie) => {
            return movie.id !== movieObj.id
            /* filteredWatchList will now contain all the movies in the watchlist
               except the movieObj(already selected movie in the watchlist) */
        })
        setWatchList(filteredWatchList)
        console.log(filteredWatchList)
        localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList))
    }

    return (
        <WatchListContext.Provider value={{watchList, setWatchList, handleAddToWatchList, handleRemoveFromWatchList}}>
            {children}
        </WatchListContext.Provider>
    )
}