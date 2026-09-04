<script setup lang="ts">
import { ref } from 'vue'

// Defining our project structure
interface Project {
  id: number
  title: string
  role: string
  description: string
  tags: string[]
  isFeatured?: boolean
}

// Your actual project data populated here
const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Current',
    role: 'UI/UX Designer',
    description: 'Interactive social media app prototype built for the Figma Makeathon. Features experimental UX motion interactions like "Scratch-to-Dislike" and "Shake-to-Reset".',
    tags: ['Figma', 'UX Motion', 'Prototyping'],
    isFeatured: true
  },
  {
    id: 2,
    title: 'Empleo',
    role: 'Software Engineer & Marketer',
    description: 'Comprehensive HR software platform. Handled full-stack feature development as well as the brand identity and social media marketing campaigns.',
    tags: ['Vue.js', 'Laravel', 'Tailwind', 'Canva'],
  },
  {
    id: 3,
    title: 'Kidopass & LGU360',
    role: 'Front-End Developer',
    description: 'Contributed to UI revamps, feature implementations, and bug fixes across multiple robust web applications.',
    tags: ['Nuxt.js', 'Supabase', 'Git'],
  },
  {
    id: 4,
    title: 'Elvion & LiftNow PH',
    role: 'Digital Marketer & Designer',
    description: 'Spearheaded content planning, visual asset creation, and social media branding campaigns for consumer products.',
    tags: ['Branding', 'Social Media', 'Design'],
  }
])
</script>

<template>
  <section class="w-full max-w-6xl mx-auto py-16 px-6">
    <div class="mb-12 border-b border-purple-500/30 pb-4 flex items-baseline justify-between">
      <h2 class="font-display text-4xl text-purple-300 tracking-wider">
        <span class="text-emerald-500 font-mono text-lg mr-2">01.</span> Archives
      </h2>
      <div class="hidden md:block font-mono text-xs text-slate-500 uppercase tracking-widest">
        // Data_Retrieval_Complete
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <article 
        v-for="project in projects" 
        :key="project.id"
        class="group relative bg-slate-900/40 border border-slate-700 hover:border-purple-400/60 transition-colors duration-500 p-8 flex flex-col justify-between"
        :class="[
          // Art Nouveau influence: Asymmetrical, sweeping organic curves mixed with sharp structural corners
          'rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-sm rounded-br-sm'
        ]"
      >
        <div class="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-emerald-500/20 rounded-tr-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div>
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-display text-2xl text-slate-100 group-hover:text-purple-300 transition-colors">
              {{ project.title }}
            </h3>
            <span v-if="project.isFeatured" class="font-mono text-[10px] text-emerald-400 border border-emerald-400/30 px-2 py-1 rounded-full uppercase tracking-wider bg-emerald-950/30">
              Featured
            </span>
          </div>
          
          <p class="font-mono text-xs text-emerald-300/70 mb-4 uppercase tracking-widest">
            {{ project.role }}
          </p>
          
          <p class="text-sm text-slate-400 leading-relaxed mb-8">
            {{ project.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 mt-auto">
          <span 
            v-for="tag in project.tags" 
            :key="tag"
            class="font-mono text-[11px] text-slate-300 bg-slate-800 px-3 py-1.5 rounded-br-lg rounded-tl-lg border border-slate-700"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
