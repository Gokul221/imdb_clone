import "./App.css";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import Popular from "./Components/Popular.jsx";
import Watchlist from "./Components/Watchlist";
import Registration from "./Components/Registration.jsx";
import Login from "./Components/Login.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Banner />
                <Movies />
              </main>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <footer className="mt-[15vh]">
        <Footer />
      </footer>
    </>
  );
}

export default App;
