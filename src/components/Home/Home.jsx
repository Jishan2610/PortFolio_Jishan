import React from 'react';
import { Link } from 'react-router-dom';

import homeAnime from './../../assets/home_anime.gif';
import './Home.css';
const Home=()=>{
  return (
    <div className='home-container'>
        {/* {this.state.showModal && <Modal closeModal={this.closeModal} />} */}
        <div className='header-text'>
            <h1>Welcome to my Portfolio!</h1>
            <p>This is Jishan, Aspiring to be a successfull Software Developer</p>
        </div>
        <div className='head-btns'>
        
            <Link to='/about' className='btn-hm btn-white'>
                <p className='btn-text'>Know more about me</p>
            </Link>
            <Link to='/contact' className='btn-hm btn-transparent'>
                <p className='btn-text'>Connect with me</p>
            </Link>
        </div>
        <div className='splash-image'>
            <img
                src={homeAnime}
                alt='animation'
                className='home-anime'
            />
        </div>
    </div>
);
}
export default Home;