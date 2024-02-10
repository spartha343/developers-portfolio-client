import React, { useEffect } from 'react';
import SectionHeader from '../../components/SectionHeader';
import ProjectCard from './ProjectCard';
import { Helmet } from 'react-helmet';
import { projects } from '../../assets/projectsData';

const Projects = () => {
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
                    projects.map(project => <ProjectCard key={project.id} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;