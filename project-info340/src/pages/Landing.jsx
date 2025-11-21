import { useNavigate } from "react-router";
import Footer from "../components/Footer";

const heroList = [
  'Track daily, weekly, and monthly habits.',
  'Share wins in the community feed.',
  'Redeem rewards to customize your buddy.'
];

const InfoCard = ({ title, body, children }) => (
  <div className="info-card">
    <h3>{title}</h3>
    <p>{body}</p>
    {children}
  </div>
);

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container landing-layout">
      <header className="header landing-header">
        <h1>Habit Hive</h1>
        <p className="tagline">
          Build healthy routines with your friends, your habit buddy, and our supportive community.
        </p>
      </header>

      <main className="content">
        <section className="section landing-hero">
          <div className="hero-copy">
            <h2>How it works</h2>
            <p>
              Create a personalized habit buddy avatar, set habits, and invite friends to cheer you on.
              Earn points for completing tasks and spend them on new outfits for your buddy.
            </p>
            <ul className="hero-list">
              {heroList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="hero-image">
            <img src="/img/bee-kind.jpg" alt="Bee Kind to Yourself illustration" />
          </div>
        </section>

        <section className="section info-grid">
          <InfoCard title="Get Started" body="New to Habit Hive? Sign up and meet your virtual accountability buddy.">
            <div className="landing-actions">
              <button className="btn btn-primary" onClick={() => navigate("/login")}>
                Log In / Sign Up
              </button>
            </div>
          </InfoCard>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
