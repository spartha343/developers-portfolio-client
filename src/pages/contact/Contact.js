import React, { useEffect } from 'react';
import SectionHeader from '../../components/SectionHeader';
import MyButton from '../../components/MyButton';
import { FaLinkedinIn, FaPhone, FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";

const Contact = () => {

    const handleSendMessage = (event) => {
        event.preventDefault();
        toast.info('Trying to send your message');
        const form = event.target;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const details = { email, subject, message };
        fetch('https://developers-portfolio-server.vercel.app/send-email', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    toast.success('Successfully sent the message!');
                }
                else {
                    toast.error(`Error ${data.status}: ${data.message}`);
                }
            })
        form.reset();
    }

    const contactInfos = [
        { contactType: 'Phone', contactIcon: <FaPhoneVolume />, contactAddress: '+8801624457470', link: 'tel:+8801624457470' },
        { contactType: 'Email', contactIcon: <MdOutlineAttachEmail />, contactAddress: 'spartha343@gmail.com', link: 'mailto:spartha343@gmail.com' },
        { contactType: "What's App", contactIcon: <FaWhatsapp />, contactAddress: '+8801624457470', link: 'https://api.whatsapp.com/send/?phone=%2B8801624457470&text&type=phone_number&app_absent=0' },
        { contactType: "Dribbble", contactIcon: <FaWhatsapp />, contactAddress: 'Coming Sooon..' },
    ];
    const description = 'If you have any queries or even just to say hello, please fill out the form and i will get to you soon';

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Helmet>
                <title>Partha's Portflio | Contact</title>
            </Helmet>

            <SectionHeader text='Connect' description={description} >With Me</SectionHeader>

            <div className='flex flex-col-reverse md:flex-row items-center justify-start'>
                <div className='font-semibold w-full md:w-80 mr-5 grid grid-cols-1'>
                    {
                        contactInfos.map((info, idx) => <Link to={info?.link} key={idx} className='p-2 mb-2 rounded-lg shadow-md hover:shadow-xl duration-500 ease-in-out'>
                            <p>{info.contactType}</p>
                            <div className='flex items-center'>
                                <p className='text-secondary'>{info.contactIcon}</p>
                                <p className='ml-1'>{info.contactAddress}</p>
                            </div>
                        </Link>)
                    }

                    <div>
                        <p className='my-3'>Social Profiles</p>
                        <div className='text-secondary text-2xl flex'>
                            <Link to='tel:+8801624457470'>
                                <FaPhone size={18} className='mr-4 relative bottom-0 hover:bottom-2 cursor-pointer ease-in-out duration-700' />
                            </Link>
                            <Link to='mailto:spartha343@gmail.com'>
                                <FaWhatsapp className='mr-4 relative bottom-0 hover:bottom-2 cursor-pointer ease-in-out duration-700' />
                            </Link>
                            <Link to='https://www.facebook.com/partho.debnath343'>
                                <FaFacebook className='mr-4 relative bottom-0 hover:bottom-2 cursor-pointer ease-in-out duration-700' />
                            </Link>
                            <Link to='/'>
                                <FaLinkedinIn className='mr-4 relative bottom-0 hover:bottom-2 cursor-pointer ease-in-out duration-700' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full mb-5'>
                    <form onSubmit={handleSendMessage}>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" name='subject' placeholder="Subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your message</span>
                                </label>
                                <textarea className="textarea textarea-bordered w-full h-24" name='message' placeholder="Please, write your message here" required></textarea> <br />
                            </div>
                            <MyButton>
                                <input type="submit" value="Send Message" className='cursor-pointer' />
                            </MyButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;