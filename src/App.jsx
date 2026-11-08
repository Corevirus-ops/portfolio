import './App.css'

const projects = [
  {
    name: 'My Learning App',
    description:
      'A learning app for collecting links and setting goals across different websites.',
    language: 'JavaScript, HTML, CSS',
    type: 'Full-stack',
    repo: 'my_learning_app',
    mark: 'ML',
    color: 'lavender',
  },
  {
    name: 'PERN To-Do List',
    description:
      'A full-stack to-do list built while revisiting the PERN stack and sharpening core skills.',
    language: 'JavaScript, HTML, CSS',
    type: 'Full-stack',
    repo: 'To-Do-List-fullstack-PERN',
    mark: 'TD',
    color: 'peach',
  },
  {
    name: 'Django To Do List',
    description: 'Todo list app using Django framework.',
    language: 'Python, HTML, CSS, JavaScript',
    type: 'Full-stack',
    repo: 'django-todolist',
    mark: 'DJ',
    color: 'mint',
  },
  {
    name: 'Django To Do List With React',
    description: 'Todo list app using Django framework with a React frontend.',
    language: 'Python, HTML, CSS, JavaScript',
    type: 'Full-stack',
    repo: 'django-react-todoapp',
    mark: 'DR',
    color: 'blue',
  },
  {
    name: 'Codecademy Eccomerce App',
    description: 'Final eccomerce project for Codecademy Full Stack course.',
    language: 'JavaScript, HTML, CSS',
    type: 'Full-stack',
    repo: 'cc_ecommerce_project',
    mark: 'CE',
    color: 'orange'
  }
]


function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
    >
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" />
      ) : (
        <path d="M2.5 8h10m-4-4 4 4-4 4" />
      )}
    </svg>
  )
}

function App() {

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Corevirus home">
          <span className="wordmark-symbol">JB</span>
          <span>Jordan Barto</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="header-link"
          href="https://github.com/Corevirus-ops"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowIcon diagonal />
        </a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            DEVELOPER · BUILDER · ALWAYS LEARNING
          </p>
          <h1>
            Making the
            <br />
            web feel <span className="serif-word">more human.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              Hey, I’m <strong>Jordan Barto</strong> — I build thoughtful digital
              experiences, useful tools, and projects that help me keep growing.
            </p>
            <a className="text-link" href="#work">
              Explore selected work <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="hero-index">
          <span>INDEPENDENTLY BUILT</span>
          <span>{projects.length} PROJECTS</span>
        </div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW THINGS I’VE MADE</p>
            <h2>Selected work<span className="heading-period">.</span></h2>
          </div>
          <a
            className="all-projects-link"
            href="https://github.com/Corevirus-ops?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View all repositories <ArrowIcon diagonal />
          </a>
        </div>


        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.repo}>
              <a
                className={`project-visual ${project.color}`}
                href={`https://github.com/Corevirus-ops/${project.repo}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} on GitHub`}
              >
                <span className="project-number">{index + 1} / {projects.length}</span>
                <span className="project-mark">{project.mark}</span>
                <span className="project-visual-caption">
                  CORE / {project.type.toUpperCase()}
                </span>
                <span className="project-open">
                  <ArrowIcon diagonal />
                </span>
              </a>
              <div className="project-info">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-language">{project.language}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-inner section-wrap">
          <p className="eyebrow">A WITTLE ABOUT ME</p>
          <div className="about-content">
            <h2>
              Curious by nature.
              <br />
            </h2>
            <div className="about-details">
              <p>
                I started learning lua for game development and scripting in fivem. From there I 
                expanded my skills to web development, exploring both frontend and backend technologies.
              </p>
              <p>
                I like turning ideas into real things — from full-stack
                experiments and learning tools to small utilities that make a
                workflow better. Naturally, use of AI and automation is something I enjoy exploring, on top of honing my own technical skills.
              </p>
              <p>
                I love fixing bugs and a good challenge.
              </p>
              <p>
                I enjoy learning more and expanding my horizons. From writing tests to exploring new use cases and technologies, I am always seeking ways to grow and improve.
              </p>
              <a
                className="text-link"
                href="https://github.com/Corevirus-ops"
                target="_blank"
                rel="noreferrer"
              >
                More about my work on GitHub <ArrowIcon diagonal />
              </a>
            </div>
          </div>
          <div className="about-footer">
            <span>I can work with these.</span>
            <div className="skill-list">
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>Django</span>
              <span>CSS</span>
              <span>Python</span>
              <span>Flask</span>
              <span>HTML</span>
              <span>Kubernetes</span>
              <span>Docker</span>
              <span>Git</span>
              <span>Lua</span>
              <span>AI Tools & AI Automation</span>
              <span>Google Search</span>
              <span>I can and will ask questions</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">
          <span className="wordmark-symbol">JB</span>
          <span>Jordan Barto</span>
        </a>
        <span>BUILT FOR FUN BUT WE CAN GET SERIOUS</span>
        <a href="https://github.com/Corevirus-ops" target="_blank" rel="noreferrer">
          @Corevirus-ops <ArrowIcon diagonal />
        </a>
      </footer>
    </main>
  )
}

export default App
