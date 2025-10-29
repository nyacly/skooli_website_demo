import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ForBusiness = () => {
  return (
    <div className="py-24 px-8 bg-skooli-cream">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-green mb-6">Partner with Skooli for Business</h1>
        <p className="text-lg text-gray-700 mb-12">
          At Skooli, we are committed to forging strong partnerships with businesses to drive innovation in education. Our platform offers unique opportunities for collaboration, investment, and corporate social responsibility initiatives.
        </p>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-emerald-green mb-6">Why Partner with Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg">
            <li><strong>Innovative Solutions:</strong> Gain access to cutting-edge educational technology and a dynamic learning ecosystem.</li>
            <li><strong>Corporate Social Responsibility:</strong> Align your brand with a mission-driven organization dedicated to improving educational outcomes.</li>
            <li><strong>Brand Exposure:</strong> Reach a wide audience of students, educators, and institutions through our platform and marketing channels.</li>
            <li><strong>Customized Partnerships:</strong> We work with you to create tailored partnership programs that meet your specific business objectives.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-emerald-green mb-6">Get Started</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to explore partnership opportunities? Contact us today to learn more about how we can work together to create a brighter future for learners everywhere.
          </p>
          <Button asChild className="bg-emerald-green hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForBusiness;
