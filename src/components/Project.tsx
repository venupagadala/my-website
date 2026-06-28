import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useProjects } from "../hooks/useProjects";

import "../assets/styles/Project.scss";

// Define the Skeleton component directly within this file
const ProjectSkeleton = () => {
    // This structure matches the HTML/CSS of the actual project-card
    return (
      <article className="project-card project-skeleton" aria-hidden="true">
        <div className="project-card__top-layer">
          <div className="project-card__content">
            <div className="skeleton-line skeleton-line--title" />
            <div className="skeleton-line skeleton-line--short" />
            <div className="skeleton-line" />
          </div>
          <div className="project-card__languages">
            <div className="skeleton-tag" />
            <div className="skeleton-tag skeleton-tag--medium" />
          </div>
        </div>
  
        <div className="project-card__bottom-layer">
          <div className="project-card__details">
            <div className="skeleton-line skeleton-line--title" />
            <div className="skeleton-line skeleton-line--short" />
          </div>
          <div className="skeleton-button"></div>
        </div>
      </article>
    );
};

const SKELETON_COUNT = 4; // Number of skeleton cards to display while loading

function Projects() {
  const { projects, loading, error } = useProjects();

  const { ref: projectsGridRef, inView: projectsGridInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
  
  const renderContent = () => {
    if (loading) {
        // Render ProjectSkeleton components while data is fetching
        return (
            <div className="projects__grid">
                {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                    <ProjectSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        // Display error message if API failed
        return <p className="projects__error" role="alert">{error}</p>;
    }

    if (projects.length === 0) {
        return <p className="projects__empty">No projects found on GitHub.</p>;
    }
    
    // Normal project grid rendering
    return (
        <motion.div
          ref={projectsGridRef}
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          animate={projectsGridInView ? "visible" : "hidden"}
        >
          {projects.map((repo) => (
            <motion.article
              key={repo.id}
              className="project-card"
              variants={itemVariants}
              aria-labelledby={`project-title-${repo.id}`}
            >
              <div className="project-card__top-layer">
                <div className="project-card__content">
                  <h3 id={`project-title-${repo.id}`} className="project-card__title">
                    {repo.name}
                  </h3>
                  <p className="project-card__description--visible">
                    {repo.description}
                  </p>
                </div>
                <div className="project-card__languages">
                  {repo.languages.map((lang) => (
                    <span key={lang} className="language-tag">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-card__bottom-layer">
                <div className="project-card__details">
                  <h3 className="project-card__title">{repo.name}</h3>
                  <p className="project-card__description">
                    {repo.description}
                  </p>
                </div>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                  aria-label={`View ${repo.name} on GitHub`} 
                >
                  <FontAwesomeIcon icon={faGithub} /> View on GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
    );
  }

  return (
    <section id="projects" className="projects">
      <header className="projects__header">
        <h1 className="projects__title">Projects</h1>
        <p className="projects__subtitle">
          A glimpse into the projects I’ve built, combining creativity, clean
          code, and modern web technologies.
        </p>
      </header>

      {renderContent()}
    </section>
  );
}

export default Projects;