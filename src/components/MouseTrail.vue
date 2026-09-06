<!-- src/components/MouseTrail.vue -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

let isHoveringLink = false
const cursorWrapper = ref(null)
let mouseX = 0
let mouseY = 0
let animationId = null

const handleMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  
  const target = document.elementFromPoint(mouseX, mouseY)
  isHoveringLink = target && typeof target.closest === 'function' && target.closest('a, button, [role="button"], input, textarea') !== null

  createSparkle(mouseX, mouseY)
}

const updateCursorPosition = () => {
  if (cursorWrapper.value) {
    cursorWrapper.value.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    
    if (isHoveringLink) {
      cursorWrapper.value.classList.add('is-hovering')
    } else {
      cursorWrapper.value.classList.remove('is-hovering')
    }
  }
  animationId = requestAnimationFrame(updateCursorPosition)
}

const createSparkle = (x, y) => {
  const sparkle = document.createElement('div')
  const size = Math.random() * 12 + 8
  
  sparkle.className = 'pointer-events-none fixed z-[9998] mix-blend-screen transition-all duration-700 flex items-center justify-center'
  sparkle.style.width = `${size}px`
  sparkle.style.height = `${size}px`
  sparkle.style.left = `${x - size / 2}px`
  sparkle.style.top = `${y - size / 2}px`
  
  const color = isHoveringLink ? '#c084fc' : '#22d3ee'

  sparkle.innerHTML = `
    <svg viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"/>
    </svg>
  `

  sparkle.style.filter = `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color})`
  document.body.appendChild(sparkle)

  requestAnimationFrame(() => {
    const fallX = (Math.random() - 0.5) * 50
    const fallY = Math.random() * 50 + 20
    const rotation = Math.random() * 180 - 90 
    
    sparkle.style.transform = `translate(${fallX}px, ${fallY}px) scale(0) rotate(${rotation}deg)`
    sparkle.style.opacity = '0'
  })

  setTimeout(() => {
    sparkle.remove()
  }, 700)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { capture: true, passive: true })
  window.addEventListener('pointermove', handleMouseMove, { capture: true, passive: true })
  animationId = requestAnimationFrame(updateCursorPosition)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove, { capture: true })
  window.removeEventListener('pointermove', handleMouseMove, { capture: true })
  cancelAnimationFrame(animationId)
})
</script>

<template>
  <div 
    ref="cursorWrapper"
    class="pointer-events-none fixed top-0 left-0 z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center will-change-transform"
  >
    <!-- Default Core -->
    <div class="absolute w-2 h-2 bg-cyan-400 rotate-45 shadow-[0_0_10px_#22d3ee] transition-all duration-200 core-diamond"></div>

    <!-- Thicker, High-Visibility Hover Aura -->
    <div class="absolute w-10 h-10 border-2 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.8)] opacity-0 scale-50 transition-all duration-300 hover-aura">
      <div class="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-2 border-l-2 border-purple-200"></div>
      <div class="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-2 border-r-2 border-purple-200"></div>
      <div class="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-2 border-l-2 border-purple-200"></div>
      <div class="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-2 border-r-2 border-purple-200"></div>
    </div>
  </div>
</template>

<style scoped>
.is-hovering .core-diamond {
  background-color: #c084fc;
  box-shadow: 0 0 15px #c084fc;
  transform: rotate(90deg) scale(0.3);
}

.is-hovering .hover-aura {
  opacity: 1;
  transform: scale(1);
  animation: magic-spin 4s linear infinite;
}

@keyframes magic-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

:global(body), 
:global(a), 
:global(button), 
:global([role="button"]),
:global(input),
:global(textarea) {
  cursor: none !important;
}
</style>