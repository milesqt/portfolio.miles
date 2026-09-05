<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MouseTrail from '../components/MouseTrail.vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isDarkMode = ref(true)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 200
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  if (isMenuOpen.value) isMenuOpen.value = false
}

// // Theme toggling logic
// const toggleTheme = () => {
//   isDarkMode.value = !isDarkMode.value
//   if (isDarkMode.value) {
//     document.documentElement.classList.remove('light-mode')
//     localStorage.setItem('theme', 'dark')
//   } else {
//     document.documentElement.classList.add('light-mode')
//     localStorage.setItem('theme', 'light')
//   }
// }

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Check saved theme or system preference on load
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDarkMode.value = false
    document.documentElement.classList.add('light-mode')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div 
    class="min-h-screen font-sans selection:bg-purple-500/35 flex flex-col cursor-custom overflow-x-hidden transition-colors duration-500"
    :class="isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'"
  >
    
    <!-- SPARKLE TRAIL -->
    <MouseTrail />

    <!-- ========================================== -->
    <!-- GLOBAL ENVIRONMENT: MAGIC & TECH BACKGROUND -->
    <!-- ========================================== -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-500">
      <!-- Ambient Mana Nebulae -->
      <div class="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] transition-colors duration-500" :class="isDarkMode ? 'bg-purple-900/10' : 'bg-purple-400/20'"></div>
      <div class="absolute top-[50%] -right-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] transition-colors duration-500" :class="isDarkMode ? 'bg-cyan-900/15' : 'bg-cyan-400/20'"></div>
      <div class="absolute -bottom-[20%] left-[20%] w-[60vw] h-[40vw] rounded-full blur-[150px] transition-colors duration-500" :class="isDarkMode ? 'bg-indigo-900/10' : 'bg-indigo-300/20'"></div>

      <!-- Vertical Data Streams -->
      <div class="hidden lg:block absolute top-0 left-[4%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent">
        <div class="absolute top-0 left-[-1px] w-[3px] h-16 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-[pulse_3s_linear_infinite] translate-y-[100vh]"></div>
      </div>
      
      <div class="hidden lg:block absolute top-0 right-[4%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent">
        <div class="absolute bottom-0 left-[-1px] w-[3px] h-20 bg-purple-400 shadow-[0_0_10px_#c084fc] animate-[pulse_4s_linear_infinite] -translate-y-[100vh]"></div>
      </div>

      <!-- Holographic Cardistry -->
      <div class="hidden 2xl:flex absolute top-[24%] left-[8%] w-16 h-24 border-2 rounded-md backdrop-blur-sm items-center justify-center floating-card-1 transition-colors duration-500" :class="isDarkMode ? 'border-purple-500/30 bg-purple-950/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'border-purple-400/40 bg-purple-200/40 shadow-[0_0_15px_rgba(168,85,247,0.15)]'">
        <span class="font-display text-3xl drop-shadow-[0_0_6px_currentColor]" :class="isDarkMode ? 'text-purple-400/80' : 'text-purple-600'">♠</span>
        <div class="absolute inset-1 border border-dashed rounded-sm" :class="isDarkMode ? 'border-purple-500/20' : 'border-purple-400/30'"></div>
      </div>
      
      <div class="hidden 2xl:flex absolute bottom-[25%] right-[8%] w-16 h-24 border-2 rounded-md backdrop-blur-sm items-center justify-center floating-card-2 transition-colors duration-500" :class="isDarkMode ? 'border-cyan-500/30 bg-cyan-950/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'border-cyan-400/40 bg-cyan-200/40 shadow-[0_0_15px_rgba(34,211,238,0.15)]'">
        <span class="font-display text-3xl drop-shadow-[0_0_6px_currentColor]" :class="isDarkMode ? 'text-cyan-400/80' : 'text-cyan-600'">♦</span>
        <div class="absolute inset-1 border border-dashed rounded-sm" :class="isDarkMode ? 'border-cyan-500/20' : 'border-cyan-400/30'"></div>
      </div>

      <!-- Floating Tech Runes & Mana Status  -->
      <div class="hidden 2xl:block absolute top-[80%] left-[10%] font-mono-space text-xs tracking-widest rotate-90 floating-rune-1" :class="isDarkMode ? 'text-cyan-400/50' : 'text-cyan-600/60'">
        [ 0x17F_ARCANE ]
      </div>
      
      <div class="hidden 2xl:block absolute top-[20%] right-[3%] font-mono-space text-xs tracking-widest rotate-180 floating-rune-2" :class="isDarkMode ? 'text-purple-400/40' : 'text-purple-600/50'">
        MAINTAINING MANA;
      </div>
    </div>

    <!-- ========================================== -->
    <!-- DYNAMIC SCROLL NAVBAR (Frosted Violet HUD)  -->
    <!-- ========================================== -->
    <header 
      class="fixed top-4 left-6 right-6 md:left-12 md:right-12 z-50 flex flex-col transition-all duration-300 max-w-7xl mx-auto rounded-2xl"
      :class="isScrolled || isMenuOpen ? (isDarkMode ? 'bg-purple-950/40 backdrop-blur-xl border border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.3)]' : 'bg-white/60 backdrop-blur-xl border border-purple-400/50 shadow-[0_0_25px_rgba(168,85,247,0.2)]') : 'bg-transparent border-transparent'"
    >
      <div class="flex items-center justify-between py-3 px-6 transition-all duration-300" :class="isScrolled || isMenuOpen ? 'py-2.5' : ''">
        
        <!-- Logo Marker -->
        <a href="/" @click="closeMenu" class="font-display font-bold text-2xl transition-colors drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]" :class="isDarkMode ? 'text-slate-100 hover:text-cyan-400' : 'text-slate-900 hover:text-cyan-600'">
          erica miles<span class="text-purple-500">.</span>
        </a>

        <!-- Desktop Horizontal Links -->
        <nav class="hidden md:flex items-center gap-10 font-mono-space text-xs uppercase tracking-widest transition-colors" :class="isDarkMode ? 'text-slate-300' : 'text-slate-700'">
          <a href="/" class="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all">Home</a>
          <a href="/portfolio.miles/works" class="hover:text-purple-400 hover:drop-shadow-[0_0_8px_#c084fc] transition-all">Work</a>
          <a href="/portfolio.miles/about" class="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all">About</a>
          <!-- <a href="/portfolio.miles/playground" class="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all">Playground</a> -->
        </nav>

        <!-- Mobile Techno-Magic Button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden flex items-center justify-center p-2 focus:outline-none group"
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            class="w-7 h-7 transition-all duration-500 ease-in-out"
            :class="isMenuOpen ? 'rotate-180 scale-110 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,1)]' : (isDarkMode ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'text-cyan-600 drop-shadow-[0_0_8px_rgba(8,145,178,0.6)]')"
          >
            <polygon points="12,2 2,10 12,14" class="fill-current opacity-80" />
            <polygon points="12,2 22,10 12,14" class="fill-current opacity-40" />
            <polygon points="2,10 12,22 12,14" class="fill-current opacity-60" />
            <polygon points="22,10 12,22 12,14" class="fill-current opacity-20" />
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <nav 
          v-show="isMenuOpen" 
          class="md:hidden flex flex-col items-center py-6 space-y-6 font-mono-space text-xs uppercase tracking-widest border-t transition-colors"
          :class="isDarkMode ? 'text-slate-300 border-purple-500/30' : 'text-slate-700 border-purple-400/30'"
        >
          <a href="/" @click="closeMenu" class="hover:text-cyan-400 transition-all">Home</a>
          <a href="/portfolio.miles/works" @click="closeMenu" class="hover:text-purple-400 transition-all">Work</a>
          <a href="/portfolio.miles/about" @click="closeMenu" class="hover:text-cyan-400 transition-all">About</a>
          <a href="/portfolio.miles/playground" @click="closeMenu" class="hover:text-cyan-400 transition-all">Playground</a>
        </nav>
      </transition>
    </header>

    <!-- ========================================== -->
    <!-- FLOATING BOTTOM-LEFT SUN/MOON THEME TOGGLE -->
    <!-- ========================================== -->
    <!-- <div class="fixed bottom-6 right-6 z-50">
      <button 
        @click="toggleTheme"
        class="relative group flex items-center justify-center w-12 h-12 rounded-xl backdrop-blur-md border transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
        :class="isDarkMode ? 'bg-slate-900/80 border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:border-cyan-400' : 'bg-white/80 border-purple-500/45 text-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:border-purple-500'"
        :aria-label="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
      >
        <div class="absolute inset-0 rounded-xl border border-dashed animate-[spin_10s_linear_infinite] opacity-40 pointer-events-none" :class="isDarkMode ? 'border-cyan-400' : 'border-purple-500'"></div>

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="w-6 h-6 transition-transform duration-500"
          :class="isDarkMode ? 'rotate-0' : 'rotate-180'"
        >
          <path v-if="isDarkMode" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          <g v-else>
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="M4.93 4.93l1.41 1.41"></path>
            <path d="M17.66 17.66l1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="M6.34 17.66l-1.41 1.41"></path>
            <path d="M19.07 4.93l-1.41 1.41"></path>
          </g>
        </svg>

        <span class="absolute right-full mr-3 px-2.5 py-1 rounded-md text-[10px] font-mono-space uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap backdrop-blur-md border shadow-md" :class="isDarkMode ? 'bg-slate-900/90 border-cyan-500/30 text-cyan-300' : 'bg-white/90 border-purple-500/30 text-purple-700'">
          {{ isDarkMode ? 'Solar_Mode' : 'Arcane_Night' }}
        </span>
      </button>
    </div> -->

    <!-- Main Page Content -->
    <main class="flex-grow relative z-10 w-full">
      <slot />
    </main>

    <!-- Minimal Techno-Footer -->
    <footer class="border-t py-6 text-center relative overflow-hidden z-10 mt-auto transition-colors duration-500" :class="isDarkMode ? 'border-slate-900/60' : 'border-slate-200'">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 blur-[40px] pointer-events-none transition-colors duration-500" :class="isDarkMode ? 'bg-purple-900/10' : 'bg-purple-400/15'"></div>
      <p class="font-mono-space text-xs relative z-10 uppercase tracking-widest transition-colors" :class="isDarkMode ? 'text-slate-600' : 'text-slate-400'">
        [System_v1.0.0] // Crafted with Magic & Code
      </p>
    </footer>

  </div>
</template>

<style scoped>
.router-link-active {
  color: #22d3ee;
  text-shadow: 0 0 8px rgba(34, 211, 238, 0.5);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
  50% { transform: translateY(-12px) rotate(var(--rotation, 0deg)); }
}

.floating-rune-1 {
  --rotation: 90deg;
  animation: float 7s ease-in-out infinite;
}

.floating-rune-2 {
  --rotation: -90deg;
  animation: float 8s ease-in-out infinite;
  animation-delay: 1s;
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
  50% { transform: translateY(-15px) rotate(calc(var(--rotation, 0deg) + 4deg)); }
}

.floating-card-1 {
  --rotation: -12deg;
  animation: floatCard 7s ease-in-out infinite;
}

.floating-card-2 {
  --rotation: 12deg;
  animation: floatCard 9s ease-in-out infinite;
  animation-delay: 1.5s;
}
</style>