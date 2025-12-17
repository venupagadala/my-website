import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faNodeJs,
  faPython,
  faJava,
  faAngular,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGaugeHigh,
  faCheckCircle,
  faNetworkWired,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

/* ------------------ Tech Stack Labels ------------------ */

const labelsFrontend = [
  "React.js (Hooks, Context)",
  "Next.js (SSR/SSG/ISR)",
  "Angular (v2+)",
  "Vue.js",
  "TypeScript (ES2023+)",
  "Redux / Redux Toolkit",
  "TanStack Query (React Query)",
  "SASS/SCSS, Tailwind CSS",
  "Storybook, Design Systems",
  "Component-Driven Architecture",
];

const labelsPerfA11y = [
  "Core Web Vitals",
  "Lighthouse Score",
  "WCAG 2.1 Level AA",
  "Code Splitting & Dynamic Imports",
  "Memoization & Virtualization",
  "CLS & FCP Resolution",
  "React useTransition/useDeferredValue",
];

const labelsTestingQuality = [
  "Jest, React Testing Library",
  "Cypress (E2E)",
  "Webpack, Babel, Vite",
  "Pre-commit Hooks & Code Review",
  "Agile/Scrum",
];

const labelsDevOps = [
  "Azure DevOps Pipelines",
  "AWS (Lambda, API Gateway)",
  "Docker",
  "CI/CD Pipelines",
  "AWS Elastic Beanstalk",
  "Azure App Services/Blob Storage",
];

const labelsAPIData = [
  "RESTful APIs, GraphQL",
  "TanStack Query (Advanced Caching)",
  "Data Synchronization",
  "WebSockets, JWT Authentication",
  "D3.js & Chart.js",
];

const labelsBackendPrimary = [
  "Python/FastAPI",
  "Java (Spring Boot Familiarity)",
  "API Contract Definition",
  "Optimized Payload Structures",
  "High-Throughput Microservices",
];

const labelsBackendNode = [
  "Node.js/Express",
  "API Response Transformations",
  "Global State Updates",
  "Client-Side Error Reporting",
];

/* ------------------ Animations ------------------ */

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

/* ------------------ Component ------------------ */

function Expertise() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const renderChips = (labels: string[], title: string) => (
    <div className="flex-chips">
      <span className="chip-title">{title}:</span>
      {labels.map((label, i) => (
        <Chip
          key={i}
          className="chip"
          label={label}
          role="listitem"
          aria-label={`Skill: ${label}`}
        />
      ))}
    </div>
  );

  return (
    <div className="container" id="expertise">
      <motion.div
        ref={ref}
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2>Expertise</h2>

        <motion.div className="skills-grid">
          {/* Frontend */}
          <motion.div className="skill" variants={itemVariants}>
            <div className="icon-row tool-icons">
              <FontAwesomeIcon icon={faReact} className="tool-icon" aria-hidden="true" />
              <FontAwesomeIcon icon={faAngular} className="tool-icon" aria-hidden="true" />
              <FontAwesomeIcon icon={faVuejs} className="tool-icon" aria-hidden="true" />
            </div>
            <h3>Modern Frontend Engineering</h3>
            <p>
              Building fast, scalable, and maintainable UI applications using
              React, Next.js, Angular, and TypeScript with a strong focus on
              component-driven architecture.
            </p>
            {renderChips(labelsFrontend, "Primary Frameworks")}
          </motion.div>

          {/* Performance */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faGaugeHigh} className="tool-icon" aria-hidden="true" />
            <h3>Optimization & Core Web Vitals</h3>
            <p>
              Improving application performance by optimizing Core Web Vitals,
              resolving CLS/FCP issues, and applying modern rendering and
              code-splitting strategies.
            </p>
            {renderChips(labelsPerfA11y, "Focus Areas")}
          </motion.div>

          {/* Data & APIs */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faNetworkWired} className="tool-icon" aria-hidden="true" />
            <h3>Data Management & Visualization</h3>
            <p>
              Advanced state management and caching with TanStack Query, combined
              with scalable data visualization using D3.js and Chart.js.
            </p>
            {renderChips(labelsAPIData, "Core Skills")}
          </motion.div>

          {/* Testing */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faCheckCircle} className="tool-icon" aria-hidden="true" />
            <h3>Testing & Quality</h3>
            <p>
              Ensuring high-quality releases using unit, integration, and E2E
              testing while following Agile and best engineering practices.
            </p>
            {renderChips(labelsTestingQuality, "Tools & Practices")}
          </motion.div>

          {/* DevOps */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faDocker} className="tool-icon" aria-hidden="true" />
            <h3>DevOps & CI/CD</h3>
            <p>
              Automating builds and deployments using AWS and Azure DevOps,
              containerizing applications, and supporting zero-downtime releases.
            </p>
            {renderChips(labelsDevOps, "Platforms")}
          </motion.div>

          {/* Backend – Python / Java */}
          <motion.div className="skill" variants={itemVariants}>
            <div className="icon-row tool-icons">
              <FontAwesomeIcon icon={faPython} className="tool-icon" aria-hidden="true" />
              <FontAwesomeIcon icon={faFlask} className="tool-icon" aria-hidden="true" />
              <FontAwesomeIcon icon={faJava} className="tool-icon" aria-hidden="true" />
            </div>
            <h3>Backend Integration (Python & Java)</h3>
            <p>
              Building and integrating RESTful APIs and microservices using
              Python/FastAPI and Java, with optimized payloads and secure
              authentication.
            </p>
            {renderChips(labelsBackendPrimary, "Integration Expertise")}
          </motion.div>

          {/* Node.js */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faNodeJs} className="tool-icon" aria-hidden="true" />
            <h3>Backend (Node.js)</h3>
            <p>
              Integrating frontend applications with Node.js/Express services,
              handling API transformations, authentication, and error handling.
            </p>
            {renderChips(labelsBackendNode, "Tech Stack")}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Expertise;