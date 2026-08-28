import { motion } from 'framer-motion'
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'

const checks = [
  'Boletas y comprobantes en PDF',
  'Historial de consumos mensual',
  'Notificaciones de vencimiento',
  'Pago en línea con Webpay y Khipu',
]

export default function MobileApp() {
  return (
    <section className="relative py-24 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* left */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-primary-600 uppercase">
              <span className="h-px w-6 bg-primary-400" /> Boleta automática
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-tight">
              Recibe tu estado de cuenta y tu boleta{' '}
              <span className="text-gradient">automáticamente</span> en tu celular.
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Consulta tu consumo y tus documentos en un solo lugar. Información actualizada al sincronizar las lecturas.
            </p>
          </Reveal>
          <div className="mt-7 grid sm:grid-cols-2 gap-3">
            {checks.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-surface p-3"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm font-medium text-slate-700">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* right: phone composition */}
        <Reveal from="right" className="relative flex justify-center py-14">
          {/* phone - light app screen for contrast */}
          <motion.div
            animate={{ x: [0, 8, -5, 0], y: [0, -14, 0] }}
            transition={{
              x: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="relative w-60 rounded-[2.4rem] bg-slate-900 p-2 shadow-2xl shadow-slate-400/50 ring-1 ring-slate-300"
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <div className="absolute top-2 left-1/2 z-10 -translate-x-1/2 h-5 w-24 rounded-full bg-slate-900" />
              <img
                src="/app/app-boleta.webp"
                alt="App APRConecta mostrando la boleta de pago"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* popup card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 180, damping: 14 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -right-2 sm:right-0 top-8 w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-400/50"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
                <FileText className="h-4 w-4" />
              </span>
              <p className="text-sm font-bold text-ink">Tu boleta ya está disponible</p>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">
              <span className="text-xs font-semibold text-slate-500">Mayo 2024</span>
              <a href="#" className="group inline-flex items-center gap-1 text-sm font-bold text-primary-600 hover:text-primary-700">
                Ver boleta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
