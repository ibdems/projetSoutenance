// CustomProgresseBar.js
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { useLoading } from './LoadingContext'; // Import du hook useLoading

const CustomProgressBar = () => {
  const { loading } = useLoading(); // Utilisation du hook useLoading

  return (
    <>
      {loading && <ProgressBar mode="indeterminate" color='red' style={{ height: '10px', marginTop: '200px' }}/>}
    </>
  );
};

export default CustomProgressBar;



