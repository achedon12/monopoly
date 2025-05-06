import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import NotFoundPage from "./pages/NotFound.jsx";
import GamePage from "./pages/Game.jsx";
import StatsPage from "./pages/Stats.jsx";
import {baseUrl} from "./utils/Const.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

const App = () => {

    return (
        <Routes>
            <Route path={baseUrl + "/"} element={<HomePage/>}/>
            <Route path={baseUrl + "/about"} element={<AboutPage/>}/>
            <Route path={baseUrl + "/game"} element={<GamePage/>}/>
            <Route path={baseUrl + "/stats"} element={<StatsPage/>}/>
            <Route path={baseUrl + "/login"} element={<LoginPage/>}/>
            <Route path={baseUrl + "/register"} element={<RegisterPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default App;