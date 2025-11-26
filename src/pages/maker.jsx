import React from 'react';
import Button from "@components/button.jsx";
import "./pages.scss";
import "./maker.scss";

const Maker = () => {
    return (
        <div>
            <section className='titleProject'>
                <h1>Menu Maker</h1>
                <p>Plannifier le développement du site d' un client</p>
            </section>

            <section className='mockupContent'>
                <div className='mockup'>
                    <img src="/portfolio/mockup/maker/maker1.png" alt="Mockup Menu Maker" />
                    <img src="/portfolio/mockup/maker/maker2.png" alt="Mockup Menu Maker" />
                    <img src="/portfolio/mockup/maker/maker3.png" alt="Mockup Menu Maker" />
                    <img src="/portfolio/mockup/maker/maker4.png" alt="Mockup Menu Maker" />
                </div>
                <div className='mockupProject'>
                    <h2>Projet: </h2>
                    <ul>
                        <li>Rédaction de spécifications techniques</li>
                        <li>Tableau de veille technologique</li>
                        <li>Kanban et outils de plannifications selon la méthode Agile/Scrum</li>
                    </ul>
                </div>
            </section>
            <div className='buttonMaker'>
                <Button text="Rapport des spécifications techniques" href="public/mockup/maker/speTechniques.pdf" target="_blank" rel="noopener noreferrer" />
            </div>
        </div>
    );
};

export default Maker;