<script setup lang="ts">
import TerminalGrid from '../components/TerminalGrid.vue'

const topProjects = [
  { 
    slug: 'current-app', 
    title: 'Current Prototype', 
    role: 'UI/UX & Motion Designer', 
    description: 'Interactive social media app prototype built for the Figma Makeathon featuring "Scratch-to-Dislike".',
    tags: ['Figma', 'UX Motion', 'Prototyping'] 
  },
  { 
    slug: 'empleo-hr', 
    title: 'Empleo HR', 
    role: 'Software Eng & Marketer', 
    description: 'Comprehensive HR software platform. Handled full-stack development and brand identity.',
    tags: ['Vue', 'Laravel', 'Tailwind'] 
  },
  { 
    slug: 'kidopass-lgu360', 
    title: 'Kidopass & LGU360', 
    role: 'Front-End Developer', 
    description: 'Contributed to UI revamps, feature implementations, and bug fixes across multiple robust web apps.',
    tags: ['Nuxt', 'Supabase', 'Git'] 
  }
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 space-y-40">
    
    <!-- 1. Magic meets Tech Hero Section -->
    <section class="relative min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">
      
      <!-- BACKGROUND: Techno-Grid (Tech) -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] z-0 pointer-events-none"></div>

      <!-- BACKGROUND: Floating Sparkles / Mana (Magic) -->
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div class="absolute top-[20%] left-[20%] w-2 h-2 bg-cyan-300 rounded-full blur-[2px] animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
        <div class="absolute top-[60%] left-[80%] w-1.5 h-1.5 bg-purple-300 rounded-full blur-[1px] animate-pulse shadow-[0_0_10px_#d8b4fe]" style="animation-delay: 1s;"></div>
        <div class="absolute top-[80%] left-[30%] w-2.5 h-2.5 bg-cyan-400 rounded-full blur-[2px] animate-pulse shadow-[0_0_15px_#22d3ee]" style="animation-delay: 0.5s;"></div>
        <div class="absolute top-[30%] left-[70%] w-2 h-2 bg-purple-400 rounded-full blur-[2px] animate-pulse shadow-[0_0_12px_#c084fc]" style="animation-delay: 1.5s;"></div>
      </div>
      
      <!-- BACKGROUND: The Tech-Spell Circle -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-40 z-0 flex items-center justify-center">
        <!-- Outer Ring (Slow Spin) -->
        <div class="absolute w-full h-full border-[1.5px] border-dashed border-cyan-500/40 rounded-full animate-[spin_40s_linear_infinite] shadow-[0_0_15px_rgba(6,182,212,0.2)]"></div>
        <!-- Middle Ring (Reverse Spin) -->
        <div class="absolute w-[75%] h-[75%] border-[1px] border-dotted border-purple-500/50 rounded-full animate-[spin_30s_linear_infinite_reverse] shadow-[0_0_15px_rgba(168,85,247,0.2)]"></div>
        <!-- Inner Octagon (Tech Structure) -->
        <div class="absolute w-[50%] h-[50%] border-[1px] border-cyan-400/30 rotate-45 transition-transform duration-1000"></div>
        <!-- Core Glow -->
        <div class="absolute w-32 h-32 bg-purple-600/30 blur-[70px] rounded-full"></div>
      </div>
      
      <!-- FOREGROUND CONTENT: Clear & Professional -->
      <div class="relative z-10 max-w-4xl px-6 mt-10">
        <!-- System Status Badge -->
        <div class="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-slate-900/80 border border-cyan-500/30 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
          <span class="font-mono-space text-xs text-cyan-400 uppercase tracking-widest">// System_Online</span>
        </div>

        <!-- Clear Title -->
        <h1 class="font-display font-semibold text-5xl md:text-7xl text-slate-100 mb-6 leading-tight drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          Product Designer <span class="text-purple-400 italic font-display text-5xl md:text-7xl">&</span> <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Front-End Engineer.</span>
        </h1>
        
        <!-- Clear Subtitle -->
        <p class="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-sans drop-shadow-md">
          Bridging the gap between expressive UI/UX design and scalable code environments. Specializing in the developer handoff and component-driven architecture.
        </p>
        
        <div class="flex flex-wrap justify-center gap-6">
          <!-- Primary Action Button -->
          <button class="relative group bg-slate-900/50 cursor-pointer hover:bg-cyan-500/10 border border-cyan-500 transition-all duration-300 text-cyan-400 font-mono-space text-sm px-8 py-4 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-sm">
            <span class="relative z-10">Fetch_Projects();</span>
            <!-- Shine sweep effect -->
            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
          </button>
        </div>
      </div>
    </section>

    <!-- 2. Terminal Grid (Tech Stack) -->
    <TerminalGrid />

    <!-- 3. Top Projects Gallery -->
    <section>
      <div class="flex items-baseline gap-4 mb-10 border-b border-purple-500/30 pb-4 relative">
        <h2 class="font-display text-4xl text-purple-300 tracking-wider drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
          <span class="text-cyan-500 font-mono-space text-lg mr-2">01.</span> Featured Modules
        </h2>
        <span class="hidden md:block font-mono-space text-xs text-slate-500 uppercase tracking-widest">
          // Data_Retrieval_Complete
        </span>
        <!-- Small glowing accent line on the border -->
        <div class="absolute bottom-[-1px] left-0 w-32 h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <NuxtLink 
          v-for="project in topProjects" 
          :key="project.slug"
          :to="`/projects/${project.slug}`"
          class="group relative bg-slate-900/40 border border-slate-700 hover:border-cyan-500/60 transition-all duration-500 p-8 flex flex-col justify-between h-full hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-sm"
          :class="[
            'rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-sm rounded-br-sm'
          ]"
        >
          <!-- Decorative Glitch-Magic accent line -->
          <div class="absolute top-0 right-0 w-24 h-24 border-t-[2px] border-r-[2px] border-cyan-400/60 rounded-tr-[3rem] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>
          
          <!-- Inner card shine/sparkle on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-sm rounded-br-sm"></div>

          <div class="relative z-10">
            <h3 class="font-display text-3xl text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
              {{ project.title }}
            </h3>
            <p class="font-mono-space text-xs text-purple-400 mb-6 uppercase tracking-widest drop-shadow-sm">
              {{ project.role }}
            </p>
            <p class="text-sm text-slate-300 leading-relaxed mb-8 font-sans">
              {{ project.description }}
            </p>
          </div>
          
          <div class="flex flex-wrap gap-2 mt-auto relative z-10">
            <span 
              v-for="tag in project.tags" 
              :key="tag" 
              class="font-mono-space text-[10px] text-cyan-100 bg-slate-950/80 px-3 py-1.5 rounded-br-lg rounded-tl-lg border border-slate-700 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              {{ tag }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>