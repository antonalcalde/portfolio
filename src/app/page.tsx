"use client";

import {Github, Linkedin, Award, Code, Briefcase, BookOpen,  Sun, Moon,  ArrowRight, FolderOpen } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showFullTechStack, setShowFullTechStack] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 p-3 rounded-xl transition-colors shadow-lg border border-gray-200 dark:border-gray-600"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-start gap-6">
            {/* Profile Picture */}
            <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-600 flex items-center justify-center relative">
              <Image
                src="/profile-photo.jpg"
                alt="Jose Antonio L. Alcalde"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Jose Antonio L. Alcalde</h1>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                <div className="w-4 h-4">📍</div>
                <span>Manila, Philippines</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Aspiring Software Engineer</h2>
              <a
  href="mailto:josealcalde41@gmail.com"
  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-medium shadow-md text-sm
             text-white bg-blue-600 hover:bg-blue-700 transition-colors"
>
  <svg xmlns="http://www.w3.org/2000/svg" 
       fill="none" 
       viewBox="0 0 24 24" 
       strokeWidth={1.5} 
       stroke="currentColor" 
       className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" 
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25" />
  </svg>
  Send Email
</a>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">About</h3>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-3 text-sm leading-relaxed">
              <p>
  I&apos;m a software engineer specializing in Python, Flutter, and AI-powered solutions, with expertise in machine learning, natural language processing, and intelligent systems. My experience covers building mobile and web applications, developing neural network–based malware detection systems, and creating NLP-driven grammar enhancement tools for low-resource languages.
</p>

<p>
  I craft AI-integrated chatbots, design intuitive user interfaces, and develop predictive analytics pipelines using technologies like TensorFlow, Scikit-learn, XGBoost, and Flask. My solutions transform complex data into actionable insights and deliver seamless user experiences across platforms.
</p>
<p>
  Recently, I&apos;ve been diving deeper into generative AI and advanced machine learning, applying them to real-world applications that help people work smarter and more efficiently. I&apos;m passionate about creating impactful software that merges functionality, intelligence, and accessibility.
