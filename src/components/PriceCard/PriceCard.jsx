import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-200 mt-5 p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
            <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
            <span className='text-2xl'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.name}</h5>
            <p className='font-bold text-white underline'>Features:</p>
            {
                price.features.map((feature,idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature> )
            }
            <button className='w-full mt-auto hover:bg-green-700 bg-green-400 text-white rounded-md py-2 '>Buy Now</button>
        </div>
    );
};

export default PriceCard;