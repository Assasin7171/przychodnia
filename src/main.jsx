import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './Styles/index.css'
import App from './Layouts/App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
