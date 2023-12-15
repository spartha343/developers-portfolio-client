import React, { useEffect } from 'react';
import SectionHeader from '../../components/SectionHeader';
import computerman from '../../assets/computerMan.jpg'
import MyButton from '../../components/MyButton';
import { Helmet } from 'react-helmet';

const About = () => {

    const details = [
        { fieldName: 'Name', fieldValue: 'Partha Debnath' },
        { fieldName: 'Phone', fieldValue: '+8801624457470' },
        { fieldName: 'Email', fieldValue: 'spartha343@gmail.com' },
        { fieldName: 'Education', fieldValue: `B.Sc in Mathematics, Shahjalal University of Science And Technology, Sylhet` },
        { fieldName: 'Languages', fieldValue: 'Bangla(native), English(good)' },
        { fieldName: 'Address', fieldValue: 'Narayanganj, Dhaka, Bangladesh.' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Helmet>
                <title>Partha's Portflio | About</title>
            </Helmet>

            <SectionHeader text='About'>Myself</SectionHeader>

            <div class="flex items-center flex-col lg:flex-row">
                <div class="mb-2 w-full lg:w-1/2">
                    <img src={computerman} alt="Man with a computer" class="w-100" />
                </div>
                <div class="w-full lg:w-1/2 px-3">
                    <div className="overflow-x-auto font-semibold">
                        <table className="table">
                            <tbody className='text-base'>
                                {
                                    details.map((detail, idx) => <tr key={idx}>
                                        <td>{detail.fieldName}</td>
                                        <td>{detail.fieldValue}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='px-3 my-5'>
                        <MyButton>Hire Me !</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;