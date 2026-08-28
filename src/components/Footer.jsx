import { motion } from 'framer-motion'
import { Droplet, Globe, Share2, AtSign, Send, ArrowRight, MapPin, Mail, Phone } from 'lucide-react'

const socials = [
  { icon: Globe, label: 'Sitio web' },
  { icon: Share2, label: 'Redes' },
  { icon: AtSign, label: 'Email' },
  { icon: Send, label: 'Telegram' },
]

const columns = [
  { title: 'Producto', links: ['Soluciones', 'Cómo funciona', 'Beneficios', 'Precios'] },
  { title: 'Recursos', links: ['Centro de ayuda', 'Manuales', 'Blog', 'Comunidad'] },
  { title: 'Legal', links: ['Términos', 'Privacidad', 'Cookies', 'Contacto'] },
]

export default function Footer() {
  return (
    <footer className="relative bg-surface text-slate-600 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-indigo-500/30">
                <Droplet className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold text-ink leading-none">
                aprconecta<span className="text-primary-600">.cl</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Tecnología para quienes cuidan el agua. Plataforma de gestión moderna para los comités de Agua Potable Rural de Chile.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  whileHover={{ y: -3 }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-500 ring-1 ring-slate-200 hover:bg-primary-500 hover:text-white hover:ring-primary-500 transition-all"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-display font-bold text-ink mb-4">{col.title}</p>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-primary-700 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* newsletter / contact */}
          <div className="lg:col-span-1">
            <p className="font-display font-bold text-ink mb-4">Contáctanos</p>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-600" /> Santiago, Chile</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-600" /> hola@aprconecta.cl</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-600" /> +56 9 5555 1234</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6">
              <p className="text-sm font-semibold text-ink mb-2">Recibe novedades</p>
              <div className="flex overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 focus-within:ring-primary-400">
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="w-full bg-transparent px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:outline-none"
                />
                <button className="flex items-center justify-center bg-primary-600 px-4 text-white hover:bg-primary-500 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 APRConecta SpA. Todos los derechos reservados.</p>
          <p>Hecho con 💧 para las comunidades de Chile.</p>
        </div>
      </div>
    </footer>
  )
}
