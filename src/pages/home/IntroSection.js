import React from 'react';
import MyButton from '../../components/MyButton';
import Cloud from './Cloud';
import MyGradientText from '../../components/MyGradientText';
import { Link } from 'react-router-dom';

const IntroSection = () => {
    return (
        <section className='flex flex-col lg:flex-row items-center'>
            <div className='max-w-full lg:w-1/2'>
                <h4 className='text-lg tracking-widest sm:mt-5 md:mt-0'>HI THERE !</h4>
                <h2 className='text-5xl my-5'>I'm a <MyGradientText>Web Developer</MyGradientText></h2>
                <p className='text-justify mb-2'>I'm a Front End Developer based in Dhaka, Bangladesh. I develop simple, creative and beautiful web application.</p>
                <p className='text-justify mb-5 pb-5'>I will provide you with a well optimized website which will be completely responsive and user friendly.</p>
                <MyButton><Link to='/contact'>Contact Info</Link></MyButton>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
                <Cloud></Cloud>
            </div>
        </section>
    );
};

export default IntroSection;