import React, { useEffect } from 'react';
import SectionHeader from '../../components/SectionHeader';
import MyButton from '../../components/MyButton';
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Helmet } from 'react-helmet';

const Contact = () => {

    const contactInfos = [
        { contactType: 'Phone', contactIcon: <FaPhoneVolume />, contactAddress: '+8801624457470' },
        { contactType: 'Email', contactIcon: <MdOutlineAttachEmail />, contactAddress: 'spartha343@gmail.com' },
        { contactType: "What's App", contactIcon: <FaWhatsapp />, contactAddress: '+8801624457470' },
        { contactType: "Dribbble", contactIcon: <FaWhatsapp />, contactAddress: 'Coming Sooon..' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Helmet>
                <title>Partha's Portflio | Home</title>
            </Helmet>

            <SectionHeader text='Connect'>With Me</SectionHeader>

            <div className='flex flex-col-reverse md:flex-row justify-evenly items-center'>
                <div className='font-semibold w-80 mr-4'>
                    {
                        contactInfos.map(info => <div className='mb-3'>
                            <p>{info.contactType}</p>
                            <div className='flex items-center'>
                                <p className='text-secondary'>{info.contactIcon}</p>
                                <p className='ml-1'>{info.contactAddress}</p>
                            </div>
                        </div>)
                    }

                    <div>
                        <p>Social Profiles</p>
                        <div className='text-primary text-2xl'>
                            <i className="fa-brands fa-facebook mr-4 relative bottom-0 hover:bottom-2 cursor-pointer ease-in-out duration-700"></i>
                            <i className="fa-brands fa-instagram mr-4 relative bottom-0 hover:bottom-2 cursor-pointer ease-in-out duration-700"></i>
                            <i className="fa-brands fa-linkedin-in mr-4 relative bottom-0 hover:bottom-2 cursor-pointer ease-in-out duration-700"></i>
                            <i className="fa-brands fa-twitter mr-4 relative bottom-0 hover:bottom-2 cursor-pointer ease-in-out duration-700"></i>
                        </div>
                    </div>
                </div>
                <div className='w-full mb-5'>
                    <form>
                        <div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your message</span>
                                </label>
                                <textarea className="textarea textarea-bordered w-full h-24" placeholder="Bio"></textarea> <br />
                            </div>
                            <MyButton>Send message</MyButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;