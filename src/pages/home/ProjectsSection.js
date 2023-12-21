import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import doctorsPortal from '../../assets/doctors-portal.png';
import bistroBoss from '../../assets/bistro-boss.png';
import ssfNews from '../../assets/ssf-news.png';
import ProjectCard from '../projects/ProjectCard';
import ExploreButton from './ExploreButton';

const ProjectsSection = () => {
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
    ];

    const description = 'I love to develop creative projects and explore new technologies'

    return (
        <section className='my-56'>
            <SectionHeader text={'My'} description={description} >Projects</SectionHeader>
            <div className='grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    projects.map(project => <ProjectCard project={project} />)
                }
            </div>
            <ExploreButton link='/projects' text='Explore All' />
        </section>
    );
};

export default ProjectsSection;