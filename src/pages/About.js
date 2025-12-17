import React from 'react';
import { FaBullseye, FaEye, FaHeart, FaLightbulb, FaHandshake, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Tech Innovators</h1>
          <p>Learn more about our journey, values, and commitment to excellence</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p>
                Tech Innovators was founded in 2020 by a group of passionate computer science 
                graduates who shared a common vision: to create innovative software solutions 
                that make a real difference in people's lives and businesses.
              </p>
              <p>
                What started as a small team working from a garage has grown into a thriving 
                software development company with a diverse portfolio of successful projects. 
                We've helped startups launch their first products, assisted established businesses 
                in their digital transformation, and created solutions that have impacted thousands 
                of users worldwide.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible with technology, 
                staying at the forefront of industry trends and best practices while maintaining 
                our core values of innovation, quality, and client satisfaction.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <FaLightbulb className="placeholder-icon" />
                <p>Innovation & Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="mv-icon">
                <FaBullseye />
              </div>
              <h2>Our Mission</h2>
              <p>
                To empower businesses and individuals through innovative software solutions 
                that drive growth, enhance productivity, and create lasting value. We strive 
                to deliver exceptional quality in every project while fostering long-term 
                partnerships built on trust and mutual success.
              </p>
            </div>

            <div className="vision-card">
              <div className="mv-icon">
                <FaEye />
              </div>
              <h2>Our Vision</h2>
              <p>
                To be the leading force in software innovation, recognized globally for our 
                technical excellence, creative solutions, and unwavering commitment to client 
                success. We envision a future where technology seamlessly integrates with 
                human needs, making life simpler, businesses more efficient, and communities 
                more connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaLightbulb />
              </div>
              <h3>Innovation</h3>
              <p>
                We constantly explore new technologies and approaches to deliver 
                cutting-edge solutions that keep our clients ahead of the curve.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaAward />
              </div>
              <h3>Excellence</h3>
              <p>
                We are committed to delivering the highest quality in every aspect 
                of our work, from code to customer service.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h3>Passion</h3>
              <p>
                We love what we do, and it shows in our work. Our enthusiasm drives 
                us to go above and beyond for every client.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Integrity</h3>
              <p>
                We build trust through transparency, honesty, and ethical practices 
                in all our business relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section what-we-do-section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            We transform ideas into powerful digital solutions
          </p>

          <div className="services-overview">
            <div className="service-item">
              <h3>Custom Software Development</h3>
              <p>
                Tailored solutions designed to meet your specific business needs, 
                from enterprise applications to specialized tools.
              </p>
            </div>

            <div className="service-item">
              <h3>Web Application Development</h3>
              <p>
                Modern, responsive web applications built with the latest technologies 
                for optimal performance and user experience.
              </p>
            </div>

            <div className="service-item">
              <h3>Mobile App Development</h3>
              <p>
                Native and cross-platform mobile applications that engage users and 
                deliver seamless experiences on any device.
              </p>
            </div>

            <div className="service-item">
              <h3>Cloud Solutions</h3>
              <p>
                Scalable cloud-based infrastructure and applications that grow with 
                your business and ensure maximum uptime.
              </p>
            </div>

            <div className="service-item">
              <h3>IT Consulting</h3>
              <p>
                Strategic technology guidance to help you make informed decisions 
                and optimize your IT investments.
              </p>
            </div>

            <div className="service-item">
              <h3>AI & Machine Learning</h3>
              <p>
                Intelligent solutions that leverage artificial intelligence to 
                automate processes and unlock valuable insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
