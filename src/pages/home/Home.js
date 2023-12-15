import React, { useEffect } from 'react';
import IntroSection from './IntroSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';
import { Helmet } from 'react-helmet';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Helmet>
                <title>Partha's Portflio | Home</title>
            </Helmet>

            <IntroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <AboutSection />
        </div>
    );
};

export default Home;