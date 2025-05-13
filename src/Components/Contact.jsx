const Contact = () => {
    return (
        <div className="container-fluid bg-white my-4">
            <div className="container-md">
                <div className="row">
                    <div className="col-sm-4 d-flex flex-column justify-content-center">
                        <span className="text-uppercase">
                            Kontakt
                        </span>
                        <h4 className="text-uppercase">Jak nas znaleźć?</h4>
                        <div className="row">
                            <div className="col-1">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="col d-flex flex-column">
                                    <span>Przychodnia Rawka</span>
                                    <span>Stanisława Domarasiewicza 3/5</span>
                                    <span>96-100 Skierniewice</span>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-1">
                                <i className="bi bi-phone"></i>
                            </div>
                            <div className="col">
                                <p>
                                    <a href="tel:(46) 111 11 11"
                                       className="link-info nav-link text-primary">tel: (46) 111 11 11</a>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <div className="col">
                                <a href="mailto:rejestracja@test1.pl"
                                      className="link-info nav-link text-primary">rejestracja@test1.pl</a>
                                <a href="mailto:rejestracja@test2.pl"
                                      className="link-info nav-link text-primary">rejestracja@test2.pl</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 d-flex flex-column justify-content-center">
                        <img src="https://placehold.co/300x300" className="img-fluid" alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;