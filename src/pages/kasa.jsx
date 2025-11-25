import React from 'react';
import Button from "@components/button.jsx";
import "./kasa.scss";
import logoGitHub from "@images/logoGitHub.png";


const Kasa = () => {
    return (
        <div>
            <section className='titleProject'>
                <h1>Kasa</h1>
                <p>Créer une application de location immobilière avec React</p>
            </section>

            <section className='mockupContent'>
                <div className='mockup'>
                    <img src="/portfolio/mockup/kasa/kasa1.png" alt="Mockup Kasa" />
                    <img src="/portfolio/mockup/kasa/kasa2.png" alt="Mockup Kasa" />
                    <img src="/portfolio/mockup/kasa/kasa3.png" alt="Mockup Kasa" />
                    <img src="/portfolio/mockup/kasa/kasa4.png" alt="Mockup Kasa" />
                    <img src="/portfolio/mockup/kasa/kasa5.png" alt="Mockup Kasa" />
                </div>
                <div className='mockupProject'>
                    <h2>Projet: </h2>
                    <ul>
                        <li>Interface React</li>
                        <li>Navigation React Router</li>
                        <li>Style Sass</li>
                    </ul>
                </div>

            </section>
            <div className='buttons'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/Kasa-immobilier.git" target="_blank" rel="noopener noreferrer" />
                <Button text="Mon CV" href="/cv.pdf" />
            </div>
        </div>
    );
};

export default Kasa;