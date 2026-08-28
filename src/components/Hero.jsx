import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, Monitor, Smartphone, Network, Play, Sparkles, ShieldCheck, Zap } from 'lucide-react'
import DashboardMockup from './DashboardMockup'
import PhoneMockup from './PhoneMockup'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 })

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 sm:pt-36 pb-20 bg-surface">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* ============ LEFT ============ */}
        <div>
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-1.5 text-xs font-bold text-white ring-1 ring-primary-400/40 shadow-lg shadow-primary-600/30"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Nueva plataforma de gestión hídrica · Chile
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-ink leading-[1.05] text-balance"
          >
            Tu APR conectada.
            <br />
            Tu comunidad{' '}
            <span className="text-gradient">informada.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            Administra tu APR, registra lecturas sin internet y entrega estados de cuenta y boletas directamente al celular de tus usuarios.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contacto"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-primary-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-primary-600/40 hover:bg-primary-500"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Solicitar demostración
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#soluciones"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-primary-200 bg-white px-7 py-4 text-base font-bold text-ink hover:border-primary-400 hover:bg-primary-50 transition-colors"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white group-hover:bg-primary-500 transition-colors">
                <Play className="h-3.5 w-3.5 ml-0.5 fill-current" />
              </span>
              Conocer las apps
            </motion.a>
          </motion.div>

          {/* trust row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600"
          >
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Datos seguros</span>
            <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-amber-400" /> Sin instalación</span>
            <span className="inline-flex items-center gap-2"><Smartphone className="h-4 w-4 text-cyan-400" /> Android e iOS</span>
          </motion.div>

          {/* bottom band 3 icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {[
              { icon: Monitor, text: 'Un panel administrativo.' },
              { icon: Smartphone, text: 'Dos apps pensadas para tu día a día.' },
              { icon: Network, text: 'Todo conectado.' },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.15 }}
                whileHover={{ y: -3 }}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:border-primary-300 hover:shadow-md transition-all"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white group-hover:bg-primary-500 transition-colors">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold text-slate-700 leading-snug">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ============ RIGHT: 3D composition ============ */}
        <div
          ref={ref}
          onMouseMove={handleMouse}
          onMouseLeave={() => { mx.set(0); my.set(0) }}
          className="relative h-[520px] lg:h-[600px]"
          style={{ perspective: '1400px' }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            animate={
              reduce
                ? undefined
                : {
                    x: [0, 18, -10, 24, -8, 0],
                    y: [0, -12, 0],
                  }
            }
            transition={
              reduce
                ? undefined
                : {
                    x: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
                    y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  }
            }
            className="absolute top-0 right-0 w-[80%]"
          >
            <DashboardMockup />
          </motion.div>

          {/* floating phone - lecturas */}
          <PhoneMockup
            tilt
            src="/app/app-lectura.webp"
            alt="App APRConecta registrando lectura de medidor sin conexión"
            className="absolute top-14 -left-2 w-40 sm:w-44"
            floatDelay={0}
          />

          {/* floating card - boleta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{ opacity: { delay: 1.1 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 } }}
            className="absolute bottom-8 right-0 flex w-48 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-300/60"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md">
              <Smartphone className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold text-ink">Boleta disponible</p>
              <p className="text-[10px] text-slate-500">Paga en línea · Webpay</p>
            </div>
          </motion.div>

          {/* floating pill - sync */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [1, 1.05, 1] }}
            transition={{ opacity: { delay: 1.3 }, scale: { duration: 3, repeat: Infinity, delay: 1.3 } }}
            className="absolute -right-2 top-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg ring-2 ring-emerald-400/40"
          >
            <span className="h-2 w-2 rounded-full bg-white" />
            Sincronizado
          </motion.div>
        </div>
      </div>
    </section>
  )
}
