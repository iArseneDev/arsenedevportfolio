'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [showSendOptions, setShowSendOptions] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSendOptions(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendViaEmail = () => {
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:irakozearsenedev@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
    setShowSendOptions(false)
  }

  const sendViaWhatsApp = () => {
    const whatsappMessage = `
*New Contact Form Message* 📬

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}
    `.trim()

    // Replace with your WhatsApp number (include country code, no + or spaces)
    const phoneNumber = '250794709133' // Change this to your actual WhatsApp number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappLink, '_blank')
    setShowSendOptions(false)
  }

  const closeOptions = () => {
    setShowSendOptions(false)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-dark-200">
                Let's Work Together
              </h3>
              <p className="text-dark-400 leading-relaxed">
                I'm currently available for freelance projects and exciting opportunities. 
                Whether you need a full-stack application, API development, or technical 
                consultation, I'm here to help.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'irakozearsenedev@gmail.com', href: 'mailto:irakozearsenedev@gmail.com' },
                { icon: Phone, label: 'Phone / WhatsApp', value: '+250 794 709 133', href: 'https://wa.me/250794709133' },
                { icon: MapPin, label: 'Location', value: 'Kigali, Rwanda' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:bg-dark-800/50 transition-colors"
                >
                  <div className="p-2 bg-primary-500/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-dark-400">{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.label.includes('WhatsApp') ? '_blank' : undefined}
                        rel={item.label.includes('WhatsApp') ? 'noopener noreferrer' : undefined}
                        className="text-dark-200 font-medium hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-dark-200 font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-dark-400 mb-3">Follow Me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/irakoze-arsene-357ab0406', label: 'LinkedIn' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-effect rounded-lg hover:bg-primary-500/10 hover:text-primary-400 transition-all duration-200 group"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8 relative">
            {showSendOptions ? (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10">
                    <Send className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-200">
                    Choose How to Send
                  </h3>
                  <p className="text-dark-400">
                    Select your preferred method to send this message
                  </p>
                </div>

                {/* Message Preview */}
                <div className="p-4 bg-dark-800/50 rounded-lg space-y-2">
                  <div className="text-sm text-dark-400">
                    <span className="text-dark-300 font-medium">From:</span> {formData.name} ({formData.email})
                  </div>
                  <div className="text-sm text-dark-400">
                    <span className="text-dark-300 font-medium">Subject:</span> {formData.subject}
                  </div>
                  <div className="text-sm text-dark-400">
                    <span className="text-dark-300 font-medium">Message:</span>
                    <p className="mt-1 text-dark-500 line-clamp-2">{formData.message}</p>
                  </div>
                </div>

                {/* Send Options */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={sendViaEmail}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 hover:from-red-500/20 hover:to-red-600/20 hover:border-red-500/40 transition-all duration-200 group"
                  >
                    <Mail className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-dark-200">Send via Email</span>
                    <span className="text-xs text-dark-400">Opens email client</span>
                  </button>

                  <button
                    onClick={sendViaWhatsApp}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 hover:from-green-500/20 hover:to-green-600/20 hover:border-green-500/40 transition-all duration-200 group"
                  >
                    <MessageCircle className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-dark-200">Send via WhatsApp</span>
                    <span className="text-xs text-dark-400">Opens WhatsApp</span>
                  </button>
                </div>

                {/* Cancel Button */}
                <button
                  onClick={closeOptions}
                  className="w-full px-4 py-2 text-sm text-dark-400 hover:text-dark-300 transition-colors"
                >
                  Cancel and go back
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>

                <p className="text-xs text-dark-500 text-center">
                  After filling the form, you'll choose to send via Email or WhatsApp
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}