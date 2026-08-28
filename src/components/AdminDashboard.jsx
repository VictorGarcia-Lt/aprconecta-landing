import { motion } from 'framer-motion'
import { Check, PieChart, TrendingUp, Users, FileText, Activity, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import DashboardMockup from './DashboardMockup'

const checklist = [
  { icon: Users, title: 'Socios y medidores', text: 'Mantén tu base de datos siempre actualizada.' },
  { icon: Activity, title: 'Lecturas y consumos', text: 'Visualiza el comportamiento de tu APR.' },
  { icon: FileText, title: 'Cobros y estados de cuenta', text: 'Controla pagos, deudas y documentos.' },
  { icon: PieChart, title: 'Reportes para decidir mejor', text: 'Información clara para tu gestión y planificación.' },
]

const donut = [
  { label: 'Al día', value: 66, color: '#10b981' },
  { label: 'Pendiente', value: 18, color: '#f59e0b' },
  { label: 'Vencido', value: 16, color: '#f87171' },
]

const R = 42
const CIRC = 2 * Math.PI * R

function Donut() {
  return (
    <div className="relative h-28 w-28">
      <motion.svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="50" cy="50" r={R} fill="none" stroke="#eef2ff" strokeWidth="10" />
        {donut.map((d, i) => {
          const prior = donut.slice(0, i).reduce((acc, x) => acc + x.value, 0)
          const len = (d.value / 100) * CIRC
          return (
            <motion.circle
              key={d.label}
              cx="50" cy="50" r={R} fill="none"
              stroke={d.color} strokeWidth="10" strokeLinecap="round"
              strokeDasharray={`${len} ${CIRC - len}`}
              initial={{ strokeDashoffset: CIRC }}
              whileInView={{ strokeDashoffset: CIRC - prior * (CIRC / 100) }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.2 }}
            />
          )
        })}
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-xl font-extrabold text-ink leading-none">66%</p>
          <p className="text-[9px] text-slate-500">al día</p>
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <section id="beneficios" className="relative py-24 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Beneficios"
          title="Toda la gestión, en un solo dashboard"
          subtitle="Deja de saltar entre planillas. Tenerlo todo a la vista te permite decidir mejor."
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* left */}
          <div className="space-y-4">
            {checklist.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' },
                }}
                whileHover={{ x: 8 }}
                animate={{ y: [0, -6, 0] }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-primary-300 hover:shadow-md transition-all"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="font-display font-bold text-ink">{c.title}</p>
                  <p className="text-sm text-slate-500">{c.text}</p>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white group-hover:scale-110 transition-transform">
                  <Check className="h-4 w-4" />
                </span>
              </motion.div>
            ))}

            {/* donut card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-md"
            >
              <Donut />
              <div className="flex-1 w-full">
                <p className="font-display font-bold text-ink mb-3">Estados de cobro</p>
                <div className="space-y-2.5">
                  {donut.map((d) => (
                    <div key={d.label} className="flex items-center gap-2 text-sm">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.color }} />
                      <span className="text-slate-500">{d.label}</span>
                      <span className="font-bold text-ink ml-auto">{d.value}%</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                  <TrendingUp className="h-3.5 w-3.5" /> La morosidad bajó 4% este mes
                </div>
              </div>
            </motion.div>
          </div>

          {/* right dashboard */}
          <div>
            {/* wrapper: continuous autonomous float, no conflicts */}
            <motion.div
              animate={{ x: [0, 12, -7, 0], y: [0, -14, 0] }}
              transition={{
                x: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 48, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, rotateX: 3 }}
                className="rounded-3xl border border-slate-200 p-3 shadow-2xl shadow-slate-400/50 bg-white"
                style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
              >
                <DashboardMockup />
                <div className="mt-3 flex items-center justify-between rounded-2xl bg-primary-600 p-4 text-white shadow-lg shadow-primary-600/30">
                  <p className="text-sm font-bold">Tu comité también puede</p>
                  <a href="#contacto" className="group inline-flex items-center gap-1 text-sm font-bold hover:underline">
                    Probar gratis <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
