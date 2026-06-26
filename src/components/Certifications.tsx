import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faAward } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/Certifications.scss";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Certification {
  title: string;
  issuer: string;
  description: string;
  icon: IconDefinition;
}

const certifications: Certification[] = [
  {
    title: "GitHub Copilot Certified Developer",
    issuer: "GitHub",
    description: "Proficient in AI-assisted code generation and pair programming. Leverage Claude Code and GitHub Copilot as co-engineers for complex refactors and architectural decisions.",
    icon: faGithub,
  },
  {
    title: "Next.js & React Performance Mastery",
    issuer: "Advanced Certification",
    description: "Advanced mastery in Core Web Vitals optimization, code-splitting, and SSR/SSG. Proven track record improving Lighthouse scores from 62→88 and reducing Time-to-Interactive by 45%.",
    icon: faCertificate,
  },
  {
    title: "TypeScript Advanced Patterns",
    issuer: "Expert Level",
    description: "Expert in discriminated unions, generics, mapped types, and type narrowing for enterprise applications. Resolved 35+ complex TypeScript type challenges and reduced type bugs by 55%.",
    icon: faCertificate,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="certifications-container" id="certifications" aria-labelledby="certifications-heading">
      <motion.div
        ref={ref}
        className="certifications-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="certifications-header">
          <FontAwesomeIcon icon={faAward} className="header-icon" aria-hidden="true" />
          <h2 id="certifications-heading">Awards & Certifications</h2>
        </div>

        <motion.div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.article
              key={index}
              className="certification-card"
              variants={itemVariants}
              aria-labelledby={`cert-title-${index}`}
            >
              <div className="certification-icon">
                <FontAwesomeIcon icon={cert.icon} aria-hidden="true" />
              </div>
              <div className="certification-content">
                <h3 id={`cert-title-${index}`} className="certification-title">
                  {cert.title}
                </h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-description">{cert.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Certifications;
