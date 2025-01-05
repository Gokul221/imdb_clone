import "./App.css";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import Popular from './Components/Popular.jsx'
import Watchlist from "./Components/Watchlist";
import {BrowserRouter, Routes, Route} from "react-router";
import {useEffect, useState} from "react";

function App() {

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
        <>
            <BrowserRouter>
                <header>
                    <Navbar/>
                </header>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                <Banner/>
                                <Movies handleAddToWatchList={handleAddToWatchList}
                                        handleRemoveFromWatchList={handleRemoveFromWatchList}
                                        watchList={watchList}
                                />
                            </main>
                        }
                    />
                    <Route path="/watchlist" element={<Watchlist watchList={watchList}
                                                                 setWatchList={setWatchList}
                                                                 handleRemoveFromWatchList={handleRemoveFromWatchList}/>}/>
                    <Route path='/popular' element={<Popular/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
