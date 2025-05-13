import Header from "../Layouts/Header.jsx";
import Footer from "../Layouts/Footer.jsx";

import Contact from "../Components/Contact.jsx";

const ContactPage = () => {
    return (
        <div className="container-fluid px-0">
            <Header/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default ContactPage;