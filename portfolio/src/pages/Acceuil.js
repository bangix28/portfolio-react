import Header from "../components/Header";
import React, {useState} from "react";
import Footer from "../components/Footer";
import {useSpring, animated, config} from 'react-spring';
import PhpIcon from '@mui/icons-material/Php';




const Acceuil = () => {
    const [flip, set] = useState(false)
    function AppearAnimation(animation_delay) {
        return useSpring({
            to: { opacity: 1 },
            from: { opacity: 0 },
            delay: animation_delay,
            config: config.molasses,
            onRest: () => set(!flip),
        })
    }

    const propsTitle = AppearAnimation(500);


    return (
        <div>
            <Header/>
            <div className="container-about-me">
                <article className="about-me">
                    <animated.div style={AppearAnimation(600)} className="image-about-me">
                    <img src={require('../images/formation-symfony.png')} alt="images"/>
                    </animated.div>
                    <animated.div style={AppearAnimation(800)} className="about-me-content">
                        <h2>Qui suis je ?</h2>
                        <p>
                            Je m'appelle Kénolane Granger et je vous présente mon portfolio. Vous trouverez ici mes différents travaux d'école et projets personnels dans le domaine du développement web.<br/>
                            Passionné d'informatique depuis mon adolescence, j'ai essayé toutes sortes de choses (3D, Création de jeux no-code, Montage matériel hardware, montage vidéo).
                            <br/> Je suis vite tombé dans le code est plus en particulier le développement web.<br/>
                            J'ai suivi le parcours d'Openclassrooms Développeur d'applications PHP/Symfony dans lequelle j'ai effectué 7 projets d'école (Wordpress, maquette de site, Blog PHP, Blog Symfony, API, Restful, mise à niveaux d'une MVP avec test unitaire).
                        </p>
                    </animated.div>
                </article>
                <article className="about-me">
                    <animated.div style={AppearAnimation(800)} className="about-me-content">
                        <h2>Quelle est mon expérience professionnelle ?</h2>
                        <p>
                            Ma première expérience professionnelle dans le développement est mon alternance chez Comunica Organisation en tant que développeur web fullstack.<br/>
                            J'ai travailer sur les sites <a href="https://www.preventica.com/"><strong>Préventica france</strong></a> et <a href="https://www.preventica.ma/"> <strong> Préventica Maroc</strong></a>.<br/>
                            Les différentes tâches auxquelles j'ai été affecté étaient les suivantes :
                            <ul>
                                <li>Création de nouvelles fonctionnalités</li>
                                <li>Consommation d'API</li>
                                <li>Refactorisation de code</li>
                                <li>Sécurisation des plateformes web</li>
                                <li>Mise en place d'un environement de développement avec Docker</li>
                                <li>Création d'UX avec Javascript</li>
                                <li>... </li>
                            </ul>
                        </p>
                    </animated.div>
                    <animated.div style={AppearAnimation(600)} className="image-about-me">
                        <img src={require('../images/logo-communica.png')} alt="images"/>
                    </animated.div>
                </article>
                <article className="about-me">
                    <animated.div style={AppearAnimation(600)} className="image-about-me">
                        <img src={require('../images/formation-symfony.png')} alt="images"/>
                    </animated.div>
                    <animated.div style={AppearAnimation(800)} className="about-me-content">
                        <h2>Language et Framework</h2>
                        <p>
                            <ul>
                                <li>
                                    PHP <i className="fa-brands fa-php"></i>
                                </li>
                                <li>
                                    Symfony <i className="fa-brands fa-symfony"></i>
                                </li>
                                <li>
                                    Javascript <i className="fa-brands fa-square-js"></i>
                                </li>
                                <li>
                                    HTML5 <i className="fa-brands fa-html5"></i>
                                </li>
                                <li>
                                    CSS3 <i className="fa-brands fa-css3-alt"></i>
                                </li>
                                <li>
                                    Yaml
                                </li>
                                <li>
                                    Bootstrap <i className="fa-brands fa-bootstrap"></i>
                                </li>
                                <li>
                                    Docker <i className="fa-brands fa-docker"></i>
                                </li>
                                <li>
                                    Wordpress <i className="fa-brands fa-wordpress"></i>
                                </li>
                            </ul>
                        </p>
                    </animated.div>
                </article>
            </div>
            <Footer/>
        </div>
    );
};

export default Acceuil;

