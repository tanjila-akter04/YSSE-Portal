

import { useState } from "react";

import "./App.css";


const notices = [
  {
    category: "Internship",
    title: "Internship Opportunities",
    description:
      "Explore internship opportunities and learn about the application process.",
    date: "Check application details",
  },
  {
    category: "Events",
    title: "Upcoming Events & Activities",
    description:
      "Stay informed about upcoming events, networking sessions and community activities.",
    date: "Updates coming soon",
  },
  {
    category: "Training",
    title: "Training & Workshops",
    description:
      "Look out for learning opportunities, workshops and professional development sessions.",
    date: "Updates coming soon",
  },
];



function App() {
  
const [formMessage, setFormMessage] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);


const handleApplicationSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  
  setIsSubmitting(true);
  setFormMessage("");
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setFormMessage(
      "Thank you! Your application form has been submitted successfully."
    );

    event.currentTarget.reset();
  } catch {
    setFormMessage("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


 

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
  <a href="#notice-board">Notice Board</a>
  <a href="#login">Login</a>
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


       
<section id="internship" className="content recruitment-section">
  <span className="internship-label">BUILD YOUR FUTURE</span>

  <h2>Internship Opportunities</h2>

  <p className="section-description">
    Learn new skills, work with a team and create a positive social impact.
  </p>

  <div className="recruitment-grid">
    <article className="recruitment-card">
      <span className="recruitment-number">01</span>
      <h3>Apply Online</h3>
      <p>
        Complete the internship application form with your details
        and preferred department.
      </p>
    </article>

    <article className="recruitment-card">
      <span className="recruitment-number">02</span>
      <h3>Application Review</h3>
      <p>
        The recruitment team reviews your application and relevant interests.
      </p>
    </article>

    <article className="recruitment-card">
      <span className="recruitment-number">03</span>
      <h3>Interview</h3>
      <p>
        Shortlisted applicants may be invited for an interview or assessment.
      </p>
    </article>

    <article className="recruitment-card">
      <span className="recruitment-number">04</span>
      <h3>Start Your Journey</h3>
      <p>
        Selected interns join their department and begin learning through
        practical tasks and teamwork.
      </p>
    </article>
  </div>

  <a href="#application-form" className="cta">
    Apply for Internship
  </a>
</section>
</main>


   
<section id="notice-board" className="content notice-section">
  <span className="internship-label">LATEST UPDATES</span>

  <h2>YSSE Notice Board</h2>

  <p className="section-description">
    Stay updated with the latest announcements, events and opportunities.
  </p>

  <div className="notice-list">
    <article className="notice-card">
      <span className="notice-category">Internship</span>
      <h3>Internship Opportunities</h3>
      <p>
        Explore internship opportunities and learn about the application process.
      </p>
      <span className="notice-date">Check application details</span>
    </article>

    <article className="notice-card">
      <span className="notice-category">Events</span>
      <h3>Upcoming Events & Activities</h3>
      <p>
        Stay informed about upcoming events, networking sessions and community activities.
      </p>
      <span className="notice-date">Updates coming soon</span>
    </article>

    <article className="notice-card">
      <span className="notice-category">Training</span>
      <h3>Training & Workshops</h3>
      <p>
        Look out for learning opportunities, workshops and professional development sessions.
      </p>
      <span className="notice-date">Updates coming soon</span>
    </article>
  </div>
</section>

       
     
     {/* Alumni Interns Section */}
<section id="alumni-interns" className="content alumni-section">
  <span className="internship-label">OUR COMMUNITY</span>

  <h2>Meet Our Alumni Interns</h2>

  <p className="section-description">
    Meet the people who have grown, learned and contributed
    through their internship journey with YSSE.
  </p>

  <div className="alumni-grid">
    <div className="alumni-card">
      <div className="alumni-avatar">👩‍💼</div>
      <h3>Intern Name 1</h3>
      <p className="alumni-department">Marketing Department</p>
      <p>
        Contributed to communication, campaign planning
        and community engagement.
      </p>
    </div>

    <div className="alumni-card">
      <div className="alumni-avatar">👨‍💻</div>
      <h3>Intern Name 2</h3>
      <p className="alumni-department">IT & Technology</p>
      <p>
        Gained practical experience in digital tools
        and technology projects.
      </p>
    </div>

    <div className="alumni-card">
      <div className="alumni-avatar">👩‍🎓</div>
      <h3>Intern Name 3</h3>
      <p className="alumni-department">Human Resources</p>
      <p>
        Supported team coordination, recruitment
        activities and member engagement.
      </p>
    </div>
  </div>
</section>


<section id="application-form" className="content application-section">
  <span className="internship-label">JOIN OUR TEAM</span>

  <h2>YSSE Internship Application</h2>

  <p className="section-description">
    Take the first step toward learning, teamwork and social impact.
    Complete the form below to express your interest.
  </p>

  <form
  className="application-form"
  onSubmit={handleApplicationSubmit}
>
    <div className="form-group">
      <label htmlFor="applicant-name">Full Name</label>
      <input
        type="text"
        id="applicant-name"
        name="name"
        placeholder="Enter your full name"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="applicant-email">Email Address</label>
      <input
        type="email"
        id="applicant-email"
        name="email"
        placeholder="Enter your email address"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="applicant-department">Preferred Department</label>
      <select
        id="applicant-department"
        name="department"
        required
        defaultValue=""
      >
        <option value="" disabled>
          Select a department
        </option>
        <option value="Marketing">Marketing</option>
        <option value="Human Resources">Human Resources</option>
        <option value="IT & Technology">IT & Technology</option>
        <option value="Research & Development">
          Research & Development
        </option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="applicant-reason">
        Why do you want to join YSSE?
      </label>
      <textarea
        id="applicant-reason"
        name="reason"
        rows={5}
        placeholder="Tell us about your interests and goals"
        required
      />
    </div>

   
   

<button
  type="submit"
  className="cta"
  disabled={isSubmitting}
>
  {isSubmitting ? "Submitting..." : "Submit Application"}
</button>

    
{formMessage && (
  <p role="status" className="form-message">
    {formMessage}
  </p>
)}

  </form>
</section>


      <footer>
        <p>Tanjila Akter © 2026 YSSE Main Portal</p>
      </footer>
    </div>
  );
}


export default App;
