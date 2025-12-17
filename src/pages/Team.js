import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex',
      position: 'CTO',
      photo: '/images/team/alex.jpg',
      bio: 'Visionary leader with 10+ years of experience in software development and business strategy. Passionate about building innovative solutions that make a difference.',
      skills: ['Strategic Planning', 'Technical Leadership', 'Innovation'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'alex@techinnovators.com'
      }
    },
    {
      name: 'Sarah Johnson',
      position: 'CEO & Co-Founder',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Dynamic business leader driving company vision and growth. Specializes in strategic planning and building high-performing teams that deliver exceptional results.',
      skills: ['Business Strategy', 'Team Building', 'Client Relations'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'sarah@techinnovators.com'
      }
    },
    {
      name: 'Michael Chen',
      position: 'Lead Full-Stack Developer',
      photo: 'https://randomuser.me/api/portraits/men/46.jpg',
      bio: 'Technology expert specializing in cloud architecture and scalable systems. Leads development team with innovation and technical excellence.',
      skills: ['Cloud Architecture', 'System Design', 'DevOps'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'michael@techinnovators.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      position: 'Lead Frontend Developer',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      bio: 'Creative frontend developer with a keen eye for design and user experience. Specializes in React and modern web technologies that deliver pixel-perfect interfaces.',
      skills: ['React.js', 'UI/UX Design', 'TypeScript'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'emily@techinnovators.com'
      }
    },
    {
      name: 'David Kumar',
      position: 'Lead Backend Developer',
      photo: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Expert backend developer focused on building robust and scalable server-side applications. Master of Node.js, database optimization, and RESTful API design.',
      skills: ['Node.js', 'Database Design', 'API Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'david@techinnovators.com'
      }
    },
    {
      name: 'Jessica Lee',
      position: 'Mobile App Developer',
      photo: 'https://randomuser.me/api/portraits/women/90.jpg',
      bio: 'Mobile development specialist creating seamless cross-platform experiences. Expert in React Native and Flutter with a track record of successful app launches.',
      skills: ['React Native', 'Flutter', 'iOS & Android'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'jessica@techinnovators.com'
      }
    },
    {
      name: 'Marcus Thompson',
      position: 'UI/UX Designer',
      photo: 'https://randomuser.me/api/portraits/men/85.jpg',
      bio: 'Creative designer passionate about creating beautiful and intuitive user interfaces. Transforms complex ideas into visually stunning and user-friendly designs.',
      skills: ['UI Design', 'UX Research', 'Figma & Adobe XD'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'marcus@techinnovators.com'
      }
    },
    {
      name: 'Rachel Martinez',
      position: 'DevOps Engineer',
      photo: 'https://randomuser.me/api/portraits/women/26.jpg',
      bio: 'DevOps specialist ensuring smooth deployment and operations. Expert in CI/CD pipelines, containerization, and cloud infrastructure management.',
      skills: ['Docker', 'Kubernetes', 'AWS/Azure'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'rachel@techinnovators.com'
      }
    }
  ];

  return (
    <div className="team-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Meet Our Team</h1>
          <p>The talented people behind Tech Innovators</p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="section">
        <div className="container">
          <div className="team-intro">
            <h2 className="section-title">Our Dedicated Team</h2>
            <p className="intro-text">
              At Tech Innovators, our strength lies in our people. We are a diverse team of 
              passionate professionals united by a common goal: to create exceptional software 
              solutions that make a real impact. Each team member brings unique skills, 
              perspectives, and experiences that contribute to our collective success.
            </p>
            <p className="intro-text">
              From developers and designers to strategists and support specialists, we work 
              collaboratively to deliver innovative solutions that exceed our clients' expectations. 
              Get to know the faces behind our success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="section team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-photo">
                  <img src={member.photo} alt={member.name} />
                  <div className="social-overlay">
                    <a href={member.social.linkedin} className="social-icon">
                      <FaLinkedin />
                    </a>
                    <a href={member.social.twitter} className="social-icon">
                      <FaTwitter />
                    </a>
                    <a href={member.social.github} className="social-icon">
                      <FaGithub />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="social-icon">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="bio">{member.bio}</p>
                  <div className="skills">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section join-section">
        <div className="container">
          <div className="join-content">
            <h2>Want to Join Our Team?</h2>
            <p>
              We're always looking for talented individuals who share our passion for 
              innovation and excellence. If you're ready to make an impact, we'd love to hear from you!
            </p>
            <a href="mailto:careers@techinnovators.com" className="btn btn-primary">
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
