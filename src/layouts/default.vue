<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MouseTrail from '../components/MouseTrail.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500/30 flex flex-col cursor-custom overflow-x-hidden">
    
    <!-- SPARKLE TRAIL -->
    <MouseTrail />

    <!-- ========================================== -->
    <!-- GLOBAL ENVIRONMENT: MAGIC & TECH BACKGROUND -->
    <!-- ========================================== -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      <!-- Ambient Mana Nebulae -->
      <div class="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[120px]"></div>
      <div class="absolute top-[50%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/15 blur-[100px]"></div>
      <div class="absolute -bottom-[20%] left-[20%] w-[60vw] h-[40vw] rounded-full bg-indigo-900/10 blur-[150px]"></div>

      <!-- Vertical Data Streams -->
      <div class="hidden lg:block absolute top-0 left-[4%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent">
        <div class="absolute top-0 left-[-1px] w-[3px] h-16 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-[pulse_3s_linear_infinite] translate-y-[100vh]"></div>
      </div>
      
      <div class="hidden lg:block absolute top-0 right-[4%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent">
        <div class="absolute bottom-0 left-[-1px] w-[3px] h-20 bg-purple-400 shadow-[0_0_10px_#c084fc] animate-[pulse_4s_linear_infinite] -translate-y-[100vh]"></div>
      </div>

      <!-- Holographic Cardistry -->
      <div class="hidden 2xl:flex absolute top-[24%] left-[8%] w-16 h-24 border-2 border-purple-500/30 rounded-md bg-purple-950/30 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.2)] items-center justify-center floating-card-1">
        <span class="font-display text-purple-400/80 text-3xl drop-shadow-[0_0_6px_#c084fc]">♠</span>
        <div class="absolute inset-1 border border-purple-500/20 border-dashed rounded-sm"></div>
      </div>
      
      <div class="hidden 2xl:flex absolute bottom-[25%] right-[8%] w-16 h-24 border-2 border-cyan-500/30 rounded-md bg-cyan-950/30 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.2)] items-center justify-center floating-card-2">
        <span class="font-display text-cyan-400/80 text-3xl drop-shadow-[0_0_6px_#22d3ee]">♦</span>
        <div class="absolute inset-1 border border-cyan-500/20 border-dashed rounded-sm"></div>
      </div>

      <!-- Floating Tech Runes & Mana Status  -->
      <div class="hidden 2xl:block absolute top-[80%] left-[10%] font-mono-space text-cyan-400/50 text-xs tracking-widest rotate-90 floating-rune-1">
        [ 0x17F_ARCANE ]
      </div>
      
      <div class="hidden 2xl:block absolute top-[20%] right-[3%] font-mono-space text-purple-400/40 text-xs tracking-widest rotate-180 floating-rune-2">
        MAINTAINING MANA;
      </div>
    </div>

    <!-- ========================================== -->
    <!-- DYNAMIC SCROLL NAVBAR (Frosted Violet HUD)  -->
    <!-- ========================================== -->
    <header 
      class="fixed top-4 left-6 right-6 md:left-12 md:right-12 z-50 flex items-center justify-between py-3 px-6 transition-all duration-300 max-w-7xl mx-auto rounded-2xl"
      :class="isScrolled ? 'bg-purple-950/40 backdrop-blur-xl border border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.3)] py-2.5 px-6' : 'bg-transparent border-transparent'"
    >
      
      <!-- Logo Marker -->
      <a href="/" class="font-display font-bold text-xl text-slate-100 hover:text-cyan-400 transition-colors drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
        erica miles<span class="text-purple-500">.</span>
      </a>

      <!-- Horizontal Links -->
      <nav class="hidden md:flex items-center gap-10 font-mono-space text-xs uppercase tracking-widest text-slate-300">
        <a href="/" class="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all">Home</a>
        <a href="/portfolio.miles/works" class="hover:text-purple-400 hover:drop-shadow-[0_0_8px_#c084fc] transition-all">Work</a>
        <a href="/portfolio.miles/about" class="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all">About</a>
        <a href="/portfolio.miles/playground" class="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all">Playground</a>
      </nav>
    </header>

    <!-- Main Page Content (Centered dead-center) -->
    <main class="flex-grow relative z-10 flex items-center justify-center w-full">
      <slot />
    </main>

    <!-- Minimal Techno-Footer -->
    <footer class="border-t border-slate-900/60 py-6 text-center relative overflow-hidden z-10">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-purple-900/10 blur-[40px] pointer-events-none"></div>
      <p class="font-mono-space text-xs text-slate-600 relative z-10 uppercase tracking-widest">
        [System_v4.0.0] // Crafted with Vue & Tailwind
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