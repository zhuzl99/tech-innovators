import React from 'react';
import { FaCode, FaMobileAlt, FaCloud, FaRobot, FaChartLine, FaCogs, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue, and Angular. We create responsive, fast, and user-friendly websites.',
      features: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Content Management Systems'
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      features: [
        'iOS & Android Development',
        'React Native Applications',
        'Flutter Development',
        'App Store Optimization'
      ]
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services using AWS, Azure, and Google Cloud Platform.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Serverless Architecture',
        'Cloud Security & Compliance'
      ]
    },
    {
      icon: <FaRobot />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Recommendation Systems'
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Robust database design, optimization, and management for reliable data storage and retrieval.',
      features: [
        'SQL & NoSQL Databases',
        'Database Optimization',
        'Data Migration',
        'Backup & Recovery Solutions'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your applications and data from threats.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Encryption Solutions',
        'Compliance Management'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and optimize your IT investments.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Technical Architecture'
      ]
    },
    {
      icon: <FaCogs />,
      title: 'DevOps Solutions',
      description: 'Streamlined development and operations processes for faster, more reliable software delivery.',
      features: [
        'CI/CD Pipeline Setup',
        'Container Orchestration',
        'Monitoring & Logging',
        'Automation Tools'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive technology solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-subtitle">
            A proven methodology that ensures project success
          </p>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery & Planning</h3>
              <p>We analyze your requirements, define project scope, and create a detailed roadmap.</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Prototyping</h3>
              <p>Our designers create intuitive UI/UX designs and interactive prototypes for your approval.</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>Our developers build your solution using agile methodology with regular updates and feedback.</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Testing & QA</h3>
              <p>Rigorous testing ensures your product is bug-free, secure, and performs optimally.</p>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Deployment</h3>
              <p>We deploy your solution to production and ensure a smooth launch.</p>
            </div>

            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Support & Maintenance</h3>
              <p>Ongoing support and updates keep your solution running smoothly and up-to-date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section tech-section">
        <div className="container">
          <h2 className="section-title">Technologies We Use</h2>
          <p className="section-subtitle">
            Cutting-edge tools and frameworks for modern solutions
          </p>

          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-tags">
                <span>React</span>
                <span>Vue.js</span>
                <span>Angular</span>
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>Tailwind CSS</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-tags">
                <span>Node.js</span>
                <span>Python</span>
                <span>Java</span>
                <span>Express</span>
                <span>Django</span>
                <span>Spring Boot</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Mobile</h3>
              <div className="tech-tags">
                <span>React Native</span>
                <span>Flutter</span>
                <span>iOS (Swift)</span>
                <span>Android (Kotlin)</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Database</h3>
              <div className="tech-tags">
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>Redis</span>
                <span>Firebase</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Cloud & DevOps</h3>
              <div className="tech-tags">
                <span>AWS</span>
                <span>Azure</span>
                <span>Google Cloud</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Jenkins</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
