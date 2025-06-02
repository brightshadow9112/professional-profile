
import React, { useState } from 'react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm Alex's AI assistant. I can answer questions about his resume, experience, and skills. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resumeContext = `
    Alex Thompson is a Senior Full-Stack Developer with 8+ years of experience. 
    
    Current Role: Senior Full-Stack Developer at TechCorp Solutions (2022-Present)
    - Led development of microservices architecture serving 1M+ users
    - Reduced application load time by 40% through performance optimizations
    - Mentored team of 5 junior developers
    - Implemented CI/CD pipelines reducing deployment time by 60%
    
    Previous Experience:
    - Full-Stack Developer at InnovateTech (2019-2022)
    - Software Developer at StartupXYZ (2016-2019)
    
    Education:
    - Master of Science in Computer Science from Stanford University (2014-2016)
    - Bachelor of Science in Computer Science from UC Berkeley (2010-2014)
    
    Top Skills:
    - Frontend: React (95%), TypeScript (90%), Next.js (85%), Vue.js (75%)
    - Backend: Node.js (90%), Python (85%), Express.js (90%), GraphQL (80%)
    - Database & Cloud: PostgreSQL (90%), MongoDB (85%), AWS (85%), Docker (80%)
    - Tools: Git (95%), Jest/Testing (85%), CI/CD (80%), Agile/Scrum (90%)
    
    Notable Projects:
    1. E-commerce Platform - Full-stack solution with React, Node.js, PostgreSQL
    2. Task Management App - Real-time collaboration with Socket.io
    3. Weather Analytics Dashboard - Data visualization with D3.js
    4. Open Source UI Library - React component library used by 500+ developers
    
    Certifications:
    - AWS Certified Solutions Architect - Professional (2023)
    - Google Cloud Professional Developer (2022)
    - Certified Kubernetes Administrator (2021)
    - MongoDB Certified Developer (2020)
    
    Contact:
    - Email: alex.thompson@email.com
    - LinkedIn: linkedin.com/in/alexthompson
    - GitHub: github.com/alexthompson
    - Website: alexthompson.dev
  `;

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Note: In a real implementation, you would use the actual Gemini API
      // For demo purposes, we'll simulate an AI response
      const response = await simulateAIResponse(inputMessage, resumeContext);
      
      const aiMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        text: "I'm sorry, I'm having trouble processing your request right now. Please try again later.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const simulateAIResponse = async (question: string, context: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const lowerQuestion = question.toLowerCase();

    // Simple keyword-based responses for demo
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work')) {
      return "Alex has 8+ years of experience as a full-stack developer. He's currently a Senior Full-Stack Developer at TechCorp Solutions since 2022, where he leads microservices development serving 1M+ users. Previously, he worked at InnovateTech (2019-2022) and StartupXYZ (2016-2019).";
    }
    
    if (lowerQuestion.includes('skills') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech')) {
      return "Alex's top skills include React (95%), TypeScript (90%), Node.js (90%), PostgreSQL (90%), and AWS (85%). He's also proficient in Python, Vue.js, MongoDB, Docker, and has strong experience with CI/CD, testing, and agile methodologies.";
    }
    
    if (lowerQuestion.includes('education') || lowerQuestion.includes('degree') || lowerQuestion.includes('university')) {
      return "Alex holds a Master of Science in Computer Science from Stanford University (2014-2016) and a Bachelor of Science in Computer Science from UC Berkeley (2010-2014). He graduated Magna Cum Laude from Berkeley and was a Teaching Assistant at Stanford.";
    }
    
    if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio')) {
      return "Alex has built several notable projects including an E-commerce Platform with React and Node.js, a collaborative Task Management App with real-time features, a Weather Analytics Dashboard with data visualization, and an Open Source UI Library used by 500+ developers.";
    }
    
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('email')) {
      return "You can contact Alex at alex.thompson@email.com, connect with him on LinkedIn at linkedin.com/in/alexthompson, check out his code on GitHub at github.com/alexthompson, or visit his website at alexthompson.dev.";
    }
    
    if (lowerQuestion.includes('certification') || lowerQuestion.includes('certified')) {
      return "Alex holds several professional certifications including AWS Certified Solutions Architect - Professional (2023), Google Cloud Professional Developer (2022), Certified Kubernetes Administrator (2021), and MongoDB Certified Developer (2020).";
    }

    // Default response
    return "Based on Alex's resume, he's a highly experienced full-stack developer with strong leadership skills and a proven track record of delivering scalable solutions. Is there a specific aspect of his background you'd like to know more about?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        {isOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <span className="text-xl">💬</span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-96 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">Ask about Alex's Resume</h3>
            <p className="text-sm text-blue-100">Powered by AI</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about experience, skills, projects..."
                className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
