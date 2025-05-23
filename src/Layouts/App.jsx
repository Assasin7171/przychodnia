import '../Styles/App.css'
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Categories from "./Categories.jsx";
import News from "./News.jsx";

function App() {
    return (
        <div className="container-fluid px-0 bg-body-tertiary">
            <Header/>
            <Banner/>
            <Categories/>
            <News/>
            <Footer/>
        </div>
    )
}

export default App
