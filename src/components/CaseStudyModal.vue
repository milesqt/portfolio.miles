<script setup lang="ts">
defineProps<{
  isOpen: boolean
  project: any
}>()

defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center px-4">
        
        <!-- Backdrop Blur -->
        <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" @click="$emit('close')"></div>
        
        <!-- Modal Content -->
        <div class="relative bg-slate-900 border border-emerald-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-md rounded-br-md p-8 md:p-12 shadow-2xl">
          
          <button 
            @click="$emit('close')" 
            class="absolute top-8 right-8 font-mono text-slate-400 hover:text-emerald-400 transition-colors uppercase text-xs tracking-widest border border-slate-700 hover:border-emerald-500/50 px-4 py-2 rounded-full bg-slate-950/50"
          >
            [Close_Process]
          </button>
          
          <div v-if="project" class="mt-8">
            <h2 class="font-display text-4xl text-purple-300 mb-2">{{ project.title }}</h2>
            <p class="font-mono text-emerald-400 text-sm uppercase tracking-widest mb-8 border-b border-slate-800 pb-4">
              Role: {{ project.role }}
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="md:col-span-2 space-y-6 text-slate-300 leading-relaxed">
                <h3 class="font-mono text-xs text-slate-500 uppercase tracking-widest">System Log</h3>
                <p>{{ project.description }}</p>
                <p>{{ project.extendedDetails }}</p>
              </div>
              
              <div>
                <h3 class="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">Tech Specs</h3>
                <div class="flex flex-col gap-2">
                  <span 
                    v-for="tag in project.tags" 
                    :key="tag"
                    class="font-mono text-[11px] text-slate-300 bg-slate-950 px-3 py-2 rounded-br-lg rounded-tl-lg border border-slate-800 inline-block text-center"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.98) translateY(10px);
}
</style>