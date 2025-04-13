const Profile = () => {
  return (
    <section id="profile" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="stat-text">Character Profile</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="card hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-400">Class</h3>
                <p className="text-slate-300">Full-Stack Developer</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-400">Level</h3>
                <p className="text-slate-300">Senior Developer</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-400">Experience</h3>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[85%]" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-400">Status</h3>
                <p className="text-slate-300">Available for Quests</p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-4">
              <p className="text-lg text-slate-300">
                A passionate developer with a quest to create exceptional digital experiences. 
                Specializing in modern web technologies and scalable solutions.
              </p>
              
              <p className="text-lg text-slate-300">
                With years of experience in the digital realm, I've honed my skills in both frontend and backend development, 
                always seeking to level up and tackle new challenges.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {['TypeScript', 'React', 'Node.js', 'Next.js', 'Python', 'AWS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile; 