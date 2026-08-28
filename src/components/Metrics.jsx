import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, ShieldCheck, Clock, FileCheck } from 'lucide-react'

function Counter({ target, prefix = '', suffix = '', decimals = 0, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1700
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setVal(Number((target * eased).toFixed(decimals)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    const t = setTimeout(() => { raf = requestAnimationFrame(tick) }, delay)
    return () => { clearTimeout(t); cancelAnimationFrame(raf) }
  }, [inView, target, delay, decimals])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val.toLocaleString('es-CL', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}

const stats = [
  { icon: Users, target: 50, suffix: '+', label: 'Comités de Agua', delay: 0 },
  { icon: ShieldCheck, target: 99, suffix: '.9', decimals: 1, suffix2: '%', label: 'Disponibilidad', delay: 100 },
  { icon: Clock, target: 70, prefix: '-', suffix: '%', label: 'Tiempo administrativo', delay: 200 },
  { icon: FileCheck, target: 120, suffix: 'k+', label: 'Boletas emitidas', delay: 300 },
]

export default function Metrics() {
  return (
    <section className="relative bg-surface py-16">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-md">
                <s.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-ink">
                <Counter
                  target={s.target}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals || 0}
                  delay={s.delay}
                />
                {s.suffix2}
              </p>
              <p className="mt-1.5 text-sm font-medium text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
