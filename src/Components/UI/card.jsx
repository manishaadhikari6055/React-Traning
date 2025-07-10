import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className='w-auto border p-4 border-red-300 cursor-pointer hover:bg-yellow-300 -all ease-in-out hover:border-black hover:text-white duration-300 hover:-translate-y-2'>
      <img src={image} alt={title} className='h-50 w-full' />
      <h4 className='text-xl font-bold mt-2 mb-2'>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
