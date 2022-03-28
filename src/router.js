import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { HomePage, PilotsPage, StarshipsPage } from './pages' 
import { NavBar } from './components/navBar'

export const Router = () => {
    return (
        <BrowserRouter> 
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />} /> 
                <Route path='/pilots' element={<PilotsPage />} /> 
                <Route path='/starships' element={<StarshipsPage />} />
            </Routes>
        </BrowserRouter>
    )
}