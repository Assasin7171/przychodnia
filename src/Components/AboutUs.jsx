const AboutUs = () => {
    return (
        <div className="container on-slider bg-white">
            <div className="row">
                <div className="col-md-6">
                    <section id="kim-jestesmy" className="p-3">
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="img-fluid" src="https://placehold.co/100x150"
                                     alt="zdjecie lekarza"/>
                            </div>
                            <div className="col-sm-8">
                                <h2>Kim jesteśmy?</h2>
                                <p>Świadczymy szeroką gamę usług medycznych z zakresu Podstawowej Opieki
                                    Zdrowotnej.
                                    Ambulatoryjnej Opieki Specjalistycznej, Stomatologii, Diagnostyki
                                    laboratoryjnej
                                    i obrazowej.</p>
                                <a href="#"
                                   className="link-body-emphasis text-decoration-none">{"Dowiedz się więcej>"}</a>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <section id="dane-kontaktowe" className="p-3">
                            <div className="calendar row">
                                <div className="col-7">
                                    <span className="header">PN-PT</span>
                                </div>
                                <div className="item-value col-5">
                                    7:30 - 20:00
                                </div>
                            </div>

                            <div className="phone row">
                                <div className="col-7">
                                    <span className="header">Rejestracja</span>
                                </div>
                                <div className="col-5">
                                    <a href="tel:46 444 44 44">46 444 44 44 </a>
                                </div>

                                <div className="col-7">
                                    <span className="header">Stomatologia</span>
                                </div>
                                <div className="col-5">
                                    <a href="tel:46 444 44 44">46 444 44 44 </a>
                                </div>

                                <div className="col-7">
                                    <span className="header">Ginekologia</span>
                                </div>
                                <div className="col-5">
                                    <a href="tel:46 444 44 44">46 444 44 44 </a>
                                </div>

                                <div className="col-7">
                                    <span className="header">Rehabilitacja</span>
                                </div>
                                <div className="col-5">
                                    <a href="tel:46 444 44 44">46 444 44 44 </a>
                                </div>
                            </div>

                            <div className="email row">
                                <div className="col-7">
                                    <a href="mailto:rejestracja@test.pl">rejestracja@test.pl</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;