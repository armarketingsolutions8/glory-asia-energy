import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Droplet, Settings, Activity, 
  ShieldCheck, Handshake, Target, ArrowRight, CheckCircle2,
  Mail, MapPin, Award, Zap, BarChart3, Globe2,
  MessageSquare, Search, FlaskConical, Rocket, MonitorCheck, ChevronUp,
  Building2, Briefcase, LineChart, FileText, Users, ClipboardCheck, Shield, Leaf, AlertTriangle,
  Play, ImageIcon, PlayCircle, Filter, Maximize2, Video, ChevronRight, Check, Linkedin
} from 'lucide-react';

const gaeLogo = "/favicon.svg"
const footerLogo = gaeLogo;

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

  /* Menggunakan fail /1.jpeg dan /5.jpeg dari folder public */
  const galleryItems = [
    {
      id: 1,
      title: 'Brownfield Well Rejuvenation Site',
      category: 'well',
      type: 'image',
      src: '/1.jpeg', 
      description: 'Smart rodless plunger pump system installed at Zhundong Field.'
    },
    {
      id: 2,
      title: 'High-Pressure Pipeline Thermal Cleaning',
      category: 'pipeline',
      type: 'image',
      src: '/2.jpeg',
      description: '50°C nano-chemical injection units active along PetroChina pipeline segment.'
    },
    {
      id: 3,
      title: 'Automated Sludge Separation Rig',
      category: 'sludge',
      type: 'image',
      src: '/3.jpeg',
      description: 'Closed-loop COW process recovering >95% crude oil with zero entry risk.'
    },
    {
      id: 4,
      title: 'Pipeline Operation',
      category: 'pipiline',
      type: 'image',
      src: '/4.jpeg',
      description: 'Live field test demonstrating rapid flow activation and viscosity reduction.'
    },
    {
      id: 5,
      title: 'Nano-Chemical Laboratory Testing',
      category: 'operations',
      type: 'image',
      src: '/5.jpeg',
      description: 'R&D testing for customized bio-surfactants and wax dissolution formulas.'
    },
    {
      id: 6,
      title: 'Mining',
      category: 'video',
      type: 'video',
      videoSrc: '/6.mp4',
      src: '/6.mp4',
      description: 'Crude washing unit reducing hazardous waste sludge weight by over 70%.'
    },
    {
      id: 7,
      title: 'Mining',
      category: 'video',
      type: 'video',
      videoSrc: '/7.mp4',
      src: '/7.mp4',
      description: 'Crude washing unit reducing hazardous waste sludge weight by over 70%.'
    },
  ];

  /* 
    Data untuk Key Management Team. 
    Nota: Sila tukar 'image' path kepada gambar sebenar (contoh: '/david-xu.jpg') 
  */
  const teamMembers = [
    {
      id: 1,
      name: 'David Xu',
      position: 'Founder & Group President',
      image: 'https://placehold.co/400x500/183058/F29631?text=David+Xu',
      description: 'Leading the global strategic vision and operational excellence.'
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      position: 'Chief Technology Officer',
      image: 'https://placehold.co/400x500/183058/F29631?text=Jane+Smith',
      description: 'Spearheading nano-chemical research and technological innovation.'
    },
    {
      id: 3,
      name: 'Ahmad Rizal',
      position: 'Operations Director',
      image: 'https://placehold.co/400x500/183058/F29631?text=Ahmad+Rizal',
      description: 'Overseeing field deployment and site safety management.'
    },
    {
      id: 4,
      name: 'Sarah Chen',
      position: 'VP of Global Partnerships',
      image: 'https://placehold.co/400x500/183058/F29631?text=Sarah+Chen',
      description: 'Fostering international relations and consortium building.'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab || (activeTab === 'video' && item.type === 'video'));

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
              <a href="#team" className={`text-xs font-bold tracking-wider uppercase transition-colors hover:text-[#F29631] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Team</a>
              <a href="#gallery" className={`text-xs font-bold tracking-wider uppercase transition-colors hover:text-[#F29631] ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Gallery</a>
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
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl mt-2 pb-4 px-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-1 mt-2 text-center">
              <a href="#about" onClick={toggleMenu} className="block px-4 py-2.5 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">About Us</a>
              <a href="#expertise" onClick={toggleMenu} className="block px-4 py-2.5 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">Core Expertise</a>
              <a href="#cases" onClick={toggleMenu} className="block px-4 py-2.5 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">Track Record</a>
              <a href="#consortium" onClick={toggleMenu} className="block px-4 py-2.5 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">Consortium</a>
              <a href="#team" onClick={toggleMenu} className="block px-4 py-2.5 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">Team</a>
              <a href="#gallery" onClick={toggleMenu} className="block px-4 py-2.5 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">Gallery</a>
              <a href="#workpack" onClick={toggleMenu} className="block px-4 py-2.5 text-slate-600 text-sm font-bold tracking-wide uppercase hover:bg-blue-50 hover:text-[#183058] rounded-xl transition-colors">Workpacks</a>
              <a href="#contact" onClick={toggleMenu} className="block mt-2 bg-[#183058] text-white px-4 py-3 rounded-xl text-sm font-bold tracking-wide uppercase hover:bg-blue-900 transition-colors shadow-sm">Partner With Us</a>
            </div>
          </div>
        )}
      </nav>

      {}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#183058]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5176A2]/30 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F29631]/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
        
        <div className="absolute inset-0 z-0">
          <img 
            src="/firstpage.png" 
            alt="Industrial Energy" 
            className="w-full h-full object-cover opacity-40"
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
            
            <p className="text-base md:text-xl text-blue-100/80 mb-10 leading-relaxed font-light max-w-2xl">
              Empowering Global Energy Transformation through Mineral Resource Development & Advanced Oil &
Gas Engineering Services. Led by Founder & Group President, Mr. David Xu-driven by "Technology-
Enabled, Green-Driven, Value-Creating" core concepts.
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

      {}
      <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll delay={200}>
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

      {}
      <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#183058 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image Collage */}
            <RevealOnScroll className="relative h-[450px] hidden lg:block">
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
                  alt="Industrial Machinery" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute top-[40%] right-2 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg z-30 flex items-center space-x-3 animate-bounce-slow">
                <div className="bg-emerald-100 p-2.5 rounded-lg">
                  <ShieldCheck className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="font-black text-[#183058] text-base leading-none mb-1">Safety First</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Zero Incidents</p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Text Content */}
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
                <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
                  We remain steadfast in our commitment to driving Indonesia's ambitious national energy targets of achieving <strong>1 million bpd</strong> and <strong>12 BSCFD</strong> by 2030.
                </p>
              </RevealOnScroll>
              
              <div className="space-y-4">
                <RevealOnScroll delay={200} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="bg-orange-50 p-2.5 rounded-lg mr-4 mt-1">
                    <Handshake className="text-[#F29631]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#183058] text-base mb-1">Risk-Aligned Partnerships</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">A "No Cure, No Pay" commercial model, bearing project risks to ensure operator confidence.</p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={300} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-2.5 rounded-lg mr-4 mt-1">
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

      {}
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
            <RevealOnScroll delay={100} className="group bg-slate-50 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/ce1.jpeg" 
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

            <RevealOnScroll delay={200} className="group bg-slate-50 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src= "/ce2.jpeg" 
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

            <RevealOnScroll delay={300} className="group bg-slate-50 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src= "/ce3.png" 
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

      {}
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
              <h4 className="font-black text-[#183058] text-lg mb-1">Brownfield Well Rejuvenation</h4>
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
              <h4 className="font-black text-[#183058] text-lg mb-1">Pipeline Asset Rejuvenation</h4>
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
              <h4 className="font-black text-[#183058] text-lg mb-1">Sludge Oil Recovery (SOR)</h4>
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

      {}
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

          {/* Partner Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <RevealOnScroll delay={100} className="bg-gradient-to-br from-[#183058] to-blue-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group hover:scale-[1.01] transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
              <Building2 className="text-[#F29631] mb-6" size={40} />
              <h4 className="text-2xl font-black mb-1">Glory Asia Energy</h4>
              <p className="text-blue-200 text-xs uppercase tracking-wider font-bold mb-4">Technology & Funding Lead</p>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Acting as the primary Technology Provider deploying Best Available Technology (BAT), and serving as Project Lead for capital investment and infrastructure funding.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden group hover:scale-[1.01] transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-50 transition-colors"></div>
              <Users className="text-[#5176A2] mb-6" size={40} />
              <h4 className="text-2xl font-black text-[#183058] mb-1">PT Radiant Utama</h4>
              <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-4">Local Content & Representation</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Acting as the strategic local partner, leveraging its extensive presence to manage regulatory requirements, licensing, permitting, and local content (TKDN) compliance.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {}
      <section id="team" className="py-20 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-blue-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#183058] font-bold tracking-widest uppercase text-[10px]">Leadership</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4 tracking-tight">Key Management Team</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Meet the experienced professionals driving innovation and operational excellence across our global projects.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <RevealOnScroll key={member.id} delay={index * 100} className="group flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Pilihan untuk menambah logo sosmed seperti Linkedin */}
                  <div className="absolute inset-0 bg-[#183058]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <div className="bg-white p-2 rounded-full text-[#183058] cursor-pointer hover:bg-[#F29631] hover:text-white transition-colors">
                       <Linkedin size={20} />
                     </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-black text-[#183058] mb-1">{member.name}</h4>
                  <p className="text-[#F29631] text-xs font-bold uppercase tracking-wider mb-3">{member.position}</p>
                  <p className="text-slate-500 text-sm leading-relaxed px-4">
                    {member.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="gallery" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F29631]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5176A2]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Project Media & Gallery</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Our Projects in Action</h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Explore our visual documentation of high-impact brownfield asset transformations and technological deployments in the field.
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

        {/* Modal / Lightbox for viewing gallery item */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-20 bg-slate-800/80 text-white p-2 rounded-full hover:bg-slate-700 transition-colors"
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

      {}
      <section id="workpack" className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-blue-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#183058] font-bold tracking-widest uppercase text-[10px]">Operational Structure</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4">Project Workpack Summary</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              A comprehensive framework ensuring seamless, unified project execution from initial preparation to long-term maintenance.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RevealOnScroll delay={100} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <Briefcase className="text-[#F29631] mb-4" size={28} />
              <h4 className="font-black text-[#183058] text-base mb-2">Executive Summary</h4>
              <p className="text-slate-500 text-xs uppercase font-bold mb-2">Project Overview</p>
              <p className="text-slate-600 text-xs leading-relaxed">High-level roadmap, objectives, and the "technical services + operational hosting" delivery model.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={150} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-[#5176A2] mb-4" size={28} />
              <h4 className="font-black text-[#183058] text-base mb-2">Organizational Framework</h4>
              <p className="text-slate-500 text-xs uppercase font-bold mb-2">Management Structure</p>
              <p className="text-slate-600 text-xs leading-relaxed">Command center roles, specialized operational departments, and support teams ensuring unified execution.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <ClipboardCheck className="text-emerald-600 mb-4" size={28} />
              <h4 className="font-black text-[#183058] text-base mb-2">Operational Standards</h4>
              <p className="text-slate-500 text-xs uppercase font-bold mb-2">Technical & Quality Baseline</p>
              <p className="text-slate-600 text-xs leading-relaxed">ISO 9001 standard quality protocols, technical specifications, and resource coordination mechanisms.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={250} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="text-red-500 mb-4" size={28} />
              <h4 className="font-black text-[#183058] text-base mb-2">Health & Safety</h4>
              <p className="text-slate-500 text-xs uppercase font-bold mb-2">HSE Systems</p>
              <p className="text-slate-600 text-xs leading-relaxed">Mandatory compliance requirements, including Permit to Work (PTW), Job Safety Analysis (JSA), and strict protection protocols.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={300} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <Leaf className="text-emerald-500 mb-4" size={28} />
              <h4 className="font-black text-[#183058] text-base mb-2">Environmental Management</h4>
              <p className="text-slate-500 text-xs uppercase font-bold mb-2">Compliance & Protection</p>
              <p className="text-slate-600 text-xs leading-relaxed">Strategies for eco-friendly chemicals, compliant hazardous waste disposal, and site restoration.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={350} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <AlertTriangle className="text-amber-500 mb-4" size={28} />
              <h4 className="font-black text-[#183058] text-base mb-2">Emergency Response</h4>
              <p className="text-slate-500 text-xs uppercase font-bold mb-2">Risk Mitigation</p>
              <p className="text-slate-600 text-xs leading-relaxed">Contingency plans for operational hazards and on-site emergency resources with local support links.</p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-orange-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#F29631] font-bold tracking-widest uppercase text-[10px]">Technological Edge</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4">GAE (BAT) vs. Conventional</h3>
            <p className="text-slate-600 text-sm">A paradigm shift in operational efficiency, safety, and environmental compliance.</p>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#183058] text-white text-xs font-bold uppercase tracking-wider">
                  <th className="p-4">Focus Area</th>
                  <th className="p-4">Conventional Methods</th>
                  <th className="p-4">Glory Asia Energy (BAT)</th>
                  <th className="p-4">Key Advantages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm bg-slate-50">
                <tr className="hover:bg-slate-100 transition-colors">
                  <td className="p-4 font-bold text-[#183058] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F29631]"></span> Idle Wells
                  </td>
                  <td className="p-4 text-slate-600">Workover Rig / Injection</td>
                  <td className="p-4 font-semibold text-[#183058]">Smart Rodless + Nano-Stimulation</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">40% Lower Mob Costs, Rapid Flow</td>
                </tr>
                <tr className="hover:bg-slate-100 transition-colors">
                  <td className="p-4 font-bold text-[#183058] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5176A2]"></span> Pipelines
                  </td>
                  <td className="p-4 text-slate-600">Trucking / Chemical Flushing</td>
                  <td className="p-4 font-semibold text-[#183058]">Mechanical + Nano-Chemical Cleaning</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">10-Yr Life Extension, Integrity Audit</td>
                </tr>
                <tr className="hover:bg-slate-100 transition-colors">
                  <td className="p-4 font-bold text-[#183058] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Storage Tanks
                  </td>
                  <td className="p-4 text-slate-600">Manual Excavation / Venting</td>
                  <td className="p-4 font-semibold text-[#183058]">Closed-Loop COW + 3-Phase Separation</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">95%+ Oil Recovery, Zero Emissions</td>
                </tr>
              </tbody>
            </table>
          </RevealOnScroll>
        </div>
      </section>

      {}
      <section className="py-20 bg-slate-100 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-blue-100 px-3 py-1.5 rounded-full mb-4">
              <h2 className="text-[#183058] font-bold tracking-widest uppercase text-[10px]">Project Lifecycle</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#183058] mb-4">Deployment Roadmap</h3>
            <p className="text-slate-600 text-sm">A rigorous phased execution approach ensuring success from initial contact to full-scale field deployment.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Engagement', desc: 'Technical presentations, project goal alignment, and business formalization.' },
              { num: '02', title: 'Discovery', desc: 'In-depth data collection, physical site surveys, and sampling.' },
              { num: '03', title: 'Validation', desc: 'Bench-scale lab simulations to calibrate formulations & parameters.' },
              { num: '04', title: 'Pilot', desc: 'Controlled field deployment on a single asset to verify metrics.' },
              { num: '05', title: 'Execution', desc: 'Full-scale actual field deployment and digital monitoring integration.' }
            ].map((step, idx) => (
              <RevealOnScroll key={step.num} delay={idx * 80} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center relative flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-full bg-[#183058] text-white font-black text-xs flex items-center justify-center mx-auto mb-3">{step.num}</span>
                  <h4 className="font-black text-[#183058] text-base mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {}
      <footer id="contact" className="bg-[#183058] pt-16 pb-12 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900/60 to-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between min-h-[300px]">
              <div>
                <img src={footerLogo} alt="Glory Asia Energy" className="w-12 h-12 object-contain mb-6 brightness-0 invert" />
                <h3 className="text-3xl font-black text-white leading-tight mb-4">
                  Partnering for <br />
                  <span className="text-[#F29631]">Energy Excellence</span>
                </h3>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Let's collaborate to transform your mature brownfield assets into sustainable, high-performing energy infrastructure.
                </p>
              </div>
            </div>

            {/* Right Box: Contact Info Card */}
            <div className="lg:col-span-7 bg-white text-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#F29631] uppercase tracking-widest mb-2">
                <span>Contact Information</span>
              </div>
              <h4 className="text-2xl font-black text-[#183058] mb-6">Glory Asia Energy</h4>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="p-3 bg-blue-50 text-[#183058] rounded-xl flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Regional Headquarters</span>
                    <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                      B-2-9 Plaza Arkadia, No. 3 Jalan Intisari Perdana, <br />
                      Desa Park City, 52200 Kuala Lumpur
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="p-3 bg-orange-50 text-[#F29631] rounded-xl flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Email Support</span>
                    <a href="mailto:contact@gloryasiaenergy.com" className="text-slate-800 text-xs sm:text-sm font-bold hover:text-[#F29631] transition-colors">
                      contact@gloryasiaenergy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200/60">
            <p>&copy; 2026 Glory Asia Energy Sdn Bhd. All rights reserved.</p>
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
