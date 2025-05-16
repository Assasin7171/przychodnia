const AboutUs = () => {
    return (
        <div className="container-md my-auto on-slider bg-white shadow-sm rounded-top text-res">
            <div className="row">
                <div className="col-md-6 p-0 m-0">
                    <section id="kim-jestesmy" className="border-end border-1 border-black my-sm-2 py-4 py-sm-5 px-3">
                        <div className="row g-sm-3">
                            <div className="col-sm-4">
                                <img className="img-fluid w-100 h-auto" src="https://placehold.co/150x100"
                                     alt="zdjecie lekarza"/>
                            </div>
                            <div className="col-sm-8">
                                <h4 className="text-secondary">Kim jesteśmy?</h4>
                                <p>Świadczymy szeroką gamę usług medycznych z zakresu Podstawowej Opieki
                                    Zdrowotnej.
                                    Ambulatoryjnej Opieki Specjalistycznej, Stomatologii, Diagnostyki
                                    laboratoryjnej
                                    i obrazowej.</p>
                                <a href="#"
                                   className="link-info text-decoration-none text-primary h6">Dowiedz się więcej <i
                                    className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-6 p-0 m-0 bg-white">
                    <div className="row mx-3">
                        <section id="dane-kontaktowe" className="py-4 py-sm-5 px-3 ms-3 gap-1">

                            {/* Godziny otwarcia */}
                            <div className="row align-items-center mb-3">
                                <div className="col-1"><i className="bi bi-calendar"></i></div>
                                <div className="col-6"><span className="h5">PN-PT</span></div>
                                <div className="col-5 h5">7:30 - 20:00</div>
                            </div>

                            {/* Rejestracja */}
                            <div className="row align-items-center">
                                <div className="col-1"><i className="bi bi-phone"></i></div>
                                <div className="col-6"><span className="h5">Rejestracja</span></div>
                                <div className="col-5">
                                    <a href="tel:46 444 44 44" className="text-decoration-none h6 text-primary">46 444 44 44</a>
                                </div>
                            </div>

                            {/* Centrala (brak numeru) */}
                            <div className="row mb-2">
                                <div className="col-1"></div>
                                <div className="col-6">Centrala Telefoniczna</div>
                                <div className="col-5"></div>
                            </div>

                            {/* Specjalizacje */}
                            {[
                                { label: "Stomatologia", phone: "46 444 44 44" },
                                { label: "Ginekologia", phone: "46 444 44 44" },
                                { label: "Rehabilitacja", phone: "46 444 44 44" },
                            ].map(({ label, phone }) => (
                                <div className="row align-items-center" key={label}>
                                    <div className="col-1"></div>
                                    <div className="col-6"><span className="header">{label}</span></div>
                                    <div className="col-5">
                                        <a href={`tel:${phone}`} className="text-decoration-none h6 text-primary">{phone}</a>
                                    </div>
                                </div>
                            ))}

                            {/* E-mail */}
                            <div className="row align-items-center">
                                <div className="col-1"><i className="bi bi-envelope"></i></div>
                                <div className="col-6">
                                    <a href="mailto:rejestracja@test.pl" className="text-decoration-none text-primary">rejestracja@test.pl</a>
                                </div>
                                <div className="col-5"></div>
                            </div>

                        </section>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs;