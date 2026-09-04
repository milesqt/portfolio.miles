<script setup lang="ts">
// Global layout wrapper for Nuxt
</script>

<template>
  <div
    class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500/30 flex flex-col"
  >
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <!-- 1. Ambient Mana Nebulae (The Magic) -->
      <div
        class="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[120px]"
      ></div>
      <div
        class="absolute top-[50%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/10 blur-[100px]"
      ></div>
      <div
        class="absolute -bottom-[20%] left-[20%] w-[60vw] h-[40vw] rounded-full bg-indigo-900/10 blur-[150px]"
      ></div>

      <!-- 2. Vertical Data Streams (The Tech) -->
      <div
        class="hidden lg:block absolute top-0 left-[4%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
      >
        <!-- Glowing data packet traveling down -->
        <div
          class="absolute top-0 left-[-1px] w-[3px] h-16 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-[pulse_3s_linear_infinite] translate-y-[100vh]"
        ></div>
      </div>

      <div
        class="hidden lg:block absolute top-0 right-[4%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
      >
        <!-- Glowing data packet traveling up -->
        <div
          class="absolute bottom-0 left-[-1px] w-[3px] h-20 bg-purple-400 shadow-[0_0_10px_#c084fc] animate-[pulse_4s_linear_infinite] -translate-y-[100vh]"
        ></div>
      </div>

      <!-- 3. Floating Tech Runes / Syntax (Optional) -->
      <div
        class="absolute top-[25%] left-[6%] font-mono-space text-cyan-400/40 text-sm rotate-90 tracking-widest floating-rune-1"
      >
        // SYS.INIT
      </div>

      <div
        class="absolute bottom-[30%] right-[6%] font-mono-space text-purple-400/40 text-sm -rotate-90 tracking-widest floating-rune-2"
      >
        AWAIT MANA;
      </div>

      <div
        class="absolute top-[60%] left-[10%] font-mono-space text-slate-500/40 text-xs tracking-widest floating-rune-3"
      >
        [ 0x7F_ARCANE ]
      </div>
    </div>

    <!-- Hovering Nav Bar (The Control Module) -->
    <header class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300">
      
      <!-- Upgraded to a denser blur, persistent cyan border, and a constant ambient glow -->
      <nav class="relative flex items-center justify-between px-8 py-4 bg-slate-950/80 backdrop-blur-xl border border-cyan-500/40 rounded-full shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-all duration-500">
        
        <!-- Top decorative tech-line to make it look like hardware -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

        <!-- Brand / Logo -->
        <NuxtLink to="/" class="font-display font-bold text-3xl text-slate-100 hover:text-cyan-400 transition-colors drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
          Miles<span class="text-purple-500">.</span>
        </NuxtLink>

        <!-- Navigation Links (Made brighter with text-slate-300) -->
        <div class="hidden md:flex items-center gap-10 font-mono-space text-xs uppercase tracking-widest text-slate-300">
          <NuxtLink to="/" class="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all">Home</NuxtLink>
          <NuxtLink to="/projects" class="hover:text-purple-400 hover:drop-shadow-[0_0_8px_#c084fc] transition-all">Work</NuxtLink>
          <NuxtLink to="/about" class="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all">About</NuxtLink>
        </div>

        <!-- Action Button (Resume/Contact - Stronger Fill on Hover) -->
        <a 
          href="/resume.pdf" 
          target="_blank" 
          class="px-6 py-2.5 text-xs font-mono-space uppercase tracking-widest text-slate-950 bg-cyan-500/90 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
        >
          Resume
        </a>
      </nav>
    </header>

    <!-- Main Page Content -->
    <!-- Added pt-32 (padding-top) so your page content doesn't get hidden behind the floating nav! -->
    <main class="flex-grow pt-32">
      <slot />
    </main>

    <!-- Minimal Techno-Footer -->
    <footer
      class="border-t border-slate-900/80 py-8 text-center mt-20 relative overflow-hidden"
    >
      <!-- Subtle footer glow -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-purple-900/10 blur-[50px] pointer-events-none"
      ></div>

      <p
        class="font-mono-space text-xs text-slate-600 relative z-10 uppercase tracking-widest"
      >
        [System_v4.0.0] // Crafted with Nuxt & Tailwind
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* Optional: Adds a cool active state for the link of the page you are currently on */
.router-link-active {
  color: #22d3ee; /* text-cyan-400 */
  text-shadow: 0 0 8px rgba(34, 211, 238, 0.5);
}
</style>
