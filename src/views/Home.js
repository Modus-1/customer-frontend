import React from 'react';
// import sections
import Hero from '../Components/sections/Hero';
import FeaturesTiles from '../Components/sections/FeaturesTiles';
import FeaturesSplit from '../Components/sections/FeaturesSplit';
import Testimonial from '../Components/sections/Testimonial';
import Cta from '../Components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;