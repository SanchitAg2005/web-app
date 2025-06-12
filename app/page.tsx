"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Code,
  Cpu,
  Cloud,
  Zap,
  Camera,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

// Custom hook for scroll animations
function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll(".scroll-animate")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useScrollAnimation()

  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    "Backend/API": ["Node.js", "Postman", "MongoDB"],
    "Cloud & Hosting": ["Vercel", "InfinityFree", "Cloudflare", "IBM Watson", "Google Cloud"],
    "IoT & Embedded": ["Arduino Uno", "NodeMCU", "PIR Sensors", "RFID", "GPS", "Motors"],
    "Soft Skills": ["Communication", "Client Relations", "Startup Planning", "Ethical Hacking"],
    Bonus: ["Photography", "Valorant + OBS", "AI Tools", "ChatGPT", "Sora"],
  }

  const projects = [
    { title: "Personal Landing Page", category: "Web", description: "Modern responsive portfolio website" },
    { title: "Anime Suggestion Website", category: "Web", description: "AI-powered anime recommendation system" },
    { title: "Social Media Dashboard UI", category: "Web", description: "Clean dashboard interface design" },
    { title: "E-commerce Website", category: "Web", description: "Full-stack shopping platform" },
    { title: "Human-Detecting Laser Shooter", category: "IoT", description: "Motion-activated laser targeting system" },
    { title: "Mars Rover Prototype", category: "IoT", description: "Remote-controlled exploration vehicle" },
    { title: "DIY CNC Laser Engraver", category: "IoT", description: "Custom-built precision engraving machine" },
    { title: "IoT Attendance System", category: "IoT", description: "RFID-based automated attendance tracking" },
    {
      title: "Smart Water Flow + Disco Lighting",
      category: "IoT",
      description: "Automated water system with LED effects",
    },
    { title: "Remote-Controlled Washing Machine", category: "IoT", description: "IoT-enabled appliance automation" },
    { title: "Drone Project", category: "IoT", description: "Custom quadcopter with camera system" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-yellow-400">SAN</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="hover:text-yellow-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-yellow-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-yellow-400 transition-colors">
                Skills
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className="hover:text-yellow-400 transition-colors"
              >
                Certificates
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-yellow-400 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-yellow-400 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Certificates
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 scroll-animate fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hey, I'm <span className="text-yellow-400">Sanchit Agarwal</span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">Student. Developer. IoT Hacker. Cloud Explorer.</p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              I merge web, hardware, and AI to create smart, accessible solutions for the real world.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold"
              onClick={() => scrollToSection("projects")}
            >
              Explore Projects
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <a href="Sanchit_Agarwal_Professional_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>

          </div>

          <div className="mt-12 flex justify-center">
            <ChevronDown
              className="h-8 w-8 text-yellow-400 animate-bounce cursor-pointer"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 scroll-animate fade-left">
                Who <span className="text-yellow-400">I Am</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed scroll-animate fade-right">
                <p>
                  I'm a BCA student at Arka Jain University and a full-blown tech enthusiast on a mission to build
                  things that actually work — from websites that load fast and look clean, to IoT systems that detect,
                  respond, and automate.
                </p>
                <p>
                  I mix frontend dev, cloud, and embedded systems with startup energy to build affordable, AI-powered
                  solutions. If I'm not coding or soldering, I'm gaming, photographing, or dreaming up tech like
                  semiconductor printers (yes, really).
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>Jamshedpur, Jharkhand</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <GraduationCap className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>BCA Student at Arka Jain University</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Zap className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>Specializing in AI & Deep Learning</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-transparent p-8 rounded-2xl border border-yellow-400/30">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <Code className="h-8 w-8 text-yellow-400 mx-auto" />
                    <p className="text-sm text-gray-400">Web Development</p>
                  </div>
                  <div className="space-y-2">
                    <Cpu className="h-8 w-8 text-yellow-400 mx-auto" />
                    <p className="text-sm text-gray-400">IoT & Hardware</p>
                  </div>
                  <div className="space-y-2">
                    <Cloud className="h-8 w-8 text-yellow-400 mx-auto" />
                    <p className="text-sm text-gray-400">Cloud Solutions</p>
                  </div>
                  <div className="space-y-2">
                    <Camera className="h-8 w-8 text-yellow-400 mx-auto" />
                    <p className="text-sm text-gray-400">Photography</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <section id="photo" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Meet <span className="text-yellow-400">Sanchit</span>
          </h2>

          <div className="relative inline-block scroll-animate zoom-in">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl shadow-yellow-400/20">
              <img
                src="san.jpg"
                alt="Sanchit Agarwal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-3 rounded-full">
              <Camera className="h-6 w-6" />
            </div>
          </div>

          <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto">
            "Turning ideas into reality, one line of code and one circuit at a time."
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-animate fade-up">
            My <span className="text-yellow-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={category}
                className={`bg-black border-yellow-400/30 hover:border-yellow-400/60 transition-colors scroll-animate fade-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-animate fade-up">
            My <span className="text-yellow-400">Certificates</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Machine Learning Fundamentals",
                issuer: "IBM Watson",
                date: "2024",
                description: "Comprehensive course covering AI basics and ML algorithms",
                icon: "🤖",
              },
              {
                title: "Cloud Computing Essentials",
                issuer: "Google Cloud",
                date: "2024",
                description: "Cloud infrastructure and services certification",
                icon: "☁️",
              },
              {
                title: "IoT Development with Arduino",
                issuer: "Arduino Academy",
                date: "2023",
                description: "Hardware programming and sensor integration",
                icon: "🔧",
              },
              {
                title: "Frontend Web Development",
                issuer: "FreeCodeCamp",
                date: "2023",
                description: "HTML, CSS, JavaScript and responsive design",
                icon: "💻",
              },
              {
                title: "Ethical Hacking Basics",
                issuer: "Cybrary",
                date: "2024",
                description: "Cybersecurity fundamentals and penetration testing",
                icon: "🔒",
              },
              {
                title: "Photography Composition",
                issuer: "Adobe Creative",
                date: "2023",
                description: "Digital photography and image editing techniques",
                icon: "📸",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className={`bg-black border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:scale-105 group scroll-animate fade-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{cert.icon}</div>
                    <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-3">{cert.date}</Badge>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors text-center">
                    {cert.title}
                  </h3>

                  <p className="text-yellow-400 text-sm font-medium text-center mb-3">{cert.issuer}</p>

                  <p className="text-gray-400 text-sm text-center mb-4">{cert.description}</p>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-animate fade-up">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-black border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:scale-105 group scroll-animate fade-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-yellow-400/20 to-gray-800/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">{project.category === "Web" ? "🌐" : "🤖"}</div>
                  </div>
                  <Badge className="mb-3 bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Something <span className="text-yellow-400">Cool</span>
            </h2>
            <p className="text-xl text-gray-300">Got an idea? Let's turn it into reality together.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form action="https://formspree.io/f/manjopkz" method="POST" className="space-y-6">

                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  name="name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black border-yellow-400/30 focus:border-yellow-400"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  name="email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black border-yellow-400/30 focus:border-yellow-400"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  name="message"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black border-yellow-400/30 focus:border-yellow-400"
                />
                <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:agarwalsanchit2005@gmail.com"

                    className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    agarwalsanchit2005@gmail.com
                  </a>
                  <a
                    href="https://github.com/SanchitAg2005"
                    className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-3" />
                    GitHub Profile
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanchit-agarwal-7b8005325/"
                    className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="p-6 bg-black border border-yellow-400/30 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Age</p>
                    <p className="font-semibold">20 years</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="font-semibold">Jamshedpur, JH</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Study</p>
                    <p className="font-semibold">BCA Student</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Focus</p>
                    <p className="font-semibold">AI & IoT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-yellow-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Sanchit Agarwal | Built with caffeine and curiosity.</p>
        </div>
      </footer>
    </div>
  )
}
