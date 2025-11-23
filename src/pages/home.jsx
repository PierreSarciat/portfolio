import React from 'react';
import "./home.scss";

const Home = () => {
    return (
        <>
            <div className='homeContent'>

                <h1>Pierre-Henri Sarciat - Développeur web</h1>
                <div className='buttons'>
                    <a href="" className='buttonMC' title="Me contacter">Me contacter</a>
                    <a href="" className='buttonMCV' title="Mon CV">Mon CV</a>
                </div>
                <section className='about'>
                    <p></p>
                    <p>Développeur fullstack spécialisé dans le backend (PHP, Symfony, Node.js) et la maintenance d’applications web.<br /><br />
                        J’interviens pour corriger les bugs, refactoriser du code legacy et faire évoluer des systèmes existants.<br /><br />
                        Que ce soit pour améliorer une application en place ou développer de nouvelles fonctionnalités, je suis à votre disposition pour vous proposer des solutions techniques adaptées.<br /></p>
                    <p></p>
                </section>
                <section className='skills'>
                    <h2>Mes compétences</h2>
                    <div className='skillsList'>
                        <h3>Front End</h3>
                        <ul>
                            <li><strong>Langage: </strong>JavaScript, HTML5, CSS</li>
                            <li><strong>Frameworks et bibliothèques: </strong>React, Vite</li>
                        </ul>
                    </div>
                    <div className='skillsList'>
                        <h3>Back End</h3>
                        <ul>
                            <li><strong>Langages et Frameworks: </strong>Node.js, Express.js</li>
                            <li><strong>Base de Données </strong>MongoDB</li>
                            <li><strong>API </strong>API REST</li>
                        </ul>
                    </div>
                    <div className='skillsList'>
                        <h3>Outils et Tests</h3>
                        <ul>
                            <li><strong>Gestion de Version </strong>Git, GitHub</li>
                            <li><strong>Environnement: </strong>Visual Studio Code</li>
                            <li><strong>SEO </strong>Google Search Console, PageSpeed Insights, Lighthouse</li>
                        </ul>
                    </div>
                </section>

            </div>


        </>
    );
};

export default Home