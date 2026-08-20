import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Droplet, Settings, Activity, 
  ShieldCheck, Handshake, Target, ArrowRight, CheckCircle2,
  Mail, MapPin, Award, Zap, BarChart3, Globe2,
  MessageSquare, Search, FlaskConical, Rocket, MonitorCheck, ChevronUp,
  Building2, Briefcase, LineChart, FileText, Users, ClipboardCheck, Shield, Leaf, AlertTriangle,
  Play, ImageIcon, PlayCircle, Filter, Maximize2, Video, ChevronRight, Check, UserCheck, Linkedin, Flame
} from 'lucide-react';

const gaeLogo = "/favicon.svg";
const footerLogo = gaeLogo;

const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(currentRef);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const galleryItems = [
    {
      id: 1,
      title: 'Qinghai Oilfield Wellbore Rejuvenation',
      category: 'well',
      type: 'image',
      src: '/1.jpeg', 
      description: 'Smart rodless plunger pump system installed at Zhundong and Qinghai Fields.'
    },
    {
      id: 2,
      title: 'Shengli 62km Pipeline Cleaning Operations',
      category: 'pipeline',
      type: 'image',
      src: '/2.jpeg',
      description: 'Mechanical and nano-chemical cleaning restoring flow capacity to over 90%.'
    },
    {
      id: 3,
      title: 'Closed COW Sludge Separation Rig',
      category: 'sludge',
      type: 'image',
      src: '/3.jpeg',
      description: 'Closed-loop Crude Oil Washing process recovering >95% crude oil with zero VOC emissions.'
    },
    {
      id: 4,
      title: 'Pipeline Asset Integrity & Reactivation',
      category: 'pipeline',
      type: 'image',
      src: '/4.jpeg',
      description: 'Trunk line cleaning and digital pressure testing for 10-year life extension.'
    },
    {
      id: 5,
      title: 'Nano-Chemical R&D Testing',
      category: 'operations',
      type: 'image',
      src: '/5.jpeg',
      description: 'Customized nano-chemical bio-surfactants formulated for heavy crude viscosity reduction.'
    },
    {
      id: 6,
      title: 'Daqing Tank Farm Sludge Recovery Demo',
      category: 'video',
      type: 'video',
      videoSrc: '/6.mp4',
      src: '/6.mp4',
      description: 'Processing 100,000 m³ tank sludge and converting waste into commercial crude feedstock.'
    },
    {
      id: 7,
      title: 'Sinopec-Northwest-Karamay Field Operations',
      category: 'video',
      type: 'video',
      videoSrc: '/7.mp4',
      src: '/7.mp4',
      description: 'Field execution displaying three-phase separation and environmental sludge remediation.'
    },
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab || (activeTab === 'video' && item.type === 'video'));

  const teamMembers = [
    {
      id: 1,
      name: "Mr. David Xu",
      position: "Founder & Group President",
      image: "/david-xu.jpg", // Replace with actual image path
      description: "Driving the global strategic vision, technological innovation, and 'Technology-Enabled, Green-Driven, Value-Creating' core concepts."
    },
    {
      id: 2,
      name: "Sajahan Bin Salman Baris",
      position: "Key Contact Person & Director",
      image: "/sajahan.jpg", // Replace with actual image path
      description: "Leading regional partnerships, consortium collaborations, and ensuring operational alignment across Southeast Asia."
    },
    {
      id: 3,
      name: "Placeholder Name",
      position: "Chief Technology Officer",
      image: "/cto.jpg", // Replace with actual image path
      description: "Overseeing the deployment of Best Available Technology (BAT) and engineering execution for wellbore and pipeline projects."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#F29631] selection:text-white">
      
      {/* Navigation Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' : 'bg-white/90 backdrop-blur-sm py-4 shadow-sm border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            
            {/* Logo */}
            <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={scrollToTop}>
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <img src={gaeLogo} alt="Glory Asia Energy" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-sm" />
              </div>
              <div className="flex items-center ml-1 space-x-2">
                <span className="text-lg sm:text-xl font-black tracking-wide uppercase leading-none text-[#183058]">GLORY ASIA</span>
                <span className="text-lg sm:text-xl font-black tracking-wide uppercase leading-none text-[#F29631]">ENERGY</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-6 items-center">
              <a href="#about" className="text-xs font-extrabold tracking-wider uppercase transition-colors text-[#183058] hover:text-[#F29631]">About Us</a>
              <a href="#expertise" className="text-xs font-extrabold tracking-wider uppercase transition-colors text-[#183058] hover:text-[#F29631]">Expertise</a>
              <a href="#cases" className="text-xs font-extrabold tracking-wider uppercase transition-colors text-[#183058] hover:text-[#F29631]">Track Record</a>
              <a href="#roadmap" className="text-xs font-extrabold tracking-wider uppercase transition-colors text-[#183058] hover:text-[#F29631]">Roadmap</a>
              <a href="#consortium" className="text-xs font-extrabold tracking-wider uppercase transition-colors text-[#183058] hover:text-[#F29631]">Consortium</a>
              <a href="#team" className="text-xs font-extrabold tracking-wider uppercase transition-colors text-[#183058] hover:text-[#F29631]">Team</a>
              <a href="#gallery" className="text-xs font-extrabold tracking-wider uppercase transition-colors text-[#183058] hover:text-[#F29631]">Gallery</a>
              <a href="#contact" className="bg-[#F29631] text-white px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase hover:bg-orange-500 transition-all shadow-md shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5">
                Partner With Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none transition-colors text-[#183058]" aria-label="Toggle Navigation Menu">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 absolute w-full shadow-2xl mt-2 pb-4 px-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-1 mt-2 text-center">
              <a href="#about" onClick={toggleMenu} className="block px-4 py-2.5 text-[#183058] text-sm font-extrabold tracking-wide uppercase hover:bg-slate-100 rounded-xl transition-colors">About Us</a>
              <a href="#expertise" onClick={toggleMenu} className="block px-4 py-2.5 text-[#183058] text-sm font-extrabold tracking-wide uppercase hover:bg-slate-100 rounded-xl transition-colors">Expertise</a>
              <a href="#cases" onClick={toggleMenu} className="block px-4 py-2.5 text-[#183058] text-sm font-extrabold tracking-wide uppercase hover:bg-slate-100 rounded-xl transition-colors">Track Record</a>
              <a href="#roadmap" onClick={toggleMenu} className="block px-4 py-2.5 text-[#183058] text-sm font-extrabold tracking-wide uppercase hover:bg-slate-100 rounded-xl transition-colors">Execution Roadmap</a>
              <a href="#consortium" onClick={toggleMenu} className="block px-4 py-2.5 text-[#183058] text-sm font-extrabold tracking-wide uppercase hover:bg-slate-100 rounded-xl transition-colors">Consortium</a>
              <a href="#team" onClick={toggleMenu} className="block px-4 py-2.5 text-[#183058] text-sm font-extrabold tracking-wide uppercase hover:bg-slate-100 rounded-xl transition-colors">Team</a>
              <a href="#gallery" onClick={toggleMenu} className="block px-4 py-2.5 text-[#183058] text-sm font-extrabold tracking-wide uppercase hover:bg-slate-100 rounded-xl transition-colors">Gallery</a>
              <a href="#contact" onClick={toggleMenu} className="block mt-2 bg-[#F29631] text-white px-4 py-3 rounded-full text-sm font-extrabold tracking-wide uppercase hover:bg-orange-500 transition-colors shadow-md">Partner With Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#183058]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5176A2]/30 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F29631]/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
        
        <div className="absolute inset-0 z-0">
          <img 
            src="/firstpage.png" 
            alt="Industrial Energy Transformation" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#183058] via-[#183058]/95 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 pb-16">
          <RevealOnScroll delay={100} className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#F29631] animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-[#F29631] absolute"></span>
              <span className="pl-2">Best Available Technology (BAT)</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Glory Asia <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F29631] to-yellow-400 drop-shadow-sm">Energy</span>
            </h1>
            
            <p className="text-base md:text-xl text-blue-100/90 mb-8 leading-relaxed font-light max-w-2xl">
              Empowering Global Energy Transformation through Mineral Resource Development & Advanced Oil & Gas Engineering Services.
            </p>

            <div className="bg-white/10 border border-white/15 backdrop-blur-md p-4 rounded-xl mb-10 text-xs sm:text-sm text-blue-100 italic">
              "Led by Founder & Group President, Mr. David Xu—driven by 'Technology-Enabled, Green-Driven, Value-Creating' core concepts."
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#expertise" className="flex items-center justify-center bg-[#F29631] text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-[0_0_20px_rgba(242,150,49,0.3)] hover:shadow-[0_0_30px_rgba(242,150,49,0.5)] hover:-translate-y-0.5">
                Explore Core Solutions <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#roadmap" className="flex items-center justify-center bg-transparent text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30 hover:border-white hover:bg-white/10 transition-all">
                Execution Roadmap
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Key Metrics Banner */}
      <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll delay={200}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="flex items-center space-x-4 px-2 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center text-[#F29631] flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                <BarChart3 size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#183058] leading-none mb-1">&gt;30M Tonnes</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Mineral Reserves (Fluorite, Pb-Zn, etc.)</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 px-2 pt-4 md:pt-0 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center text-[#5176A2] flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-inner">
                <Globe2 size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#183058] leading-none mb-1">&gt;20B RMB</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Corporate Valuation Target</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 px-2 pt-4 md:pt-0 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                <Award size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#183058] leading-none mb-1">36 Patents</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Technical Patents (40% Inventions)</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* About & Core Value Pillars */}
      <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#183058 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Collage */}
            <RevealOnScroll className="relative h-[480px] hidden lg:block">
              <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 hover:-translate-y-1 transition-transform duration-500 group">
                <img 
                  src="/1.jpeg" 
                  alt="Engineering Technology" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#183058]/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 hover:-translate-y-1 transition-transform duration-500 group">
                <img 
                  src="/5.jpeg" 
                  alt="Industrial Laboratory Testing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute top-[40%] right-2 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg z-30 flex items-center space-x-3">
                <div className="bg-emerald-100 p-2.5 rounded-lg">
                  <ShieldCheck className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="font-black text-[#183058] text-base leading-none mb-1">Zero Incident</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">HSE & Environmental First</p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Strategic Overview */}
            <div>
              <RevealOnScroll delay={100}>
                <div className="inline-block bg-orange-100 px-3 py-1.5 rounded-full mb-4">
                  <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Global Strategic Vision</h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-6 leading-tight tracking-tight">
                  Reactivating Mature Assets & Ensuring Energy Security
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-base">
                  <strong>Glory Asia Energy (GAE)</strong> is a specialized provider of <strong>Best Available Technology (BAT)</strong> solutions for global brownfield asset revitalization, integrating wellbore production, Pipeline Asset Rejuvenation, and Next-Gen Sludge Oil Recovery (SOR).
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
                  We address worldwide brownfield maturity and energy security challenges through innovative asset reactivation, maximizing ultimate recovery factors, and cutting carbon intensity across international basins.
                </p>
              </RevealOnScroll>
              
              {/* Value Pillars */}
              <div className="space-y-4">
                <RevealOnScroll delay={200} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="bg-orange-50 p-2.5 rounded-lg mr-4 mt-1 flex-shrink-0">
                    <Handshake className="text-[#F29631]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#183058] text-base mb-1">Risk-Aligned Partnerships</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Championing a "No Cure, No Pay" commercial model, aligning success directly with partner returns and assuming project risk.</p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={300} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-2.5 rounded-lg mr-4 mt-1 flex-shrink-0">
                    <Settings className="text-[#5176A2]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#183058] text-base mb-1">Technological Stewardship</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Prioritizing Best Available Technology (BAT) that reduces carbon footprint, eliminates toxic exposure, and ensures zero-incident performance.</p>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={400} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="bg-emerald-50 p-2.5 rounded-lg mr-4 mt-1 flex-shrink-0">
                    <Globe2 className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#183058] text-base mb-1">Strategic Local Integration</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Partnering with regional leaders to combine global technological excellence with deep regulatory compliance and local content mandates.</p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technical Domains */}
      <section id="expertise" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-orange-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Integrated Technical Domains</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4 tracking-tight">Best Available Technology (BAT) Solutions</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Targeted engineering methodologies to reactivate low-yield wells, restore network pipelines, and recover crude oil from hazardous sludge.
            </p>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Domain 1 */}
            <RevealOnScroll delay={100} className="group bg-slate-50 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/ce1.jpeg" 
                  alt="Brownfield Wellbore Rejuvenation" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183058] via-[#183058]/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#F29631] text-white rounded-xl flex items-center justify-center shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                  <Zap size={20} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col bg-white">
                <h4 className="text-lg font-black text-[#183058] mb-3 leading-tight">Brownfield Wellbore Rejuvenation</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                  Intelligent rodless pumps & nano-chemical stimulation engineered for idle and low-yield well reactivations.
                </p>
                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#F29631] mr-2.5" size={16} /> 40% Lower Mobilization Cost</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#F29631] mr-2.5" size={16} /> Rapid Flow Activation & Reactivation</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#F29631] mr-2.5" size={16} /> Intelligent Remote Digital Monitoring</div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Domain 2 */}
            <RevealOnScroll delay={200} className="group bg-slate-50 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/ce2.jpeg" 
                  alt="Pipeline Assets Rejuvenation" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183058] via-[#183058]/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#5176A2] text-white rounded-xl flex items-center justify-center shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                  <Activity size={20} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col bg-white">
                <h4 className="text-lg font-black text-[#183058] mb-3 leading-tight">Pipeline Assets Rejuvenation</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                  Integrated mechanical and nano-chemical cleaning technology restoring pipeline flow capacity and wall structural integrity.
                </p>
                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#5176A2] mr-2.5" size={16} /> Restores Capacity to &gt;90%</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#5176A2] mr-2.5" size={16} /> 10-Year Operational Life Extension</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#5176A2] mr-2.5" size={16} /> Full Pipeline Integrity Audit Included</div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Domain 3 */}
            <RevealOnScroll delay={300} className="group bg-slate-50 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/ce3.png" 
                  alt="Next-Gen Sludge Oil Recovery" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183058] via-[#183058]/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                  <Droplet size={20} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col bg-white">
                <h4 className="text-lg font-black text-[#183058] mb-3 leading-tight">Next-Gen Sludge Oil Recovery (SOR)</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                  Closed-loop Crude Oil Washing (COW) system turning hazardous sludge waste into commercial-grade crude feedstock.
                </p>
                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-emerald-500 mr-2.5" size={16} /> &gt;95% Oil Recovery Efficiency</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-emerald-500 mr-2.5" size={16} /> Zero VOC Emissions & Closed System</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-emerald-500 mr-2.5" size={16} /> High Commercial Crude Feedstock Value</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Technological Superiority Section */}
      <section className="py-20 bg-slate-100 relative border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-orange-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Technological Superiority</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4">GAE (BAT) vs. Conventional Methods</h3>
            <p className="text-slate-600 text-sm">Quantifiable advantages comparing GAE's Best Available Technology against traditional field practices.</p>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-lg bg-white">
              <thead>
                <tr className="bg-[#183058] text-white text-xs font-bold uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Focus Area</th>
                  <th className="p-4 sm:p-5">Glory Asia Energy (BAT)</th>
                  <th className="p-4 sm:p-5">Conventional Method</th>
                  <th className="p-4 sm:p-5">Key Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#183058]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F29631]"></span> Idle Wells
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[#183058]">Intelligent Rodless + Nano-Stimulation</td>
                  <td className="p-4 sm:p-5 text-slate-500">Workover Rigs / Inaction</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-700 bg-emerald-50">40% Lower Mobilization Cost & Rapid Flow</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#183058]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#5176A2]"></span> Pipelines
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[#183058]">Mechanical + Nano-Chemical Cleaning</td>
                  <td className="p-4 sm:p-5 text-slate-500">Chemical Flushing</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-700 bg-emerald-50">10-Year Life Extension & Integrity Audit</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#183058]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Storage Tanks
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[#183058]">Closed Mechanical Cleaning (COW)</td>
                  <td className="p-4 sm:p-5 text-slate-500">Manual Excavation / Venting</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-700 bg-emerald-50">95%+ Oil Recovery & Zero Emissions</td>
                </tr>
              </tbody>
            </table>
          </RevealOnScroll>
        </div>
      </section>

      {/* Track Record Section */}
      <section id="cases" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-blue-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#183058] font-bold tracking-widest uppercase text-[10px]">Proven Global Track Record</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4 tracking-tight">Global Case History Overview</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Delivering quantifiable performance and asset lifetime extensions across major international oilfields and tank farms.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Wellbore Case */}
            <RevealOnScroll delay={100} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                  <span className="bg-[#F29631] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">WELLBORE REJUVENATION</span>
                  <LineChart className="text-[#F29631]" size={20} />
                </div>
                <h4 className="font-black text-[#183058] text-lg mb-1">Qinghai & Liefia Fields</h4>
                <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider font-semibold">Qaidam Basin & Good-1 Block</p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Targeted deployments at Qinghai Oilfield (Qaidam Basin) and Liefia Oilfield (Good-1 Block).
                </p>
              </div>
              <div className="bg-orange-50 p-3.5 rounded-xl border border-orange-100">
                <strong className="text-[#F29631] text-xs uppercase tracking-wider block mb-1">Proven Result:</strong>
                <span className="text-slate-800 text-xs sm:text-sm font-semibold">Delivered rapid flow restoration with high crude oil recovery rates.</span>
              </div>
            </RevealOnScroll>

            {/* Pipeline Case */}
            <RevealOnScroll delay={200} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                  <span className="bg-[#5176A2] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">PIPELINE ASSETS</span>
                  <LineChart className="text-[#5176A2]" size={20} />
                </div>
                <h4 className="font-black text-[#183058] text-lg mb-1">Trunk Line & Shengli Network</h4>
                <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider font-semibold">62km Gathering Network</p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Executed comprehensive cleaning across Crude Trunk Line Projects and Shengli 62km gathering network.
                </p>
              </div>
              <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-100">
                <strong className="text-[#5176A2] text-xs uppercase tracking-wider block mb-1">Proven Result:</strong>
                <span className="text-slate-800 text-xs sm:text-sm font-semibold">Restored pipeline capacity to &gt;90% and extended asset operating life by 10 years.</span>
              </div>
            </RevealOnScroll>

            {/* Sludge Recovery Case */}
            <RevealOnScroll delay={300} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                  <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">SLUDGE RECOVERY (SOR)</span>
                  <LineChart className="text-emerald-600" size={20} />
                </div>
                <h4 className="font-black text-[#183058] text-lg mb-1">Daqing & Sinopec Tank Farms</h4>
                <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider font-semibold">100,000 m³ Tank Facilities</p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Processed Daqing Oilfield 100,000 m³ tanks and Sinopec-Northwest-Karamay Tank Farm sludge deposits.
                </p>
              </div>
              <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100">
                <strong className="text-emerald-700 text-xs uppercase tracking-wider block mb-1">Proven Result:</strong>
                <span className="text-slate-800 text-xs sm:text-sm font-semibold">Converted heavy waste liabilities into commercial-grade crude refinery feedstock with &gt;95% efficiency.</span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Collaboration & Project Execution Roadmap Section */}
      <section id="roadmap" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F29631]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5176A2]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Project Workflow</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Collaboration & Execution Roadmap</h3>
            <p className="text-slate-300 text-sm">A structured five-phase collaboration workflow ensuring rigorous technical and commercial alignment.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'MOU & NDA Signing', desc: 'Initial framework establishment, mutual confidentiality, and preliminary technical alignment.' },
              { num: '02', title: 'Ceremonies & Gallery', desc: 'Formal signing ceremonies, executive delegation visits, and partnership milestone galleries.' },
              { num: '03', title: 'Feasibility & Survey', desc: 'Comprehensive feasibility studies, site data acquisition, and sample laboratory analysis.' },
              { num: '04', title: 'Consortium Agreement', desc: 'Formalizing joint venture execution structures and operational frameworks for target assets.' },
              { num: '05', title: 'Phased Deployment', desc: 'Execution across Wellbore Reactivation, Pipeline Rejuvenation, and Sludge Oil Recovery.' }
            ].map((step, idx) => (
              <RevealOnScroll key={step.num} delay={idx * 80} className="bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl border border-slate-700 shadow-lg text-center relative flex flex-col justify-between hover:border-[#F29631] transition-colors">
                <div>
                  <span className="w-8 h-8 rounded-full bg-[#F29631] text-white font-black text-xs flex items-center justify-center mx-auto mb-3 shadow-md">{step.num}</span>
                  <h4 className="font-black text-white text-base mb-2">{step.title}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Consortium Roles Section */}
      <section id="consortium" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-orange-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Partnership Ecosystem</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4 tracking-tight">Consortium Roles & Collaboration Structure</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Matching global technological superiority with deep regional execution and regulatory alignment.
            </p>
          </RevealOnScroll>

          {/* Partner Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <RevealOnScroll delay={100} className="bg-gradient-to-br from-[#183058] to-blue-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group hover:scale-[1.01] transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
              <Building2 className="text-[#F29631] mb-6" size={40} />
              <h4 className="text-2xl font-black mb-1">Glory Asia Energy Sdn Bhd</h4>
              <p className="text-blue-200 text-xs uppercase tracking-wider font-bold mb-4">Technology & Project Funding</p>
              <p className="text-blue-100/90 text-sm leading-relaxed">
                Providing advanced Best Available Technology (BAT), specialized engineering equipment, full capital funding options, and comprehensive feasibility studies.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden group hover:scale-[1.01] transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-100/50 transition-colors"></div>
              <Users className="text-[#5176A2] mb-6" size={40} />
              <h4 className="text-2xl font-black text-[#183058] mb-1">Local Regional Partners</h4>
              <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-4">Local Content & Operations</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Serving as the strategic regional partner securing local projects, directing government licensing, regulatory compliance, operational execution, and logistics support.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Key Management Team Section */}
      <section id="team" className="py-20 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-orange-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Leadership</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4 tracking-tight">Key Management Team</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Guided by industry veterans committed to technological excellence and sustainable energy transformations.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <RevealOnScroll key={member.id} delay={index * 100} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  {/* Image Container with fallback styling */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-50 shadow-inner bg-slate-100 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover text-[0px]" // text-[0px] hides broken image icon if path is invalid
                      onError={(e) => {
                        e.target.onerror = null;
                        // Replace with a placeholder generic avatar on error
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  {/* Decorative circle */}
                  <div className="absolute inset-0 rounded-full border border-slate-200 scale-110 pointer-events-none group-hover:border-[#F29631] transition-colors duration-500"></div>
                </div>
                
                <h4 className="text-xl font-black text-[#183058] mb-1">{member.name}</h4>
                <p className="text-[#F29631] text-xs font-bold uppercase tracking-wider mb-4">{member.position}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="flex justify-center space-x-3 pt-4 border-t border-slate-100">
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#5176A2] hover:bg-blue-50 transition-colors">
                    <Linkedin size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#F29631] hover:bg-orange-50 transition-colors">
                    <Mail size={14} />
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Project Gallery */}
      <section id="gallery" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Field Demonstrations</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Project Media & Gallery</h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Explore visual documentation of our high-impact brownfield asset transformations and field equipment operations.
            </p>
          </RevealOnScroll>

          {/* Filter Tabs */}
          <RevealOnScroll delay={100} className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Media' },
              { id: 'well', label: 'Well Rejuvenation' },
              { id: 'pipeline', label: 'Pipeline Asset' },
              { id: 'sludge', label: 'Sludge Recovery' },
              { id: 'operations', label: 'Field Operations' },
              { id: 'video', label: 'Video Demos' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#F29631] text-white shadow-lg shadow-orange-500/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </RevealOnScroll>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <RevealOnScroll key={item.id} delay={index * 50}>
                <div 
                  onClick={() => setSelectedMedia(item)}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700 shadow-lg cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center space-x-1.5 border border-white/10">
                    {item.type === 'video' ? (
                      <>
                        <PlayCircle size={12} className="text-[#F29631]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">Video</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon size={12} className="text-[#5176A2]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">Photo</span>
                      </>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 text-white">
                    <Maximize2 size={14} />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#F29631] transition-colors leading-snug">{item.title}</h4>
                    <p className="text-slate-300 text-xs line-clamp-1 opacity-80">{item.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Modal / Lightbox */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-20 bg-slate-800/80 text-white p-2 rounded-full hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="p-2 sm:p-4">
                {selectedMedia.type === 'video' ? (
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
                    <video controls autoPlay className="w-full h-full object-contain">
                      <source src={selectedMedia.videoSrc} type="video/mp4" />
                      Your browser does not support HTML video.
                    </video>
                  </div>
                ) : (
                  <div className="max-h-[70vh] flex items-center justify-center rounded-2xl overflow-hidden bg-slate-950">
                    <img src={selectedMedia.src} alt={selectedMedia.title} className="max-h-[70vh] w-auto object-contain" />
                  </div>
                )}
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-[#F29631] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {selectedMedia.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{selectedMedia.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedMedia.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-[#12223c] pt-16 pb-12 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
            
            {/* Left Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#183058] to-[#0e1d37] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between min-h-[340px]">
              <div>
                <div className="mb-8">
                  <Flame size={38} className="text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                  Partnering for <br />
                  <span className="text-[#F29631]">Energy Excellence</span>
                </h3>
                <p className="text-blue-100/70 text-sm sm:text-base leading-relaxed max-w-md font-light">
                  Let's collaborate to transform your mature brownfield assets into sustainable, high-performing energy infrastructure.
                </p>
              </div>
            </div>

            {/* Right Card: Contact Info */}
            <div className="lg:col-span-7 bg-white text-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-extrabold text-[#F29631] uppercase tracking-wider mb-2">
                  CONTACT INFORMATION
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-[#183058] mb-6">Glory Asia Energy</h4>

                <div className="space-y-4">
                  {/* Regional Headquarters */}
                  <div className="flex items-start space-x-4 bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-slate-100">
                    <div className="p-3 bg-blue-50 text-[#183058] rounded-xl flex-shrink-0 mt-0.5">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                        REGIONAL HEADQUARTERS
                      </span>
                      <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                        B-2-9 Plaza Arkadia, No. 3 Jalan Intisari Perdana, <br className="hidden sm:inline" />
                        Desa Park City, 52200 Kuala Lumpur
                      </p>
                    </div>
                  </div>

                  {/* Email Support */}
                  <div className="flex items-start space-x-4 bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-slate-100">
                    <div className="p-3 bg-orange-50 text-[#F29631] rounded-xl flex-shrink-0 mt-0.5">
                      <Mail size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                        EMAIL SUPPORT
                      </span>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 gap-1">
                        <a href="mailto:contact@gloryasiaenergy.com" className="text-slate-800 text-xs sm:text-sm font-bold hover:text-[#F29631] transition-colors">
                          contact@gloryasiaenergy.com
                        </a>
                        <span className="hidden sm:inline text-slate-300">|</span>
                        <a href="mailto:ssb@gloryasiaenergy.com" className="text-slate-800 text-xs sm:text-sm font-bold hover:text-[#F29631] transition-colors">
                          ssb@gloryasiaenergy.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Key Contact Person */}
                  <div className="flex items-start space-x-4 bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-slate-100">
                    <div className="p-3 bg-blue-50 text-[#183058] rounded-xl flex-shrink-0 mt-0.5">
                      <UserCheck size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                        KEY CONTACT PERSON
                      </span>
                      <p className="text-slate-800 text-xs sm:text-sm font-bold">
                        Sajahan Bin Salman Baris
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-slate-700/60 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>© 2026 Glory Asia Energy Sdn Bhd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default App;
