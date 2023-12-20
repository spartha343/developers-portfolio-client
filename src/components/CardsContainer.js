import React from 'react';
import { Link } from 'react-router-dom';

const CardsContainer = ({ items }) => {
    return (
        <div className='grid gap-10  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 text-center'>
            {
                items.map((item, idx) => <Link to={item?.link} key={idx} className={`text-2xl p-5 rounded-lg shadow-md hover:tracking-widest hover:shadow-xl duration-300 flex cursor-pointer ${item.bgColor ? item.bgColor : 'bg-accent'}`}>
                    <span className='text-white font-extrabold'>{item.itemIcon}</span>
                    <h3 className='flex-1 text-white'>{item.itemName}</h3>
                </Link>)
            }
        </div>
    );
};

export default CardsContainer;