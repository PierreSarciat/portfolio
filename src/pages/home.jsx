import React from 'react';
import "./home.scss";
import Card from '@components/card.jsx';
import bookiImg from '@images/booki.webp';
import bluelImg from '@images/bluel.webp';
import carducciImg from '@images/carducci.webp';
import grimoireImg from '@images/grimoire.webp';
import kasaImg from '@images/kasa.webp';
import menu_makerImg from '@images/menu_maker.webp';

const projects = [
    { img: bookiImg, title: "BOOKI", description: " location", alt: "Projet Booki", link: "/booki" },
    { img: bluelImg, title: "SOPHIE BLUEL", alt: "Projet Sophie Bluel", link: "/bluel" },
    { img: carducciImg, title: "NINA CARDUCCI", alt: "Projet Nina Carducci", link: "/carducci" },
    { img: grimoireImg, title: "MON VIEUX GRIMOIRE", alt: "Projet Mon Vieux Grimoire", link: "/grimoire" },
    { img: kasaImg, title: "KASA", alt: "Projet Kasa", link: "/kasa" },
    { img: menu_makerImg, title: "MENU MAKER", alt: "Projet Menu Maker", link: "/maker" },
];


const Home = () => {
    return (

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
            <section className='skillsContent'>
                <h2>Mes compétences</h2>
                <section className='skills'>
                    <div className='skillsList'>
                        <h3>Front End</h3>
                        <ul>
                            <li><strong>Langage: </strong>JavaScript, HTML5, CSS</li>
                            <li><strong>Frameworks et bibliothèques: </strong>React, React Router, Vite</li>
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
                            <li><strong>Gestion de Version: </strong>Git, GitHub</li>
                            <li><strong>Environnement: </strong>Visual Studio, Postman</li>
                            <li><strong>SEO: </strong>Google Search Console, PageSpeed Insights, Lighthouse</li>
                        </ul>
                    </div>
                </section>
            </section>
            <section className='project'>
                <h2>Mes Projets</h2>
                <div className='projectList'>

                    {projects.map((proj, index) => (
                        <Card
                            key={index}
                            img={proj.img}
                            title={proj.title}
                            description={proj.description}
                            link={proj.link}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};
export default Home;