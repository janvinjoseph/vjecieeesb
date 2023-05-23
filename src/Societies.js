import React from 'react';
import HomePage from './Home.js'

function SocPage() {
    return (
        <div>
            <HomePage />

            <section className="about">
                <div className="topbox head ">
                    <h1>ABOUT IEEE VJEC</h1>
                </div>
                <div className="grid-container1 grid-conatiner2">
                    <div className="grid-item">
                        <h3>What is IEEE ?</h3>
                        <p>
                            IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
                            The Institute of Electrical and Electronics Engineers (IEEE) is a  professional association for electronics
                            engineering, electrical engineering, and other related disciplines with its corporate office in New York City and its operations center in Piscataway, New Jersey.
                            The mission of the IEEE is advancing technology for the benefit of humanity.
                            The IEEE was formed from the amalgamation of the American Institute of Electrical Engineers and the Institute of Radio Engineers in 1963.
                        </p>

                        <p>
                            For over a century, IEEE has sponsored various programs to honor achievements in education, industry, research, and service, celebrating distinguished colleagues, teachers,
                            and corporate leaders who have made a lasting impact on humanity, technology, and the profession.
                        </p>
                    </div>
                    <div className="grid-item">
                        <br></br>
                        <img src="https://ieeetv.ieee.org/assets/video-images/large/131173.jpg" alt="IEEE logo"></img>
                        <br></br>
                        <br></br>
                        <br></br>
                        <img src="https://ieeetv.ieee.org/assets/video-images/large/131173.jpg" alt="IEEE logo"></img>
                        <br></br>
                    </div>

                    <div className="col-block stats__col">
                        <div className="count">
                            50
                        </div>
                        <h5>YEAR OF EXISTENCE</h5>
                    </div>
                    <div className="col-block stats__col">
                        <div className="count">
                            2040
                        </div>
                        <h5>IEEE VJEC ALUMINI</h5>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default SocPage

