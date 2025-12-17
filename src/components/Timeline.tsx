import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <section id="history" aria-label="Career and education history">
      <div className="items-container">
        <h1 className="timeline-title">Career & Education History</h1>

        <VerticalTimeline>
          
          {/* Job: AT&T Services, Inc/Contract */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date="January 2024 – Present"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />}
            aria-label="AT&T Services, Inc/Contract work experience as Sr. React JS Developer"
          >
            <h3 className="vertical-timeline-element-title">Sr. Software Engineer (Contract)</h3>
            <h4 className="vertical-timeline-element-subtitle">AT&T Services, Inc/Contract, USA</h4>
            <ul className="timeline-points">
              <li>Executed a large-scale migration to a modern Next.js/React.js PWA, resulting in a documented <strong>40% improvement in initial page load time</strong>.</li>
              <li>Implemented the state synchronization layer using <strong>TanStack Query (React Query)</strong> with aggressive caching, boosting perceived application speed by <strong>over 30%</strong> for complex reporting.</li>
              <li>Designed and optimized a high-performance, real-time diagnostic dashboard using Chart.js to translate complex API data into intuitive metric displays.</li>
              <li>Strategically utilized React's `useTransition` and `useDeferredValue` for concurrent rendering, ensuring a consistently smoother and non-blocking UI experience.</li>
              <li>Configured and automated the CI/CD pipeline using <strong>AWS Elastic Beanstalk</strong>, integrating E2E (Cypress) and unit (Jest) testing, maintaining <strong>95% test coverage</strong> on core business logic.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Job: Essilor */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date="Sep 2021 – Aug 2023"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />}
            aria-label="Essilor work experience as Software Engineer"
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Essilor, Remote</h4>
            <ul className="timeline-points">
              <li>Developed a resilient, structured, multi-step registration flow using modular React.js components, contributing to a <strong>15% reduction in user drop-off rates</strong>.</li>
              <li>Built a high-engagement internal data visualization application utilizing <strong>D3.js</strong> to render custom, interactive graph representations of patient flow and demographic data.</li>
              <li>Implemented a sophisticated state management solution using <strong>Redux Toolkit</strong> to effectively manage complex, multi-stage asynchronous data operations.</li>
              <li>Proactively optimized rendering cycles for frequently updated, data-heavy views by employing <strong>React memo</strong> and `useCallback`, minimizing unnecessary re-renders in large data tables.</li>
              <li>Streamlined the continuous deployment process using <strong>Azure DevOps Pipelines</strong>, establishing clear rollback strategies to maintain a high frequency of zero-downtime deployments.</li>
            </ul>
          </VerticalTimelineElement>
          
          {/* Job: Magneto IT Solutions */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date="July 2019 – Aug 2021"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />}
            aria-label="Magneto IT Solutions work experience as Frontend Developer"
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Magneto IT Solutions, India</h4>
            <ul className="timeline-points">
              <li>Successfully delivered dynamic client-facing financial reporting dashboards, demonstrating versatility across <strong>React</strong> and <strong>Angular 2+</strong> frameworks based on client requirements.</li>
              <li>Engineered sophisticated data table functionality by integrating a <strong>virtualized list library</strong> to allow fluid interaction with massive datasets (exceeding 10,000 rows).</li>
              <li>Contributed extensively to and rigorously maintained a dedicated <strong>Component Library (Design System)</strong>, reducing boilerplate development effort by an estimated **20%** across several product teams.</li>
              <li>Focused intensely on creating highly responsive and accessible (A11Y) user interfaces using modern CSS techniques (Flexbox, Grid), guaranteeing a flawless experience across all major browsers.</li>
              <li>Managed end-to-end application deployment configuration on <strong>Azure App Services</strong> and utilized Azure Blob Storage for secure, low-latency static asset serving.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Education: Master's */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date="Master of Science in Computer Science"
            iconStyle={{ background: "#0077b6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />}
            aria-label="Master of Science in Computer Science"
          >
            <h3 className="vertical-timeline-element-title">Master of Science in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Kennesaw State University, Georgia, USA</h4>
            <ul className="timeline-points">
              <li>Graduate studies in Computer Science at Kennesaw State University.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Education: Bachelor's */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date="Bachelor of Technology in Computer Science Engineering"
            iconStyle={{ background: "#0077b6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />}
            aria-label="Bachelor of Technology in Computer Science and Engineering"
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Technology in Computer Science & Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Lakireddy Balireddy College of Engineering, India</h4>
            <ul className="timeline-points">
              <li>Undergraduate studies in Computer Science Engineering.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;