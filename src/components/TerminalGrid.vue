<script setup lang="ts">
const techStack = [
  { 
    category: 'Design & UX', 
    tools: ['UI/UX Design', 'Wireframing & Flows', 'Figma', 'Adobe Photoshop', 'Illustrator'] 
  },
  { 
    category: 'Front-End', 
    tools: ['Vue.js', 'React.js', 'Nuxt.js', 'Tailwind CSS', 'Shadcn UI'] 
  },
  { 
    category: 'Back-End & DB', 
    tools: ['Laravel', 'Supabase', 'MySQL', 'RESTful APIs'] 
  },
  { 
    category: 'Tools & Workflow', 
    tools: ['Git & SourceTree', 'AWS S3', 'Brevo', 'Agile / Scrum'] 
  }
]
</script>

<template>
  <div class="bg-white/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-md rounded-br-md overflow-hidden shadow-md transition-colors">
    <!-- Terminal Header -->
    <div class="bg-slate-200 dark:bg-slate-950 px-6 py-4 border-b border-slate-300 dark:border-slate-800 flex justify-between items-center transition-colors">
      <span class="font-mono text-xs text-cyan-700 dark:text-cyan-500 uppercase tracking-widest">
        user@miles:~/system/capabilities
      </span>
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-700"></div>
        <div class="w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-700"></div>
        <div class="w-3 h-3 rounded-full bg-purple-500/70"></div>
      </div>
    </div>
    
    <!-- Grid Body -->
    <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="stack in techStack" :key="stack.category">
        <h3 class="font-mono text-sm text-purple-700 dark:text-purple-400 mb-4 border-b border-purple-500/20 pb-2">
          ./{{ stack.category.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_') }}
        </h3>
        <ul class="space-y-3">
          <li v-for="tool in stack.tools" :key="tool" class="font-mono text-sm text-slate-700 dark:text-slate-300 flex items-center before:content-['>'] before:text-cyan-600 dark:before:text-cyan-500 before:mr-3">
            {{ tool }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>