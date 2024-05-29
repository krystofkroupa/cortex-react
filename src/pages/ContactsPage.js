import WavesDark from "../components/MainPageWavesDark";
import {useState} from "react";

export default function ContactsPage() {

    const [dataInForm, setDataInForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    function printObjectsFromDataForm() {
        Object.entries(dataInForm).map(([key, value]) => {
            console.log(`${key}: ${value}`)
        })
    }

    const handleFormDataChange = (name, value) => {
        setDataInForm({
            ...dataInForm,
            [name]: value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        printObjectsFromDataForm()
        setDataInForm({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        })
    }

    return (
        <div className="main2" id="contacts-page">
            <div className="contactContainer">
                <div className="contactText">
                    <p>Kontakt</p>
                </div>
                <div className="contactForm">
                    <div className="formContainer">
                        <form onSubmit={handleFormSubmit}>
                            <div className="nameContainer">
                                <input value={dataInForm.firstName} onChange={(e) => handleFormDataChange('firstName', e.target.value)} type="text" name="firstname" placeholder="Křestní jméno"/>
                                <input value={dataInForm.lastName} onChange={(e) => handleFormDataChange('lastName', e.target.value)} type="text" name="lastname" placeholder="Přijmení"/>
                            </div>
                            <div className="emailContainer">
                                <input value={dataInForm.email} onChange={(e) => handleFormDataChange('email', e.target.value)} type="text" name="email" placeholder="Emailová adresa"/>
                            </div>
                            <div className="textContainer">
                                <textarea value={dataInForm.message} onChange={(e) => handleFormDataChange('message', e.target.value)} placeholder="Vaše zpráva" name="message" rows="5" cols="50"/>
                            </div>
                            <div className="sendButtonContainer">
                                <button type="submit">Odeslat</button>
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