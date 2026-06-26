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
          
          {/* Job: HD Supply / Home Depot */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date="June 2025 - Present"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />}
            aria-label="HD Supply / Home Depot work experience as Sr. Frontend Engineer"
          >
            <h3 className="vertical-timeline-element-title">Sr. Frontend Engineer (Software Engineer)</h3>
            <h4 className="vertical-timeline-element-subtitle">HD Supply / Home Depot, Atlanta, GA</h4>
            <ul className="timeline-points">
              <li>Migrating a <strong>legacy WebSphere Commerce platform</strong> into a modern Next.js and Optimizely CMS 12 headless architecture used by B2B business customers to browse products, manage accounts, and place orders.</li>
              <li>Builds React components and page-level layouts across <strong>product listing, detail, cart, and account pages</strong>, integrating Optimizely CMS content and WCS commerce APIs for a consistent end-to-end experience.</li>
              <li>Implemented <strong>Skeleton UI loading patterns</strong> across key pages, keeping the interface responsive and reducing perceived wait time during page transitions.</li>
              <li>Working on <strong>homepage personalization</strong> including product carousels and hero banners that adapt based on user context, pulling data from APIs and rendering dynamic content through the CMS layer.</li>
              <li>Handles <strong>authentication, session management, and cookie-based state persistence</strong> in the Next.js layer, including login flows and carrying user context across page navigations.</li>
              <li>Contributes to frontend performance work including <strong>lazy loading, responsive image srcsets, and route-level code-splitting</strong> to keep Core Web Vitals in a healthy range across device types.</li>
              <li>Played an active role on the team building <strong>Cursor AI tooling</strong>, including a PR readiness checker, an API testing assistant, and a code review helper, helping automate pull request validation and reduce manual review effort for the broader team.</li>
              <li>Stays current on emerging AI development trends and shares relevant tools and practices with the team to keep workflows aligned with what's actually useful, not just what's new.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Job: Kennesaw State University */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date="January 2024 - December 2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />}
            aria-label="Kennesaw State University work experience as Research Engineer"
          >
            <h3 className="vertical-timeline-element-title">Research Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Kennesaw State University, Atlanta, GA</h4>
            <ul className="timeline-points">
              <li>Developed and maintained <strong>React and Next.js web applications</strong> that turned research prototypes into usable tools, giving researchers a modern web interface to interact with AI-driven models.</li>
              <li>Designed <strong>responsive, accessible, data-driven UIs</strong> and connected them to AI/ML APIs, enabling real-time interaction with research models through the frontend.</li>
              <li>Built frontend architecture using <strong>TypeScript, React Hooks, and reusable component patterns</strong>, improving maintainability and developer productivity across the codebase.</li>
              <li>Owned feature implementation end to end in a cross-functional academic research setting, including <strong>UI development, API integration, testing, and debugging</strong>.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Job: Divami Design Lab */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date="January 2023 - July 2023"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />}
            aria-label="Divami Design Lab work experience as Software Engineer"
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Divami Design Lab, India</h4>
            <ul className="timeline-points">
              <li>Built UI features for a customer-facing <strong>React PWA</strong>, focused on responsive, accessible interfaces and clean integration with REST APIs.</li>
              <li>Learned the fundamentals of writing <strong>production-quality code</strong> in a real engineering team: consistent component structure, meaningful commit history, and code that other engineers could read and extend without guesswork.</li>
              <li>Applied <strong>performance optimization techniques</strong> including code-splitting, lazy loading, and asset optimization, improving application load times and overall user experience.</li>
              <li>Used <strong>React Hooks, TypeScript, and TanStack Query</strong> for state and API data management, wrote unit tests with Jest and React Testing Library, and participated regularly in code reviews.</li>
              <li>Picked up the day-to-day discipline of working in an <strong>Agile team</strong>: sprint planning, ticket breakdown, and giving and receiving feedback in code review, which shaped how it approached engineering work going forward.</li>
            </ul>
          </VerticalTimelineElement>
          
          {/* Education: Master's */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date="2024"
            iconStyle={{ background: "#0077b6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />}
            aria-label="Master of Science in Computer Science"
          >
            <h3 className="vertical-timeline-element-title">M.S. in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Kennesaw State University, Kennesaw, GA</h4>
            <ul className="timeline-points">
              <li>Advanced coursework in algorithms, data structures, software engineering, and distributed systems.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Education: Bachelor's */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date="2023"
            iconStyle={{ background: "#0077b6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />}
            aria-label="Bachelor of Technology in Computer Science and Engineering"
          >
            <h3 className="vertical-timeline-element-title">B.Tech. in Computer Science Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Lakireddy Balireddy College of Engineering, Vijayawada, AP</h4>
            <ul className="timeline-points">
              <li>Foundation in computer science fundamentals, programming, and software development principles.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;