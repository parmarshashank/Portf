import { motion } from 'framer-motion';

interface StatBarProps {
  label: string;
  value: number;
  maxValue: number;
}

const StatBar = ({ label, value, maxValue }: StatBarProps) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-[var(--sl-text-secondary)] font-medium">{label}</span>
      <span className="text-[var(--sl-blue-light)] font-mono">{value}</span>
    </div>
    <div className="stat-bar">
      <motion.div
        className="h-full bg-[var(--sl-blue-glow)]"
        initial={{ width: 0 }}
        animate={{ width: `${(value / maxValue) * 100}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const Profile = () => {
  return (
    <section className="profile" id="profile">
      <div className="fog" />
      <div className="fog-2" />
      
      <div className="profile__content">
        <div>
          <div className="profile__header">
            <h2 className="profile__title">CHARACTER PROFILE</h2>
            <p className="profile__subtitle">Status Window</p>
          </div>

          <div className="profile__bio">
            A passionate Full-Stack Developer with a quest to create exceptional digital experiences. 
            Specializing in modern web technologies and creative problem-solving, I transform complex 
            challenges into elegant solutions. My journey in the realm of code has equipped me with 
            the skills to craft robust applications and intuitive user interfaces.
          </div>

          <div className="stat-group">
            <div className="stat-group__header">
              <h3 className="stat-group__title">STATS</h3>
              <span className="stat-group__value">LV.18</span>
            </div>

            <div className="stat-bar-container">
              <div className="stat-bar-label">
                <span>Frontend Development</span>
                <span>85/100</span>
              </div>
              <div className="stat-bar">
                <div className="stat-bar__fill" style={{ width: '85%' }} />
              </div>
            </div>

            <div className="stat-bar-container">
              <div className="stat-bar-label">
                <span>Backend Development</span>
                <span>80/100</span>
              </div>
              <div className="stat-bar">
                <div className="stat-bar__fill" style={{ width: '80%' }} />
              </div>
            </div>

            <div className="stat-bar-container">
              <div className="stat-bar-label">
                <span>Problem Solving</span>
                <span>90/100</span>
              </div>
              <div className="stat-bar">
                <div className="stat-bar__fill" style={{ width: '90%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="profile__stats">
          <div className="stat-group">
            <div className="stat-group__header">
              <h3 className="stat-group__title">SKILLS</h3>
            </div>
            <div className="skill-grid">
              {[
                { name: 'React', level: 'S' },
                { name: 'TypeScript', level: 'S' },
                { name: 'Node.js', level: 'A' },
                { name: 'Next.js', level: 'S' },
                { name: 'Python', level: 'A' },
                { name: 'AWS', level: 'B' },
                { name: 'MongoDB', level: 'A' },
                { name: 'SQL', level: 'B' },
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-item__name">{skill.name}</div>
                  <div className="skill-item__level">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="stat-group">
            <div className="stat-group__header">
              <h3 className="stat-group__title">TITLES</h3>
            </div>
            <div className="skill-grid">
              {[
                'Full-Stack Developer',
                'Problem Solver',
                'Code Architect',
                'UI Specialist',
              ].map((title) => (
                <div key={title} className="skill-item">
                  <div className="skill-item__name">{title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile; 