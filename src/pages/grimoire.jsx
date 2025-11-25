import React from 'react';
import Button from "@components/button.jsx";
import "./grimoire.scss";
import logoGitHub from "@images/logoGitHub.png";

const Grimoire = () => {
    return (
        <div>
            <section className='titleProject'>
                <h1>Mon Vieux Grimoire</h1>
                <p>Création du back-end d' un site de notation de livres</p>
            </section>

            <section className='mockupContent'>
                <div className='mockup'>
                    <img src="/portfolio/mockup/grimoire/grimoire1.png" alt="Mockup grimoire" />
                    <img src="/portfolio/mockup/grimoire/grimoire2.png" alt="Mockup grimoire" />
                    <img src="mockup/grimoire/grimoire3.png" alt="Mockup grimoire" />
                    <img src="/portfolio/mockup/grimoire/grimoire4.png" alt="Mockup grimoire" />
                    <img src="/portfolio/mockup/grimoire/grimoire5.png" alt="Mockup grimoire" />
                </div>
                <div className='mockupProject'>
                    <h2>Projet: </h2>
                    <ul>
                        <li>Serveur Node et modèle de données</li>
                        <li>Authentification et opérations CRUD</li>
                        <li>Base de données MongoDB structurée</li>
                    </ul>
                </div>

            </section>
            <div className='buttons'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/mon-vieux-grimoire.git" target="_blank" rel="noopener noreferrer" />
            </div>
        </div>
    );
};

export default Grimoire;