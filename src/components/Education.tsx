import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const educationData = [
    {
      degree: "Master of Engineering in Data Science",
      institution: "University of Technology Sydney",
      period: "2020 - 2021",
      description: "Specialized in advanced data analytics, machine learning algorithms, and big data technologies.",
      achievements: [
        "Research project on predictive analytics in financial markets",
        "GPA: 3.8/4.0"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vellore Institute of Technology",
      period: "2016 - 2020",
      description: "Focused on computer science fundamentals, database systems, and software engineering principles.",
      achievements: [
        "Graduated with First Class Honors",
        "Technical Lead for university data science club"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="education" ref={ref} className="section bg-gray-50 dark:bg-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            My academic journey that built the foundation for my data career.
          </p>
        </motion.div>

        <div className="space-y-10">
          {educationData.map((education, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="card p-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <GraduationCap size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {education.degree}
                      </h3>
                      <h4 className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {education.institution}
                      </h4>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{education.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {education.description}
                  </p>
                  {education.achievements.length > 0 && (
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold mb-2">Achievements:</h5>
                      <ul className="space-y-1">
                        {education.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-indigo-600 dark:text-indigo-400">•</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;