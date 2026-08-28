import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  const reduce = useReducedMotion()

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/app/app-lectura.webp"
        className="absolute inset-0 h-full w-full object-cover"
        aria-label="Video de agua cayendo sobre una superficie púrpura"
      >
        <source src="/cta-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-night-900/95 via-night-900/70 to-night-900/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-5 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance"
        >
          Conecta tu APR con una gestión{' '}
          <span className="text-gradient">más simple</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-lg font-medium text-white leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          Agenda una demostración gratuita y descubre cómo APRConecta transforma la operación de tu comité de agua.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="#contacto"
            whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary-600/40 hover:bg-primary-500"
          >
            Solicitar demostración
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <a
            href="#soluciones"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            Ver soluciones
          </a>
        </motion.div>
      </div>
    </section>
  )
}
