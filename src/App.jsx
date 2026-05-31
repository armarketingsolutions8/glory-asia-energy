import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Droplet, Settings, Activity, 
  ShieldCheck, Handshake, Target, ArrowRight, CheckCircle2,
  Mail, MapPin, Award, Zap, BarChart3, Globe2,
  MessageSquare, Search, FlaskConical, Rocket, MonitorCheck, ChevronUp,
  Building2, Briefcase, LineChart, FileText, Users, ClipboardCheck, Shield, Leaf, AlertTriangle
} from 'lucide-react';

// Import logo SVG
import gaeLogo from './assets/gae.logo.svg';
import footerLogo from './assets/gae-footer.svg';

// Scroll Reveal Animation Component
const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#F29631] selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={scrollToTop}>
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <img src={gaeLogo} alt="Glory Asia Energy" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-md" />
              </div>
              <div className="flex items-center ml-2 space-x-1.5 sm:space-x-2">
                <span className={`text-lg sm:text-xl font-black tracking-wide uppercase leading-none transition-colors duration-300 ${scrolled ? 'text-[#183058]' : 'text-white'}`}>GLORY ASIA</span>
                <span className="text-lg sm:text-xl font-black tracking-wide uppercase leading-none transition-colors duration-300 text-[#F29631]">ENERGY</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-5 items-center">
              <a href="#about" className={`text-xs font-bold tracking-wider uppercase transition-colors hover:text-[#F29631] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>About Us</a>
              <a href="#expertise" className={`text-xs font-bold tracking-wider uppercase transition-colors hover:text-[#F29631] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Expertise</a>
              <a href="#cases" className={`text-xs font-bold tracking-wider uppercase transition-colors hover:text-[#F29631] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Track Record</a>
              <a href="#consortium" className={`text-xs font-bold tracking-wider uppercase transition-colors hover:text-[#F29631] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Consortium</a>
              <a href="#workpack" className={`text-xs font-bold tracking-wider uppercase transition-colors hover:text-[#F29631] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Workpacks</a>
              <a href="#contact" className="bg-[#F29631] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-500/40 hover:-translate-y-0.5">
                Partner With Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className={`focus:outline-none transition-colors ${scrolled ? 'text-[#183058]' : 'text-white'}`}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl mt-3 pb-4 px-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-1 mt-2 text-center">
              <a href="#about" onClick={toggleMenu} className="block px-4 py-3 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">About Us</a>
              <a href="#expertise" onClick={toggleMenu} className="block px-4 py-3 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">Core Expertise</a>
              <a href="#cases" onClick={toggleMenu} className="block px-4 py-3 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">Track Record</a>
              <a href="#consortium" onClick={toggleMenu} className="block px-4 py-3 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">Consortium</a>
              <a href="#workpack" onClick={toggleMenu} className="block px-4 py-3 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">Workpacks</a>
              <a href="#contact" onClick={toggleMenu} className="block mt-2 bg-[#183058] text-white px-4 py-3 rounded-xl text-sm font-bold tracking-wide uppercase hover:bg-blue-900 transition-colors shadow-sm">Partner With Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#183058]">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5176A2]/30 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F29631]/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Industrial Energy" 
            className="w-full h-full object-cover opacity-20"
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
              Unlocking Value in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F29631] to-yellow-400 drop-shadow-sm">Mature Assets</span>
            </h1>
            
            <p className="text-base md:text-xl text-blue-100/80 mb-10 leading-relaxed font-light max-w-2xl">
              Transforming brownfield potential into high-performing, sustainable energy infrastructure for Indonesia's energy security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#expertise" className="flex items-center justify-center bg-[#F29631] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-[0_0_20px_rgba(242,150,49,0.3)] hover:shadow-[0_0_30px_rgba(242,150,49,0.5)] hover:-translate-y-0.5">
                Explore Solutions <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#consortium" className="flex items-center justify-center bg-transparent text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border border-white/30 hover:border-white hover:bg-white/10 transition-all">
                Our Partnerships
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll delay={300}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="flex items-center space-x-4 px-2 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center text-[#F29631] flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                <BarChart3 size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#183058] leading-none mb-1">&gt;30M</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Tonnes of Reserves (Fluorite, Pb-Zn, etc.)</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 px-2 pt-4 md:pt-0 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center text-[#5176A2] flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-inner">
                <Globe2 size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#183058] leading-none mb-1">&gt;20B</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">RMB Corporate Valuation</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 px-2 pt-4 md:pt-0 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                <Award size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#183058] leading-none mb-1">36</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Technical Patents (40% Inventions)</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#183058 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Image Collage */}
            <RevealOnScroll className="relative h-[450px] hidden lg:block">
              <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 hover:-translate-y-1 transition-transform duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Engineering Technology" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#183058]/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 hover:-translate-y-1 transition-transform duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Industrial Machinery" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute top-[40%] right-2 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg z-30 flex items-center space-x-3 animate-bounce-slow">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <ShieldCheck className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="font-black text-[#183058] text-base leading-none mb-1">Safety First</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Zero Incidents</p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right: Content */}
            <div>
              <RevealOnScroll delay={100}>
                <div className="inline-block bg-orange-100 px-3 py-1.5 rounded-full mb-4">
                  <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Strategic Vision</h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-6 leading-tight tracking-tight">
                  Global Leader in <br/> Energy & Resources
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-base">
                  Glory Asia Energy (GAE) is a <strong>Malaysia-Listed Multinational Corporation</strong> consistently innovating at the forefront of the global energy transition. Our strategic maneuvers are guided by our core corporate philosophy: <em>"Technology-Empowered, Green-Driven, Value-Creating."</em>
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-base">
                  Through our <strong>'Dual-Wheel' Strategy</strong>, we synergize Mineral Resources Development and Oil & Gas (O&G) Engineering Services to create robust market stability and excellence.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-base">
                  We remain steadfast in our commitment to driving Indonesia's ambitious national energy targets of achieving <strong>1 million bpd</strong> and <strong>12 BSCFD</strong> by 2030.
                </p>
              </RevealOnScroll>
              
              <div className="space-y-4">
                <RevealOnScroll delay={200} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <Handshake className="text-[#F29631]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#183058] text-base mb-1">Risk-Aligned Partnerships</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">A "No Cure, No Pay" commercial model, bearing project risks to ensure operator confidence.</p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={300} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-2 rounded-lg mr-4 mt-1">
                    <Settings className="text-[#5176A2]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#183058] text-base mb-1">Technology Stewardship</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Deploying Best Available Technology (BAT) that reduces carbon footprint and limits human toxic exposure.</p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section id="expertise" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-orange-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Integrated Value Chain</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4 tracking-tight">Our Core Expertise</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Leveraging nano-chemical and mechanical innovations to outperform conventional methods across three high-impact domains.
            </p>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Expertise 1 */}
            <RevealOnScroll delay={100} className="group bg-slate-50 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1621644788326-70966a347318?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Well Rejuvenation" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183058] via-[#183058]/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#F29631] text-white rounded-xl flex items-center justify-center shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                  <Zap size={20} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col bg-white">
                <h4 className="text-lg font-black text-[#183058] mb-3 leading-tight">Brownfield Well Rejuvenation</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                  Deploying smart rodless plunger pumps and nano-chemical stimulation to surpass traditional workover limitations.
                </p>
                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#F29631] mr-2.5" size={16} /> 40% Lower Mobilization Costs</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#F29631] mr-2.5" size={16} /> Rapid Flow Activation in Days</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#F29631] mr-2.5" size={16} /> Cloud-Based Digital Control</div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Expertise 2 */}
            <RevealOnScroll delay={200} className="group bg-slate-50 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1505672678657-cc70370d5e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Pipeline Rejuvenation" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183058] via-[#183058]/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#5176A2] text-white rounded-xl flex items-center justify-center shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                  <Activity size={20} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col bg-white">
                <h4 className="text-lg font-black text-[#183058] mb-3 leading-tight">Pipeline Asset Rejuvenation</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                  Integrated 50°C nano-chemical and mechanical cleaning technology that dissolves wax to restore pipeline throughput.
                </p>
                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#5176A2] mr-2.5" size={16} /> Restores &gt;90% Capacity</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#5176A2] mr-2.5" size={16} /> 10-Year Life Extension</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-[#5176A2] mr-2.5" size={16} /> Eliminates Trucking Logistics</div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Expertise 3 */}
            <RevealOnScroll delay={300} className="group bg-slate-50 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Sludge Oil Recovery" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183058] via-[#183058]/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                  <Droplet size={20} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col bg-white">
                <h4 className="text-lg font-black text-[#183058] mb-3 leading-tight">Next-Generation Sludge Oil Recovery (SOR)</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                  Utilizing closed-loop Crude Oil Washing (COW) and automated three-phase separation to turn hazardous waste into crude oil.
                </p>
                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-emerald-500 mr-2.5" size={16} /> &gt;95% Reusable Crude Oil Recovery</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-emerald-500 mr-2.5" size={16} /> 0% Personnel Inside Tanks</div>
                  <div className="flex items-center font-bold text-slate-700"><CheckCircle2 className="text-emerald-500 mr-2.5" size={16} /> 70% Disposal Weight Reduction</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Case History Section */}
      <section id="cases" className="py-20 bg-slate-100 relative border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-blue-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#183058] font-bold tracking-widest uppercase text-[10px]">Proven Track Record</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4 tracking-tight">Performance & Case History</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Demonstrating operational excellence and high recovery rates across various mature energy infrastructure environments.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            <RevealOnScroll delay={100} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                <span className="bg-[#F29631] text-white text-xs font-bold px-3 py-1 rounded-full">POD 1</span>
                <LineChart className="text-slate-400" size={20} />
              </div>
              <h4 className="font-black text-[#183058] text-lg mb-2">Brownfield Well Rejuvenation</h4>
              <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider font-semibold">Idle Well Reactivation</p>
              <div className="space-y-3 text-sm">
                <p><strong className="text-slate-700">Target Fields:</strong> Zhundong, Jilin, and Changqing oil fields.</p>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                  <strong className="text-[#F29631] block mb-1">Key Success Outcomes:</strong>
                  <span className="text-slate-700 font-medium">&gt;30% production increase per well, effective lifespan &gt;6 months.</span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                <span className="bg-[#5176A2] text-white text-xs font-bold px-3 py-1 rounded-full">POD 2</span>
                <LineChart className="text-slate-400" size={20} />
              </div>
              <h4 className="font-black text-[#183058] text-lg mb-2">Pipeline Asset Rejuvenation</h4>
              <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider font-semibold">Flow Restoration</p>
              <div className="space-y-3 text-sm">
                <p><strong className="text-slate-700">Target Entities:</strong> Sinopec and PetroChina infrastructure.</p>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <strong className="text-[#5176A2] block mb-1">Key Success Outcomes:</strong>
                  <span className="text-slate-700 font-medium">&gt;99% viscosity reduction, restoring pipeline flow & mitigating blockages.</span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">POD 3</span>
                <LineChart className="text-slate-400" size={20} />
              </div>
              <h4 className="font-black text-[#183058] text-lg mb-2">Sludge Oil Recovery (SOR)</h4>
              <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider font-semibold">Waste-to-Value</p>
              <div className="space-y-3 text-sm">
                <p><strong className="text-slate-700">Target Facilities:</strong> Sinopec Shengli Refinery.</p>
                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                  <strong className="text-emerald-600 block mb-1">Key Success Outcomes:</strong>
                  <span className="text-slate-700 font-medium">&gt;95% crude oil recovery, 80% sludge residue reduction.</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Strategic Consortium Section */}
      <section id="consortium" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-orange-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Partnership Ecosystem</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4 tracking-tight">Corporate Strategic Alignment</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Our resilient consortium model guarantees technical excellence backed by deep local integration and regulatory compliance.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <RevealOnScroll delay={100} className="bg-gradient-to-br from-[#183058] to-blue-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Building2 className="text-[#F29631] mb-6" size={40} />
              <h4 className="text-2xl font-black mb-2">Glory Asia Energy</h4>
              <p className="text-blue-200 text-sm uppercase tracking-wider font-bold mb-4">Technology & Funding Lead</p>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Acting as the primary Technology Provider deploying Best Available Technology (BAT), and serving as Project Lead for capital investment and infrastructure funding.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Briefcase className="text-[#5176A2] mb-6" size={40} />
              <h4 className="text-2xl font-black text-[#183058] mb-2">PT Radiant Utama</h4>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-4">Local Content & Representation</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Acting as the strategic local partner, leveraging its extensive presence to manage regulatory requirements, licensing, permitting, and local content (TKDN) compliance.
              </p>
            </RevealOnScroll>
          </div>

          {/* Roadmap to Establishment */}
          <RevealOnScroll delay={300}>
            <div className="mt-12 bg-slate-50 rounded-3xl p-8 border border-slate-200 max-w-4xl mx-auto">
              <h4 className="text-xl font-black text-[#183058] mb-8 text-center tracking-tight">Roadmap to Establishment</h4>
              <div className="grid md:grid-cols-3 gap-6 relative">
                {/* Connection Line */}
                <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-blue-100 z-0"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white border-4 border-[#F29631] rounded-full flex items-center justify-center mx-auto mb-4 font-black text-[#183058] shadow-sm">Mo 1</div>
                  <h5 className="font-bold text-[#183058] text-sm mb-2 uppercase">Phase 1: Strategic Alignment</h5>
                  <p className="text-xs text-slate-500 leading-relaxed">Finalization of Joint Venture structure and signing of the Consortium Partnership Agreement.</p>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white border-4 border-[#5176A2] rounded-full flex items-center justify-center mx-auto mb-4 font-black text-[#183058] shadow-sm">Mo 2</div>
                  <h5 className="font-bold text-[#183058] text-sm mb-2 uppercase">Phase 2: Legal & Licensing</h5>
                  <p className="text-xs text-slate-500 leading-relaxed">Legal registration of PT Glory Asia Energy (PT PMA), including licensing for O&G technical services.</p>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-[#183058] shadow-sm">Mo 3</div>
                  <h5 className="font-bold text-[#183058] text-sm mb-2 uppercase">Phase 3: Operational Launch</h5>
                  <p className="text-xs text-slate-500 leading-relaxed">Operational team integration and equipment mobilization for pilot project commencement.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Project Workpack Summary Section */}
      <section id="workpack" className="py-20 bg-slate-100 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-blue-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#183058] font-bold tracking-widest uppercase text-[10px]">Operational Structure</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4 tracking-tight">Project Workpack Summary</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              A comprehensive framework ensuring seamless, unified project execution from initial preparation to long-term maintenance.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RevealOnScroll delay={100} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 text-[#F29631]">
                <FileText size={24} />
              </div>
              <h4 className="font-black text-[#183058] text-base mb-1">Executive Summary</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Project Overview</p>
              <p className="text-sm text-slate-600 leading-relaxed">High-level roadmap, objectives, and the "technical services + operational hosting" delivery model.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-[#5176A2]">
                <Users size={24} />
              </div>
              <h4 className="font-black text-[#183058] text-base mb-1">Organizational Framework</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Management Structure</p>
              <p className="text-sm text-slate-600 leading-relaxed">Command center roles, specialized operational departments, and support teams ensuring unified execution.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={300} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600">
                <ClipboardCheck size={24} />
              </div>
              <h4 className="font-black text-[#183058] text-base mb-1">Operational Standards</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Technical & Quality Baseline</p>
              <p className="text-sm text-slate-600 leading-relaxed">ISO 9001 standard quality protocols, technical specifications, and resource coordination mechanisms.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={400} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 text-red-500">
                <Shield size={24} />
              </div>
              <h4 className="font-black text-[#183058] text-base mb-1">Health & Safety</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">HSE Systems</p>
              <p className="text-sm text-slate-600 leading-relaxed">Mandatory compliance requirements, including Permit to Work (PTW), Job Safety Analysis (JSA), and strict protection protocols.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={500} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 text-emerald-600">
                <Leaf size={24} />
              </div>
              <h4 className="font-black text-[#183058] text-base mb-1">Environmental Management</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Compliance & Protection</p>
              <p className="text-sm text-slate-600 leading-relaxed">Strategies for eco-friendly chemicals, compliant hazardous waste disposal, and site restoration.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={600} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                <AlertTriangle size={24} />
              </div>
              <h4 className="font-black text-[#183058] text-base mb-1">Emergency Response</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Risk Mitigation</p>
              <p className="text-sm text-slate-600 leading-relaxed">Contingency plans for operational hazards and on-site emergency resources with local support links.</p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Technology / Comparison Section (BAT) */}
      <section id="technology" className="py-20 bg-[#183058] text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#F29631] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-white/10 px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/10">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Technological Edge</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">GAE (BAT) vs. Conventional</h3>
            <p className="text-[#5176A2] text-base leading-relaxed">
              A paradigm shift in operational efficiency, safety, and environmental compliance.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="overflow-x-auto rounded-2xl border border-blue-800/50 bg-[#183058]/60 backdrop-blur-xl shadow-xl">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-blue-900/60 border-b border-blue-800/50">
                  <th className="p-6 font-black text-white w-1/4 uppercase tracking-widest text-xs">Focus Area</th>
                  <th className="p-6 font-black text-blue-300 w-1/4 uppercase tracking-widest text-xs">Conventional Methods</th>
                  <th className="p-6 font-black text-[#F29631] w-1/4 uppercase tracking-widest text-xs bg-blue-900/80">Glory Asia Energy (BAT)</th>
                  <th className="p-6 font-black text-emerald-400 w-1/4 uppercase tracking-widest text-xs">Key Advantages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-800/30">
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-6 font-bold text-base flex items-center"><Target className="text-[#5176A2] mr-3 group-hover:text-white transition-colors" size={20}/> Idle Wells</td>
                  <td className="p-6 text-[#5176A2] font-medium text-sm">Workover Rig / Inaction</td>
                  <td className="p-6 font-bold text-white bg-blue-900/30 text-sm">Smart Rodless + Nano-Stimulation</td>
                  <td className="p-6">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30 shadow-inner text-xs">
                      40% Lower Mob Costs, Rapid Flow
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-6 font-bold text-base flex items-center"><Activity className="text-[#5176A2] mr-3 group-hover:text-white transition-colors" size={20}/> Pipelines</td>
                  <td className="p-6 text-[#5176A2] font-medium text-sm">Trucking / Chemical Flushing</td>
                  <td className="p-6 font-bold text-white bg-blue-900/30 text-sm">Mechanical + Nano-Chemical Cleaning</td>
                  <td className="p-6">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30 shadow-inner text-xs">
                      10-Yr Life Extension, Integrity Audit
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-6 font-bold text-base flex items-center"><Droplet className="text-[#5176A2] mr-3 group-hover:text-white transition-colors" size={20}/> Storage Tanks</td>
                  <td className="p-6 text-[#5176A2] font-medium text-sm">Manual Excavation / Venting</td>
                  <td className="p-6 font-bold text-white bg-blue-900/30 text-sm">Closed-Loop COW + 3-Phase Separation</td>
                  <td className="p-6">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30 shadow-inner text-xs">
                      95%+ Oil Recovery, Zero Emissions
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </RevealOnScroll>
        </div>
      </section>

      {/* Roadmap/Lifecycle Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-orange-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Project Lifecycle</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4 tracking-tight">Deployment Roadmap</h3>
            <p className="text-slate-600 text-base leading-relaxed">A rigorous phased execution approach ensuring success from initial contact to full-scale field deployment.</p>
          </RevealOnScroll>

          <div className="relative">
            {/* Timeline Connection Line */}
            <div className="hidden lg:block absolute top-10 left-[10%] w-[80%] h-1 bg-gradient-to-r from-blue-200 via-[#F29631]/60 to-blue-200 -translate-y-1/2 z-0 rounded-full"></div>
            
            <div className="grid lg:grid-cols-5 gap-6 relative z-10">
              {/* Phase 1 */}
              <RevealOnScroll delay={100} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md text-center relative group hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:border-orange-200">
                <div className="w-14 h-14 bg-[#183058] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-[#F29631] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MessageSquare size={24} />
                </div>
                <h5 className="font-black text-[#183058] mb-2 text-base tracking-tight">Engagement</h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Technical presentations, project goal alignment, and business formalization.</p>
              </RevealOnScroll>

              {/* Phase 2 */}
              <RevealOnScroll delay={200} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md text-center relative group hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:border-orange-200 mt-0 lg:mt-6">
                <div className="w-14 h-14 bg-[#183058] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-[#F29631] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Search size={24} />
                </div>
                <h5 className="font-black text-[#183058] mb-2 text-base tracking-tight">Discovery</h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">In-depth data collection, physical site surveys, and sampling.</p>
              </RevealOnScroll>

              {/* Phase 3 */}
              <RevealOnScroll delay={300} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md text-center relative group hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:border-orange-200">
                <div className="w-14 h-14 bg-[#183058] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-[#F29631] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <FlaskConical size={24} />
                </div>
                <h5 className="font-black text-[#183058] mb-2 text-base tracking-tight">Validation</h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Bench-scale lab simulations to calibrate formulations & parameters.</p>
              </RevealOnScroll>

              {/* Phase 4 */}
              <RevealOnScroll delay={400} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md text-center relative group hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:border-orange-200 mt-0 lg:mt-6">
                <div className="w-14 h-14 bg-[#183058] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-[#F29631] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Rocket size={24} />
                </div>
                <h5 className="font-black text-[#183058] mb-2 text-base tracking-tight">Pilot</h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Controlled field deployment on a single asset to verify metrics.</p>
              </RevealOnScroll>

              {/* Phase 5 */}
              <RevealOnScroll delay={500} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md text-center relative group hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:border-orange-200">
                <div className="w-14 h-14 bg-[#183058] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-[#F29631] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MonitorCheck size={24} />
                </div>
                <h5 className="font-black text-[#183058] mb-2 text-base tracking-tight">Execution</h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Full-scale actual field deployment and digital monitoring integration.</p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#183058] text-white pt-16 pb-8 border-t-4 border-[#F29631] relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F29631] rounded-full mix-blend-screen filter blur-[100px] opacity-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 mb-12 items-center">
            
            {/* Branding & CTA */}
            <RevealOnScroll>
              {/* Box putih untuk pastikan teks gelap pada logo nampak jelas */}
              <div className="mb-8 bg-white inline-flex p-5 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img src={footerLogo} alt="Glory Asia Energy" className="w-48 h-auto sm:w-56 object-contain" />
              </div>
              
              <h4 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                Partnering for <br/><span className="text-[#F29631]">Energy Excellence</span>
              </h4>
              <p className="text-blue-100/70 max-w-sm text-base leading-relaxed font-light">
                Let's collaborate to transform your mature brownfield assets into sustainable, high-performing energy infrastructure.
              </p>
            </RevealOnScroll>

            {/* Contact Card */}
            <RevealOnScroll delay={200}>
              <div className="bg-white text-slate-800 p-8 lg:p-10 rounded-3xl shadow-xl relative transform transition-transform hover:-translate-y-1 duration-500">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center z-0 hidden lg:flex shadow-md border border-white">
                  <Mail className="text-[#F29631]" size={28} />
                </div>
                
                <div className="relative z-10">
                  <h5 className="text-xs font-black text-[#F29631] mb-6 uppercase tracking-widest border-b-2 border-slate-100 pb-3">Contact Information</h5>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="font-black text-[#183058] text-2xl mb-1">Glory Asia Energy</p>
                      <p className="text-[#5176A2] font-bold text-xs bg-blue-50 inline-block px-3 py-1 rounded-full uppercase tracking-wider mb-2">Regional Headquarters</p>
                    </div>
                    
                    <div className="flex items-start text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-inner">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mr-4 flex-shrink-0 mt-1">
                        <MapPin className="text-[#183058]" size={20} />
                      </div>
                      <span className="font-medium text-sm leading-relaxed">
                        B-2-9 Plaza Arkadia, No. 3 Jalan Intisari Perdana, <br />
                        Desa Park City, 52200 Kuala Lumpur
                      </span>
                    </div>
                    
                    <div className="flex items-center text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-[#F29631]/30 hover:bg-orange-50/50 transition-all cursor-pointer group shadow-inner">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mr-4 flex-shrink-0 group-hover:bg-[#F29631] group-hover:scale-105 transition-all duration-300">
                        <Mail className="text-[#183058] group-hover:text-white" size={20} />
                      </div>
                      <a href="mailto:contact@gloryasiaenergy.com" className="font-bold text-sm text-[#183058] group-hover:text-[#F29631] transition-colors">
                        contact@gloryasiaenergy.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200/60 font-medium">
            <p>&copy; {new Date().getFullYear()} Glory Asia Energy (Indonesia). All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-[#F29631] text-white p-3 rounded-full shadow-lg hover:bg-orange-500 hover:scale-110 transition-all duration-300 z-50 focus:outline-none ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ChevronUp size={20} strokeWidth={3} />
      </button>

    </div>
  );
};

export default App;