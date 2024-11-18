import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ArrowRight } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import swimCamp from "@/assets/Swim_camp.png"
import map from "@/assets/map.png"
import schedule from "@/assets/schedule.png"
import work from "@/assets/heel.png"
import yoga from "@/assets/yoga.png"
import track from "@/assets/track.png"
import freelance from "@/assets/freelance.png" 
import phone from "@/assets/phone.png"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const features = [
  {
    title: "Plan your journey from A to Z",
    description: "Create detailed roadmaps and track progress effortlessly",
    image: map,
    bgPattern: "radial-gradient(circle, #f0f0f0 10%, transparent 11%),radial-gradient(circle at bottom left, #f0f0f0 5%, transparent 6%),radial-gradient(circle at bottom right, #f0f0f0 5%, transparent 6%),radial-gradient(circle at top left, #f0f0f0 5%, transparent 6%),radial-gradient(circle at top right, #f0f0f0 5%, transparent 6%)"
  },
  {
    title: "Plan everything in advance",
    description: "Schedule tasks and set reminders to stay on track",
    image: schedule,
    bgPattern: "linear-gradient(0deg, #f9f9f9 25%, transparent 25%), linear-gradient(90deg, #f0f0f0 25%, transparent 25%)"
  },
  {
    title: "Real-time event updates",
    description: "Stay informed with instant notifications and updates",
    image: work,
    bgPattern: "repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #f9f9f9 10px, #f9f9f9 20px)"
  },
  {
    title: "Keep your contacts close",
    description: "Collaborate seamlessly with your team members",
    image: yoga,
    bgPattern: "radial-gradient(circle, #f0f0f0 20%, transparent 20%), radial-gradient(circle, #f0f0f0 20%, transparent 20%)"
  },
  {
    title: "Track your completed tasks",
    description: "Monitor progress and celebrate achievements",
    image: track,
    bgPattern: "linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0)"
  },
  {
    title: "Personalize your team",
    description: `Customize roles and permissions for optimal workflow`,
    image: freelance,
    bgPattern: "repeating-conic-gradient(#f9f9f9 0% 25%, #f0f0f0 0% 50%)"
  }
]

const LandingPage = () => {
  return (
    (<div className="min-h-screen bg-[#F8F6FF]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
            <span className="text-xl font-bold">Rexwork</span>
          </div>
          <Button variant="default" className="bg-[#0a0a0a]">Get Started</Button>
        </nav>
      </header>
      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-4 py-20 text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Organize your routine with <span className="text-purple-600">Rexwork</span>
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline your workflow and boost productivity with our intuitive task management platform
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-[#0a0a0a] hover:bg-[#0a0a0a]">Try for free</Button>
          <Button size="lg" variant="outline">Watch demo</Button>
        </div>
        <motion.img
          src={swimCamp}
          alt="Hero illustration"
          className="mt-12 mx-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }} />
      </motion.section>
      {/* Feature Sections */}
      {features.map((feature, index) => (
        <motion.section
          key={index}
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}>
          <div
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-[200px]`}>
            <Card
              className="flex-1 overflow-hidden"
              style={{ backgroundImage: feature.bgPattern, backgroundSize: '20px 20px' }}>
              <CardHeader className="bg-white bg-opacity-90 backdrop-blur-sm">
                <CardTitle className="text-3xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="bg-white bg-opacity-90 backdrop-blur-sm">
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Button variant="ghost" className="group">
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Button>
              </CardContent>
            </Card>
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="rounded-lg shadow- w-auto h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }} />
            </motion.div>
          </div>
        </motion.section>
      ))}
      {/* Mobile App Section */}
      <motion.section
        className="bg-gray-900 text-white py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Always at your fingertips</h2>
              <p className="text-gray-400 mb-8">Access your tasks and projects anywhere, anytime with our mobile app</p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="text-white border-white bg-gray-800 hover:text-gray-900">
                  App Store
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white bg-gray-800 hover:bg-white hover:text-gray-900">
                  Play Store
                </Button>
              </div>
            </div>
            <motion.div
              className="flex-1"
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}>
              <img
                src= {phone}
                alt="Mobile app"
                className="mx-auto" />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-[#F8F6FF]">
        <h2 className="text-3xl font-bold text-center mb-12">What people say about us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4 , 5, 6].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Rexwork has transformed how our team collaborates. It's intuitive and powerful!"
                </p>
                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={`/placeholder.svg?text=U${index + 1}`} />
                    <AvatarFallback>U{index + 1}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">User {index + 1}</p>
                    <p className="text-sm text-gray-500">Company {index + 1}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div
            className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-bold">Rexwork</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195  2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>

                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd" />
                </svg>
              </a>
              {/* <img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="" title="" /> */}
            </div>

          </div>
        </div>
      </footer>
    </div>)
  );
}

export default LandingPage