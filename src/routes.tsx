import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';


export const AppRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
        </BrowserRouter>
    )
}