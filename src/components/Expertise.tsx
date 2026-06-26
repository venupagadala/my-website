import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faNodeJs,
  faJava,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGaugeHigh,
  faCheckCircle,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

/* ------------------ Tech Stack Labels ------------------ */

const labelsFrontend = [
  "React 19 (Hooks, Context, RSC)",
  "Next.js App Router (SSR/SSG)",
  "TypeScript (Strict Mode)",
  "Tailwind CSS",
  "Redux Toolkit",
  "Zustand",
  "TanStack Query (React Query)",
  "Component Architecture",
  "Storybook (20-30 components)",
];

const labelsPerformance = [
  "Core Web Vitals (62→88 Lighthouse)",
  "Code-Splitting & Lazy Loading",
  "Bundle Optimization (58% reduction)",
  "Webpack, Vite",
  "React Server Components",
  "Parallel Routes & Dynamic Imports",
  "Intelligent Prefetching",
  "Skeleton UI Patterns",
];

const labelsBackendAPIs = [
  "Java Spring Boot (API contracts)",
  "Node.js/Express BFF Layer",
  "PostgreSQL (Query optimization)",
  "Redis (Caching strategies)",
  "REST/GraphQL Design",
  "OAuth2 & JWT Authentication",
  "Session Management",
  "Microservices Architecture",
];

const labelsTestingQuality = [
  "Jest, React Testing Library",
  "JUnit, Mockito",
  "Bruno API Testing",
  "Postman",
  "WCAG 2.1 Level AA Compliance",
  "TypeScript Strict Mode",
  "Code Review (Type bugs ↓55%)",
];

const labelsDevOpsCMS = [
  "GitHub Actions CI/CD",
  "Docker, Kubernetes",
  "Optimizely CMS 12",
  "AWS (Lambda, S3, RDS)",
  "Headless Commerce",
  "10+ Daily Deployments",
  "Zero-Downtime Releases",
];

const labelsTooling = [
  "Claude Code (AI pair programming)",
  "GitHub Copilot Certified",
  "Lighthouse Optimization",
  "DevTools Profiling",
  "Bundle Analysis",
  "Cloudinary Image Optimization",
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
    <div className="flex-chips" role="list" aria-label={title}>
      <span className="chip-title" aria-hidden="true">{title}:</span>
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
            <FontAwesomeIcon icon={faReact} className="tool-icon" aria-hidden="true" />
            <h3>Modern Frontend Architecture</h3>
            <p>
              Full-stack leaning frontend engineer (70/30 split) building mission-critical systems with React 19, Next.js App Router, and TypeScript. Own entire feature lifecycle from API design to pixel-perfect delivery at scale (500K+ SKUs, 50K+ users).
            </p>
            {renderChips(labelsFrontend, "Core Stack")}
          </motion.div>

          {/* Performance */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faGaugeHigh} className="tool-icon" aria-hidden="true" />
            <h3>DSA-Driven Performance Optimization</h3>
            <p>
              Apply data structures and algorithms to solve production performance problems. Improved Lighthouse scores from 62→88, reduced bundle size by 58%, and cut API calls by 68% using request deduplication patterns and strategic code-splitting.
            </p>
            {renderChips(labelsPerformance, "Optimizations")}
          </motion.div>

          {/* Backend & APIs */}
          <motion.div className="skill" variants={itemVariants}>
            <div className="icon-row tool-icons">
              <FontAwesomeIcon icon={faJava} className="tool-icon" aria-hidden="true" />
              <FontAwesomeIcon icon={faNodeJs} className="tool-icon" aria-hidden="true" />
            </div>
            <h3>Backend Integration & APIs</h3>
            <p>
              Design API contracts with Java Spring Boot teams, build Node.js BFF layers, and optimize PostgreSQL queries. Comfortable with Redis caching, OAuth2 flows, and microservices handling 2M+ daily requests with sub-200ms latency.
            </p>
            {renderChips(labelsBackendAPIs, "Backend & Data")}
          </motion.div>

          {/* Testing & Quality */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faCheckCircle} className="tool-icon" aria-hidden="true" />
            <h3>Reliability Engineering</h3>
            <p>
              Enforce TypeScript strict mode, WCAG 2.1 compliance, and performance standards through disciplined code review. Reduced type bugs by 55% and production defects by 60%. Build reusable architectures with accessibility baked in.
            </p>
            {renderChips(labelsTestingQuality, "Quality Standards")}
          </motion.div>

          {/* DevOps & CMS */}
          <motion.div className="skill" variants={itemVariants}>
            <div className="icon-row tool-icons">
              <FontAwesomeIcon icon={faDocker} className="tool-icon" aria-hidden="true" />
              <FontAwesomeIcon icon={faAws} className="tool-icon" aria-hidden="true" />
            </div>
            <h3>DevOps & Headless CMS</h3>
            <p>
              Automated CI/CD pipelines with GitHub Actions, Docker, and Kubernetes. Shipped 500K+ SKU e-commerce platform (WCS → Optimizely CMS 12 migration) with 10+ daily deployments and 99.8%+ uptime.
            </p>
            {renderChips(labelsDevOpsCMS, "Infrastructure")}
          </motion.div>

          {/* AI & Tooling */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faRocket} className="tool-icon" aria-hidden="true" />
            <h3>AI-Assisted Development & Tooling</h3>
            <p>
              Use Claude Code and GitHub Copilot as co-engineers for complex refactors. Profile with Lighthouse and DevTools to identify bottlenecks, then apply algorithm-level solutions. GitHub Copilot Certified Developer.
            </p>
            {renderChips(labelsTooling, "Tools & Methodology")}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Expertise;