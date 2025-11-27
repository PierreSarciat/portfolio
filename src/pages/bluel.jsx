import React from 'react';
import Button from "@components/button.jsx";
import logoGitHub from "@images/logoGitHub.png";
import "./pages.scss";
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


            </section>
            <section>
                <div className='mockupProject'>
                    <h2>Projet: </h2>
                    <ul>
                        <li><Button text="Contexte" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Développement d’une galerie dynamique pour les travaux de l’architecte Sophie Bluel avec une interface d’administration sécurisée.</p>
                            <p></p>
                        </span>

                        <li><Button text="Objectif" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Afficher les projets depuis le back-end, filtrer par catégorie, et permettre à l’administrateur d’ajouter ou supprimer des médias en temps réel.</p>
                            <p></p>
                        </span>

                        <li><Button text="Stack technique" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>HTML, CSS, JavaScript, fetch API, Node.js, gestion de tokens et manipulation du DOM</p>
                            <p></p>
                        </span>

                        <li><Button text="Compétences développées" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Gestion des événements utilisateurs, appels API, manipulation de FormData, authentification via token, mise à jour dynamique du DOM.</p>
                            <p></p>
                        </span>

                        <li><Button text="Résultat et impact" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Galerie fonctionnelle et dynamique, filtres opérationnels, modale d’ajout de projets et suppression en mode édition pour l’administrateur.</p>
                            <p></p>
                        </span>

                        <li><Button text="Perspectives d' améliorations" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p>Optimiser la synchronisation avec l’API, ajouter des animations pour les ajouts/suppressions et renforcer les validations de formulaire.</p>
                            <p></p>
                        </span>
                    </ul>
                </div>
            </section>
            <div className='buttonBluel'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/projet3.git" target="_blank" rel="noopener noreferrer" />
            </div>
        </div>
    );
};

export default Bluel;