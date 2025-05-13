import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import './Styles/index.css'
import App from './Layouts/App.jsx'

import ErrorPage from "./Pages/ErrorPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/przychodnia" element={<App/>}/>
                <Route path="/przychodnia/kontakt" element={<ContactPage/>}/>
                <Route path="/przychodnia/o-nas" element={<AboutUsPage/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
