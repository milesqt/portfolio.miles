<script setup lang="ts">
const techStack = [
  { category: 'Front-End', tools: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Shadcn UI'] },
  { category: 'Back-End & DB', tools: ['Laravel', 'Supabase', 'MySQL'] },
  { category: 'Design & UX', tools: ['Figma', 'UX Motion', 'Canva'] },
  { category: 'Certifications', tools: ['Google UX Design Pro', 'Git / SourceTree'] }
]
</script>

<template>
  <div class="bg-slate-900 border border-slate-800 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-md rounded-br-md overflow-hidden shadow-lg">
    <!-- Terminal Header -->
    <div class="bg-slate-950 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
      <span class="font-mono text-xs text-cyan-500 uppercase tracking-widest">
        user@miles:~/system/capabilities
      </span>
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-slate-700"></div>
        <div class="w-3 h-3 rounded-full bg-slate-700"></div>
        <div class="w-3 h-3 rounded-full bg-purple-500/50"></div>
      </div>
    </div>
    
    <!-- Grid Body -->
    <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="stack in techStack" :key="stack.category">
        <h3 class="font-mono text-sm text-purple-400 mb-4 border-b border-purple-500/20 pb-2">
          ./{{ stack.category.toLowerCase().replace(/ & /g, '_') }}
        </h3>
        <ul class="space-y-3">
          <!-- Chevron before elements changed to Cyan -->
          <li v-for="tool in stack.tools" :key="tool" class="font-mono text-sm text-slate-300 flex items-center before:content-['>'] before:text-cyan-500 before:mr-3">
            {{ tool }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>