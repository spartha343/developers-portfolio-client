import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import MyInfoCard from './MyInfoCard';
import { IoLanguageOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";

import ExploreButton from './ExploreButton';

const AboutSection = () => {
    const description = 'I love to develop beautiful web application and explore new web technologies';

    const myInfos = [
        {
            infoName: 'Education',
            infoIcon: <FaUserGraduate size={100} />,
            infoDetails: 'Completed B.Sc. in Mathematics from Shahjalal University of Science And Technology, Sylhet',
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },

        {
            infoName: 'Languages',
            infoIcon: <IoLanguageOutline size={100} />,
            infoDetails: 'Fluent in Bangla (native speaker). I am also good in speaking and writing English'
        },

        {
            infoName: 'Web Services',
            infoIcon: <FaCode size={100} />,
            infoDetails: 'I can provide you a light-weight, well-optimized and beautiful web application ',
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
    ];

    return (
        <section className='my-52'>
            <SectionHeader text={'About'} description={description} >Me</SectionHeader>
            <div className='grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    myInfos.map((myInfo, idx) => <MyInfoCard myInfo={myInfo} key={idx} />)
                }
            </div>
            <ExploreButton link='/about' text='Learn More' />
        </section>
    );
};

export default AboutSection;