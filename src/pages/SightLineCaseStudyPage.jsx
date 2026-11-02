import { Link } from "react-router-dom";

const designSteps = [
  {
    title: "Start with a learning target",
    description:
      "Use musical concepts and instructional constraints to define what a singer should practice, rather than generating exercises without a purpose.",
  },
  {
    title: "Generate meaningful practice",
    description:
      "Create structured sight-singing exercises so learners can repeatedly work on targeted skills.",
  },
  {
    title: "Make practice interactive",
    description:
      "Invite the learner to sing using their microphone and capture pitch information from the performance.",
  },
  {
    title: "Connect performance to feedback",
    description:
      "Align performed notes with the exercise and present accuracy information to help the learner identify areas for further practice.",
  },
];

export default function SightLineCaseStudyPage() {
  return (
    <article className="page case-study">
      <div className="case-study-breadcrumb">
        <Link to="/projects">Projects</Link>
        <span aria-hidden="true">/</span>
        <span>SightLine</span>
      </div>

      <header className="case-study-header glass">
        <p className="section-eyebrow">Instructional Design Case Study</p>
        <h1>SightLine: creating purposeful sight-singing practice</h1>
        <p className="case-study-lede">
          SightLine combines music curriculum design, interactive practice,
          and assessment feedback in one working learning technology prototype.
          I designed and built it from the perspective of a music educator who
          also develops software.
        </p>
        <div className="case-study-facts">
          <div><strong>Audience</strong><span>Developing singers and music educators</span></div>
          <div><strong>Focus</strong><span>Music literacy and independent practice</span></div>
          <div><strong>My role</strong><span>Instructional design and development</span></div>
          <div><strong>Status</strong><span>Working prototype; refining the experience</span></div>
        </div>
        <div className="case-study-actions">
          <a className="button" href="https://sight-line-topaz.vercel.app/" target="_blank" rel="noreferrer">
            Try SightLine
          </a>
          <a className="button button-secondary" href="https://github.com/cjohanson64-netizen/SightLine" target="_blank" rel="noreferrer">
            View Source Code
          </a>
        </div>
      </header>

      <div className="case-study-showcase glass">
        <img
          src="/images/projects/sightline.png"
          alt="SightLine interface illustrating music practice and assessment features"
        />
      </div>

      <section className="case-study-section glass">
        <p className="section-eyebrow">The Learning Problem</p>
        <h2>Practice works best when it is targeted and feedback is useful</h2>
        <p>
          Sight-singing students benefit from exercises matched to specific musical
          concepts. Preparing that practice and responding to each performance can
          be time-intensive in a busy classroom. I wanted to explore how an
          interactive tool could support both purposeful independent practice and
          the teacher's instructional planning.
        </p>
        <p>
          This is the design problem behind SightLine—not a claim that the tool
          has already produced measured learning gains.
        </p>
      </section>

      <section className="case-study-section glass">
        <p className="section-eyebrow">My Design Process</p>
        <h2>Connecting objectives, practice, and feedback</h2>
        <ol className="case-study-steps">
          {designSteps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="case-study-section glass">
        <p className="section-eyebrow">Instructional Decisions</p>
        <h2>Why the experience is designed this way</h2>
        <div className="case-study-columns">
          <div>
            <h3>Concept-aligned generation</h3>
            <p>
              Musical rules help keep generated practice connected to the skill
              being taught, instead of treating exercise generation as randomness.
            </p>
          </div>
          <div>
            <h3>Active learner participation</h3>
            <p>
              Singing an exercise is an active performance task; listening to the
              learner through a microphone makes the activity interactive.
            </p>
          </div>
          <div>
            <h3>Actionable assessment</h3>
            <p>
              Aligning performed and target pitches creates a foundation for
              feedback that can guide the next attempt.
            </p>
          </div>
          <div>
            <h3>Teacher-informed workflow</h3>
            <p>
              The design considers both the teacher preparing instructional
              material and the student practicing outside direct instruction.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-section glass">
        <p className="section-eyebrow">Implementation & Reflection</p>
        <h2>From learning concept to working software</h2>
        <p>
          I built SightLine with React, JavaScript, Vite, and Supabase, including
          a multi-pass melody generation engine, microphone-based pitch detection,
          and performance alignment and scoring. This allowed me to make the
          instructional design tangible and test the experience as software.
        </p>
        <h3>What I would evaluate next</h3>
        <p>
          The next step is structured testing with educators and learners: how
          easily they understand the tasks and feedback, how reliably performance
          is assessed, and whether repeated use supports skill development.
          Those outcomes still need validation; the current case study documents
          the design and working implementation.
        </p>
      </section>

      <div className="case-study-bottom">
        <Link className="button button-secondary" to="/projects">
          Back to Projects
        </Link>
      </div>
    </article>
  );
}
