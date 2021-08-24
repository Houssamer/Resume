import React from 'react';
import './style.css';
import pdf from '../../assets/RIAD_Houssame_CV.pdf';

function RightSide() {
    return (
        <div className="rightSide_container">
            <div className="introduction">
                <div className="introduction_title">
                    <h2>INTRODUCTON</h2>
                </div>
                <div className="introduction_description">
                    <p>
                        Élève ingénieur en 2éme année génie informatique à l'école Hassania
                        des travaux public (EHTP) très ambitieux. 
                        Je suis très passionné dans le domaine de web et la création 
                        des applications web. Aussi que la gestion et la perfection de code
                    </p>
                    <br />
                    <br />
                    <p className="introduction_plus">
                        Je suis aussi interessé par la musique, le designe et la photographie. 
                        Si vous avez des questions à me poser ou vous souhaitez se collaborer
                        veuillez me contacter.

                    </p>
                </div>
            </div>
            <div className="skills">
                <div className="skills_title">
                    <h2>SKILLS</h2>
                </div>
                <div className="skills_description">
                    <div className="skills_detaille">
                        <h3>- Languages: </h3>
                        <p>Javascript, HTML, CSS3, Java, C, C++, PHP, React-Native</p>
                    </div>
                    <div className="skills_detaille">
                        <h3>- Libraries & Frameworks: </h3>
                        <p>ReactJS, NodeJS, Redux, ExpressJS, ElectronJS </p>
                    </div>
                    <div className="skills_detaille">
                        <h3>- Bases de données: </h3>
                        <p>SQL (PostgreSQL, MySQL, SQLite), NoSQL (MongoDB)</p>
                    </div>
                    <div className="skills_detaille">
                        <h3>- Outils de developpement: </h3>
                        <p>Docker, Kubernetes</p>
                    </div>
                </div>
            </div>
            <div className="education">
                <div className="education_title">
                    <h2>EDUCATION</h2>
                </div>
                <div className="education_description">
                    <div className="education_detaille">
                        <h4 className="timing">2020-2023:</h4>
                        <h4> Ingénieur informaticien</h4>
                        <p>Ecole Hassania des travaux publics, Casablanca</p>
                    </div>
                    <div className="education_detaille">
                        <h4 className="timing">2018-2020:</h4>
                        <h4> MP-mathématiques Physique</h4>
                        <p>CPGE Mohammed Reda slaoui, Agadir</p>
                    </div>
                    <div className="education_detaille">
                        <h4 className="timing">2015-2018:</h4>
                        <h4> Bac Sciences Mathématiques A - Mention Bien</h4>
                        <p>Lycée Ibn Soulaiman Roudani, Taroudant</p>
                    </div>
                </div>
            </div>
            <div className="projects">
                <div className="projects_title">
                    <h2>PROJECTS</h2>
                </div>
                <div className="projects_description">
                    <div className="projects_detaille">
                        <a href="https://github.com/Houssamer/paid-cation" target="_blank" rel="noreferrer">
                            <h4>PAID-cation: </h4>
                        </a>
                        <div className="technologie">
                            <h5>ReactJS, NodeJS, ExpressJS, MongoDB</h5>
                        </div>
                        <a href="http://stage.riadhoussame.tk" target="_blank" rel="noreferrer" id="stage">
                            <p>
                                stage.riadhoussame.tk
                            </p>
                        </a>
                        <div className="description">
                            <p>
                                Une application de réservation des espaces de travail
                                où vous pouvez annoncer votre espace ou réserver un.
                                (Projet de stage) 
                            </p>
                        </div>
                    </div>
                    <div className="projects_detaille">
                        <a href="https://github.com/Houssamer/Tinder-clone-front-end" target="_blank" rel="noreferrer">
                            <h4>Tinder-clone: </h4>
                        </a>
                        <div className="technologie">
                            <h5>ReactJS, NodeJS, ExpressJS, MongoDB</h5>
                        </div>
                        <div className="description">
                            <p>
                                Un clone de l'application tinder en fullstack en utilisant le
                                MERN stack.
                            </p>
                        </div>
                    </div>
                    <div className="projects_detaille">
                        <a href="https://github.com/Houssamer/amazon-clone" target="_blank" rel="noreferrer">
                            <h4>Amazon-clone: </h4>
                        </a>
                        <div className="technologie">
                            <h5>ReactJS, Google Firebase</h5>
                        </div>
                        <div className="description">
                            <p>
                                Un clone de Amazon avec l'authentification. et plus de fonctionnalités
                                comme ajouter ou panier et la gestion des states avec REDUX.
                            </p>
                        </div>
                    </div>
                    <div className="projects_detaille">
                        <a href="https://github.com/Houssamer/uber-clone-clientSide" target="_blank" rel="noreferrer">
                            <h4>uber-clone: (en progrés) </h4>
                        </a>
                        <div className="technologie">
                            <h5>React-Native</h5>
                        </div>
                        <div className="description">
                            <p>
                                Un clone de l'application Uber avec la geolocalisation et l'application
                                driver aussi que client.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cv">
                <a href={pdf} className="download" target="_blank" rel="noreferrer">Telecharger mon CV</a>
            </div>
        </div>
    )
}

export default RightSide;
