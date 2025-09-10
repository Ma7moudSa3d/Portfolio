import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Mail, Phone, Linkedin, ChevronDown, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

// Import portfolio images
import profilePhoto from './assets/Airbrush-OBJECT-REMOVER-1750317030017.png'
import faroLogo from './assets/FARO(1).png'
import bagsLogo from './assets/BrownandPinkHandmadeBagsLogo(2).png'
import beautyLogo from './assets/PinkandBlackBeautyShopRetailLogo.png'
import seafoodLogo1 from './assets/1.png'
import seafoodLogo2 from './assets/2.png'

// Import project slider images
import project1 from './assets/1.jpg'
import project2 from './assets/2.jpg'
import project3 from './assets/3.jpg'
import project4 from './assets/4.jpg'
import project5 from './assets/5.jpg'

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const portfolioItems = [
    { id: 1, src: faroLogo, title: "FARO Brand Identity", category: "Branding" },
    { id: 2, src: bagsLogo, title: "RnF Classy Collection", category: "Logo Design" },
    { id: 3, src: beautyLogo, title: "Beauty Shop Retail Logo", category: "Logo Design" },
    { id: 4, src: seafoodLogo1, title: "Dentist Brand", category: "Branding" },
    { id: 5, src: seafoodLogo2, title: "Seafood Restaurant Variant", category: "Branding" }
  ]

  const projectSlides = [
    { id: 1, src: project1, title: "Sleep & Wellness Tips" },
    { id: 2, src: project2, title: "Screen Time Management" },
    { id: 3, src: project3, title: "Morning Relaxation Exercises" },
    { id: 4, src: project4, title: "Comfortable Sleep Environment" },
    { id: 5, src: project5, title: "Sleep Schedule Optimization" }
  ]

  // Navigation functions
  const goToNextSlide = () => {
    if (currentSlideIndex < projectSlides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1)
    }
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-4xl mx-auto"
        >
          {/* Profile Photo */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                <img 
                  src={profilePhoto} 
                  alt="Mahmoud Mohamed Saad" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Mahmoud Mohamed Saad
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 font-light"
          >
            Designing visuals that inspire and connect.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown className="w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              I'm a passionate graphic designer with a strong eye for detail and a love for creating visuals that tell stories. 
              My work blends creativity with strategy, helping brands and individuals communicate their identity in a clear and impactful way. 
              With experience across digital and print design, I focus on crafting visuals that are not only aesthetically pleasing 
              but also meaningful and effective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my creative work across branding, logo design, and visual identity projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-blue-600 font-medium">{item.category}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Slider Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Project</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wellness and lifestyle content design - use arrows to explore the series
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <div className="aspect-square relative">
                {projectSlides.map((slide, index) => (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index === currentSlideIndex ? 1 : 0,
                      scale: index === currentSlideIndex ? 1 : 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={slide.src} 
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                
                {/* Navigation Arrows */}
                {currentSlideIndex > 0 && (
                  <button
                    onClick={goToPrevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}
                
                {currentSlideIndex < projectSlides.length - 1 && (
                  <button
                    onClick={goToNextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Slide indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {projectSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlideIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlideIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

                {/* Current slide title */}
                <div className="absolute bottom-16 left-6 right-6 text-center">
                  <h3 className="text-white text-lg font-semibold">
                    {projectSlides[currentSlideIndex]?.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">
                    {currentSlideIndex + 1} of {projectSlides.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Project description */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wellness Content Series</h3>
              <p className="text-gray-600 leading-relaxed">
                A comprehensive visual content series focused on sleep wellness and healthy lifestyle habits. 
                This project combines Arabic typography with modern design principles to create engaging 
                educational content for social media and digital platforms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's collaborate and create something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a href="https://wa.me/201206456443" className="text-blue-600 hover:text-blue-700 transition-colors">
                    +201206456443 (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/mahmoud-mohammed-saad-982623310/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Create Together</h3>
              <p className="mb-6 opacity-90">
                Whether you need a complete brand identity, logo design, or any visual communication solution, 
                I'm here to help bring your ideas to life.
              </p>
              <Button 
                onClick={() => window.open('https://wa.me/201206456443', '_blank')}
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Start a Project
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square mb-4 overflow-hidden rounded-xl">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <span className="text-sm text-blue-600 font-medium">{selectedImage.category}</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-1">{selectedImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Mahmoud Mohamed Saad. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

