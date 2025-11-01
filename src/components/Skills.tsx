import { Code, Wrench, Database, Lightbulb, Languages } from 'lucide-react';
import { skills } from '../data/portfolio';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    items: skills.programming,
    color: 'blue',
  },
  {
    title: 'Frameworks',
    icon: Wrench,
    items: skills.frameworks,
    color: 'teal',
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    items: skills.tools,
    color: 'gray',
  },
  {
    title: 'Databases',
    icon: Database,
    items: skills.databases,
    color: 'green',
  },
  {
    title: 'Areas of Expertise',
    icon: Lightbulb,
    items: skills.areas,
    color: 'yellow',
  },
  {
    title: 'Languages',
    icon: Languages,
    items: skills.languages,
    color: 'pink',
  },
];

const colorClasses = {
  blue: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700',
  teal: 'bg-teal-100 dark:bg-teal-900/30 border-teal-300 dark:border-teal-700',
  gray: 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600',
  green: 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700',
  yellow: 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700',
  pink: 'bg-pink-100 dark:bg-pink-900/30 border-pink-300 dark:border-pink-700',
};

const iconColorClasses = {
  blue: 'text-blue-600 dark:text-blue-400',
  teal: 'text-teal-600 dark:text-teal-400',
  gray: 'text-gray-600 dark:text-gray-400',
  green: 'text-green-600 dark:text-green-400',
  yellow: 'text-yellow-600 dark:text-yellow-400',
  pink: 'text-pink-600 dark:text-pink-400',
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${
                  colorClasses[category.color as keyof typeof colorClasses]
                } transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    className={`w-6 h-6 ${
                      iconColorClasses[category.color as keyof typeof iconColorClasses]
                    }`}
                  />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
