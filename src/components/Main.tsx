import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import profilePic from "./../assets/images/dp.webp";
import "../assets/styles/Main.scss";

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactElement;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/venupagadala",
    label: "GitHub Profile",
    icon: <GitHubIcon aria-hidden="true" />,
  },
  {
    href: "https://www.linkedin.com/in/venu-pagadala-77ab3a251/",
    label: "LinkedIn Profile",
    icon: <LinkedInIcon aria-hidden="true" />,
  },
  {
    href: "mailto:venupagadala.ui@gmail.com",
    label: "Email Venu",
    icon: <EmailIcon aria-hidden="true" />,
  },
];

function Main() {
  const renderSocials = (className: string) => (
    <div className={className}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto") ? "_self" : "_blank"}
          rel="noreferrer"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );

  return (
    <section className="container" aria-label="Introduction">
      <div className="about-section">
        <div className="image-wrapper">
          <img 
            src={profilePic} 
            alt="Venu Pagadala" 
            width={200}
            height={300}
            fetchPriority="high"
          />
        </div>
        
        <div className="content">
          {renderSocials("social_icons")}
          
          <header>
            <h1>Venu Gopal</h1>
            <h2 className="job-title">Senior Frontend Engineer</h2>
            {/* <p className="contact-info">
              <a href="tel:+14707892167" aria-label="Phone number">(470) 789-2167 </a>
              {" • "}
              <a href="mailto:venupagadala.ui@gmail.com" aria-label="Email address">venupagadala.ui@gmail.com</a>
            </p> */}
          </header>

          {renderSocials("mobile_social_icons")}
        </div>
      </div>
    </section>
  );
}

export default Main;
