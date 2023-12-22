import React, { useEffect } from 'react';
import SectionHeader from '../../components/SectionHeader';
import CardsContainer from '../../components/CardsContainer';
import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { FaBootstrap, FaGithub, FaNode } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiJsonwebtokens, SiMongodb, SiNetlify } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from 'react-icons/io5';
import { Helmet } from 'react-helmet';

const Skills = () => {

    const skillSet = [
        {
            skillType: 'Languages',
            containedSkills: [
                { itemName: 'HTML5', itemIcon: <ImHtmlFive2 size={40} />, link: 'https://html.com/html5/', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
                { itemName: 'CSS3', itemIcon: <RiCss3Line size={40} />, link: 'https://css3.com/' },
                { itemName: 'JavaScript', itemIcon: <RiJavascriptLine size={40} />, link: 'https://www.javascript.com/', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
            ]
        },
        {
            skillType: 'Frameworks',
            containedSkills: [
                { itemName: 'Bootstrap', itemIcon: <FaBootstrap size={40} />, link: 'https://getbootstrap.com/' },
                { itemName: 'Tailwind', itemIcon: <BiLogoTailwindCss size={40} />, link: 'https://tailwindcss.com/', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
                { itemName: 'Express.js', itemIcon: <SiExpress size={40} />, link: 'https://expressjs.com/' },
            ]
        },
        {
            skillType: 'Libraries',
            containedSkills: [
                { itemName: 'React', itemIcon: <FaReact size={40} />, link: 'https://react.dev/', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
            ]
        },
        {
            skillType: 'Authentication/authorization',
            containedSkills: [
                { itemName: 'Firebase', itemIcon: <IoLogoFirebase size={40} />, link: 'https://firebase.google.com/' },
                { itemName: 'JWT', itemIcon: <SiJsonwebtokens size={40} />, link: 'https://jwt.io/', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
            ]
        },
        {
            skillType: 'Familiar With',
            containedSkills: [
                { itemName: 'MongoDB', itemIcon: <SiMongodb size={40} />, link: 'https://www.mongodb.com/', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
                { itemName: 'GitHub', itemIcon: <FaGithub size={40} />, link: 'https://github.com/spartha343?tab=repositories' },
                { itemName: 'Node.js', itemIcon: <FaNode size={40} />, link: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
                { itemName: 'Netlify', itemIcon: <SiNetlify size={40} />, link: 'https://www.netlify.com/' },
            ]
        },
    ];

    const description = 'I love to explore new web technologies and develop well-optimized web applications'

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Helmet>
                <title>Partha's Portflio | Skills</title>
            </Helmet>

            <SectionHeader text='Skills' description={description}>Of Mine</SectionHeader>

            <div>
                {
                    skillSet.map(skillCollection => <div className='mb-16'>
                        <h4 className='text-xl'>{skillCollection.skillType}</h4>
                        <CardsContainer items={skillCollection.containedSkills} />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;