import React, { useState, useRef, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [activeNewsDot, setActiveNewsDot] = useState(0);
  const teamMembersRef = useRef(null);
  const newsGridRef = useRef(null);

  const handleDotClick = (index) => {
    const container = teamMembersRef.current;
    const scrollWidth = container.scrollWidth;
    const numSections = 5; // Total number of dots
    const scrollTo = (scrollWidth / numSections) * index;
    
    container.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
    setActiveDot(index);
  };

  // Update active dot based on scroll position
  const handleScroll = () => {
    const container = teamMembersRef.current;
    if (!container) return;

    const scrollPosition = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const scrollPercentage = scrollPosition / scrollWidth;
    const newActiveDot = Math.round(scrollPercentage * 4); // 4 is number of dots minus 1
    
    setActiveDot(newActiveDot);
  };

  // News dots click handler
  const handleNewsDotsClick = (index) => {
    const container = newsGridRef.current;
    const scrollWidth = container.scrollWidth;
    const numSections = 5; // Total number of dots
    const scrollTo = (scrollWidth / numSections) * index;
    
    container.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
    setActiveNewsDot(index);
  };

  // Update active news dot based on scroll position
  const handleNewsScroll = () => {
    const container = newsGridRef.current;
    if (!container) return;

    const scrollPosition = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const scrollPercentage = scrollPosition / scrollWidth;
    const newActiveDot = Math.round(scrollPercentage * 4); // 4 is number of dots minus 1
    
    setActiveNewsDot(newActiveDot);
  };

  useEffect(() => {
    const container = teamMembersRef.current;
    const newsContainer = newsGridRef.current;
    
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    if (newsContainer) {
      newsContainer.addEventListener('scroll', handleNewsScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      if (newsContainer) {
        newsContainer.removeEventListener('scroll', handleNewsScroll);
      }
    };
  }, []);

  const newsArticles = [
    {
      date: '16th March 2021',
      title: 'Dr.Aboobacker and team succesfully done the world\'s first head implant.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      date: '16th March 2021',
      title: 'Dr.Aboobacker and team succesfully done the world\'s first head implant.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      date: '16th March 2021',
      title: 'Dr.Aboobacker and team succesfully done the world\'s first head implant.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      date: '16th March 2021',
      title: 'Dr.Aboobacker and team succesfully done the world\'s first head implant.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <div className="home">
      <section className="hero" id="vision">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="section-subtitle">Our Vision</h2>
            <h1 className="hero-title">
              Get the best treatment<br />in Calicut.
            </h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              arcu a nisi, semper. Ut cras odio ac sem ac.
            </p>
            
            <ul className="features-list">
              <li>Best and timely diagnosis</li>
              <li>Advanced medical equipments</li>
              <li>Experienced Professionals</li>
            </ul>

            <button className="cta-button">Book a session</button>
          </div>
          
          <div className="hero-image">
            {/* Placeholder for hero image */}
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2 className="section-subtitle">Features</h2>
        <h2 className="section-title">State of the art treatment</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-image">
              {/* Placeholder for feature image */}
            </div>
            <h3>Robotic Surgery</h3>
          </div>
          
          <div className="feature-card">
            <div className="feature-image">
              {/* Placeholder for feature image */}
            </div>
            <h3>3D Mapping</h3>
          </div>
          
          <div className="feature-card">
            <div className="feature-image">
              {/* Placeholder for feature image */}
            </div>
            <h3>3D Printed organs</h3>
          </div>
          
          <div className="feature-card">
            <div className="feature-image">
              {/* Placeholder for feature image */}
            </div>
            <h3>AI Surgery</h3>
          </div>
        </div>

        <button className="read-more-button">Read More</button>
      </section>

      <section className="presentation">
        <div className="video-container">
          <div className="play-button">
            <i className="fas fa-play"></i>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <h2 className="section-subtitle">Our Team</h2>
        <h1 className="section-title">Meet our people</h1>
        
        <div className="team-slider">
          <div className="team-members" ref={teamMembersRef}>
            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-image"></div>
              </div>
              <h3>Dr.Aboobacker</h3>
              <p className="specialization">Neurosurgeon</p>
              <p className="member-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="read-more-button">Read More</button>
            </div>

            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-image"></div>
              </div>
              <h3>Dr.Aboobacker</h3>
              <p className="specialization">Neurosurgeon</p>
              <p className="member-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="read-more-button">Read More</button>
            </div>

            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-image"></div>
              </div>
              <h3>Dr.Aboobacker</h3>
              <p className="specialization">Neurosurgeon</p>
              <p className="member-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="read-more-button">Read More</button>
            </div>

            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-image"></div>
              </div>
              <h3>Dr.Aboobacker</h3>
              <p className="specialization">Neurosurgeon</p>
              <p className="member-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="read-more-button">Read More</button>
            </div>

            <div className="team-member">
              <div className="member-image">
                <div className="placeholder-image"></div>
              </div>
              <h3>Dr.Aboobacker</h3>
              <p className="specialization">Neurosurgeon</p>
              <p className="member-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="read-more-button">Read More</button>
            </div>
          </div>

          <div className="slider-dots">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`dot ${activeDot === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="latest-news" id="news">
        <h2 className="section-subtitle">Latest News</h2>
        <h1 className="section-title">Hot Topics</h1>
        
        <div className="news-slider">
          <div className="news-grid" ref={newsGridRef}>
            {newsArticles.map((article, index) => (
              <div className="news-card" key={index}>
                <div className="news-image">
                  <div className="placeholder-image"></div>
                </div>
                <div className="news-content">
                  <p className="news-date">{article.date}</p>
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-description">{article.description}</p>
                  <button className="arrow-button">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`dot ${activeNewsDot === index ? 'active' : ''}`}
                onClick={() => handleNewsDotsClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="section-subtitle">Contact Us</h2>
            <h1 className="section-title">Get better care</h1>
            <p className="contact-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas semper at integer
              et. At aliquam tortor lectus commodo ut lectus sed fermentum. Cursus in tincidunt
              cursus maecenas. Praesent feugiat dolor ipsum pharetra laoreet vulputate
              pellentesque sed.
            </p>
            <button className="contact-button">
              Contact Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="contact-image">
            <div className="placeholder-image"></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-nav">
            <a href="#vision" className="nav-link">Our Vision</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#team" className="nav-link">Our Team</a>
            <a href="#news" className="nav-link">Latest News</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="footer-bottom">
            <p className="copyright">Copyright © Metro Hospital 2021</p>
            <p className="powered-by">Powered by Vickie</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;