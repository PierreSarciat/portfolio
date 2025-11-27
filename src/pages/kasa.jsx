import React from 'react';
import Button from "@components/button.jsx";
import "./pages.scss";
import "./kasa.scss"
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

            </section>
            <section>
                <div className='mockupProject'>
                    <h2>Projet: </h2>
                    <ul>
                        <li><Button text="Contexte" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p></p>
                            <p></p>
                        </span>

                        <li><Button text="Objectif" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p></p>
                            <p></p>
                        </span>

                        <li><Button text="Stack technique" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p></p>
                            <p></p>
                        </span>

                        <li><Button text="Compétences développées" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p></p>
                            <p></p>
                        </span>

                        <li><Button text="Résultat et impact" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p></p>
                            <p></p>
                        </span>

                        <li><Button text="Perspectives d' améliorations" /></li>
                        <span className='pGrid'>
                            <p></p>
                            <p></p>
                            <p></p>
                        </span>
                    </ul>
                </div>
            </section>
            <div className='buttonKasa'>
                <Button img={logoGitHub} alt="GitHub" href="https://github.com/PierreSarciat/Kasa-immobilier.git" target="_blank" rel="noopener noreferrer" />
                <Button text="URL" href="/cv.pdf" />
            </div>
        </div>
    );
};

export default Kasa;