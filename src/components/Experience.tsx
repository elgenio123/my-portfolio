import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-600 dark:bg-teal-400 hidden md:block"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-teal-600 dark:bg-teal-500 flex-shrink-0 relative z-10">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <span className="inline-block px-4 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold mt-2 md:mt-0">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
