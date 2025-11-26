import React from 'react';
import Button from "@components/button.jsx";
import "./pages.scss";
import "./carducci.scss";
import logoGitHub from "@images/logoGitHub.png";


const Booki = () => {
    return (
        <div>
            <section className='titleProject'>
                <h1>Nina Carducci</h1>
                <p>Débugger et optimiser un site de photographe</p>
            </section>

            <section className='mockupContent'>
                <div className='mockup'>
                    <img src="/portfolio/mockup/carducci/carducci1.png" alt="Mockup Carducci" />
                    <img src="/portfolio/mockup/carducci/carducci2.png" alt="Mockup Carducci" />
                    <img src="/portfolio/mockup/carducci/carducci3.png" alt="Mockup Carducci" />
                </div>
                <div className='mockupProject'>
                    <h2>Projet: </h2>
                    <ul>
                        <li>Rapport d' audit SEO</li>
                        <li>Accessibilité</li>
                        <li>Cahier de recette avec tests</li>
                    </ul>
                </div>

            </section>
            <div className='buttonCarducci'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/ninacarducci.git" target="_blank" rel="noopener noreferrer" />
                <Button text="Rapport d' optimisation" href="public/mockup/carducci/auditSEO.pdf" target="_blank" rel="noopener noreferrer" />
            </div>
        </div>
    );
};

export default Booki;