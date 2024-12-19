import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-12">
          We are a passionate team committed to delivering the best products and
          services. Our mission is to create value through innovation,
          dedication, and a customer-first mindset.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200.png?text=Vansh"
              alt="Team Member 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Vansh</h3>
              <p className="text-gray-600">Bacha no. 1</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="data:image/jpeg;base64,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"
              alt="Team Member 2"
              className="w-full h-48 object-fill"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Karan</h3>
              <p className="text-gray-600">Sabka Papa</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200.png?text=Pritam"
              alt="Team Member 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Pritam</h3>
              <p className="text-gray-600">Bacha no. 2</p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200.png?text=Ashish"
              alt="Team Member 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Ashish</h3>
              <p className="text-gray-600">Bacha no. 3</p>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200.png?text=Deepanshu"
              alt="Team Member 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Deepanshu</h3>
              <p className="text-gray-600">Bacha no. 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
