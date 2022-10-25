import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='I am a final year Mechanical Engineering student at Jadavpur University,Kolkata.I am interested in Software Development.'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Web Developer</h3>
                    <p className='about-details'>
                        I am well versed with Front End Web Development.I also have basic knowledge of Backend Web Development.Check Out{' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/Jishan2610'
                        >
                            my github profile for Projects!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Problem Solving</h3>
                    <p className='about-details'>
                        I have a keen interest in Problem Solving.I generally code in Java.I am well versed with Data Structures and Algorithms.I also enjoy doing Competitve Programming.  Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://linktr.ee/lastnode'
                        >
                            my linktree profile!
                        </a>
                    </p>

                    
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <Footer
                phrase='Connect with me on '
                link='LinkedIn!'
                toAdress='https://www.linkedin.com/in/sk-jishan-ali-71062a1a3/'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
