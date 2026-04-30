'use client'

import { ArrowDown, ExternalLink, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-3 py-1 text-sm font-medium text-primary-400 bg-primary-400/10 rounded-full border border-primary-400/20">
                  Available for Freelance
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">IRAKOZE Arsene</span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-semibold text-dark-300">
                Full Stack Web Developer
              </h2>
              
              <p className="text-lg text-dark-400 max-w-lg">
                Building scalable and performant web applications using Next.js, Node.js, 
                MySQL, and Python. Specializing in creating modern, responsive solutions 
                that drive business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all duration-200 group"
              >
                View Projects
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-dark-600 text-dark-300 font-medium hover:border-primary-500 hover:text-primary-400 transition-all duration-200"
              >
                Contact Me
                <Mail className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-4 text-dark-500">
              <div className="flex -space-x-2">
                {['Next.js', 'Node.js', 'MySQL', 'Python'].map((tech, i) => (
                  <div
                    key={tech}
                    className="w-10 h-10 rounded-full bg-dark-800 border-2 border-dark-700 flex items-center justify-center text-xs font-medium"
                    style={{ zIndex: 4 - i }}
                  >
                    {tech[0]}
                  </div>
                ))}
              </div>
              <span className="text-sm">+ more technologies</span>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/arsenedev.jpg"
                    alt="Developer Profile"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-600/10 rounded-full blur-xl" />
              
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-dark-950/90 backdrop-blur-sm rounded-full border border-dark-700/50">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-dark-300">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ArrowDown className="w-6 h-6 text-dark-500" />
        </div>
      </div>
    </section>
  )
}
