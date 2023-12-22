import React from 'react';
import CardsContainer from '../../components/CardsContainer';
import { FaReact } from "react-icons/fa";
import SectionHeader from '../../components/SectionHeader';
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import ExploreButton from './ExploreButton';

const SkillsSection = () => {

    const skills = [
        { itemName: 'React', itemIcon: <FaReact size={40} />, link: 'https://react.dev/', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
        { itemName: 'Firebase', itemIcon: <IoLogoFirebase size={40} />, link: 'https://firebase.google.com/' },
        { itemName: 'MongoDB', itemIcon: <BiLogoMongodb size={40} />, link: 'https://www.mongodb.com/', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
        { itemName: 'GitHub', itemIcon: <FaGithub size={40} />, link: 'https://github.com/spartha343?tab=repositories' },
        { itemName: 'Express.js', itemIcon: <SiExpress size={40} />, link: 'https://expressjs.com/', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
        { itemName: 'Tailwind', itemIcon: <BiLogoTailwindCss size={40} />, link: 'https://tailwindcss.com/' },
    ];

    const description = 'I love to explore new web technologies and develop well-optimized web applications'

    return (
        <div className='my-20'>
            <SectionHeader text={'My'} description={description} >Skills</SectionHeader>
            <CardsContainer items={skills}></CardsContainer>
            <ExploreButton link='/skills' text='Explore All' />
        </div>
    );
};

export default SkillsSection;