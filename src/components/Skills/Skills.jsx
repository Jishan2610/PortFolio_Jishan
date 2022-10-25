import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { skillList } from './../../assets/skillsData';
import './Skills.css';
import skillsVector from './../../assets/skills_vector.png';
import SkillCard from './SkillCard';

const Skills = () => {
  const myStyle={
    width:"115px",
    height:"100px"

  }
    return (
        <div className='section-container'>
            <Header
                heading='My Skills.'
                details="I'm passionate about new technologies, so I keep exploring new stuffs. Here are the tech stack I've worked with!"
            />

            <div className='skill-card-container'>
                {skillList.map(({id, skillName, skillUrl }) => (
                    <SkillCard key={id} idx={id} skillName={skillName} skillUrl={skillUrl}/>
                ))}
            </div>

            <Footer phrase='Check out my ' link='projects.' toAdress='/projects' />

            <div className='skills-vector-frame'>
                <img
                    src={skillsVector}
                    alt='skills'
                    className='skills-vector'
                />
            </div>
        </div>
    );
};

export default Skills;