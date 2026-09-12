<template>
  <div class="max-w-6xl mx-auto px-6 py-32 space-y-40">
    
    <!-- Page Header -->
    <section class="text-center max-w-2xl mx-auto mb-30">
      <!-- <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono-space text-xs uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        System Directory // Archives
      </div> -->
      <h1 class="font-display text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text mb-6">
        Selected Works
      </h1>
      <p class="text-slate-400 font-mono leading-relaxed">
        A curated collection of digital experiences, bridging visual aesthetics with functional engineering.
      </p>
    </section>

    <!-- 01. KONEKTALAW -->
    <section id="konektalaw" class="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      
      <!-- Narrative (Left on Desktop, Bottom on Mobile) -->
      <div class="w-full lg:w-1/2 space-y-6 relative z-10 order-2 lg:order-1">
        <!-- Header -->
        <div>
          <h2 class="font-display text-4xl text-slate-100 mb-2">KonektaLaw</h2>
          <p class="font-mono-space text-cyan-400 text-xs tracking-widest uppercase">Legal Technology Platform</p>
        </div>

        <!-- Abstract -->
        <p class="text-slate-300 text-sm leading-relaxed font-sans">
          Conducted user research, surveys, and feedback gathering to understand user needs and structure a legal-tech platform connecting clients with lawyers based on their legal concerns.
        </p>

        <!-- Icon Data Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <!-- Role Box -->
          <div class="bg-slate-900/60 border border-slate-700/50 p-4 rounded-xl">
            <svg class="w-5 h-5 text-purple-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <h4 class="text-slate-100 font-display text-sm mb-1">My Role</h4>
            <p class="text-slate-400 text-xs">Product Design, UI/UX & Web Dev</p>
          </div>
          <!-- Outcome Box -->
          <div class="bg-slate-900/60 border border-slate-700/50 p-4 rounded-xl">
            <svg class="w-5 h-5 text-cyan-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h4 class="text-slate-100 font-display text-sm mb-1">Outcome</h4>
            <p class="text-slate-400 text-xs">Handed over to a local law firm's internal IT team.</p>
          </div>
          <!-- Awards Box -->
          <div class="col-span-1 sm:col-span-2 bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-xl flex flex-col sm:flex-row gap-4 items-start transition-colors">
            <svg class="w-6 h-6 text-emerald-400 flex-shrink-0 sm:mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            <div>
              <h4 class="text-emerald-300 font-display text-sm mb-1">7 Major Awards</h4>
              <p class="text-emerald-400/90 text-[11px] leading-relaxed">
                Best Capstone · Best Web App · Best Mobile App · Most Innovative · Best Research Poster · IT Skills Olympics Champion · National TechnoFest 2nd Runner-Up
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4 mt-6">
          <!-- Terminal Stack -->
          <div class="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-md px-4 py-2.5 w-max max-w-full overflow-x-auto overflow-y-hidden no-scrollbar">
            <span class="text-purple-500 font-mono-space text-xs flex-shrink-0">>_</span>
            <span class="text-slate-300 font-mono-space text-[10px] tracking-widest uppercase whitespace-nowrap">
              Figma <span class="text-slate-600 mx-1">|</span> Bootstrap <span class="text-slate-600 mx-1">|</span> HTML <span class="text-slate-600 mx-1">|</span> CSS <span class="text-slate-600 mx-1">|</span> Laravel
            </span>
          </div>
          
          <!-- Confidentiality Note -->
          <div class="flex items-start gap-2 bg-slate-900/40 border border-slate-800/60 rounded px-3 py-2 w-max max-w-full">
            <svg class="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            <p class="text-slate-400 font-mono text-[10px] uppercase tracking-wider leading-relaxed">
              Visual assets and live links are unavailable due<br class="hidden sm:block" /> to client confidentiality and project handoff.
            </p>
          </div>
        </div>
      </div>

      <!-- Visual (Right on Desktop, Top on Mobile) -->
      <div class="w-full lg:w-1/2 relative flex justify-center items-center order-1 lg:order-2">
        <!-- Glass card adjusted to not clip on mobile -->
        <div class="absolute -top-4 right-0 lg:top-8 lg:-right-4 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 px-3 py-2 lg:px-4 lg:py-3 rounded-xl z-20 flex flex-col shadow-xl">
          <span class="font-mono-space text-[9px] lg:text-[10px] text-cyan-400 uppercase tracking-widest mb-1">Responsive View</span>
          <span class="text-[10px] lg:text-[11px] text-slate-300 font-sans">Desktop & Mobile interfaces.</span>
        </div>
        
        <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full w-3/4 h-3/4 mx-auto z-0 pointer-events-none"></div>
        <img src="/konektalaw-mockup.png" alt="KonektaLaw Responsive Mockup" class="relative z-10 w-full max-w-[34rem] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700" />
      </div>
    </section>

    <!-- 02. EMPLEO HR -->
    <section id="empleo-hr" class="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      
      <!-- Visual (Left on Desktop, Top on Mobile) -->
      <div class="w-full lg:w-1/2 relative flex justify-center items-center order-1 lg:order-1">
        <!-- Glass card adjusted to not clip on mobile -->
        <div class="absolute -top-4 left-0 lg:top-8 lg:-left-4 bg-slate-900/80 backdrop-blur-md border border-pink-500/30 px-3 py-2 lg:px-4 lg:py-3 rounded-xl z-20 flex flex-col shadow-xl">
          <span class="font-mono-space text-[9px] lg:text-[10px] text-pink-400 uppercase tracking-widest mb-1">Dashboard View</span>
          <span class="text-[10px] lg:text-[11px] text-slate-300 font-sans">Admin & Employee workspace.</span>
        </div>

        <div class="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full w-3/4 h-3/4 mx-auto z-0 pointer-events-none"></div>
        <img src="/5.png" alt="Empleo HR SaaS Platform" class="relative z-10 w-full max-w-[34rem] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700" />
      </div>

      <!-- Narrative (Right on Desktop, Bottom on Mobile) -->
      <div class="w-full lg:w-1/2 space-y-6 relative z-10 order-2 lg:order-2">
        <!-- Header -->
        <div>
          <h2 class="font-display text-4xl text-slate-100 mb-2">Empleo HR</h2>
          <p class="font-mono-space text-purple-400 text-xs tracking-widest uppercase">HR Management SaaS</p>
        </div>

        <!-- Abstract -->
        <p class="text-slate-300 text-sm leading-relaxed font-sans">
          Designed the initial product experience for a complex HR management platform, translating requirements into user flows, interactive prototypes, and high-fidelity interfaces.
        </p>

        <!-- Icon Data Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="bg-slate-900/60 border border-slate-700/50 p-4 rounded-xl">
            <svg class="w-5 h-5 text-cyan-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            <h4 class="text-slate-100 font-display text-sm mb-1">My Role</h4>
            <p class="text-slate-400 text-xs">UI/UX Design</p>
          </div>
          <div class="bg-slate-900/60 border border-slate-700/50 p-4 rounded-xl">
            <svg class="w-5 h-5 text-purple-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            <h4 class="text-slate-100 font-display text-sm mb-1">Core Modules</h4>
            <p class="text-slate-400 text-xs">Dashboard · Onboarding · Freedom Wall · Mood Meter · Landing Page</p>
          </div>
          <div class="col-span-1 sm:col-span-2 bg-pink-900/10 border border-pink-500/20 p-4 rounded-xl flex flex-col sm:flex-row gap-4 items-center transition-colors">
            <div class="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 border border-pink-500/30">
              <svg class="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h4 class="text-pink-300 font-display text-sm mb-1 text-center sm:text-left">Initial Product Contribution</h4>
              <p class="text-pink-400/70 text-[11px] leading-relaxed text-center sm:text-left">Designed core interfaces during the platform's early iteration, establishing the initial visual direction and user experience.</p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-4 mt-6">
          <!-- Terminal Stack -->
          <div class="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-md px-4 py-2.5 w-max max-w-full overflow-x-auto overflow-y-hidden no-scrollbar">
            <span class="text-cyan-500 font-mono-space text-xs flex-shrink-0">>_</span>
            <span class="text-slate-300 font-mono-space text-[10px] tracking-widest uppercase whitespace-nowrap">
              FIGMA <span class="text-slate-600 mx-1">|</span> UI/UX <span class="text-slate-600 mx-1">|</span> PROTOTYPING
            </span>
          </div>

          <!-- Figma Admin Prototype Link -->
          <a 
            href="https://www.figma.com/proto/REEfrwi08MuQ6Wib3NC6Uz/Design---Prototype-Portfolio?node-id=34-55032&starting-point-node-id=34%3A55032&show-proto-sidebar=1" 
            target="_blank" 
            class="relative group/btn bg-slate-900/50 hover:bg-pink-500/10 border border-pink-500 transition-all duration-300 text-pink-300 font-mono-space text-xs px-5 py-2.5 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-[0_0_15px_rgba(236,72,153,0.15)] hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] backdrop-blur-sm inline-flex items-center gap-1.5"
          >
            <span class="relative z-10 flex items-center gap-1.5">
              Admin Portal <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </span>
            <div class="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-pink-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
          </a>

          <!-- Figma Employee Prototype Link -->
          <a 
            href="https://www.figma.com/proto/REEfrwi08MuQ6Wib3NC6Uz/Design---Prototype-Portfolio?node-id=34-26590&starting-point-node-id=34%3A63209" 
            target="_blank" 
            class="relative group/btn bg-slate-900/50 hover:bg-cyan-500/10 border border-cyan-500 transition-all duration-300 text-cyan-400 font-mono-space text-xs px-5 py-2.5 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] backdrop-blur-sm inline-flex items-center gap-1.5"
          >
            <span class="relative z-10 flex items-center gap-1.5">
              Employee Portal <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </span>
            <div class="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
          </a>
        </div>
      </div>
    </section>

    <!-- 03 & 04. ONE-PAGE WEBSITES & INTERFACES -->
    <section>
      <div class="flex items-center gap-4 mb-12 lg:mb-16">
        <div class="h-px bg-slate-800 flex-grow"></div>
        <h3 class="font-mono-space text-slate-500 uppercase tracking-widest text-xs flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          One-Page Websites & Interfaces
        </h3>
        <div class="h-px bg-slate-800 flex-grow"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- LiftNow PH -->
        <div id="liftnow-ph" class="group/card flex flex-col bg-slate-900/40 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl transition-all duration-300 flex-grow">
          <div class="relative w-full aspect-[4/3] mb-4 lg:mb-6 overflow-hidden rounded-xl bg-slate-950 border border-slate-800/50 flex items-center justify-center">
            <div class="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
            <img src="/4.png" alt="LiftNow PH Platform" class="w-full h-full object-cover opacity-85 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700" />
          </div>
          <div class="flex flex-col flex-grow">
            <div class="flex items-center gap-3 mb-1">
              <h3 class="font-display text-2xl text-slate-100">LiftNow PH</h3>
            </div>
            <p class="font-mono-space text-[10px] text-cyan-400 mb-4 tracking-widest uppercase">Non-Profit Platform // WordPress</p>
            <p class="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              Designed and deployed a responsive website for a non-profit educational initiative, taking it from Figma wireframes to a live WordPress site.
            </p>
            
            <div class="flex gap-2 mb-6 flex-wrap">
              <span class="px-2 py-1 bg-slate-800 rounded font-mono-space text-[9px] text-slate-400 uppercase tracking-widest">UI/UX</span>
              <span class="px-2 py-1 bg-slate-800 rounded font-mono-space text-[9px] text-slate-400 uppercase tracking-widest">Web Design</span>
              <span class="px-2 py-1 bg-slate-800 rounded font-mono-space text-[9px] text-slate-400 uppercase tracking-widest">Figma</span>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-800/80">
              <a 
                href="https://liftnowph.com/" 
                target="_blank" 
                class="relative group/btn bg-slate-900/50 hover:bg-cyan-500/10 border border-cyan-500 transition-all duration-300 text-cyan-400 font-mono-space text-xs px-5 py-2.5 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] backdrop-blur-sm inline-flex items-center gap-1.5"
              >
                <span class="relative z-10 flex items-center gap-1.5">
                  Live Site <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </span>
                <div class="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
              </a>

              <a 
                href="https://www.figma.com/proto/REEfrwi08MuQ6Wib3NC6Uz/Design---Prototype-Portfolio?node-id=4-17553&starting-point-node-id=4%3A17553&show-proto-sidebar=1" 
                target="_blank" 
                class="relative group/btn bg-slate-900/50 hover:bg-purple-500/10 border border-purple-500 transition-all duration-300 text-purple-300 font-mono-space text-xs px-5 py-2.5 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] backdrop-blur-sm inline-flex items-center gap-1.5"
              >
                <span class="relative z-10 flex items-center gap-1.5">
                  Prototype <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </span>
                <div class="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
              </a>
            </div>
          </div>
        </div>

        <!-- Trading Education -->
        <div id="trading-edu" class="group/card flex flex-col bg-slate-900/40 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl transition-all duration-300 flex-grow">
          <div class="relative w-full aspect-[4/3] mb-4 lg:mb-6 overflow-hidden rounded-xl bg-slate-950 border border-slate-800/50 flex items-center justify-center">
            <div class="absolute inset-0 bg-purple-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
            <img src="/6.png" alt="Trading Education UI" class="w-full h-full object-cover opacity-85 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700" />
          </div>
          <div class="flex flex-col flex-grow">
            <h3 class="font-display text-2xl text-slate-100 mb-1">Trading Education</h3>
            <p class="font-mono-space text-[10px] text-purple-400 mb-4 tracking-widest uppercase">Interactive Prototype</p>
            <p class="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              Designed an interactive landing page concept for a beginner-focused trading education platform, using clear visual hierarchy, micro-interactions, and high-fidelity prototyping.
            </p>
            
            <div class="flex gap-2 mb-6 flex-wrap">
              <span class="px-2 py-1 bg-slate-800 rounded font-mono-space text-[9px] text-slate-400 uppercase tracking-widest">UI/UX</span>
              <span class="px-2 py-1 bg-slate-800 rounded font-mono-space text-[9px] text-slate-400 uppercase tracking-widest">Prototyping</span>
              <span class="px-2 py-1 bg-slate-800 rounded font-mono-space text-[9px] text-slate-400 uppercase tracking-widest">Visual Hierarchy</span>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-800/80">
              <a 
                href="https://www.figma.com/proto/7rAeJFua4DzqHARCJUfUJq/GainersGround?node-id=12-9&starting-point-node-id=12%3A9" 
                target="_blank" 
                class="relative group/btn bg-slate-900/50 hover:bg-purple-500/10 border border-purple-500 transition-all duration-300 text-purple-300 font-mono-space text-xs px-5 py-2.5 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] backdrop-blur-sm inline-flex items-center gap-1.5"
              >
                <span class="relative z-10 flex items-center gap-1.5">
                  Interactive Prototype <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </span>
                <div class="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 05. EXPLORE MORE PROTOTYPES CTA -->
    <section class="mt-16">
      <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group/cta hover:border-cyan-500/50 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-purple-500/5 opacity-0 group-hover/cta:opacity-100 transition-opacity pointer-events-none"></div>
        <div class="relative z-10">
          <h3 class="font-display text-2xl text-slate-100 mb-2">Explore the Sandbox</h3>
          <p class="text-slate-400 text-sm font-sans">Dive into my Figma workspace to view more UI/UX interaction explorations and unreleased prototype concepts.</p>
        </div>
        
        <!-- Signature Index Button Style -->
        <a 
          href="https://www.figma.com/proto/REEfrwi08MuQ6Wib3NC6Uz/Design---Prototype-Portfolio?node-id=1-3475&starting-point-node-id=1%3A3475&show-proto-sidebar=1" 
          target="_blank" 
          class="relative group/btn bg-slate-900/50 hover:bg-cyan-500/10 border border-cyan-500 transition-all duration-300 text-cyan-400 font-mono-space text-xs px-6 py-4 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-sm whitespace-nowrap inline-flex items-center gap-2"
        >
          <span class="relative z-10 flex items-center gap-2">
            View Other Prototypes <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </span>
          <div class="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
        </a>
      </div>
    </section>

  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>