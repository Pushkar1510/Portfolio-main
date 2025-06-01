import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Skill = {
  name: string;
  level: number;
  category: 'data' | 'programming' | 'tools' | 'soft';
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillsData: Skill[] = [
    // Data Skills
    { name: 'Data Analytics', level: 90, category: 'data' },
    { name: 'ETL Pipelines', level: 85, category: 'data' },
    { name: 'Data Modeling', level: 80, category: 'data' },
    { name: 'Business Intelligence', level: 85, category: 'data' },
    { name: 'Data Visualization', level: 90, category: 'data' },
    
    // Programming Skills
    { name: 'Python', level: 90, category: 'programming' },
    { name: 'SQL', level: 95, category: 'programming' },
    { name: 'PySpark', level: 85, category: 'programming' },
    { name: 'R', level: 75, category: 'programming' },
    
    // Tools
    { name: 'Tableau', level: 85, category: 'tools' },
    { name: 'PowerBI', level: 80, category: 'tools' },
    { name: 'Snowflake', level: 85, category: 'tools' },
    { name: 'AWS', level: 80, category: 'tools' },
    { name: 'Azure', level: 75, category: 'tools' },
  ];

  const categories = [
    { id: 'data', name: 'Data Skills' },
    { id: 'programming', name: 'Programming' },
    { id: 'tools', name: 'Tools & Platforms' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="skills" ref={ref} className="section bg-gray-50 dark:bg-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical toolkit for transforming data into insights and building robust data solutions.
          </p>
        </motion.div>

        <div>
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <motion.div
                      key={index}
                      className="card p-5"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: inView ? `${skill.level}%` : 0 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated certification badges */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div
              className="card p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-16 w-16 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <span className="text-indigo-600 dark:text-indigo-400 text-xl font-bold">AWS</span>
              </div>
              <h4 className="font-medium text-lg mb-2">AWS Certified Data Analytics</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Specialized in big data and analytics solutions</p>
            </motion.div>
            
            <motion.div
              className="card p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-16 w-16 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <span className="text-indigo-600 dark:text-indigo-400 text-xl font-bold">MS</span>
              </div>
              <h4 className="font-medium text-lg mb-2">Microsoft Power BI Data Analyst</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Expert in data visualization and reporting</p>
            </motion.div>
            
            <motion.div
              className="card p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-16 w-16 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <span className="text-indigo-600 dark:text-indigo-400 text-xl font-bold">PY</span>
              </div>
              <h4 className="font-medium text-lg mb-2">Python for Data Science</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Advanced data manipulation and analysis</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;