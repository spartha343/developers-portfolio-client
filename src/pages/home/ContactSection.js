import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import CardsContainer from '../../components/CardsContainer';
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import ExploreButton from './ExploreButton';

const ContactSection = () => {

    const contactInfos = [
        { itemName: 'Facebook', itemIcon: <FaFacebook size={40} /> },
        { itemName: 'Instagram', itemIcon: <FiInstagram size={40} />, bgColor: 'bg-gradient-to-r from-secondary to-primary' },
        { itemName: "What's App", itemIcon: <BsWhatsapp size={40} /> },
        { itemName: 'Email', itemIcon: <MdOutlineMailOutline size={40} />, bgColor: 'bg-gradient-to-r from-secondary to-primary' },
        { itemName: 'Phone', itemIcon: <FiPhoneCall size={40} /> },
    ];

    return (
        <section>
            <SectionHeader text={'Connect'} >With Me</SectionHeader>
            <CardsContainer items={contactInfos}></CardsContainer>
            <ExploreButton link='/contact' text='Explore All' />
        </section>
    );
};

export default ContactSection;