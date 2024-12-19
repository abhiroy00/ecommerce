import React from 'react'


    const AboutUs = () => {
      return (
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
            <p className="text-lg text-gray-700 mb-12">
              We are a passionate team committed to delivering the best products and services. Our mission is to create value through innovation, dedication, and a customer-first mindset.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="https://via.placeholder.com/300" alt="Team Member 1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                  <p className="text-gray-600">CEO & Founder</p>
                </div>
              </div>
    
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="https://via.placeholder.com/300" alt="Team Member 2" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                  <p className="text-gray-600">CTO</p>
                </div>
              </div>
    
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="https://via.placeholder.com/300" alt="Team Member 3" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Alice Brown</h3>
                  <p className="text-gray-600">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default AboutUs;
 