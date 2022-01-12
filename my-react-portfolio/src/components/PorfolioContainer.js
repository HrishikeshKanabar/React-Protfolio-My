import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Port from './pages/Port';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Footer from './pages/Footer';

function Portfolio() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('AboutMe');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Porfolio':
         return <Port />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Portfolio;