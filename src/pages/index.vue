<script setup lang="ts">
const featuredProjects = [
  {
    slug: "konektalaw",
    title: "KonektaLaw",
    role: "Product Designer & Developer",
    description: "An award-winning legal tech platform bridging the gap between legal services and accessibility.",
    tags: ["UI/UX", "Product Design", "Vue.js"],
  },
  {
    slug: "empleo-hr",
    title: "HR Management System",
    role: "UI/UX & Front-End",
    description: "A comprehensive SaaS platform optimizing information architecture, dashboards, and HR workflows.",
    tags: ["SaaS", "Dashboard", "Tailwind"],
  },
  {
    slug: "liftnow-ph",
    title: "LiftNow PH",
    role: "Web Design",
    description: "A digital initiative showcasing brand identity and web presence for consumer wellness.",
    tags: ["Branding", "Web Design", "Figma"],
  }
];
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-40 space-y-40">
    
    <!-- 1. Magic meets Tech Hero Section -->
    <section class="relative min-h-[70vh] flex flex-col justify-center items-center text-center">
      
      <!-- BACKGROUND: Techno-Grid (Tech) -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] z-0 pointer-events-none"></div>

      <!-- BACKGROUND: Floating Sparkles / Mana (Magic) -->
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60 dark:opacity-100 transition-opacity duration-500">
        <div class="absolute top-[20%] left-[20%] w-2 h-2 bg-cyan-300 rounded-full blur-[2px] animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
        <div class="absolute top-[60%] left-[80%] w-1.5 h-1.5 bg-purple-300 rounded-full blur-[1px] animate-pulse shadow-[0_0_10px_#d8b4fe]" style="animation-delay: 1s"></div>
        <div class="absolute top-[80%] left-[30%] w-2.5 h-2.5 bg-cyan-400 rounded-full blur-[2px] animate-pulse shadow-[0_0_15px_#22d3ee]" style="animation-delay: 0.5s"></div>
        <div class="absolute top-[30%] left-[70%] w-2 h-2 bg-purple-400 rounded-full blur-[2px] animate-pulse shadow-[0_0_12px_#c084fc]" style="animation-delay: 1.5s"></div>
      </div>

      <!-- BACKGROUND: The Tech-Spell Circle (Aeris Inspired) -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[730px] h-[730px] pointer-events-none opacity-30 dark:opacity-40 z-0 flex items-center justify-center transition-opacity duration-500">
        <!-- Outer Magic Ring with Sparkle Nodes & Rotation -->
        <div class="absolute w-full h-full border-[2px] border-cyan-500/70 dark:border-cyan-400/70 rounded-full animate-[spin_35s_linear_infinite] shadow-[0_0_25px_rgba(34,211,238,0.5)]">
          <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 dark:bg-cyan-200 rotate-45 shadow-[0_0_12px_#22d3ee]"></div>
          <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 dark:bg-cyan-200 rotate-45 shadow-[0_0_12px_#22d3ee]"></div>
          <div class="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-cyan-400 dark:bg-cyan-200 rotate-45 shadow-[0_0_12px_#22d3ee]"></div>
          <div class="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-cyan-400 dark:bg-cyan-200 rotate-45 shadow-[0_0_12px_#22d3ee]"></div>
        </div>

        <!-- Middle Inner Arcane Ring (Reverse Spin) -->
        <div class="absolute w-[75%] h-[75%] border-[1.5px] border-dashed border-purple-500/80 dark:border-purple-400/80 rounded-full animate-[spin_25s_linear_infinite_reverse] shadow-[0_0_25px_rgba(192,132,252,0.4)]">
          <div class="absolute top-6 left-1/4 w-3 h-3 bg-purple-400 dark:bg-purple-300 rotate-20 shadow-[0_0_10px_#c084fc]"></div>
          <div class="absolute bottom-6 right-1/4 w-3 h-3 bg-purple-400 dark:bg-purple-300 rotate-20 shadow-[0_0_10px_#c084fc]"></div>
        </div>

        <!-- Inner Concentric Ring with Tech Crosshairs -->
        <div class="absolute w-[50%] h-[50%] border-[1px] border-cyan-400/60 dark:border-cyan-300/60 rounded-full animate-[spin_50s_linear_infinite]"></div>

        <!-- Intense Magical Core Flare -->
        <div class="absolute opacity-20 dark:opacity-30 w-48 h-48 bg-gradient-to-tr from-cyan-400/90 via-purple-500/80 to-white/80 blur-[40px] rounded-full shadow-[0_0_60px_rgba(34,211,238,0.8)]"></div>
        <div class="absolute w-12 h-12 bg-white/10 blur-[20px] rounded-full shadow-[0_0_40px_#ffffff]"></div>
      </div>

      <!-- FOREGROUND CONTENT: Storytelling Hero -->
      <div class="relative z-10 max-w-4xl px-6 mt-10">
        <!-- Story Title -->
        <h1 class="font-display font-semibold text-5xl md:text-7xl text-slate-900 dark:text-slate-100 mb-6 leading-tight drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          Multidisciplinary
          <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-300">Product Designer</span>
        </h1>

        <!-- Story Subtitle -->
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto font-mono drop-shadow-md">
          Turning <span class="text-purple-700 dark:text-purple-300 font-semibold">ideas</span>, <span class="text-pink-600 dark:text-pink-400 font-semibold">visuals</span>, and <span class="text-cyan-700 dark:text-cyan-300 font-semibold">code</span> into meaningful digital experiences.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap justify-center gap-6">
          <router-link
            to="/works"
            class="relative group bg-white/60 dark:bg-slate-900/50 hover:bg-cyan-500/10 border border-cyan-500 transition-all duration-300 text-cyan-700 dark:text-cyan-400 font-mono-space text-xs px-8 py-4 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-sm flex items-center justify-center"
          >
            <span class="relative z-10">Explore Works >></span>
            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
          </router-link>

          <a
            href="/portfolio.miles/Erica%20Miles%20P.%20Magana%20-%20Resume.pdf"
            target="_blank"
            class="relative group bg-white/60 dark:bg-slate-900/50 hover:bg-purple-500/10 border border-purple-500 transition-all duration-300 text-purple-700 dark:text-purple-300 font-mono-space text-xs px-8 py-4 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] backdrop-blur-sm flex items-center justify-center"
          >
            <span class="relative z-10">Resume // PDF</span>
            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
          </a>
        </div>
      </div>
    </section>

    <!-- 2. SELECTED WORK PREVIEW -->
    <section>
      <div class="flex items-baseline gap-4 mb-10 border-b border-purple-500/30 pb-4 relative">
        <h2 class="font-display text-4xl text-purple-700 dark:text-purple-300 tracking-wider drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
        Selected Works
        </h2>
        <!-- Small glowing accent line on the border -->
        <div class="absolute bottom-[-1px] left-0 w-32 h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <router-link 
          v-for="project in featuredProjects" 
          :key="project.slug" 
          :to="`/works#${project.slug}`" 
          class="group relative bg-white/70 dark:bg-slate-900/40 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/60 transition-all duration-500 p-8 flex flex-col justify-between h-full shadow-sm hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-sm rounded-br-sm backdrop-blur-sm"
        >
          <!-- Decorative Glitch-Magic accent line -->
          <div class="absolute top-0 right-0 w-24 h-24 border-t-[2px] border-r-[2px] border-cyan-400/60 rounded-tr-[3rem] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>
          
          <!-- Inner card shine/sparkle on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-sm rounded-br-sm"></div>

          <div class="relative z-10">
            <h3 class="font-display text-3xl text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2">{{ project.title }}</h3>
            <p class="font-mono-space text-xs text-purple-600 dark:text-purple-400 mb-6 uppercase tracking-widest">{{ project.role }}</p>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-sans">{{ project.description }}</p>
          </div>
          <div class="flex flex-wrap gap-2 mt-auto relative z-10">
            <span v-for="tag in project.tags" :key="tag" class="font-mono-space text-[10px] text-cyan-800 dark:text-cyan-100 bg-slate-200 dark:bg-slate-950/80 px-3 py-1.5 rounded-br-lg rounded-tl-lg border border-slate-300 dark:border-slate-700 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.2)] transition-all duration-300">{{ tag }}</span>
          </div>
        </router-link>
      </div>
      
      <!-- Upgraded "View All Works" Button with Shimmer -->
      <div class="mt-16 flex justify-center">
        <router-link
          to="/works"
          class="relative group bg-white/60 dark:bg-slate-900/50 hover:bg-cyan-500/10 border border-slate-300 dark:border-purple-500 hover:border-cyan-500 transition-all duration-300 text-purple-700 dark:text-purple-300 hover:text-cyan-700 dark:hover:text-cyan-400 font-mono-space text-xs px-8 py-4 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-sm flex items-center justify-center"
        >
          <span class="relative z-10 flex items-center gap-2">
            View All Works <span class="group-hover:translate-x-1 transition-transform">>></span>
          </span>
          <!-- Shine sweep effect -->
          <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
        </router-link>
      </div>
    </section>

    <!-- 3. TECHNOMANCY ABOUT TEASER -->
    <section class="relative max-w-4xl mx-auto">
      <!-- Background Magical Aura -->
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl rounded-[4rem] pointer-events-none"></div>
    
      <!-- Main Technomancy Box -->
      <div class="relative z-10 bg-white/70 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-700 p-10 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-md rounded-br-md backdrop-blur-md shadow-lg overflow-hidden group">
        
        <!-- Glitch Tech Corners -->
        <div class="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-[4rem] pointer-events-none group-hover:border-cyan-400/80 transition-colors duration-500"></div>
        <div class="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/40 rounded-bl-[4rem] pointer-events-none group-hover:border-purple-500/80 transition-colors duration-500"></div>

        <!-- Terminal Status Bar -->
        <div class="flex items-center gap-3 mb-8 border-b border-purple-500/20 pb-4">
          <div class="flex gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
          </div>
          <span class="font-mono-space text-xs text-purple-600 dark:text-purple-400 uppercase tracking-widest">
            System Trace
          </span>
        </div>

        <div class="text-center">
          <h2 class="font-display text-3xl md:text-4xl text-slate-900 dark:text-slate-100 mb-6 drop-shadow-sm">Her Origin Story</h2>
          <p class="text-slate-600 dark:text-slate-300 mb-10 font-sans leading-relaxed max-w-2xl mx-auto">
            I started with visual design, learned how to build those visuals with code, and now sit at the intersection of both. I build bridges between abstract imagination and robust front-end architectures.
          </p>
          
          <router-link to="/about" class="relative inline-flex items-center gap-2 font-mono-space text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-cyan-500/30 hover:after:bg-purple-500/60">
            Read the Origin Story 
            <span class="group-hover:translate-x-1 transition-transform">-></span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>