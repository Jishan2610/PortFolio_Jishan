import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { projectsData } from './../../assets/projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Projects.'
                details="Here are  few cool projects I've worked on, do check them out!"
            />

            <div className='project-cards-container'>
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        liveLink,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                imageUrl={imageUrl}
                                liveLink={liveLink}
                                projectUrl={projectUrl}
                            />
                        );
                    }
                )}
            </div>

            <Footer
                phrase='Check out '
                link='my skills!'
                toAdress='/skills'
            />
        </div>
    );
};

export default Projects;