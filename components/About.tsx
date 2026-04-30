export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-dark-200">
                Passionate Full Stack Developer
              </h3>
              <div className="space-y-3 text-dark-400">
                <p className="leading-relaxed">
                  With a strong foundation in modern web technologies, I specialize in building 
                  end-to-end solutions that are not just functional but exceptional in performance 
                  and user experience.
                </p>
                <p className="leading-relaxed">
                  My expertise spans the entire development stack, from crafting responsive 
                  frontends with Next.js and React to building robust backend systems with 
                  Node.js and Python. I'm experienced in database design with MySQL and 
                  creating RESTful APIs that power dynamic applications.
                </p>
                <p className="leading-relaxed">
                  I'm passionate about clean code, scalable architecture, and delivering 
                  solutions that help businesses grow. Whether it's a SaaS platform, 
                  e-commerce solution, or custom web application, I bring dedication 
                  and expertise to every project.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Years Experience', value: '5+' },
                { label: 'Projects Completed', value: '50+' },
                { label: 'Happy Clients', value: '30+' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-lg glass-effect"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-dark-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8 space-y-6">
            <h3 className="text-xl font-semibold text-dark-200 mb-4">
              What I Do Best
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Full Stack Development',
                  description: 'End-to-end application development with modern tech stacks',
                  icon: '🎯',
                },
                {
                  title: 'Performance Optimization',
                  description: 'Building lightning-fast applications with optimal loading times',
                  icon: '⚡',
                },
                {
                  title: 'Scalable Architecture',
                  description: 'Designing systems that grow with your business needs',
                  icon: '📈',
                },
                {
                  title: 'API Development',
                  description: 'Creating robust and secure RESTful APIs',
                  icon: '🔌',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-3 rounded-lg hover:bg-dark-800/50 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-medium text-dark-200">{item.title}</h4>
                    <p className="text-sm text-dark-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}