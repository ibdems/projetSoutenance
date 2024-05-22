import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [sizeSide, setSizeSide] = useState(window.innerWidth > 1200 ? '300px' : '60px');
  const [sizeNav, setSizeNav] = useState(window.innerWidth > 1200 ? 'calc(100% - 300px)' : 'calc(100% - 60px)');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setSizeSide(windowWidth > 1200 ? '300px' : '60px');
      setSizeNav(windowWidth > 1200 ? 'calc(100% - 300px)' : 'calc(100% - 60px)');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSizeSide(sizeSide === '300px' ? '60px' : '300px');
    setSizeNav(sizeNav === 'calc(100% - 300px)' ? 'calc(100% - 60px)' : 'calc(100% - 300px)');
  };

  return (
    <div className="wrapper">
      <Sidebar size={sizeSide} />
      <div className="main"  style={{ marginLeft: sizeSide , marginTop: '-90vh'}}>
        <Navbar onNavToggle={toggleSidebar} sizeNav={sizeNav} sizeNavWidth={sizeSide}/>
        <div className="container" style={{overflowY:"auto",maxHeight:'calc(100vh - 90px)'}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
