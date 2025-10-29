import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="p-8 bg-skooli-cream">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-green mb-4">About Skooli</h1>
        <p className="text-lg text-gray-700 mb-6">
          Skooli is a mission-driven organization dedicated to transforming the educational landscape in Africa. We believe that every student deserves access to the resources they need to succeed, and we are committed to making that a reality through innovative technology and strategic partnerships.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-green mb-3">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to empower students and educators by providing a seamless and efficient platform for accessing educational supplies. We strive to create a sustainable ecosystem that supports local suppliers, strengthens school communities, and fosters a culture of learning.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-green mb-3">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Impact:</strong> We are driven by the desire to make a meaningful and lasting impact on the lives of students and educators.</li>
            <li><strong>Innovation:</strong> We are constantly seeking new and better ways to solve the challenges facing the education sector.</li>
            <li><strong>Integrity:</strong> We are committed to the highest standards of transparency, accountability, and ethical conduct.</li>
            <li><strong>Collaboration:</strong> We believe that we can achieve more by working together with our partners, stakeholders, and the communities we serve.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-emerald-green mb-3">Join Us</h2>
          <p className="text-gray-700 mb-4">
            We are always looking for passionate and talented individuals to join our team. If you share our vision for a brighter future for education in Africa, we would love to hear from you.
          </p>
          <Button asChild className="bg-gold hover:bg-gold-dark text-white font-bold py-2 px-4 rounded">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