</p>

              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Software Engineer Intern</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-xs">Elinnov Technologies Inc</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">July 2024 - August 2024</p>
                </div>
                <div className="ml-5">
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                    As a Software Engineer Intern at Elinnov Technologies Inc, I independently develop an AI-powered document-analysis chatbot that processes and responds to uploaded documents using advanced natural language processing techniques. I integrated the Gemini API to extract structured insights and deliver intelligent, context-aware responses, ensuring users receive accurate and actionable information. On the backend, I implemented MongoDB for managing user prompts, tracking token usage, and logging system errors to enhance reliability and performance monitoring. Additionally, I designed and built a mobile-friendly interface with Flutter, providing a smooth and responsive experience across mobile devices. This role allowed me to strengthen my expertise in AI integration, API development, and cross-platform UI design while contributing to a robust, user-focused solution.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Tech Stack</h3>
                </div>
                <button 
                  onClick={() => setShowFullTechStack(!showFullTechStack)}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                >
                  {showFullTechStack ? 'Show Less' : 'View All'} <ArrowRight className={`w-3 h-3 transition-transform ${showFullTechStack ? 'rotate-90' : ''}`} />
                </button>
              </div>
              
              {!showFullTechStack ? (
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Flutter</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">HTML</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">CSS</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Python</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Java</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">JavaScript</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Flask</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">RESTful APIs</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Firebase Functions</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">MySQL</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">MongoDB</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">SQL</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">AI & Machine Learning</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">TensorFlow</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Keras</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">PyTorch</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Scikit-learn</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">NumPy</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Pandas</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">XGBoost</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">BERT</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Hugging Face</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">NLP</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Machine Learning</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Data Analysis</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Gemini API</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Flutter</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">HTML</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">CSS</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Python</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Java</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">JavaScript</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Flask</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">RESTful APIs</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Firebase Functions</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">MySQL</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">MongoDB</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">SQL</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Git</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">GitHub</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">VS Code</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Android Studio</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Google Colab</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Postman</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">AI & Machine Learning</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">TensorFlow</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Keras</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">PyTorch</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Scikit-learn</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">NumPy</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Pandas</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">XGBoost</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">BERT</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Hugging Face</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">NLP</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Machine Learning</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Data Analysis</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Gemini API</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">MongoDB</span>
                      <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">MySQL</span>
                      <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">SQL</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Beyond Coding Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Beyond Coding</h3>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-3 text-sm leading-relaxed">
              <p>
  When I&apos;m not building apps or experimenting with AI, I&apos;m busy exploring the latest in emerging tech, geeking out over machine learning breakthroughs, or tinkering with side projects that may or may not ever see the light of day. I&apos;m a firm believer in lifelong learning and am constantly leveling up—both in code and in life.
</p>

              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Recent Projects Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <FolderOpen className="w-4 h-4 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Projects</h3>
              </div>
              <div className="space-y-4">
                <button 
                  onClick={() => window.open('https://huggingface.co/spaces/antonalcalde/app-bantai', '_blank')}
                  className="w-full text-left p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">BantAI</h4>
                    <div className="inline-block bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      <span className="text-xs text-gray-700 dark:text-gray-300">AI/ML</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    I engineered an artificial neural network (ANN) to classify malware by analyzing Windows API call patterns, achieving an impressive 96.22% classification accuracy through supervised learning. To further improve performance, I applied targeted feature selection and dimensionality reduction techniques, resulting in faster processing and higher efficiency. This project strengthened my expertise in machine learning model development, feature engineering, and performance optimization for cybersecurity-focused applications, ultimately contributing to more accurate and efficient detection of malicious software.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Python</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">TensorFlow</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Neural Networks</span>
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">Cybersecurity</span>
                  </div>
                </button>

                <button 
                  onClick={() => window.open('https://github.com/antonalcalde/wealthcast', '_blank')}
                  className="w-full text-left p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Wealthcast</h4>
                    <div className="inline-block bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      <span className="text-xs text-gray-700 dark:text-gray-300">Mobile App</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    I developed an Android app using Flutter that enables users to track personal expenses and analyze spending patterns. I integrated an XGBoost model to accurately predict savings goals based on historical financial data, achieving a high R² score of 0.95. To support real-time predictions, I built a Python-Flask REST API pipeline that seamlessly connects the machine learning model to the mobile frontend. Additionally, I implemented Firebase for secure cloud data synchronization, ensuring smooth multi-device access and consistent user experiences. This project strengthened my expertise in mobile app development, machine learning integration, and scalable backend systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Flutter</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">XGBoost</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Flask</span>
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Firebase</span>
                  </div>
                </button>

                <button 
                  onClick={() => window.open('https://huggingface.co/spaces/antonalcalde/balarila-app', '_blank')}
                  className="w-full text-left p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Balarila</h4>
                    <div className="inline-block bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      <span className="text-xs text-gray-700 dark:text-gray-300">NLP/ML</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    As Project Leader for Balarila: Navigating Tagalog Proficiency with NLP-ML Grammar Enhancement, I led the development of an NLP-based application designed to improve grammar proficiency in the Tagalog language. Leveraging the BERT model, the system performed sentence parsing, generated contextual embeddings, and enhanced grammatical structures in user-inputted sentences. I built the application to accurately identify and refine grammar, applying text classification and language modeling techniques tailored for low-resource language processing. This project not only advanced my skills in NLP and machine learning but also contributed to the preservation and modernization of Tagalog through intelligent language technology.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">BERT</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">NLP</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Python</span>
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">Language Processing</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">De La Salle University – Dasmariñas</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-xs">Bachelor of Science in Computer Science</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">Major in Intelligent Systems</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">2021 - 2025</p>
                </div>
                <div className="ml-5">
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
  Consistently named to the Dean&apos;s List for academic excellence.
</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                    Cumulative GPA: 3.64/4.0
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Manresa School</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-xs">STEM Strand</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">2019 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections Below */}
        <div className="mt-6 space-y-6">
          {/* Recent Certifications Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Certifications</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button 
                  onClick={() => window.open('https://learn.aisingapore.org/certificate-verification/838FEEEA73-7815300B9C-14B12B8C9/', '_blank')}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-left hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">DA4E: Descriptive Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">AI Singapore</p>
                </button>
                <button 
                  onClick={() => window.open('https://learn.aisingapore.org/certificate-verification/838FEEEA71-735B733403-14B12B8C9/', '_blank')}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-left hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">DA4E: Predictive Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">AI Singapore</p>
                </button>
                <button 
                  onClick={() => window.open('https://www.freecodecamp.org/certification/antonalcalde/scientific-computing-with-python-v7', '_blank')}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-left hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Scientific Computing with Python</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">freeCodeCamp</p>
                </button>
                <button 
                  onClick={() => window.open('https://www.kaggle.com/certification/badges/antonalcalde/30', '_blank')}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-left hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Python</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">Kaggle</p>
                </button>
              </div>
          </div>

          {/* Connect Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Connect</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold mb-2 text-gray-900 dark:text-white">Email</h4>
                <a 
                  href="mailto:josealcalde41@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  josealcalde41@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-2 text-gray-900 dark:text-white">Social Links</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/antonalcalde/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/antonalcalde" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

    </div>
  );
}



