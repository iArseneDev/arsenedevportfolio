const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Python', 'Express.js'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['MySQL'],
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Other',
    icon: '🛠️',
    skills: ['REST API', 'Web Development'],
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group glass-effect rounded-2xl p-6 card-hover"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-dark-200 mb-4">
                  {category.title}
                </h3>
                <div className={`h-1 w-12 bg-gradient-to-r ${category.gradient} mx-auto rounded-full mb-4`} />
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 text-sm bg-dark-800 rounded-full text-dark-300 m-1 hover:bg-primary-600/20 hover:text-primary-400 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-dark-200 mb-8">
            Proficiency Levels
          </h3>
          <div className="space-y-6">
            {[
              { skill: 'Next.js & React', level: 95 },
              { skill: 'Node.js & Express', level: 90 },
              { skill: 'TypeScript', level: 85 },
              { skill: 'MySQL & Database Design', level: 88 },
              { skill: 'Python', level: 80 },
              { skill: 'REST API Development', level: 92 },
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-dark-300">{item.skill}</span>
                  <span className="text-primary-400">{item.level}%</span>
                </div>
                <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}