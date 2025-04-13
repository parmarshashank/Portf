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
    <section id="profile" className="relative py-20 overflow-hidden">
      <div className="fog" />
      <div className="fog-2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="notification-box rounded-lg mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-8 rounded border border-[var(--sl-border)] flex items-center justify-center">
              <span className="text-[var(--sl-blue-glow)]">!</span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--sl-blue-glow)]">NOTIFICATION</h2>
          </div>
          <p className="text-[var(--sl-text-primary)] text-lg">
            Character Status Window
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="status-window rounded-lg p-8"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-[var(--sl-blue-light)]">LEVEL</h3>
                  <span className="text-2xl font-bold text-[var(--sl-text-primary)]">18</span>
                </div>
                <div className="h-px bg-[var(--sl-border)]" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--sl-blue-light)]">CLASS</h3>
                <p className="text-[var(--sl-text-primary)] text-lg">Full-Stack Developer</p>
                <div className="h-px bg-[var(--sl-border)]" />
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[var(--sl-blue-light)]">STATS</h3>
                <StatBar label="Frontend" value={85} maxValue={100} />
                <StatBar label="Backend" value={80} maxValue={100} />
                <StatBar label="DevOps" value={70} maxValue={100} />
                <StatBar label="Problem Solving" value={90} maxValue={100} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-6">
              <div className="status-window rounded-lg p-8">
                <h3 className="text-xl font-bold text-[var(--sl-blue-light)] mb-4">SKILLS</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'React', level: 'S' },
                    { name: 'TypeScript', level: 'S' },
                    { name: 'Node.js', level: 'A' },
                    { name: 'Next.js', level: 'S' },
                    { name: 'Python', level: 'A' },
                    { name: 'AWS', level: 'B' },
                  ].map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 py-2 rounded-lg bg-[var(--sl-card-bg)] border border-[var(--sl-border)] flex items-center gap-2"
                    >
                      <span className="text-[var(--sl-text-primary)]">{skill.name}</span>
                      <span className="text-[var(--sl-blue-light)] font-bold">{skill.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="status-window rounded-lg p-8">
                <h3 className="text-xl font-bold text-[var(--sl-blue-light)] mb-4">TITLES</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sl-blue-glow)]" />
                    <span className="text-[var(--sl-text-primary)]">Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sl-blue-glow)]" />
                    <span className="text-[var(--sl-text-primary)]">Problem Solver</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sl-blue-glow)]" />
                    <span className="text-[var(--sl-text-primary)]">Code Architect</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile; 