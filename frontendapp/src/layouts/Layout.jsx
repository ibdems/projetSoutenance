  import React, { useState, useEffect } from 'react';
  import Sidebar from './sidebar/Sidebar';
  import Navbar from './navbar/Navbar';
  import { Outlet } from 'react-router-dom';
  import { ProgressBar } from 'primereact/progressbar';
  function Layout() {
    const [sizeSide, setSizeSide] = useState(window.innerWidth > 1200 ? '250px' : '80px');
    const [sizeNav, setSizeNav] = useState(window.innerWidth > 1200 ? 'calc(100% - 250px)' : 'calc(100% - 80px)');
    const [loading, setLoading] = useState(false); // État local pour suivre si une requête est en cours

    const toggleLoading = (status) => {
      setLoading(status);
    };
    useEffect(() => {
      const handleResize = () => {
        const windowWidth = window.innerWidth;
        setSizeSide(windowWidth > 1200 ? '250px' : '80px');
        setSizeNav(windowWidth > 1200 ? 'calc(100% - 250px)' : 'calc(100% - 80px)');
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const toggleSidebar = () => {
      setSizeSide(sizeSide === '250px' ? '80px' : '250px');
      setSizeNav(sizeNav === 'calc(100% - 250px)' ? 'calc(100% - 80px)' : 'calc(100% - 250px)');
    };

    return (
      <div className="wrapper">
        <Sidebar size={sizeSide} />
        <div className="main"  style={{ marginLeft: sizeSide , marginTop: '-91vh'}}>
          <Navbar onNavToggle={toggleSidebar} sizeNav={sizeNav} sizeNavWidth={sizeSide}/>
          <div className="container" style={{overflowY:"auto",maxHeight:'calc(100vh - 90px)'}}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }

  export default Layout;
