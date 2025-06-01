import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, LineChart, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const highlights = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Engineering",
      description: "Building scalable ETL pipelines and optimizing database performance."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Data Analytics",
      description: "Extracting insights from complex datasets using statistical methods."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming",
      description: "Proficient in Python, SQL, and various data processing frameworks."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Turning business questions into data solutions with measurable impact."
    }
  ];

  return (
    <section id="about" ref={ref} className="section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            A passionate Data Analytics Engineer with expertise in transforming complex datasets into valuable business insights.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm a data professional with over 2 years of hands-on experience in data analytics, data engineering, and business intelligence. 
            My journey in the data world has equipped me with a strong technical foundation and the ability to solve complex 
            business problems through data-driven approaches.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I specialize in developing ETL processes, creating interactive dashboards, and implementing machine learning models
            to provide actionable insights. My goal is to help organizations make better decisions by leveraging their data assets effectively.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="card p-6 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg text-indigo-600 dark:text-indigo-400">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;