import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronRight, ChevronDown, Check, ArrowRight, Quote } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    "About", "Admission & Aid", "Academics", "Life at MSIT", "After MSIT"
  ];

  return (
    <div className="font-sans text-slate-700 w-full min-h-screen">
      {/* Top Utility Bar */}
      <div className="hidden md:flex justify-end items-center bg-slate-900 text-slate-100 text-xs uppercase tracking-wider py-2 px-6">
        <div className="flex space-x-6 mr-8">
          <a href="#" className="hover:text-white transition-colors duration-300">Students</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Faculty & Staff</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Alumni</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Parents</a>
        </div>
        <div className="flex space-x-4 border-l border-slate-700 pl-6">
          <a href="#" className="hover:text-white transition-colors duration-300">Visit</a>
          <a href="#" className="hover:text-white font-semibold transition-colors duration-300">Apply</a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-slate-900 rounded-sm flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-light text-xl tracking-tight text-slate-900 leading-tight">Maharaja Surajmal</span>
              <span className="font-medium text-sm tracking-widest text-slate-600 uppercase">Institute of Technology</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1 group">
                {link}
                <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </a>
            ))}
            <button className="text-slate-700 hover:text-slate-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 h-screen overflow-y-auto lg:hidden">
          <div className="flex flex-col space-y-6 text-xl font-light">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center group">
                {link}
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </a>
            ))}
            <div className="pt-8 flex flex-col space-y-4">
               <a href="#" className="text-base text-slate-600 uppercase tracking-wide">Students</a>
               <a href="#" className="text-base text-slate-600 uppercase tracking-wide">Faculty & Staff</a>
               <a href="#" className="text-base text-slate-600 uppercase tracking-wide">Alumni</a>
               <a href="#" className="text-base text-slate-600 uppercase tracking-wide">Parents</a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center overflow-hidden">
        {/* Abstract Background Elements placeholder */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-500 via-transparent to-transparent hidden md:block"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 leading-none">
              More Than <br/><span className="font-semibold">Ready.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-200 mb-10 leading-relaxed max-w-2xl">
              Engineering excellence in the heart of Delhi. Shaping innovators, leaders, and problem solvers since 1999.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-white text-slate-900 px-8 py-4 rounded-sm font-medium hover:bg-slate-100 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105">
                Explore Programs
              </a>
              <a href="#" className="border-2 border-slate-500 text-white px-8 py-4 rounded-sm font-medium hover:border-white hover:bg-white/5 transition-all duration-300 text-center">
                Plan a Visit
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
           <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* News Bar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-2">News, Events, and Stories</h2>
              <div className="w-24 h-1 bg-slate-900 mt-6"></div>
            </div>
            <div className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wide text-slate-500">
               <a href="#" className="hover:text-slate-900 transition-colors">All News</a>
               <a href="#" className="hover:text-slate-900 transition-colors">All Events</a>
               <a href="#" className="hover:text-slate-900 transition-colors">Stories</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: "MARCH 15, 2026", title: "MSIT Robotics Team Wins National Tech Symposium" },
              { date: "MARCH 10, 2026", title: "New AI & Machine Lab Opens in West Wing" },
              { date: "MARCH 02, 2026", title: "Alumni Spotlight: Building Sustainable Smart Cities" }
            ].map((news, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="pl-6 border-l-4 border-slate-200 group-hover:border-slate-900 transition-all duration-300 h-full flex flex-col justify-center py-2">
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold">News</div>
                  <h3 className="text-xl font-medium text-slate-800 group-hover:text-slate-900 leading-snug mb-4">{news.title}</h3>
                  <div className="text-sm text-slate-400 mt-auto">{news.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-x-0 lg:divide-x divide-slate-200">
             <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-light text-slate-900 mb-3">3000<span className="font-medium">+</span></div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">Students</div>
             </div>
             <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-light text-slate-900 mb-3">95<span className="font-medium">%</span></div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">Placement Rate</div>
             </div>
             <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-light text-slate-900 mb-3">200<span className="font-medium">+</span></div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">Faculty</div>
             </div>
             <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-light text-slate-900 mb-3">50<span className="font-medium">+</span></div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">Years Legacy</div>
             </div>
          </div>
        </div>
      </section>

      {/* The MSIT Difference */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">The MSIT Difference</h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mb-10"></div>
          
          <h3 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6">More than ready. MSIT Ready.</h3>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Our comprehensive engineering education doesn't just teach you the foundational theories—it immerses you in real-world problem solving. Guided by experienced faculty and connected to a vast network of industry leaders, your journey here will shape your intellect, character, and professional ambitions.
          </p>
          
          <p className="text-xl font-medium text-slate-900">
            You'll graduate ready for anything—and ready for everything.
          </p>
        </div>

        {/* 4 Image Grid Placeholder */}
        <div className="max-w-7xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { label: "Campus Life", gradient: "from-slate-700 to-slate-800" },
               { label: "Innovation Labs", gradient: "from-slate-800 to-slate-900" },
               { label: "Global Alumni", gradient: "from-slate-600 to-slate-800" },
               { label: "Athletics", gradient: "from-slate-800 to-slate-950" }
             ].map((img, i) => (
               <div key={i} className="relative aspect-[4/5] overflow-hidden group rounded-sm shadow-md">
                 <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient} transition-transform duration-700 group-hover:scale-105`}></div>
                 <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
                   <div className="text-white font-medium text-lg tracking-wide">{img.label}</div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Value & Outcomes Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-light text-slate-900 mb-6">A Degree That Delivers</h2>
              <div className="w-24 h-1 bg-slate-900 mb-10"></div>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Investing in an MSIT education yields lifelong dividends. Our graduates are heavily recruited by top multinational tech firms, esteemed research institutions, and leading consultancies because they possess the technical acumen and adaptive mindset required to excel instantly.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="mt-1 bg-slate-900 rounded-full p-1 mr-4 shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-slate-700">Top tier engineering education in Delhi NCR</span>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-slate-900 rounded-full p-1 mr-4 shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-slate-700">95% placement success rate across disciplines</span>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-slate-900 rounded-full p-1 mr-4 shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-slate-700">Strong alumni network spanning the globe</span>
                </div>
              </div>
              
              <a href="#" className="inline-flex items-center text-slate-900 font-semibold group border-b border-transparent hover:border-slate-900 transition-colors pb-1">
                Learn about career outcomes 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-600"></div>
                {/* Decorative placeholder logo in center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-48 h-48 border-4 border-white rounded-sm flex items-center justify-center text-white text-8xl font-bold">
                    M
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distinguishing Factors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">The distinguishing factors of an MSIT education</h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Academic Rigor & Excellence",
                desc: "Our curriculum is continuously evolved with industry partners to ensure our students learn state-of-the-art technologies and engineering practices.",
                gradient: "from-slate-700 to-slate-800"
              },
              {
                title: "Mentorship & Guidance",
                desc: "With a 1:15 faculty-to-student ratio, MSIT provides personalized guidance from professors who are proven experts in their respective fields.",
                gradient: "from-slate-800 to-slate-900"
              },
              {
                title: "Career Preparation",
                desc: "Our robust placement cell, interview workshops, and internship programs guarantee you possess the soft skills to match your technical prowess.",
                gradient: "from-slate-600 to-slate-800"
              }
            ].map((card, i) => (
              <div key={i} className="group flex flex-col h-full bg-slate-50 border border-slate-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`aspect-[4/3] w-full bg-gradient-to-br ${card.gradient} relative overflow-hidden`}>
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-500"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{card.desc}</p>
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-slate-900 uppercase tracking-wider group/link">
                    Explore 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonial Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract background detail */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/30 transform skew-x-12 translate-x-32 hidden lg:block"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="shrink-0 relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 border-4 border-slate-700 shadow-2xl relative z-10"></div>
              {/* Decorative rings */}
              <div className="absolute inset-0 border border-slate-600 rounded-full scale-110"></div>
              <div className="absolute inset-0 border border-slate-700 rounded-full scale-125"></div>
            </div>
            
            <div className="flex-1">
              <Quote className="w-12 h-12 text-slate-700 mb-6" />
              <blockquote className="text-2xl md:text-3xl font-light text-slate-200 italic leading-relaxed mb-8 border-l-4 border-slate-600 pl-6">
                "MSIT has shaped me into the professional I am today. The faculty mentorship and immense industry exposure prepared me exceptionally well for my software engineering career."
              </blockquote>
              <div className="pl-6">
                <div className="text-xl font-medium text-white mb-1">Aisha Sharma</div>
                <div className="text-slate-400 font-light tracking-wide uppercase text-sm">Class of 2024 • Computer Science (CSE)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Innovation & Research", desc: "Collaborate on cutting-edge technical papers and modern AI research.", color: "bg-slate-800" },
              { title: "Industry Partnerships", desc: "Direct pipelines to Microsoft, Google, TCS, and regional tech startups.", color: "bg-slate-700" },
              { title: "Campus Excellence", desc: "State-of-the-art libraries, auditoriums, and dedicated coding labs.", color: "bg-slate-900" }
            ].map((highlight, i) => (
              <div key={i} className={`${highlight.color} text-white p-12 flex flex-col justify-center min-h-[320px] rounded-sm relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <h3 className="text-3xl font-light mb-4 relative z-10">{highlight.title}</h3>
                <p className="text-slate-300 font-light text-lg mb-8 relative z-10 max-w-sm">{highlight.desc}</p>
                <a href="#" className="inline-flex items-center text-white font-medium group/btn relative z-10">
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Let's stay in touch!</h2>
          <p className="text-xl text-slate-400 font-light mb-12">
            Join our mailing list to learn more about MSIT admission, upcoming events, and campus news.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-slate-900 px-10 py-4 rounded-sm font-medium hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Request Information
            </button>
            <button className="border-2 border-slate-600 text-white px-10 py-4 rounded-sm font-medium hover:border-white hover:bg-white/5 transition-all duration-300">
               Connect with Admission
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 pt-20 pb-10 border-t border-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center text-slate-900 font-bold text-lg">
                  M
                </div>
                <div className="flex flex-col">
                  <span className="font-light text-lg tracking-tight text-white leading-tight">Maharaja Surajmal</span>
                  <span className="font-medium text-[10px] tracking-widest text-slate-400 uppercase">Institute of Technology</span>
                </div>
              </div>
              <p className="text-sm font-light leading-relaxed mb-6">
                C-4, Janakpuri<br/>
                New Delhi - 110058, India<br/>
                011-65215941
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">About MSIT</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Our History</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership & Faculty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accreditations (NBA, NAAC)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers at MSIT</a></li>
              </ul>
            </div>
            
            <div>
               <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Academic Calendars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Library Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Directory</a></li>
              </ul>
            </div>
            
            <div>
               <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Connect</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Contact Admission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Give to MSIT</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alumni Network</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Media Inquiry</a></li>
              </ul>
            </div>
            
          </div>
          
          <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Maharaja Surajmal Institute of Technology. All rights reserved.
            </div>
            <div className="flex space-x-6">
               <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-slate-300 transition-colors">Terms of Use</a>
               <a href="#" className="hover:text-slate-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
