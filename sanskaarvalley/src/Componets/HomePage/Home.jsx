import React from 'react';
import Services from './Services';
import AboutUs from './AboutUs';
import WelcomePage from './Welcome'
import OurTeam from './OurTeam';
import TopStudents from '../Common/TopStudents';
import Dashboard from '../Common/HomeDashboard';

const Home = () => {
  return (
    <div className=''>
   <WelcomePage/>
   <TopStudents/>
      <section id="about" className="py-12">
        <div className="container mx-auto px-4">
          <AboutUs />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <Services />
          <Dashboard/>
        </div>
      </section>
      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <OurTeam />
        </div>
      </section>
    </div>
  );
};

export default Home;
