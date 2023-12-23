import React, { useEffect } from 'react';
import SectionHeader from '../../components/SectionHeader';
import ProjectCard from './ProjectCard';
import doctorsPortal from '../../assets/doctors-portal.png';
import bistroBoss from '../../assets/bistro-boss.png';
import claytonConvention from '../../assets/clayton-convention.png';
import ssfNews from '../../assets/ssf-news.png';
import technoVerse from '../../assets/techno-verse.png';
import calculateExpenditure from '../../assets/calculate-expenditure.png';
import beginnerDev from '../../assets/beginner-dev.png';
import influencerProducts from '../../assets/influencer-products.png';
import verseFood from '../../assets/verseFood.png';
import { Helmet } from 'react-helmet';

const Projects = () => {
    const projects = [
        {
            title: "Doctor's Portal",
            description: "Secure Web portal for booking and managing doctor's appointments",
            image: doctorsPortal,
            liveLink: 'https://doctors-portal-client.netlify.app/',
            frontEnd: 'https://github.com/spartha343/doctors-portal-client',
            backEnd: 'https://github.com/spartha343/doctors-portal-server',
        },
        {
            title: "Bistro Boss",
            description: 'Completely secure Restaurent application with stripe integration',
            image: bistroBoss,
            liveLink: 'https://client-bistro-boss.netlify.app/',
            frontEnd: 'https://github.com/spartha343/bistro-boss-client',
            backEnd: 'https://github.com/spartha343/bistro-boss-server',
        },
        {
            title: "SSF News",
            description: 'News Portal web application with all the required basic functionality',
            image: ssfNews,
            liveLink: 'https://ssf-news-client.netlify.app/',
            frontEnd: 'https://github.com/spartha343/ssf-news-client',
            backEnd: 'https://github.com/spartha343/ssf-news-server',
        },
        {
            title: "Techno Verse",
            description: 'React redux has been used for maintaing all the states in this project.',
            image: technoVerse,
            liveLink: 'https://techno-verse365.netlify.app/',
            frontEnd: 'https://github.com/spartha343/techno-verse-client',
            backEnd: 'https://github.com/spartha343/moon-tech-server',
        },
        {
            title: "Verse Food",
            description: 'Simple restaurent app to order various kinds of food',
            image: verseFood,
            liveLink: 'https://verse-food.netlify.app/',
            frontEnd: 'https://github.com/spartha343/verse-food-client',
            backEnd: 'https://github.com/spartha343/verse-food-server',
        },
        {
            title: "Calculate Expenditure",
            description: 'This project was created just to practice JavaScript',
            image: calculateExpenditure,
            liveLink: 'https://calculate-expenditure.netlify.app/',
            frontEnd: '',
            backEnd: '',
        },
        {
            title: "Influencer",
            description: 'This was my first attempt to create a responsive web page',
            image: influencerProducts,
            liveLink: 'https://influencer-bee.netlify.app/',
            frontEnd: 'https://github.com/spartha343/module11',
            backEnd: '',
        },
        {
            title: "Clayton Convention Center",
            description: 'Simple web application created with Bootstrap',
            image: claytonConvention,
            liveLink: 'https://clayton-convention.netlify.app/',
            frontEnd: '',
            backEnd: '',
        },
        {
            title: "Web Dev Beginner",
            description: 'This is an app created just to practice HTML and vanila CSS',
            image: beginnerDev,
            liveLink: 'https://beginner-dev.netlify.app/',
            frontEnd: 'https://github.com/spartha343/module5',
            backEnd: '',
        },
    ];

    const description = 'I love to develop beautiful application and explore new technologies'

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Helmet>
                <title>Partha's Portflio | Projects</title>
            </Helmet>
            <SectionHeader text='Projects' description={description}>of Mine</SectionHeader>
            <div className='grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    projects.map(project => <ProjectCard project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;