<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import MouseTrail from "../components/MouseTrail.vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 200;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  if (isMenuOpen.value) isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Force the HTML tag to use dark mode (works if Tailwind is set to class mode)
  document.documentElement.classList.add("dark");
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="min-h-screen font-sans selection:bg-purple-500/35 flex flex-col cursor-custom overflow-x-hidden transition-colors duration-500 bg-slate-950 text-slate-100">
    <!-- SPARKLE TRAIL -->
    <MouseTrail />

    <!-- ========================================== -->
    <!-- GLOBAL ENVIRONMENT: MAGIC & TECH BACKGROUND -->
    <!-- ========================================== -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-500">
      <!-- Ambient Mana Nebulae -->
      <div class="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] transition-colors duration-500 bg-purple-900/10"></div>
      <div class="absolute top-[50%] -right-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] transition-colors duration-500 bg-cyan-900/15"></div>
      <div class="absolute -bottom-[20%] left-[20%] w-[60vw] h-[40vw] rounded-full blur-[150px] transition-colors duration-500 bg-indigo-900/10"></div>

      <!-- Vertical Data Streams -->
      <div class="hidden lg:block absolute top-0 left-[4%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent">
        <div class="absolute top-0 left-[-1px] w-[3px] h-16 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-[pulse_3s_linear_infinite] translate-y-[100vh]"></div>
      </div>

      <div class="hidden lg:block absolute top-0 right-[4%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent">
        <div class="absolute bottom-0 left-[-1px] w-[3px] h-20 bg-purple-400 shadow-[0_0_10px_#c084fc] animate-[pulse_4s_linear_infinite] -translate-y-[100vh]"></div>
      </div>

      <!-- Holographic Cardistry -->
      <div class="hidden 2xl:flex absolute top-[24%] left-[8%] w-16 h-24 border-2 rounded-md backdrop-blur-sm items-center justify-center floating-card-1 transition-colors duration-500 border-purple-500/30 bg-purple-950/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
        <span class="font-display text-3xl drop-shadow-[0_0_6px_currentColor] text-purple-400/80">♠</span>
        <div class="absolute inset-1 border border-dashed rounded-sm border-purple-500/20"></div>
      </div>

      <div class="hidden 2xl:flex absolute bottom-[25%] right-[8%] w-16 h-24 border-2 rounded-md backdrop-blur-sm items-center justify-center floating-card-2 transition-colors duration-500 border-cyan-500/30 bg-cyan-950/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
        <span class="font-display text-3xl drop-shadow-[0_0_6px_currentColor] text-cyan-400/80">♦</span>
        <div class="absolute inset-1 border border-dashed rounded-sm border-cyan-500/20"></div>
      </div>

      <!-- Floating Tech Runes & Mana Status  -->
      <div class="hidden 2xl:block absolute top-[80%] left-[10%] font-mono-space text-xs tracking-widest rotate-90 floating-rune-1 text-cyan-400/50">
        [ 0x17F_ARCANE ]
      </div>

      <div class="hidden 2xl:block absolute top-[20%] right-[3%] font-mono-space text-xs tracking-widest rotate-180 floating-rune-2 text-purple-400/40">
        MAINTAINING MANA;
      </div>
    </div>

    <!-- ========================================== -->
    <!-- DYNAMIC SCROLL NAVBAR (Frosted Violet HUD)  -->
    <!-- ========================================== -->
    <header
      class="fixed top-4 left-6 right-6 md:left-12 md:right-12 z-50 flex flex-col transition-all duration-300 max-w-7xl mx-auto rounded-2xl"
      :class="isScrolled || isMenuOpen ? 'bg-purple-950/40 backdrop-blur-xl border border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.3)]' : 'bg-transparent border-transparent'"
    >
      <div
        class="flex items-center justify-between py-3 px-6 transition-all duration-300"
        :class="isScrolled || isMenuOpen ? 'py-2.5' : ''"
      >
        <!-- Logo Marker -->
        <h2
          class="font-display font-bold text-2xl transition-colors drop-shadow-[0_0_10px_rgba(6,182,212,0.4)] text-slate-100"
        >
          erica miles<span class="text-purple-500">.</span>
        </h2>

        <!-- Desktop Horizontal Links -->
        <nav class="hidden md:flex items-center gap-10 font-mono-space text-xs uppercase tracking-widest transition-colors text-slate-300">
          <router-link to="/" class="hover:text-cyan-400 transition-all">Home</router-link>
          <router-link to="/works" class="hover:text-purple-400 transition-all">Work</router-link>
          <router-link to="/about" class="hover:text-cyan-400 transition-all">About</router-link>
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
            :class="isMenuOpen ? 'rotate-180 scale-110 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,1)]' : 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]'"
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
          class="md:hidden flex flex-col items-center py-6 space-y-6 font-mono-space text-xs uppercase tracking-widest border-t transition-colors text-slate-300 border-purple-500/30"
        >
          <router-link to="/" @click="closeMenu" class="hover:text-cyan-400 transition-all">Home</router-link>
          <router-link to="/works" @click="closeMenu" class="hover:text-purple-400 transition-all">Work</router-link>
          <router-link to="/about" @click="closeMenu" class="hover:text-cyan-400 transition-all">About</router-link>
        </nav>
      </transition>
    </header>

    <!-- Main Page Content -->
    <main class="flex-grow relative z-10 w-full">
      <slot />
    </main>

    <!-- Minimal Techno-Footer -->
    <footer class="border-t py-6 text-center relative overflow-hidden mt-auto transition-colors duration-500 border-slate-900/60">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 blur-[40px] pointer-events-none transition-colors duration-500 bg-purple-900/10"></div>
      <p class="font-mono-space text-xs relative z-10 uppercase tracking-widest transition-colors text-slate-600">
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
  0%,
  100% {
    transform: translateY(0) rotate(var(--rotation, 0deg));
  }
  50% {
    transform: translateY(-12px) rotate(var(--rotation, 0deg));
  }
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
  0%,
  100% {
    transform: translateY(0) rotate(var(--rotation, 0deg));
  }
  50% {
    transform: translateY(-15px) rotate(calc(var(--rotation, 0deg) + 4deg));
  }
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