import { BookOpenIcon, ChatBubbleLeftRightIcon, AcademicCapIcon, InformationCircleIcon, LinkIcon } from "@heroicons/react/20/solid"
import { NewspaperIcon } from "@heroicons/react/20/solid"
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline" // ← Correct icon
import { useState } from "react"
import type { DetailPageProps, InterviewQuestion, NewsArticle } from "./types"

export function DetailPage({ technology, onBack }: DetailPageProps) {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const Icon = technology.icon

  // Topic URL mappings with official websites
  const topicUrls: Record<string, { 
    official: string; 
    docs: string; 
    learning: string;
    description: string;
  }> = {
    'React 19 & Next.js 15': {
      official: 'https://react.dev',
      docs: 'https://react.dev/learn',
      learning: 'https://nextjs.org/learn',
      description: 'React is a JavaScript library for building user interfaces. Next.js is a React framework for production.'
    },
    // ... rest of your topicUrls object remains the same
  }

  // Basics content for each technology with working URLs
  const basicsContent: Record<string, { 
    title: string; 
    content: {text: string, url?: string}[];
    resources: {name: string, url: string}[];
    officialLinks: {name: string, url: string}[];
  }> = {
    'fullstack': {
      title: 'Full Stack Development Basics',
      content: [
        {text: 'Frontend: HTML, CSS, JavaScript, and modern frameworks like React', url: 'https://developer.mozilla.org/en-US/docs/Learn'},
        {text: 'Backend: Server-side programming with Node.js, Python, or Java', url: 'https://nodejs.org/en/docs/guides'},
        {text: 'Database: SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis)', url: 'https://www.mongodb.com/docs/manual/'},
        {text: 'APIs: RESTful services and GraphQL for data communication', url: 'https://graphql.org/learn/'},
        {text: 'Version Control: Git and GitHub for code management', url: 'https://docs.github.com/en/get-started'},
        {text: 'Deployment: Cloud platforms (AWS, Vercel, Netlify) and containerization (Docker)', url: 'https://docs.docker.com/get-started/'}
      ],
      resources: [
        {name: 'MDN Web Docs - Complete web development reference', url: 'https://developer.mozilla.org'},
        {name: 'FreeCodeCamp - Interactive coding tutorials', url: 'https://www.freecodecamp.org'},
        {name: 'Frontend Masters - In-depth video courses', url: 'https://frontendmasters.com'},
        {name: 'The Odin Project - Full curriculum from basics to advanced', url: 'https://www.theodinproject.com'}
      ],
      officialLinks: [
        {name: 'React Official Documentation', url: 'https://react.dev'},
        {name: 'Node.js Documentation', url: 'https://nodejs.org/docs'},
        {name: 'Next.js Learn', url: 'https://nextjs.org/learn'},
        {name: 'Vercel Documentation', url: 'https://vercel.com/docs'}
      ]
    },
    // ... rest of your basicsContent object remains the same
  }

  // Get basics for current technology
  const currentBasics = basicsContent[technology.id] || {
    title: 'Technology Basics',
    content: [{text: 'Basics content coming soon...'}],
    resources: [],
    officialLinks: []
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`bg-gradient-to-r ${technology.gradient} rounded-2xl p-8 mb-8 text-white relative`}>
          <button
            onClick={onBack}
            className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Technologies</span>
          </button>
          <div className="flex items-center gap-4 mb-4 pt-6">
            <div className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm">
              <Icon className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{technology.title}</h1>
              <p className="text-white/90 mt-2">{technology.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Topics and Basics */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basics Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <AcademicCapIcon className="h-7 w-7 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">{currentBasics.title}</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <InformationCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">What You Need to Start</h3>
                      <ul className="space-y-2 text-blue-800">
                        {currentBasics.content.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 group">
                            <span className="text-blue-600">•</span>
                            {item.url ? (
                              <a 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-800 hover:text-blue-900 hover:underline flex items-center gap-1"
                              >
                                {item.text}
                                <ArrowTopRightOnSquareIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            ) : (
                              <span>{item.text}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Official Links */}
                {currentBasics.officialLinks.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <LinkIcon className="h-5 w-5 text-gray-400" />
                      Official Documentation
                    </h3>
                    <div className="space-y-2">
                      {currentBasics.officialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technology.gradient}`}></div>
                          <span className="text-gray-700 flex-1">{link.name}</span>
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Learning Resources */}
                {currentBasics.resources.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Learning Resources:</h3>
                    <div className="space-y-2">
                      {currentBasics.resources.map((resource, idx) => (
                        <a
                          key={idx}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technology.gradient}`}></div>
                          <span className="text-gray-700 flex-1">{resource.name}</span>
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Learning Topics Section with Clickable Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <BookOpenIcon className="h-6 w-6 text-gray-400" />
                  Learning Topics for 2025
                </h2>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-semibold">
                  Click any topic for resources
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technology.topics.map((topic: string, idx: number) => {
                  const topicInfo = topicUrls[topic] || {
                    official: '#',
                    docs: '#',
                    learning: '#',
                    description: 'Learn more about this technology'
                  };
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                      className="text-left"
                    >
                      <div className={`flex items-start gap-3 p-4 rounded-lg transition-all ${
                        selectedTopic === topic 
                          ? 'bg-indigo-50 border-2 border-indigo-200' 
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                      }`}>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technology.gradient} mt-2 flex-shrink-0`}></div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <span className="text-gray-700 font-medium">{topic}</span>
                            <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400" />
                          </div>
                          
                          {selectedTopic === topic && (
                            <div className="mt-3 p-3 bg-white rounded-lg border border-gray-300">
                              <p className="text-xs text-gray-600 mb-3">{topicInfo.description}</p>
                              
                              <div className="space-y-2">
                                <a 
                                  href={topicInfo.official}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Official</span>
                                  Official Website →
                                </a>
                                
                                <a 
                                  href={topicInfo.docs}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-green-600 hover:text-green-800 hover:underline"
                                >
                                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">Docs</span>
                                  Documentation →
                                </a>
                                
                                <a 
                                  href={topicInfo.learning}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 hover:underline"
                                >
                                  <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">Tutorial</span>
                                  Learning Path →
                                </a>
                              </div>
                              
                              <div className="mt-3 pt-3 border-t border-gray-200">
                                <h4 className="font-semibold text-xs text-gray-900 mb-1">Getting Started Tips:</h4>
                                <ul className="text-xs text-gray-600 space-y-1">
                                  {topic.includes('React') && (
                                    <>
                                      <li>• Start with <a href="https://react.dev/learn" className="text-blue-600 hover:underline">React Tutorial</a></li>
                                      <li>• Build your first component</li>
                                      <li>• Learn state and props management</li>
                                    </>
                                  )}
                                  {topic.includes('Node.js') && (
                                    <>
                                      <li>• Complete <a href="https://nodejs.dev/en/learn/" className="text-blue-600 hover:underline">Node.js Guides</a></li>
                                      <li>• Build a simple HTTP server</li>
                                      <li>• Learn npm package management</li>
                                    </>
                                  )}
                                  {topic.includes('MongoDB') && (
                                    <>
                                      <li>• Try <a href="https://www.mongodb.com/docs/manual/tutorial/getting-started/" className="text-blue-600 hover:underline">MongoDB Tutorial</a></li>
                                      <li>• Learn CRUD operations</li>
                                      <li>• Practice with MongoDB Atlas</li>
                                    </>
                                  )}
                                  {/* ... rest of the topic-specific tips */}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p>💡 <strong>Tip:</strong> Click any topic to see official websites, documentation, and learning resources</p>
              </div>
            </div>

            {/* Interview Questions Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-400" />
                  Top Interview Questions for 2025
                </h2>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-semibold">
                  {technology.interviewQuestions.length} Questions
                </span>
              </div>
              <div className="space-y-4">
                {technology.interviewQuestions.map((item: InterviewQuestion, idx: number) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:border-indigo-300 transition-colors"
                  >
                    <button
                      onClick={() => setExpandedQuestion(expandedQuestion === idx ? null : idx)}
                      className="w-full text-left p-5 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${technology.gradient} text-white text-sm font-bold flex-shrink-0`}>
                            {idx + 1}
                          </span>
                          <div>
                            <p className="text-gray-900 font-semibold pt-1">{item.q}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              Latest industry question • Asked at FAANG companies
                            </p>
                          </div>
                        </div>
                        <svg
                          className={`w-5 h-5 text-gray-400 transform transition-transform flex-shrink-0 mt-1 ${
                            expandedQuestion === idx ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {expandedQuestion === idx && (
                      <div className="px-5 pb-5 pt-2 bg-gray-50 border-t border-gray-200">
                        <div className="ml-11">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                              Expected Answer
                            </span>
                            <span className="text-xs text-gray-500">Based on 2025 hiring trends</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{item.a}</p>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600">
                              <strong>Follow-up:</strong> Interviewers often ask about practical implementation or edge cases.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Latest News */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <NewspaperIcon className="h-6 w-6 text-gray-400" />
                Latest Industry News
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Stay updated with the latest developments in {technology.title}
              </p>
              
              {technology.latestNews && technology.latestNews.length > 0 ? (
                <div className="space-y-6">
                  {technology.latestNews.map((news: NewsArticle) => (
                    <a
                      key={news.id}
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium">
                            {news.source}
                          </span>
                          <span className="text-xs text-gray-500">{news.date}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                          {news.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">{news.summary}</p>
                        <div className="flex items-center text-indigo-600 text-sm font-medium">
                          <span>Read article</span>
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <NewspaperIcon className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                  <p>No news articles available</p>
                </div>
              )}
              
              {/* Quick Start Guide with Links */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <AcademicCapIcon className="h-5 w-5 text-blue-600" />
                  Quick Start Guide
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Week 1-2:</strong> <a href="https://www.freecodecamp.org" className="text-blue-600 hover:underline">Learn fundamentals</a></li>
                  <li>• <strong>Week 3-4:</strong> <a href="https://github.com" className="text-blue-600 hover:underline">Build small projects</a></li>
                  <li>• <strong>Week 5-6:</strong> <a href="https://www.udemy.com" className="text-blue-600 hover:underline">Study advanced concepts</a></li>
                  <li>• <strong>Week 7-8:</strong> <a href="https://leetcode.com" className="text-blue-600 hover:underline">Practice interview questions</a></li>
                </ul>
                <div className="mt-4 text-xs text-gray-600">
                  <p>Estimated learning time: 2-3 months for basics</p>
                  <a 
                    href="https://roadmap.sh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-2 block"
                  >
                    View complete roadmap →
                  </a>
                </div>
              </div>
              
              {/* Additional Resources */}
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200">
                <h3 className="font-bold text-gray-900 mb-2">Additional Resources</h3>
                <div className="space-y-2">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700"
                  >
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">GitHub</span>
                    Find open-source projects
                  </a>
                  <a 
                    href="https://stackoverflow.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700"
                  >
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Q&A</span>
                    Get help from community
                  </a>
                  <a 
                    href="https://dev.to" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700"
                  >
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Blog</span>
                    Read developer articles
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Content updated:</span>
                  <span className="font-semibold text-gray-900">December 2025</span>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  <p>• Based on latest hiring trends</p>
                  <p>• Includes 2025 technology updates</p>
                  <p>• Real interview questions from top companies</p>
                  <p>• Beginner-friendly basics for each topic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailPage;