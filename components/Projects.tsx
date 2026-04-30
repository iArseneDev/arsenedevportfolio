import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Rwanda Cinema Platform',
    description: 'A comprehensive cinema platform for Rwanda showcasing movies, showtimes, and ticket booking functionality with a modern user interface.',
    image: '/api/placeholder/600/400',
    techStack: ['Next.js', 'Node.js', 'MySQL', 'TypeScript'],
    liveLink: 'https://rwandacinema.site/',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Minuga System',
    description: 'An advanced management system platform built with modern web technologies, featuring user management, analytics, and real-time data processing.',
    image: '/api/placeholder/600/400',
    techStack: ['Next.js', 'React', 'Node.js', 'TypeScript'],
    liveLink: 'https://minuga-system.vercel.app/',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Gatebe Agricare Farm',
    description: 'An agricultural e-commerce and farm management platform connecting farmers with customers, featuring product listings and ordering systems.',
    image: '/api/placeholder/600/400',
    techStack: ['Next.js', 'Node.js', 'MySQL', 'Python'],
    liveLink: 'https://gatebe-agricare-farm.vercel.app/',
    gradient: 'from-green-500 to-emerald-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-dark-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto">
            Showcasing some of my best work and successful client projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-effect rounded-2xl overflow-hidden card-hover"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-dark-800 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                    {project.title[0]}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-dark-200 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-dark-800 rounded-md text-dark-300 border border-dark-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <button className="px-4 py-2 border border-dark-600 text-dark-300 text-sm font-medium rounded-lg hover:border-primary-500 hover:text-primary-400 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}