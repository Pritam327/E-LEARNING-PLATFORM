import { useState } from 'react'
import './App.css'

function App() {
  const [courses] = useState([
    {
      id: 1,
      title: "Introduction to Web Development",
      progress: 60,
      thumbnail: "https://placehold.co/600x400/orange/white?text=Web+Dev",
      description: "Learn the basics of HTML, CSS, and JavaScript"
    },
    {
      id: 2,
      title: "React Fundamentals",
      progress: 30,
      thumbnail: "https://placehold.co/600x400/blue/white?text=React",
      description: "Master the basics of React development"
    },
    {
      id: 3,
      title: "Advanced JavaScript",
      progress: 0,
      thumbnail: "https://placehold.co/600x400/purple/white?text=JavaScript",
      description: "Deep dive into advanced JavaScript concepts"
    }
  ])

  return (
    <div className="app">
      <header className="header">
        <h1>E-Learning Platform</h1>
        <nav>
          <button>Home</button>
          <button>My Courses</button>
          <button>Profile</button>
        </nav>
      </header>

      <section className="hero-section">
        <h2>Transform Your Future with Online Learning</h2>
        <p>Access world-class education from anywhere in the world. Start your learning journey today.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Expert-Led Courses</h3>
            <p>Learn from industry professionals and experienced instructors</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Self-Paced Learning</h3>
            <p>Study at your own pace and on your own schedule</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Certificates</h3>
            <p>Earn certificates upon course completion</p>
          </div>
        </div>
      </section>

      <section className="popular-courses">
        <h2 className="section-title">Popular Courses</h2>
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.thumbnail} alt={course.title} />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <span className="progress-text">{course.progress}% Complete</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>100+</h3>
            <p>Courses</p>
          </div>
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Students</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Instructors</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 E-Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App