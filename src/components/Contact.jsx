import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, MapPin, Mail, Phone, CalendarCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const field = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition'

  return (
    <section id="contacto" className="relative py-24 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Solicita una demostración gratuita"
          subtitle="Cuéntanos de tu comité y te mostramos cómo APRConecta puede transformar tu gestión."
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: 'Santiago, Chile', text: 'Trabajamos con APR de todo el país' },
              { icon: Mail, title: 'hola@aprconecta.cl', text: 'Respondemos en menos de 24 h' },
              { icon: Phone, title: '+56 9 5555 1234', text: 'Lun a Vie · 9:00 - 18:00' },
              { icon: CalendarCheck, title: 'Demo online', text: '30 minutos, sin compromiso' },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-primary-300 hover:shadow-md transition-all"
              >
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ y: { duration: 3.5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 } }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white"
                >
                  <c.icon className="h-5 w-5" />
                </motion.span>
                <div>
                  <p className="font-display font-bold text-ink">{c.title}</p>
                  <p className="text-sm text-slate-500">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* form */}
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xl shadow-slate-300/50"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">Nombre</label>
                <input required placeholder="Juan Pérez" className={field} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">APR / Localidad</label>
                <input required placeholder="Comité Santa Elena" className={field} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">Teléfono</label>
                <input required type="tel" placeholder="+56 9 ..." className={field} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">Email</label>
                <input required type="email" placeholder="tucorreo@ejemplo.cl" className={field} />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-ink">Mensaje</label>
                <textarea rows={4} placeholder="Cuéntanos sobre tu comité y lo que necesitas..." className={`${field} resize-none`} />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary-600/40 hover:bg-primary-500 hover:shadow-xl"
            >
              Enviar solicitud
              <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 text-emerald-700 text-sm font-semibold p-3 ring-1 ring-emerald-200"
              >
                <CheckCircle2 className="h-5 w-5" /> ¡Gracias! Te contactaremos muy pronto.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
