import { Brain, Code, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am an AI and software development professional with a strong interest in{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Intrusion Detection Systems
              </span>
              .
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I hold a Master's degree in Computer Science from the{' '}
              <span className="font-semibold">University of Dschang</span>, where I researched
              Dynamic Adversarial Modeling for Intrusion Detection in IoT Environments.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am currently pursuing a{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Cooperative Master's in Data Science
              </span>{' '}
              at AIMS Cameroon, leveraging my background in Mathematics and Computer Science to
              design intelligent, data-driven solutions for system security and automation.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <Brain className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AI Research
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Specialized in machine learning, deep learning, and adversarial modeling for
                security applications.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-xl border border-teal-200 dark:border-teal-700">
              <Shield className="w-12 h-12 text-teal-600 dark:text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                System Security
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Focus on intrusion detection systems, IoT security, and anomaly detection
                techniques.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
              <Code className="w-12 h-12 text-gray-600 dark:text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Software Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Full-stack development with expertise in modern frameworks and data-driven
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
