<!-- src/components/MouseTrail.vue -->
<script setup>
import { onMounted, onUnmounted } from 'vue'

let isHoveringLink = false

const handleMouseMove = (e) => {
  isHoveringLink = e.target.closest('a, button, [role="button"]') !== null
  createSparkle(e.clientX, e.clientY)
}

const createSparkle = (x, y) => {
  const sparkle = document.createElement('div')
  
  // Slightly increased size range to make the intricate star shapes visible
  const size = Math.random() * 12 + 8
  
  // Removed rounded-full and added centering properties
  sparkle.className = 'pointer-events-none fixed z-[9999] mix-blend-screen transition-all duration-700 flex items-center justify-center'
  sparkle.style.width = `${size}px`
  sparkle.style.height = `${size}px`
  sparkle.style.left = `${x - size / 2}px`
  sparkle.style.top = `${y - size / 2}px`
  
  const color = isHoveringLink ? '#c084fc' : '#22d3ee'

  // Insert a 4-point magical diamond/star SVG
  sparkle.innerHTML = `
    <svg viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"/>
    </svg>
  `

  // Use drop-shadow filter instead of box-shadow so the glow matches the star shape
  sparkle.style.filter = `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color})`

  document.body.appendChild(sparkle)

  // Trigger the animation
  requestAnimationFrame(() => {
    const fallX = (Math.random() - 0.5) * 50
    const fallY = Math.random() * 50 + 20
    
    // Add a random rotation between -90 and 90 degrees so they spin as they fall
    const rotation = Math.random() * 180 - 90 
    
    sparkle.style.transform = `translate(${fallX}px, ${fallY}px) scale(0) rotate(${rotation}deg)`
    sparkle.style.opacity = '0'
  })

  // Clean up
  setTimeout(() => {
    sparkle.remove()
  }, 700)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
