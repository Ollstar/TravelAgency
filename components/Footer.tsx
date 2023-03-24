import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; Travel Agency 2023. All rights reserved.</p>
        <p className="text-sm mt-2">Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-indigo-300 transition duration-200">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-indigo-300 transition duration-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-indigo-300 transition duration-200">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
