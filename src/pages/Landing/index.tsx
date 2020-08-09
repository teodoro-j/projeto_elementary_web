import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/LogoTeste.svg';
import LandingImg from '../../assets/images/landingTeste.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import heart from '../../assets/images/icons/heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="Elementary" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                src={LandingImg} 
                alt="Plataforma de Estudos" 
                className="hero-img" 
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas" />
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas
                    <img src={heart} alt="coração"/>
                </span>
            </div>
        </div> 
    )
}
export default Landing;