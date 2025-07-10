import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ image, title, description }) => {
    const navigate =useNavigate()
  return (
    <div className='w-auto border p-4 border-red-300 cursor-pointer hover:bg-yellow-300 -all ease-in-out hover:border-black hover:text-white duration-300 hover:-translate-y-2'>
      <img src={image} alt={title} className='h-50 w-full' />
      <h4 className='text-xl font-bold mt-2 mb-2'>{title}</h4>
      <div className='line-clamp-4'>{description}</div>
      <div onClick={()=>{
        navigate(`/card/${title}`)
      }}
    className='border border-blue-400 w-fit text-blue-400 h-fit px-10 py-2 rounded-md'> Read more</div>
</div>

  );
};

export default Card;
