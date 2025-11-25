import React from 'react';
import Button from "@components/button.jsx";
import logoGitHub from "@images/logoGitHub.png";
import "./bluel.scss";

const Bluel = () => {
    return (
        <div>
            <section className='titleProject'>
                <h1>Sophie Bluel</h1>
                <p>Création d' une page web dynamique avec JavaScript</p>
            </section>

            <section className='mockupContent'>
                <div className='mockup'>
                    <img src="/portfolio/mockup/bluel/bluel1.png" alt="Mockup Bluel" />
                    <img src="/portfolio/mockup/bluel/bluel2.png" alt="Mockup Bluel" />
                    <img src="/portfolio/mockup/bluel/bluel3.png" alt="Mockup Bluel" />
                    <img src="/portfolio/mockup/bluel/bluel4.png" alt="Mockup Bluel" />
                    <img src="/portfolio/mockup/bluel/bluel5.png" alt="Mockup Bluel" />
                </div>
                <div className='mockupProject'>
                    <h2>Projet: </h2>
                    <ul>
                        <li>Site dynamique</li>
                        <li>Evénements JS</li>
                    </ul>
                </div>

            </section>
            <div className='buttons'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/projet3.git" target="_blank" rel="noopener noreferrer" />
            </div>
        </div>
    );
};

export default Bluel;