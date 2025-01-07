import React from 'react';
import { ArrowRight, Trophy, Users, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Excellence in Education
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Empowering minds, shaping futures, and creating tomorrow's leaders through quality education and innovation.
            </p>
            <a
              href="/admissions"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition-colors"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">Discover what makes our institution stand out</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Trophy className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence in Academics</h3>
              <p className="text-gray-600">Consistently ranked among top institutions with outstanding academic achievements.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Learn from industry experts and experienced educators dedicated to your success.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art infrastructure and resources for an enhanced learning experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={`https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt="Event"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-indigo-600 mb-2">March 15, 2024</div>
                  <h3 className="text-xl font-semibold mb-2">Annual Tech Symposium</h3>
                  <p className="text-gray-600 mb-4">Join us for an exciting showcase of innovation and technology...</p>
                  <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;