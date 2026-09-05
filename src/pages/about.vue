<script setup lang="ts">
import TerminalGrid from "../components/TerminalGrid.vue";
import { ref } from 'vue'

const timeline = [
  { 
    year: "2021", 
    title: "Graphic & UI/UX Designer", 
    description: "Began freelancing brand identities, digital interfaces, and high-fidelity Figma prototypes for local and international clients." 
  },
  { 
    year: "2022", 
    title: "Creative Design Director", 
    description: "Led the creative team for the FEU Tech Alliance, establishing visual standards and mentoring junior designers." 
  },
  { 
    year: "Early 2025", 
    title: "UI/UX & Front-End Intern", 
    description: "Translated wireframes into developer-friendly interfaces at Ayahtek, improving design-to-development workflows." 
  },
  { 
    year: "NOW", 
    title: "Software Engineer", 
    description: "Designing and developing responsive enterprise SaaS platforms with Vue.js and Tailwind CSS, maintaining a reusable UI component library.", 
    isCurrent: true 
  },
  { 
    year: "NEXT", 
    title: "Product Designer / UI/UX", 
    description: "Fully leveraging my hybrid background to architect holistic, user-centered digital experiences from initial concept to production code.", 
    isFuture: true 
  }
];

const emailAddress = 'ericamiles.magana17@gmail.com'
const isCopied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(emailAddress)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 3000) 
  } catch (err) {
    console.error('Failed to copy email:', err)
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-32 space-y-32">
    
    <!-- Hero / Intro -->
    <section class="text-center mb-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 font-mono-space text-xs uppercase tracking-widest mb-6">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        Narrative Log // Origin
      </div>
      <h1 class="font-display text-5xl md:text-6xl text-slate-900 dark:text-slate-100">
        I started with visuals.<br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">Then I learned to build them.</span>
      </h1>
    </section>

    <!-- The Journey Timeline -->
    <section class="relative">
      <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent"></div>
      
      <div class="space-y-16">
        <div v-for="item in timeline" :key="item.year" class="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
          
          <!-- Timeline Node -->
          <div 
            class="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-colors duration-500" 
            :class="[
              item.isCurrent ? 'border-cyan-500 shadow-[0_0_15px_#22d3ee] bg-slate-100 dark:bg-slate-900' : 
              item.isFuture ? 'border-purple-500/40 border-dashed bg-transparent' : 
              'border-purple-400 bg-slate-100 dark:bg-slate-900'
            ]"
          ></div>
          
          <!-- Left Side (Year) -->
          <div class="md:w-1/2 pl-16 md:pl-0 md:pr-16 md:text-right mb-2 md:mb-0">
            <span class="font-mono-space text-2xl font-bold transition-colors" 
              :class="[
                item.isCurrent ? 'text-cyan-600 dark:text-cyan-400' : 
                item.isFuture ? 'text-purple-600/50 dark:text-purple-400/50' : 
                'text-purple-600 dark:text-purple-400'
              ]">
              {{ item.year }}
            </span>
          </div>
          
          <!-- Right Side (Content) -->
          <div class="md:w-1/2 pl-16 md:pl-16 transition-opacity" :class="item.isFuture ? 'opacity-60' : 'opacity-100'">
            <h3 class="font-display text-2xl mb-2" :class="item.isFuture ? 'text-slate-600 dark:text-slate-400' : 'text-slate-900 dark:text-slate-100'">
              {{ item.title }}
            </h3>
            <p class="text-sm leading-relaxed" :class="item.isFuture ? 'text-slate-500 dark:text-slate-500' : 'text-slate-600 dark:text-slate-400'">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Terminal Grid (Skills) -->
    <section>
      <h2 class="font-display text-3xl text-center text-slate-900 dark:text-slate-100 mb-10">Design & Engineering Matrix</h2>
      <TerminalGrid />
    </section>

    <!-- Education & Certifications -->
    <section class="max-w-4xl mx-auto">
      <div class="bg-white/70 dark:bg-slate-900/40 border border-emerald-500/30 p-8 md:p-12 rounded-2xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
        
        <div class="flex items-center justify-center mb-10">
          <h3 class="font-mono-space text-emerald-600 dark:text-emerald-400 tracking-widest text-sm uppercase">
            // Education & Certifications
          </h3>
        </div>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-slate-700 dark:text-slate-300 font-sans">
          
          <li class="flex items-start gap-4">
            <span class="text-emerald-500 mt-1 flex-shrink-0">✦</span>
            <div>
              <p class="font-bold text-slate-900 dark:text-slate-100">B.S. Information Technology</p>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Specialization in Web & Mobile<br/>FEU Institute of Technology (2025)</p>
            </div>
          </li>
          
          <li class="flex items-start gap-4">
            <span class="text-emerald-500 mt-1 flex-shrink-0">✦</span>
            <div>
              <p class="font-bold text-slate-900 dark:text-slate-100">Google UX Design Professional Certificate</p>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Coursera (Feb 2026)</p>
            </div>
          </li>
          
          <li class="flex items-start gap-4">
            <span class="text-emerald-500 mt-1 flex-shrink-0">✦</span>
            <div>
              <p class="font-bold text-slate-900 dark:text-slate-100">PMI Project Management Ready™</p>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Project Management Institute (Dec 2024)</p>
            </div>
          </li>
          
          <li class="flex items-start gap-4">
            <span class="text-emerald-500 mt-1 flex-shrink-0">✦</span>
            <div>
              <p class="font-bold text-slate-900 dark:text-slate-100">IT Specialist: HTML & CSS</p>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Certiport (Nov 2024)</p>
            </div>
          </li>

        </ul>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="text-center pb-20">
      <h2 class="font-display text-4xl text-slate-900 dark:text-slate-100 mb-6">Initialize Communication</h2>
      <p class="text-slate-600 dark:text-slate-400 mb-10 max-w-md mx-auto">Open to new opportunities, collaborations, and discussions about bridging design and code.</p>
      
      <div class="flex items-center justify-center gap-4">
        
        <!-- Copy Email Icon Button (Left) -->
        <button 
          @click="copyEmail"
          class="relative group bg-white/60 dark:bg-slate-900/50 hover:bg-purple-500/10 border border-slate-300 dark:border-purple-500 transition-all duration-300 text-purple-700 dark:text-purple-300 w-14 h-14 flex items-center justify-center rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-sm cursor-custom"
          aria-label="Copy Email Address"
        >
          <!-- Default Copy Icon -->
          <svg v-if="!isCopied" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          
          <!-- Copied Checkmark Icon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 relative z-10 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>

          <!-- Hover Tooltip -->
          <span class="absolute -top-12 px-3 py-1.5 rounded-md text-[10px] font-mono-space uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap backdrop-blur-md border shadow-md bg-white/90 dark:bg-slate-900/90 border-purple-500/30 text-purple-700 dark:text-purple-300">
            {{ isCopied ? 'Copied!' : 'Copy Email' }}
          </span>

          <!-- Shine effect -->
          <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent transition-transform duration-700 ease-in-out"></div>
        </button>

        <!-- Electronic Mail Me Button (Right) -->
        <a 
          href="mailto:ericamiles.magana17@gmail.com" 
          class="relative group bg-cyan-600/90 dark:bg-cyan-500/20 hover:bg-cyan-500 dark:hover:bg-cyan-500/40 border border-cyan-400 text-white dark:text-cyan-300 font-mono-space text-xs px-8 h-14 flex items-center rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] overflow-hidden text-center cursor-custom"
        >
          <span class="relative z-10">Electronic Mail Me</span>
          <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></div>
        </a>

      </div>
    </section>

  </div>

  <!-- ========================================== -->
  <!-- SYSTEM TOAST NOTIFICATION                  -->
  <!-- ========================================== -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-10 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-10 opacity-0"
  >
    <div 
      v-if="isCopied" 
      class="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-purple-500/50 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.3)] pointer-events-none"
    >
      <!-- Blinking status dot -->
      <span class="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
      <!-- Terminal style message -->
      <span class="font-mono-space text-xs uppercase tracking-widest text-purple-700 dark:text-purple-300">
        Email_Address_Copied_To_Clipboard
      </span>
    </div>
  </transition>
</template>