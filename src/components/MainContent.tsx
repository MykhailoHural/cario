const MainContent = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      {/* Hero Content */}
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl font-bold text-primary mb-6 leading-tight">
          Welcome to Cario
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Discover the future of innovation with our cutting-edge platform. 
          Experience seamless integration, powerful features, and exceptional performance.
        </p>
        <div className="flex gap-6 justify-center">
          <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
            Get Started
          </button>
          <button className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-primary rounded-lg mb-6 flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Discover</h3>
          <p className="text-gray-600 leading-relaxed">
            Explore endless possibilities with our innovative discovery features that help you find exactly what you need.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-secondary rounded-lg mb-6 flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">About</h3>
          <p className="text-gray-600 leading-relaxed">
            Learn about our mission, vision, and the passionate team behind this revolutionary platform.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-primary rounded-lg mb-6 flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">What&apos;s New</h3>
          <p className="text-gray-600 leading-relaxed">
            Stay updated with the latest features, improvements, and exciting developments in our ecosystem.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white text-center max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8 opacity-90">Join thousands of users who have already transformed their workflow with Cario.</p>
        <button className="bg-white text-primary px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default MainContent;
