
import './App.css'

function App() {
  return (
    <div>
      <header>
        <h2>YSSE</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#departments">Departments</a>
          <a href="#courses">Courses</a>
          <a href="#internship">Internship</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="tagline">Youth School for Social Entrepreneurs -YSSE</p>

          <h1>
            Empowering Youth.
            <br />
            Creating Impact.
          </h1>

          <p>
            Discover opportunities to learn, lead, collaborate
            and create positive change with YSSE.
          </p>

          <a className="cta" href="#about">
            Discover YSSE
          </a>
        </section>

        <section id="about" className="content">
          <h2>Welcome to YSSE</h2>
          <p>
            A platform for young people to develop their skills,
            explore opportunities and make a difference in society.
          </p>
        </section>

        
<section id="departments" className="content departments-section">
  <h2>Our Departments</h2>
  <p className="section-description">
    Explore our teams, responsibilities and goals.
  </p>

  <div className="department-grid">
    <div className="department-card">
      <div className="department-icon">📢</div>
      <h3>Marketing</h3>
      <p>
        Promote YSSE initiatives, build awareness and connect with communities.
      </p>
    </div>

    <div className="department-card">
      <div className="department-icon">👥</div>
      <h3>Human Resources</h3>
      <p>
        Support team members, recruitment and a collaborative work culture.
      </p>
    </div>

    <div className="department-card">
      <div className="department-icon">💻</div>
      <h3>IT & Technology</h3>
      <p>
        Develop digital solutions and maintain technology resources.
      </p>
    </div>

    <div className="department-card">
      <div className="department-icon">🎓</div>
      <h3>Research & Development</h3>
      <p>
        Explore ideas, support innovation and develop new initiatives.
      </p>
    </div>
  </div>
</section>


        
<section id="courses" className="content courses-section">
  <h2>Learning & Development</h2>
  <p className="section-description">
    Explore learning opportunities, recorded sessions and useful resources.
  </p>

  <div className="course-grid">
    <div className="course-card">
      <div className="course-icon">🎓</div>
      <span className="course-label">LEARNING</span>
      <h3>Professional Development</h3>
      <p>
        Build communication, teamwork and leadership skills for your career.
      </p>
      <a href="#internship" className="course-link">
        Explore Opportunities →
      </a>
    </div>

    <div className="course-card">
      <div className="course-icon">▶️</div>
      <span className="course-label">RECORDINGS</span>
      <h3>Recorded Sessions</h3>
      <p>
        Revisit workshops, training sessions and educational discussions.
      </p>
      <a href="#internship" className="course-link">
        Explore Opportunities →
      </a>
    </div>

    <div className="course-card">
      <div className="course-icon">📚</div>
      <span className="course-label">RESOURCES</span>
      <h3>Learning Materials</h3>
      <p>
        Discover guides, documents and resources for continuous learning.
      </p>
      <a href="#about" className="course-link">
        Learn About YSSE →
      </a>
    </div>
  </div>
</section>


        <section id="internship" className="content">
          <h2>Internship Opportunities</h2>
          <p>
            Discover the recruitment process and application opportunities.
          </p>
        </section>
      </main>

      <footer>
        <p>Tanjila Akter © 2026 YSSE Main Portal</p>
      </footer>
    </div>
  )
}

export default App
