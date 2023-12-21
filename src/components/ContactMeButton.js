import React from 'react';
import { MdConnectWithoutContact } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoArrowForwardOutline } from "react-icons/io5";

const ContactMeButton = () => {
    return (
        <Link to='/contact' className='z-10'>
            <button className="border hover:border-0 border-secondary rounded-lg fixed bottom-6 right-6 btn-secondary text-base uppercase hover:bg-gradient-to-r hover:from-secondary hover:to-primary p-0 text-secondary">
                <div className='hover:text-white py-2 px-4 flex items-center justify-between w-24'>
                    <MdConnectWithoutContact size={30} />
                    <IoArrowForwardOutline size={20} />
                </div>
            </button>
        </Link>
    );
};

export default ContactMeButton;