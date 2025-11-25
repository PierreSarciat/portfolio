import React from 'react';
import Button from "@components/button.jsx";
import "./booki.scss";
import logoGitHub from "@images/logoGitHub.png";


const Booki = () => {
    return (
        <div>
            <section className='titleProject'>
                <h1>Booki</h1>
                <p>Création de  la page d'accueil d'une agence de voyage</p>
            </section>

            <section className='mockupContent'>
                <div className='mockup'>
                    <img src="/portfolio/mockup/booki/booki1.png" alt="Mockup Booki" />
                    <img src="/portfolio/mockup/booki/booki2.png" alt="Mockup Booki" />
                    <img src="/portfolio/mockup/booki/booki3.png" alt="Mockup Booki" />
                </div>
                <div className='mockupProject'>
                    <h2>Projet: </h2>
                    <ul>
                        <li>Intégration HTML/CSS</li>
                        <li>Intégration à partir de Figma</li>
                        <li>Site responsive</li>
                        <li>Repo Git</li>
                    </ul>
                </div>

            </section>
            <div className='buttons'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/Booki/tree/projet-definitif" target="_blank" rel="noopener noreferrer" />
                <Button text="Mon CV" href="/cv.pdf" />
            </div>
        </div>
    );
};

export default Booki;