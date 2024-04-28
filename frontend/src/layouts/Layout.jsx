import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [sizeSide, setSizeSide] = useState(window.innerWidth > 1024 ? '350px' : '50px');
  const [sizeNav, setSizeNav] = useState(window.innerWidth > 1024 ? 'calc(100% - 350px)' : 'calc(100% - 50px)');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setSizeSide(windowWidth > 1024 ? '350px' : '50px');
      setSizeNav(windowWidth > 1024 ? 'calc(100% - 350px)' : 'calc(100% - 50px)');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSizeSide(sizeSide === '350px' ? '50px' : '350px');
    setSizeNav(sizeNav === 'calc(100% - 350px)' ? 'calc(100% - 50px)' : 'calc(100% - 350px)');
  };

  return (
    <div className="wrapper">
      <Sidebar size={sizeSide} />
      <div className="main"  style={{ marginLeft: sizeSide , marginTop: '-90vh', position: 'relative '}}>
        <Navbar onNavToggle={toggleSidebar} sizeNav={sizeNav} sizeNavWidth={sizeSide}/>
        <div className="content me-4 ms-4"style={{overflowY:"auto",maxHeight:'calc(100vh - 90px)'}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
