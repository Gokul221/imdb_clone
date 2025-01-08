import "./App.css";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import Popular from './Components/Popular.jsx'
import Watchlist from "./Components/Watchlist";
import Footer from "./Components/Footer.jsx";
import {WatchListProvider} from "./Components/WatchListContext.jsx";
import {BrowserRouter, Routes, Route} from "react-router";

function App() {
    return (
        <>
            <WatchListProvider>
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
                                    <Movies/>
                                </main>
                            }
                        />
                        <Route path="/watchlist" element={<Watchlist/>}/>
                        <Route path='/popular' element={<Popular/>}/>
                    </Routes>
                </BrowserRouter>
                <footer className='mt-[30vh]'>
                    <Footer/>
                </footer>
            </WatchListProvider>
        </>
    );
}

export default App;
