import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import NotFoundPage from "./pages/NotFound.jsx";
import GamePage from "./pages/Game.jsx";
import './i18n';

const App = () => {

    const baseUrl = import.meta.env.BASE_URL || '/'

    return (
        <Routes>
            <Route path={baseUrl + "/"} element={<HomePage/>}/>
            <Route path={baseUrl + "/about"} element={<AboutPage/>}/>
            <Route path="/game" element={<GamePage />} />
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default App;