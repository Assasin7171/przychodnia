import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './Styles/index.css'
import App from './Layouts/App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/przychodnia" element={<App/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
