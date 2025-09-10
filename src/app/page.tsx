"use client";

import {Github, Linkedin, Award, Code, Briefcase, BookOpen, ArrowRight, FolderOpen } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function Home() {
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

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-start gap-6">
            {/* Profile Picture */}
            <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-600 flex items-center justify-center relative">
            <Image
  src="/picture.jpg"
  alt="Jose Antonio L. Alcalde"
  width={160} // matches w-40 (40 * 4px)
  height={160} // matches h-40
  className="w-full h-full object-cover"
  onError={(e) => {
    e.currentTarget.style.display = 'none';
  }}
/>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold text-black dark:text-white">Jose Antonio L. Alcalde</h1>
              </div>
              <div className="flex items-center gap-2 text-black dark:text-gray-400 mb-2">
                <div className="w-4 h-4">📍</div>
                <span>Metro Manila, Philippines</span>
              </div>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-4">Aspiring Software Engineer</h2>
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
                <h3 className="text-lg font-bold text-black dark:text-white">About</h3>
              </div>
              <div className="text-black dark:text-gray-300 space-y-3 text-s leading-relaxed">
<p>
  I&apos;m an aspiring software engineer specializing in Python, Flutter, and AI, with expertise in machine learning, NLP, and intelligent systems. I have experience building mobile and web apps, neural network–based malware detection systems, and NLP tools for low-resource languages.
</p>

<p>
  I create AI-integrated chatbots, design intuitive interfaces, and develop predictive analytics pipelines using TensorFlow, Scikit-learn, XGBoost, and Flask, turning complex data into actionable insights across platforms.
</p>

<p>
  Recently, I’ve focused on generative AI and advanced ML, building real-world solutions that boost productivity and deliver intelligent, accessible software.
</p>



              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <h3 className="text-lg font-bold text-black dark:text-white">Experience</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div>
                      <h4 className="text-base font-semibold text-black dark:text-white">Software Engineer Intern</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">Elinnov Technologies Inc</p>
                    </div>
                  </div>
                  <p className="text-black dark:text-gray-400 text-xs">July 2024 - August 2024</p>
                </div>
                <div className="ml-5">
                  <p className="text-black dark:text-gray-400 text-s leading-relaxed">
Independently developed a chatbot using the Gemini API to provide intelligent, context-aware responses. Implemented MongoDB for prompt management, token tracking, and error logging. Built a responsive, mobile-friendly Flutter interface, enhancing cross-platform usability while showcasing expertise in AI integration, API development, and UI design.                  </p>
                </div>
              </div>
            </div>

{/* Tech Stack Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-600" />
                  <h3 className="text-lg font-bold text-black dark:text-white">Tech Stack</h3>
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
                    <h4 className="text-sm font-semibold text-black dark:text-white mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Flutter</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">HTML</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">CSS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white mb-2">Backend</h4>
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
                    <h4 className="text-sm font-semibold text-black dark:text-white mb-2">AI & Machine Learning</h4>
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
                    <h4 className="text-sm font-semibold text-black dark:text-white mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Flutter</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">HTML</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">CSS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white mb-2">Backend</h4>
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
                    <h4 className="text-sm font-semibold text-black dark:text-white mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Git</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">GitHub</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">VS Code</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Android Studio</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Google Colab</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Postman</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Hugging Face</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white mb-2">AI & Machine Learning</h4>
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
                    <h4 className="text-sm font-semibold text-black dark:text-white mb-2">Databases</h4>
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
                <h3 className="text-lg font-bold text-black dark:text-white">Beyond Coding</h3>
              </div>
              <div className="text-black dark:text-gray-300 space-y-3 text-s leading-relaxed">
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
                <h3 className="text-lg font-bold text-black dark:text-white">Recent Projects</h3>
              </div>
              <div className="space-y-4">
                <button 
                  onClick={() => window.open('https://huggingface.co/spaces/antonalcalde/app-bantai', '_blank')}
                  className="w-full text-left p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-black dark:text-white">BantAI</h4>
                    <div className="inline-block bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      <span className="text-xs text-black dark:text-gray-300">AI/ML</span>
                    </div>
                  </div>
                  <p className="text-black dark:text-gray-400 text-sm mb-2">
Engineered an ANN to classify malware via Windows API call patterns, achieving 96.22% accuracy. Applied feature selection and dimensionality reduction for faster, more efficient processing, honing expertise in machine learning, feature engineering, and cybersecurity-focused model optimization.                  </p>
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
                    <h4 className="font-semibold text-black dark:text-white">Wealthcast</h4>
                    <div className="inline-block bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      <span className="text-xs text-black dark:text-gray-300">Mobile App</span>
                    </div>
                  </div>
                  <p className="text-black dark:text-gray-400 text-sm mb-2">
Built a Flutter Android app to track expenses and predict savings goals using an XGBoost model (R² = 0.95). Developed a Python-Flask REST API for real-time predictions and integrated Firebase for secure, multi-device data synchronization, strengthening skills in mobile development, ML integration, and scalable backend systems.                  </p>
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
                    <h4 className="font-semibold text-black dark:text-white">Balarila</h4>
                    <div className="inline-block bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      <span className="text-xs text-black dark:text-gray-300">NLP/ML</span>
                    </div>
                  </div>
                  <p className="text-black dark:text-gray-400 text-sm mb-2">
Led development of an NLP-based app to improve Tagalog grammar using BERT for sentence parsing and contextual embeddings. Applied text classification and language modeling for low-resource language processing, advancing skills in NLP, ML, and intelligent language technology for cultural preservation.                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">PyTorch</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">BERT</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">NLP</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Python</span>
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">Language Processing</span>
                  </div>
                </button>
              </div>
            </div>

{/* Education Section */}
<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
  <div className="flex items-center gap-2 mb-4">
    <BookOpen className="w-5 h-5 text-blue-600" />
    <h3 className="text-xl font-bold text-black dark:text-white">Education</h3>
  </div>
  <div className="space-y-6">
    {/* De La Salle University */}
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-start gap-3">
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
          <div>
            <h4 className="text-base font-semibold text-black dark:text-white">
              De La Salle University – Dasmariñas
            </h4>
          </div>
        </div>
        <p className="text-black dark:text-gray-400 text-sm">2021 - 2025</p>
      </div>
      <div className="pl-6">
        <p className="text-blue-600 dark:text-blue-400 text-sm">
          Bachelor of Science in Computer Science | Major in Intelligent Systems
        </p>
        <p className="text-black dark:text-gray-400 text-sm leading-relaxed">
          Achieved Dean&apos;s List honors for 6 semesters.
        </p>
        <p className="text-black dark:text-gray-400 text-sm leading-relaxed">
          Cumulative GPA: 3.64/4.0
        </p>
      </div>
    </div>

    {/* Manresa School */}
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-start gap-3">
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
          <div>
            <h4 className="text-base font-semibold text-black dark:text-white">
              Manresa School
            </h4>
          </div>
        </div>
        <p className="text-black dark:text-gray-400 text-sm">2019 - 2021</p>
      </div>
      <div className="pl-6">
        <p className="text-blue-600 dark:text-blue-400 text-sm">
          STEM Strand
        </p>
      </div>
    </div>
  </div>
</div>


{/* Recent Certifications Section */}
<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 border border-gray-100 dark:border-gray-700">
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center gap-2">
      <Award className="w-4 h-4 text-blue-600" />
      <h3 className="text-lg font-bold text-black dark:text-white">Recent Certifications</h3>
    </div>
  </div>
  <div className="space-y-2">
    <button 
      onClick={() => window.open('https://learn.aisingapore.org/certificate-verification/838FEEEA73-7815300B9C-14B12B8C9/', '_blank')}
      className="w-full text-left bg-gray-50 dark:bg-gray-700 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
    >
      <h4 className="font-semibold text-black dark:text-white text-sm">DA4E: Descriptive Analytics</h4>
      <p className="text-black dark:text-gray-400 text-sm">AI Singapore</p>
    </button>
    <button 
      onClick={() => window.open('https://learn.aisingapore.org/certificate-verification/838FEEEA71-735B733403-14B12B8C9/', '_blank')}
      className="w-full text-left bg-gray-50 dark:bg-gray-700 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
    >
      <h4 className="font-semibold text-black dark:text-white text-sm">DA4E: Predictive Analytics</h4>
      <p className="text-black dark:text-gray-400 text-sm">AI Singapore</p>
    </button>
    <button 
      onClick={() => window.open('https://www.freecodecamp.org/certification/antonalcalde/scientific-computing-with-python-v7', '_blank')}
      className="w-full text-left bg-gray-50 dark:bg-gray-700 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
    >
      <h4 className="font-semibold text-black dark:text-white text-sm">Scientific Computing with Python</h4>
      <p className="text-black dark:text-gray-400 text-sm">freeCodeCamp</p>
    </button>
    <button 
      onClick={() => window.open('https://www.kaggle.com/certification/badges/antonalcalde/30', '_blank')}
      className="w-full text-left bg-gray-50 dark:bg-gray-700 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
    >
      <h4 className="font-semibold text-black dark:text-white text-sm">Python</h4>
      <p className="text-black dark:text-gray-400 text-sm">Kaggle</p>
    </button>
  </div>
</div>
          </div>
        </div>

{/* Connect Section */}
<div className="mt-6">
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-100 dark:border-gray-700">
<h3 className="text-lg font-bold mb-4 text-black dark:text-white">Let&apos;s Connect!</h3>
    
    {/* Email */}
    <div className="mb-4">
      <h4 className="text-base font-semibold mb-1 text-black dark:text-white">Email</h4>
      <a 
        href="mailto:josealcalde41@gmail.com" 
        className="text-blue-600 dark:text-blue-400 hover:underline text-base"
      >
        josealcalde41@gmail.com
      </a>
    </div>

    {/* Social Links */}
    <div>
      <h4 className="text-base font-semibold mb-2 text-black dark:text-white">Social Links</h4>
      <div className="flex flex-wrap gap-4">
        <a 
          href="https://www.linkedin.com/in/antonalcalde/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Linkedin className="w-5 h-5" />
          <span className="text-base font-medium">LinkedIn</span>
        </a>
        <a 
          href="https://github.com/antonalcalde" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Github className="w-5 h-5" />
          <span className="text-base font-medium">GitHub</span>
        </a>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}