import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string[];
};

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experienceData: ExperienceItem[] = [
    {
      company: "JP Morgan Chase & Co.",
      position: "Data Analytics Engineer",
      period: "July 2022 - Present",
      description: [
        "Designed and implemented ETL pipelines processing 200+ GB daily data",
        "Developed interactive PowerBI dashboards for stakeholders to visualize key metrics",
        "Optimized SQL queries resulting in 40% faster data processing",
        "Collaborated with cross-functional teams to implement data governance standards",
        "Automated reporting processes using Python, saving 20+ hours monthly"
      ]
    },
    {
      company: "ANZ Bank",
      position: "Data Engineer",
      period: "January 2022 - June 2022",
      description: [
        "Built data pipelines using Python and SQL for financial data processing",
        "Implemented data quality checks to ensure accuracy and completeness",
        "Created and maintained Tableau dashboards for business intelligence",
        "Supported machine learning initiatives by preparing and transforming data"
      ]
    },
    {
      company: "Nielsen",
      position: "Business Data Analyst",
      period: "January 2021 - December 2021",
      description: [
        "Analyzed consumer behavior data to identify market trends",
        "Generated reports and visualizations to support business decision-making",
        "Utilized SQL and Excel for data extraction and analysis",
        "Collaborated with stakeholders to understand business requirements"
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
    <section id="experience" ref={ref} className="section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            My journey as a data professional across different industries and roles.
          </p>
        </motion.div>

        <div className="relative">
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="timeline-item"
            >
              <span className="timeline-dot"></span>
              <div className="card p-6 ml-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.position}
                    </h3>
                    <h4 className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {job.company}
                    </h4>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-indigo-600 dark:text-indigo-400">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;