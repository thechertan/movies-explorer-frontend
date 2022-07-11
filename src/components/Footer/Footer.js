import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Footer.css'

function Footer() {
    const [date, setDate] = useState('2022');

    useEffect(() => {
        setDate(new Date().getFullYear());
    }, []);

    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className="footer__signature">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className="footer__thorough">
                    <div className="footer__year">© {date}</div>
                    <div className="footer__links">
                        <Link to="#techs" className="footer__link">Яндекс.Практикум</Link>
                        <Link to="#techs" className="footer__link">Github</Link>
                        <Link to="#techs" className="footer__link">Facebook</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;