import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {FavouritesPage} from "./pages/FavouritesPage";
import {Navigation} from "./components/Navigation";

function App() {
    return(
        <div className="container">
            <Navigation />
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/favorites" element={<FavouritesPage/>}/>
            </Routes>
        </div>
    )
}

export default App;