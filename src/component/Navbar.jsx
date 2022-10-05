import React,{ useEffect} from 'react'
import { MdHelpOutline, MdFlag } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../img/logo.png"
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

function Navbar() {
    const { t } = useTranslation();
    const handleEn = () =>{
        i18n.changeLanguage("en");
        localStorage.setItem('Language', 'en');
    }
    const handleEs = () =>{
        i18n.changeLanguage("es");
        localStorage.setItem('Language', 'es');
    }

    useEffect(() => {
        localStorage.setItem('Language', 'en');
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light mb-10">
                <div className="container-fluid">
                    <a className="navbar-brand" >
                        <img src={Logo} alt="Logo" width="60" height="40" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {t('Categories')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" >{t('Action')}</a></li>
                                    <li><a className="dropdown-item" >{t('Comedy')}</a></li>
                                    <li><a className="dropdown-item" >{t('Drama')}</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('Brands')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" >{t('Walt')}</a></li>
                                    <li><a className="dropdown-item" >{t('Universal')}</a></li>
                                    <li><a className="dropdown-item" >{t('Columbia')}</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">{t('About')}</a>
                            </li>
                        </ul>
                        <li className="d-flex nav-item me-3" >
                            <a className="nav-link " >
                                <MdHelpOutline size={20} />
                                {t('Help')}
                            </a>
                        </li>
                        <li className="d-flex nav-item me-3">
                            <a className="nav-link" >
                                <FaRegUserCircle size={20} />
                                {t('Sign')}
                            </a>
                        </li>
                        <li className="d-flex nav-item dropdown me-5">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <MdFlag size={20}/>
                                {t('Languages')}
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" onClick={handleEn} >EN</a></li>
                                <li><a className="dropdown-item" onClick={handleEs}>ES</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
