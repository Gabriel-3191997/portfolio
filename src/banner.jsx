import React from 'react';
import Heading from './heading';
import Nav from './nav';
// import images from './images/487804623_2475805612812201_4372487470002518231_n.jpg';

class Banner extends React.Component {
  render() {
    return (
      <div
        className="bg-gray-800 md:max-h-max h-auto p-3 md:p-2 bg-blend-overlay bg-center bg-cover bg-no-repeat sm:bg-fixed md:bg-fixed scroll-smooth"
        id="hero-image"
      >
        <Nav />
        <Heading />
      </div>
    );
  }
}

export default Banner;