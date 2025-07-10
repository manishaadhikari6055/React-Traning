import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Toolbar() {
  const location = useLocation();
  const nav_items = [
    { title: "Home", path: '/' },
    { title: "About", path: '/about' },
    { title: "Contact", path: '##' },
    { title: "Blog", path: '##' },
    { title: "Event", path: '##' },
  ];

  return (
    <div className='flex justify-between px-10 fixed top-10 left-0 right-0 mx-auto w-11/12 py-5 shadow-2xl bg-green-600 z-50'>
      <div className='font-bold text-xl'>Training</div>
      <div className='flex gap-6'>
        {nav_items.map((val, i) => (
          <div key={i} className='relative'>
            <Link to={val.path} className={`capitalize ${location.pathname === val.path ? "text-red-600" : "text-white"}`}>
              {val.title}
            </Link>
            <div className={`h-1 bg-white transition-all duration-700 ease-in-out ${location.pathname === val.path ? "w-full" : "w-0"}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toolbar;
