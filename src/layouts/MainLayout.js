import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className='mx-5 max-w-screen-xl xl:mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;