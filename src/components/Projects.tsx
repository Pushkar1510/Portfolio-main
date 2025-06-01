import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, BarChart, Github, ExternalLink } from 'lucide-react';

type ProjectType = 'all' | 'data-engineering' | 'data-analytics' | 'machine-learning';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  type: ProjectType[];
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState<ProjectType>('all');

  const projectsData: Project[] = [
    {
      title: "Financial Data Pipeline",
      description: "Built an ETL pipeline to process and analyze financial transaction data using Apache Airflow, Python, and Snowflake.",
      tags: ["Python", "Airflow", "Snowflake", "ETL", "Docker"],
      image: "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "#",
      demo: "#",
      type: ['data-engineering']
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Analyzed customer data to identify distinct segments for targeted marketing campaigns using clustering algorithms.",
      tags: ["Python", "Scikit-learn", "Pandas", "Tableau", "K-means"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "#",
      type: ['data-analytics', 'machine-learning']
    },
    {
      title: "Sales Dashboard",
      description: "Interactive PowerBI dashboard visualizing sales trends, regional performance, and product analytics.",
      tags: ["PowerBI", "DAX", "SQL", "Data Visualization"],
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      demo: "#",
      type: ['data-analytics']
    },
    {
      title: "Real-time Analytics Platform",
      description: "Created a real-time analytics platform for monitoring user engagement metrics using streaming data technologies.",
      tags: ["Kafka", "Spark", "AWS", "Python", "Redis"],
      image: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "#",
      type: ['data-engineering', 'data-analytics']
    },
    {
      title: "Churn Prediction Model",
      description: "Developed a machine learning model to predict customer churn with 85% accuracy using historical behavior data.",
      tags: ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
      image: "https://images.pexels.com/photos/7567535/pexels-photo-7567535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "#",
      demo: "#",
      type: ['machine-learning', 'data-analytics']
    }
  ];

  const filteredProjects = projectsData.filter(
    project => filter === 'all' || project.type.includes(filter)
  );

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'data-engineering', name: 'Data Engineering', icon: <Database className="w-4 h-4" /> },
    { id: 'data-analytics', name: 'Data Analytics', icon: <BarChart className="w-4 h-4" /> },
    { id: 'machine-learning', name: 'Machine Learning', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> }
  ];

  return (
    <section id="projects" ref={ref} className="section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="section-title">Featured Projects</h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of data projects showcasing my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id as ProjectType)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                filter === category.id
                  ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon && <span>{category.icon}</span>}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;