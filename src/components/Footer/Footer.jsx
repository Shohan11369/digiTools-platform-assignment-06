import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0f1a] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-start">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <h1 className="text-white text-xl font-bold mb-2">DigiTools</h1>
          <p className="text-gray-400 text-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h2 className="text-white font-semibold mb-2">Product</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Templates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-white font-semibold mb-2">Company</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h2 className="text-white font-semibold mb-2">Resources</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social & Bottom Links */}
      <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-4 text-sm text-gray-500">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="hover:text-white">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter size={20} />
          </a>

          <div className="flex space-x-4 ml-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
