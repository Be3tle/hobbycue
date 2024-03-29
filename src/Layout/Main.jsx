import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Components/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
