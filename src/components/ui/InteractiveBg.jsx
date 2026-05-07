import { useEffect, useRef } from 'react'

export default function InteractiveBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let mouse = { x: 0, y: 0 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const wave1 = {
      amp: 35,
      len: 180,
      speed: 0.008,
      phase: 0,
      color: 'rgba(66,153,225,0.15)',
    }
    const wave2 = {
      amp: 50,
      len: 260,
      speed: 0.005,
      phase: Math.PI,
      color: 'rgba(246,173,85,0.12)',
    }
    const wave3 = {
      amp: 25,
      len: 130,
      speed: 0.003,
      phase: Math.PI / 2,
      color: 'rgba(45,55,72,0.08)',
    }

    const draw = () => {
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      const grad = ctx.createLinearGradient(0, 0, 0, h)
      grad.addColorStop(0, '#FAFBFC')
      grad.addColorStop(1, '#F0F4F8')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      const drawWave = (wave) => {
        ctx.beginPath()
        ctx.moveTo(0, h / 2)

        const mouseInfluence = 0.15
        for (let x = 0; x < w; x++) {
          const dist = mouse.x - x
          const mouseAmp = Math.exp(-Math.abs(dist) / 400) * 20
          const y =
            h / 2 +
            (wave.amp + mouseAmp) *
              Math.sin((x / wave.len) + wave.phase + mouse.x * 0.0005)
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = wave.color
        ctx.lineWidth = 2
        ctx.stroke()
        wave.phase += wave.speed
      }

      drawWave(wave1)
      drawWave(wave2)
      drawWave(wave3)

      raf = requestAnimationFrame(draw)
    }

    const handleMouse = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouse)

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="bg-canvas"
      aria-hidden="true"
    />
  )
}
