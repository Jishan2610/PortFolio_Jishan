import React from 'react';
import './Skills.css';

const SkillCard = ({idx, skillName, skillUrl }) => {
    let cn='';
    if(idx==2){
        cn='bs';
    }
    else cn='skill'
    return (
        <div className={cn}>
            <img src={skillUrl} alt='skill' />
            <p>{skillName}</p>
        </div>
    );
};

export default SkillCard;