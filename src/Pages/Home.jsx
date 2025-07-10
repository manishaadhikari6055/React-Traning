import React from 'react';
import Banner from '../components/UI/Banner';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/UI/card';

function Home() {
  const navigate = useNavigate();
  const transfer = () => {
    navigate('/about');
  };

  const cardData = [
    {
      image: 'https://media.istockphoto.com/id/534000539/photo/view-of-a-german-library.jpg?s=1024x1024&w=is&k=20&c=b3hdGAiHW70zzintkkM3sv78uXqM1codld_8HP0jgmw=',
      title: 'Books',
      description: 'Explore the world through pages.\nA wide range of genres for every reader.\nFeed your mind and soul with stories.'
    },
    {
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fHww',
      title: 'Mountains',
      description: 'Escape to the majestic heights.\nFeel the adventure in the crisp mountain air.\nNature’s peace and power await you.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1664126223770-25311333f721?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Road',
      description: 'Journey through endless roads.\nFind beauty in every mile.\nWanderlust starts here.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1679106770086-f4355693be1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Perfumes',
      description: 'using perfume to express us\n find yourself fresh while walking\n and running here'
    }
  ];

  return (
    <div>
      <Banner title="Home" subtitle="It's a home page" description="It's a description" />
      {/* <button onClick={transfer}>About Us</button> */}
      <div className='flex-nowrap flex flex-row p-15 px-20 bg-blue-100 gap-4'>
        {cardData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
