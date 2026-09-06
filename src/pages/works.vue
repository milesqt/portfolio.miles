<template>
  <div class="max-w-6xl mx-auto px-6 py-32 space-y-40">
    
    <!-- Page Header with Added Bottom Margin -->
    <section class="text-center max-w-2xl mx-auto mb-30">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono-space text-xs uppercase tracking-widest mb-6">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        System Directory // Archives
      </div>
      <h1 class="font-display text-5xl md:text-6xl text-slate-100 mb-6 drop-shadow-sm">
        Selected Works
      </h1>
      <p class="text-slate-400 font-mono leading-relaxed">
        A curated collection of digital experiences, bridging visual aesthetics with functional engineering.
      </p>
    </section>

    <!-- 01. KONEKTALAW (Text Left, Image Right) -->
    <section id="konektalaw" class="relative flex flex-col lg:flex-row gap-16 items-center">
      <!-- Narrative (Left) -->
      <div class="lg:w-1/2 space-y-8 relative z-10">
        <div>
          <h2 class="font-display text-4xl text-slate-100 mb-2">KonektaLaw</h2>
          <p class="font-mono-space text-cyan-400 text-xs tracking-widest uppercase mb-6">Legal Technology Platform</p>
          <p class="text-slate-300 leading-relaxed font-sans mb-4">
            Designed and developed as part of a 4-person team, KonektaLaw makes legal assistance more approachable by connecting users with appropriate legal professionals based on their exact concerns. 
          </p>
          <p class="text-slate-300 leading-relaxed font-sans text-sm">
            I led the end-to-end product design—conducting user research, surveys, and feedback loops to shape the information architecture, user flows, wireframes, and high-fidelity prototypes. After rigorous usability testing, I translated the design into a responsive frontend using HTML, CSS, and Bootstrap.
          </p>
        </div>

        <div class="space-y-4">
          <div class="border-l-2 border-emerald-500 pl-4 py-1">
            <h4 class="text-slate-100 font-mono-space uppercase tracking-widest text-[10px] mb-1">Recognition (7 Major Awards)</h4>
            <p class="text-emerald-400 text-xs leading-relaxed">
              Best Capstone Project, Most Innovative Project, Best Web Application, Best Mobile Application, Best Research Poster, Champion at the IT Skills Olympics, and 2nd Runner-Up at the National TechnoFest.
            </p>
          </div>
          <div class="border-l-2 border-cyan-500 pl-4 py-1">
            <h4 class="text-slate-100 font-mono-space uppercase tracking-widest text-[10px] mb-1">Real-World Outcome</h4>
            <p class="text-slate-300 text-xs leading-relaxed">
              Successfully deployed and handed over to a local law firm, where their internal IT team took over active maintenance—turning it into a live production system rather than an academic prototype.
            </p>
          </div>
        </div>

        <div class="pt-2 flex flex-wrap gap-2">
          <span class="font-mono-space text-[10px] text-slate-200 border border-slate-700 bg-slate-900/50 px-3 py-1.5 rounded-full">UI/UX Design</span>
          <span class="font-mono-space text-[10px] text-slate-200 border border-slate-700 bg-slate-900/50 px-3 py-1.5 rounded-full">HTML</span>
          <span class="font-mono-space text-[10px] text-slate-200 border border-slate-700 bg-slate-900/50 px-3 py-1.5 rounded-full">CSS</span>
          <span class="font-mono-space text-[10px] text-slate-200 border border-slate-700 bg-slate-900/50 px-3 py-1.5 rounded-full">Bootstrap</span>
        </div>
      </div>

      <!-- Visual (Right) -->
      <div class="lg:w-1/2 relative flex justify-center items-center">
        <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full w-3/4 h-3/4 mx-auto z-0 pointer-events-none"></div>
        <img src="/8.png" alt="KonektaLaw Mobile UI" class="relative z-10 w-full max-w-[28rem] object-contain hover:scale-105 transition-transform duration-700 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
      </div>
    </section>

    <!-- 02. EMPLEO HR (Text Left, Image Right for alignment consistency) -->
    <section id="empleo-hr" class="relative flex flex-col lg:flex-row gap-16 items-center">
      <!-- Narrative (Left) -->
      <div class="lg:w-1/2 space-y-8 relative z-10">
        <div>
          <h2 class="font-display text-4xl text-slate-100 mb-2">Empleo HR</h2>
          <p class="font-mono-space text-purple-400 text-xs tracking-widest uppercase mb-6">HR Management SaaS Platform</p>
          <p class="text-slate-300 leading-relaxed font-sans mb-4">
            A comprehensive SaaS platform built to support complex administrative and employee workflows. Acting as both Product/UI/UX Designer and Full-Stack Developer, I architected the information architecture, user journeys, and responsive layouts.
          </p>
          <p class="text-slate-300 leading-relaxed font-sans text-sm">
            My development scope covered full-stack feature implementation across core modules including Employee Management, Payroll, Payslips, Reimbursements, Trainee Management, Mood Tracking, and REST API integrations.
          </p>
        </div>

        <div class="p-5 bg-slate-900/90 border border-slate-700 rounded-xl relative overflow-hidden group shadow-lg">
          <div class="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:shadow-[0_0_15px_#a855f7] transition-shadow"></div>
          <h3 class="text-sm font-display text-slate-100 mb-1">Development Impact 🔥</h3>
          <p class="text-slate-300 text-sm">Successfully completed and shipped <strong>110+ tracked development tickets</strong> in approximately three months, handling everything from component architecture and backend logic to debugging and system maintenance.</p>
        </div>

        <div class="pt-2 flex flex-wrap gap-2">
          <span class="font-mono-space text-[10px] text-slate-200 border border-slate-700 bg-slate-900/50 px-3 py-1.5 rounded-full">React.js</span>
          <span class="font-mono-space text-[10px] text-slate-200 border border-slate-700 bg-slate-900/50 px-3 py-1.5 rounded-full">Tailwind CSS</span>
          <span class="font-mono-space text-[10px] text-slate-200 border border-slate-700 bg-slate-900/50 px-3 py-1.5 rounded-full">Laravel</span>
          <span class="font-mono-space text-[10px] text-slate-200 border border-slate-700 bg-slate-900/50 px-3 py-1.5 rounded-full">Supabase</span>
          <span class="font-mono-space text-[10px] text-slate-200 border border-slate-700 bg-slate-900/50 px-3 py-1.5 rounded-full">MySQL</span>
          <span class="font-mono-space text-[10px] text-slate-200 border border-slate-700 bg-slate-900/50 px-3 py-1.5 rounded-full">REST APIs</span>
        </div>
      </div>

      <!-- Visual (Right) -->
      <div class="lg:w-1/2 relative flex justify-center items-center">
        <div class="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full w-3/4 h-3/4 mx-auto z-0 pointer-events-none"></div>
        <img src="/5.png" alt="Empleo HR SaaS Platform" class="relative z-10 w-full max-w-[34rem] object-contain hover:scale-105 transition-transform duration-700 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
      </div>
    </section>

    <!-- 03 & 04. ADDITIONAL ARCHIVES (Editorial Grid) -->
    <section>
      <div class="flex items-center gap-4 mb-16">
        <div class="h-px bg-slate-800 flex-grow"></div>
        <h3 class="font-mono-space text-slate-500 uppercase tracking-widest text-xs">Additional Archives</h3>
        <div class="h-px bg-slate-800 flex-grow"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <!-- LiftNow PH -->
        <div id="liftnow-ph" class="group flex flex-col">
          <div class="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
            <div class="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
            <img src="/4.png" alt="LiftNow PH Platform" class="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
          <div>
            <h3 class="font-display text-2xl text-slate-100 mb-1">LiftNow PH</h3>
            <p class="font-mono-space text-[10px] text-cyan-400 mb-4 tracking-widest uppercase">Non-Profit Platform</p>
            <p class="text-slate-300 text-sm leading-relaxed mb-6">
              Designed and deployed a responsive web presence for an initiative supporting educational assistance for Filipino scholars. Guided the project entirely from early Figma prototypes to live WordPress deployment.
            </p>
            <div class="flex gap-3 text-slate-400">
              <span class="font-mono-space text-[10px] uppercase">Web Design</span>
              <span class="font-mono-space text-[10px] uppercase">Figma</span>
              <span class="font-mono-space text-[10px] uppercase">WordPress</span>
            </div>
          </div>
        </div>

        <!-- Trading Education -->
        <div id="trading-edu" class="group flex flex-col">
          <div class="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
            <div class="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
            <img src="/6.png" alt="Trading Education UI" class="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
          <div>
            <h3 class="font-display text-2xl text-slate-100 mb-1">Trading Education</h3>
            <p class="font-mono-space text-[10px] text-purple-400 mb-4 tracking-widest uppercase">Interactive Prototype</p>
            <p class="text-slate-300 text-sm leading-relaxed mb-6">
              Designed an interactive landing page concept for a beginner-focused trading platform. The focus was heavily on establishing a clear visual hierarchy while exploring advanced micro-interactions and motion design.
            </p>
            <div class="flex gap-3 text-slate-400">
              <span class="font-mono-space text-[10px] uppercase">Prototyping</span>
              <span class="font-mono-space text-[10px] uppercase">UX Motion</span>
              <span class="font-mono-space text-[10px] uppercase">Visual Hierarchy</span>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>