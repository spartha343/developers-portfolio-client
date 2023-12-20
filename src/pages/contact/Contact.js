import React, { useEffect } from 'react';
import SectionHeader from '../../components/SectionHeader';
import MyButton from '../../components/MyButton';
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

const Contact = () => {

    const handleSendMessage = (event) => {
        event.preventDefault();
        toast.info('Trying to send your message');
        const form = event.target;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const details = { email, subject, message };
        toast.info('Trying to send the message!');
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
    }

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
                <title>Partha's Portflio | Contact</title>
            </Helmet>

            <SectionHeader text='Connect'>With Me</SectionHeader>

            <div className='flex flex-col-reverse md:flex-row justify-evenly items-center ml-5 md:ml-0'>
                <div className='font-semibold w-80 mr-4'>
                    {
                        contactInfos.map((info, idx) => <div key={idx} className='mb-3'>
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