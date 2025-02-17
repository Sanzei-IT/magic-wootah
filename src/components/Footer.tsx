import React from 'react';
import { Droplets, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Droplets size={24} />
              <span className="ml-2 text-xl font-bold">Magic Water</span>
            </div>
            <p className="text-blue-100">
              Rasakan kekuatan kemurnian dan kesegaran ajaib di setiap tegukannya.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-100 hover:text-white">Home</a></li>
              <li><a href="/products" className="text-blue-100 hover:text-white">Products</a></li>
              <li><a href="/about" className="text-blue-100 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Email: saba@magicwater.com</li>
              <li>Phone: +6282132829913</li>
              <li>Address: Liprak Wetan City

672908</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-500 text-center text-blue-100">
          <p>&copy; 2025 Magic Water. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;