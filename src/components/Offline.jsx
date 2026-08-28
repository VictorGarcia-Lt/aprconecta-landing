import { motion } from 'framer-motion'
import { Check, Cloud, UploadCloud, Smartphone, ChevronDown } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  {
    n: 1,
    icon: Smartphone,
    title: 'Registra la lectura',
    text: 'Ingresa la lectura del medidor desde la app.',
  },
  {
    n: 2,
    icon: Cloud,
    title: 'Guarda sin conexión',
    text: 'La app almacena la información de forma segura.',
  },
  {
    n: 3,
    icon: UploadCloud,
    title: 'Sincroniza al volver a conectarte',
    text: 'Los datos se envían y actualizan automáticamente al dashboard.',
  },
]

export default function Offline() {
  return (
    <section id="como-funciona" className="relative py-24 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* left photo */}
        <Reveal from="left" className="relative" >
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-300/60 ring-1 ring-slate-200"
          >
            <motion.img
              animate={{ y: [0, -14, 0] }}
              transition={{ y: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
              src="/operador-terreno.webp"
              alt="Operador de APR registrando un medidor de agua en terreno"
              className="w-full h-[480px] object-cover scale-110"
            />

            {/* floating status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-400/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <Check className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-bold text-ink">Sincronización completada</p>
                <p className="text-xs text-slate-500">Lecturas enviadas correctamente</p>
              </div>
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
            </motion.div>
          </motion.div>
        </Reveal>

        {/* right */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-primary-600 uppercase">
              <span className="h-px w-6 bg-primary-400" /> Modo offline
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-tight">
              Sin señal, tu trabajo continúa.
            </h2>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              En el campo la señal no siempre acompaña. Por eso nuestra app funciona totalmente offline, sin perder ni una lectura.
            </p>
          </Reveal>

          {/* steps */}
          <ol className="mt-9 space-y-2">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-5"
              >
                {i < steps.length - 1 && (
                  <span className="absolute left-[22px] top-12 bottom-0 w-px bg-gradient-to-b from-primary-500 to-transparent" />
                )}
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 } }}
                  whileHover={{ scale: 1.12 }}
                  className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-600 text-white font-display font-bold shadow-lg shadow-primary-600/40"
                >
                  {s.n}
                </motion.span>
                <div className="pb-7">
                  <p className="flex items-center gap-2 font-display font-bold text-ink text-lg">
                    <s.icon className="hidden sm:block h-4 w-4 text-primary-600" /> {s.title}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{s.text}</p>
                  {i < steps.length - 1 && (
                    <ChevronDown className="hidden sm:block h-4 w-4 text-slate-400 mt-3" />
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
