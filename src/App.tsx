
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

        <section id="departments" className="content">
          <h2>Our Departments</h2>
          <p>Explore our teams, responsibilities and goals.</p>
        </section>

        <section id="courses" className="content">
          <h2>Learning Resources</h2>
          <p>Access courses, recordings and educational materials.</p>
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
