import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Head';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        {/* Main content with conditional margin when sidebar is open */}
        <main className={`flex-1 overflow-y-auto pt-16 ${isMenuOpen ? 'ml-60' : 'ml-0 sm:ml-20'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Body;