<script setup lang="ts">
const route = useRoute()
// Here you would fetch the specific project data from Supabase using route.params.slug
// Mock data for demonstration:
const project = {
  title: 'Empleo HR System',
  role: 'Lead Product Designer & Front-End Developer',
  context: 'A comprehensive HR software platform designed to streamline employee management and payroll. The challenge was simplifying complex enterprise data into an intuitive, accessible dashboard.',
  tech: ['Figma', 'Vue.js', 'Tailwind', 'Laravel'],
  liveLink: 'https://empleo.example.com'
}
</script>

<template>
  <article class="max-w-4xl mx-auto px-6 py-16">
    <!-- Project Header -->
    <header class="mb-16 text-center">
      <h1 class="font-display text-4xl md:text-5xl text-purple-300 mb-4">{{ project.title }}</h1>
      <p class="font-mono text-sm text-emerald-400 uppercase tracking-widest">{{ project.role }}</p>
    </header>

    <!-- Hero Image (Silver MacBook Mockup Area) -->
    <div class="w-full aspect-[16/10] bg-slate-900 border border-slate-800 rounded-lg mb-16 flex items-center justify-center overflow-hidden relative">
      <span class="font-mono text-slate-600">[MacBook_Mockup_Render_Here]</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Left Column: Context & Tech -->
      <div class="md:col-span-1 space-y-8">
        <div>
          <h3 class="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">The Context</h3>
          <p class="text-sm text-slate-300 leading-relaxed">{{ project.context }}</p>
        </div>
        
        <div>
          <h3 class="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">Tech Stack</h3>
          <div class="flex flex-wrap gap-2">
            <!-- TechBadge Component Placeholder -->
            <span v-for="tech in project.tech" :key="tech" class="px-3 py-1 bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 rounded-full">
              {{ tech }}
            </span>
          </div>
        </div>

        <a v-if="project.liveLink" :href="project.liveLink" target="_blank" class="inline-block border border-emerald-500/50 text-emerald-400 font-mono text-xs px-4 py-2 hover:bg-emerald-950 transition-colors">
          Initialize Live Site ->
        </a>
      </div>

      <!-- Right Column: Process & Handoff -->
      <div class="md:col-span-2 space-y-12">
        <section>
          <h2 class="font-display text-2xl text-slate-200 mb-4 border-b border-slate-800 pb-2">The Design Process</h2>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">
            Starting with low-fidelity wireframes, I mapped out the core user flows to ensure data density didn't overwhelm the user. The UI was built around a strict 8pt grid system.
          </p>
          <!-- ImageLightbox Placeholder -->
          <div class="w-full h-48 bg-slate-800/50 border border-slate-700 rounded flex items-center justify-center cursor-pointer hover:border-purple-500/50 transition-colors">
            <span class="font-mono text-xs text-slate-500">[Click to Expand Wireframes]</span>
          </div>
        </section>

        <section>
          <h2 class="font-display text-2xl text-slate-200 mb-4 border-b border-slate-800 pb-2">The Handoff & Development</h2>
          <p class="text-slate-400 text-sm leading-relaxed">
            By maintaining parity between Figma auto-layout components and Shadcn UI primitives, the translation from design to Nuxt codebase was seamless. Design tokens for typography and spacing were directly mapped to the Tailwind configuration, ensuring a 1:1 match in production.
          </p>
        </section>
      </div>
    </div>
  </article>
</template>