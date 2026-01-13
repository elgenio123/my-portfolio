import { useState } from 'react';
import { Github, Linkedin, Mail, X } from 'lucide-react';
import { contactInfo } from '../data/portfolio';
import profileImage from '../../assets/images/profile.jpeg';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              TCHABET KAMAHA
              <br />
              <span className="text-blue-600 dark:text-blue-400">Genie Ricken</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              AI Researcher · Software Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Building intelligent, data-driven solutions for system security in IOT.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div 
                className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 p-1 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* <a
                href={`https://${contactInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">{contactInfo.website}</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Image Modal */}
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={() => setIsModalOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      
      {/* Modal Content */}
      <div 
        className={`relative transform transition-all duration-300 ${
          isModalOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute -top-4 -right-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        
        {/* Image Container */}
        <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-2xl bg-gradient-to-br from-blue-400 to-teal-500 p-1 shadow-2xl">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
