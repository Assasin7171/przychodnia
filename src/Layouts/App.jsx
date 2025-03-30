import '../Styles/App.css'
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Categories from "./Categories.jsx";
import News from "./News.jsx";

function App() {
    return (
        <div className="app">
            <Header/>
            <Banner/>
            <Categories/>
            <News/>
            <Footer/>
        </div>
    )
}

export default App
