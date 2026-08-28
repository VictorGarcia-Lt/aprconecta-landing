import { motion } from 'framer-motion'
import { Monitor, Smartphone, Droplets, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

function MiniPhone({ children, src, alt = '' }) {
  return (
    <div className="mx-auto w-36 rounded-[1.6rem] bg-slate-900 p-1.5 shadow-xl ring-1 ring-white/10">
      <div className="relative overflow-hidden rounded-[1.3rem]">
        <div className="pointer-events-none absolute top-1 left-1/2 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-800" />
        {src ? (
          <img src={src} alt={alt} className="w-full object-cover" loading="lazy" decoding="async" />
        ) : (
          <div className="bg-white">
            <div className="mt-2 p-2.5">{children}</div>
          </div>
        )}
      </div>
    </div>
  )
}

const cards = [
  {
    step: '01',
    title: 'Administración centralizada',
    text: 'Gestiona socios, lecturas, cobros y reportes desde un solo dashboard.',
    icon: Monitor,
    visual: (
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img
          src="/app/app-dashboard.webp"
          alt="Panel de administración centralizado de APRConecta"
          className="w-full object-cover aspect-[16/10]"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    step: '02',
    title: 'Lecturas sin internet',
    text: 'Registra el medidor desde tu celular. La información se sincroniza cuando recuperas la conexión.',
    icon: Smartphone,
    visual: (
      <MiniPhone
        src="/app/app-lectura.webp"
        alt="Registro de lectura de medidor sin conexión en la app APRConecta"
      />
    ),
  },
  {
    step: '03',
    title: 'Tu APR en tu celular',
    text: 'Consulta tu estado de cuenta, revisa tu consumo y recibe tu boleta automáticamente.',
    icon: Droplets,
    visual: (
      <MiniPhone
        src="/app/app-inicio.webp"
        alt="Panel de la app APRConecta en el celular"
      />
    ),
  },
]

export default function Solutions() {
  return (
    <section id="soluciones" className="relative py-24 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Soluciones"
          title="Una solución para cada tarea"
          subtitle="Tres piezas que trabajan juntas para cubrir toda la operación de tu comité de agua."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, rotateX: 4, rotateY: -4 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-primary-300 hover:shadow-xl transition-all"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="absolute top-6 right-7 font-display text-5xl font-extrabold text-slate-100 group-hover:text-primary-200 transition-colors">
                {c.step}
              </span>

              <motion.div
                className="relative mb-5"
                animate={{ y: [0, i % 2 === 0 ? -8 : -5, 0] }}
                transition={{ duration: 4.5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              >
                {c.visual}
              </motion.div>

              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white group-hover:bg-primary-500 transition-all">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{c.title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">{c.text}</p>

              <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-primary-600 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                Ver más <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
