import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobileAlt, FaCloud, FaRocket, FaCheckCircle, FaUsers } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Building Tomorrow's
                <span className="gradient-text"> Technology Today</span>
              </h1>
              <p className="hero-subtitle">
                We are a team of passionate developers and innovators dedicated to creating 
                cutting-edge software solutions that transform businesses and empower users.
              </p>
              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary">
                  Our Services
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title">Welcome to Tech Innovators</h2>
          <p className="section-subtitle">
            Your trusted partner in digital transformation and software excellence
          </p>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>Tech Innovators</strong> is a leading software development company founded by 
                a team of computer science graduates who share a passion for innovation and technology. 
                We specialize in creating custom software solutions, web applications, and mobile apps 
                that help businesses thrive in the digital age.
              </p>
              <p>
                Our mission is to deliver high-quality, scalable, and innovative solutions that exceed 
                our clients' expectations. We combine technical expertise with creative thinking to 
                solve complex problems and drive business growth.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>30+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="about-video">
              <div className="video-placeholder">
                <FaRocket className="video-icon" />
                <p>Company Introduction Video</p>
                <small>Coming Soon</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We deliver excellence through innovation, expertise, and dedication
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h3>Expert Development</h3>
              <p>
                Our team of skilled developers uses the latest technologies and best practices 
                to build robust, scalable solutions.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaMobileAlt />
              </div>
              <h3>Responsive Design</h3>
              <p>
                All our solutions are fully responsive and optimized for seamless experience 
                across all devices and platforms.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaCloud />
              </div>
              <h3>Cloud Integration</h3>
              <p>
                We leverage cloud technologies to ensure your applications are scalable, 
                secure, and always available.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaCheckCircle />
              </div>
              <h3>Quality Assurance</h3>
              <p>
                Rigorous testing and quality control ensure that every project meets the 
                highest standards of excellence.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Client-Focused</h3>
              <p>
                We work closely with our clients to understand their needs and deliver 
                solutions that exceed expectations.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>Fast Delivery</h3>
              <p>
                Agile methodology and efficient workflows enable us to deliver projects 
                on time without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Next Project?</h2>
            <p>Let's work together to bring your ideas to life</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
