// components/Features.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faClock, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Features = () => (
  <section className="py-20 bg-[#a5a5a5] container mx-auto px-6" id='features'>
    <h2 className="text-center text-4xl font-bold mb-10 text-black">Why Use Stembots?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="p-6 bg-slate-200 shadow-lg rounded-lg">
        <div className='p-20'>
          <FontAwesomeIcon icon={faRobot} className="text-red-400  mb-4" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-red-400">AI-Powered Trading</h3>
        <p className="text-black">Our robots use advanced algorithms to predict market movements.</p>
      </div>

      <div className="p-6 bg-slate-200 shadow-lg rounded-lg">
        <div className='p-20 py-14'>
          <FontAwesomeIcon icon={faClock} className="text-red-400 mb-4" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-red-400">24/7 Monitoring</h3>
        <p className="text-black">Fully automated trading ensures you never miss an opportunity.</p>
      </div>

      <div className="p-6 bg-slate-200 shadow-lg rounded-lg">
        <div className='p-20 py-14'>
          <FontAwesomeIcon icon={faChartLine} className="text-red-400 mb-4" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-red-400">Crypto & Forex Support</h3>
        <p className="text-black">Trade across various markets seamlessly.</p>
      </div>
    </div>
  </section>
);

export default Features;
