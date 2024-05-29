import WavesDark from "../components/MainPageWavesDark";

export default function ContactsPage() {
    return (
        <div className="main2" id="contacts-page">
            <div className="contactContainer">
                <div className="contactText">
                    <p>Kontakt</p>
                </div>
                <div className="contactForm">
                    <div className="formContainer">
                        <form action="">
                            <div className="nameContainer">
                                <input type="text" name="firstname" placeholder="Křestní jméno"/>
                                <input type="text" name="lastname" placeholder="Přijmení"/>
                            </div>
                            <div className="emailContainer">
                                <input type="text" name="email" placeholder="Emailová adresa"/>
                            </div>
                            <div className="textContainer">
                                <input type="text" name="text" placeholder="Vaše zpráva"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="fill2"></div>
            <WavesDark/>
        </div>
    )
}