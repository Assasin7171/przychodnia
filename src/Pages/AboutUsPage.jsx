import Header from "../Layouts/Header.jsx";
import Footer from "../Layouts/Footer.jsx";


const AboutUsPage = () => {
    return (
        <div className="container-fluid px-0">
            <Header/>
            <div className="container-md py-4">
                <div className="row">
                    <div className="container-md d-flex mb-4 justify-content-center">
                        <img src="https://placehold.co/150x150" alt="zdjęcie lekarzy"/>
                    </div>

                    <h1 className="text-center mb-4 text-primary">O nas</h1>

                    <p className="lead text-center mb-5">
                        Przychodnia Rawka to nowoczesna placówka medyczna, która od lat świadczy kompleksowe usługi
                        zdrowotne
                        dla mieszkańców Skierniewic i okolic. Naszą misją jest zapewnienie opieki zdrowotnej na najwyższym
                        poziomie – z troską, empatią i pełnym zaangażowaniem w dobro pacjenta.
                    </p>

                    <div className="row mb-5">
                        <div className="col-md-4">
                            <h4 className="text-primary">🔹 Pacjent na pierwszym miejscu</h4>
                            <p>
                                Każdego pacjenta traktujemy indywidualnie, z pełnym szacunkiem i uwagą. Słuchamy,
                                tłumaczymy, pomagamy.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-primary">🔹 Zespół specjalistów</h4>
                            <p>
                                Doświadczeni lekarze, pielęgniarki i diagności nieustannie podnoszą kwalifikacje, by
                                najlepiej pomagać naszym pacjentom.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-primary">🔹 Nowoczesna diagnostyka</h4>
                            <p>
                                Korzystamy z nowoczesnego sprzętu diagnostycznego, aby szybko i skutecznie rozpoznać
                                schorzenia i zaproponować leczenie.
                            </p>
                        </div>
                    </div>

                    <h3 className="mb-3">Co oferujemy?</h3>
                    <ul>
                        <li>Konsultacje lekarzy rodzinnych i specjalistów</li>
                        <li>Punkt pobrań i badania laboratoryjne</li>
                        <li>Opiekę dla dzieci i dorosłych</li>
                        <li>Profilaktykę i szczepienia</li>
                        <li>Badania okresowe i medycynę pracy</li>
                    </ul>

                    <h3 className="mt-5 mb-3">Dla kogo jesteśmy?</h3>
                    <p>
                        Dla każdego, kto szuka zaufanej i dostępnej opieki zdrowotnej. Niezależnie od wieku czy rodzaju
                        problemu –
                        jesteśmy tu, by pomagać.
                    </p>

                    <h3 className="mt-5 mb-3">Gdzie nas znajdziesz?</h3>
                    <address>
                        <strong>📍 Przychodnia Rawka</strong><br/>
                        ul. Stanisława Domarasiewicza 3/5, 96-100 Skierniewice<br/>
                        tel. (46) 111 11 11<br/>
                        email: <a href="mailto:rejestracja@test.pl">rejestracja@test.pl</a>
                    </address>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default AboutUsPage;