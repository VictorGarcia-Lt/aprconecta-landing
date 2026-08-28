import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplet, Menu, X, ArrowRight } from 'lucide-react'

const links = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Beneficios', href: '#beneficios' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? 'bg-surface shadow-lg shadow-slate-300/60 border-b border-primary-100' : 'bg-transparent'}`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between py-4">
          {/* logo */}
          <a href="#inicio" className="flex items-center gap-2.5">
            <motion.span
              whileHover={{ rotate: -10, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/40"
            >
              <Droplet className="h-5 w-5" />
            </motion.span>
            <span className="font-display text-lg font-bold tracking-tight text-ink leading-none">
              aprconecta<span className="text-primary-600">.cl</span>
            </span>
          </a>

          {/* center nav */}
          <div className={`hidden md:flex items-center gap-9 text-sm font-semibold ${solid ? 'text-slate-600' : 'text-slate-700'}`}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="relative group py-2 hover:text-primary-600 transition-colors">
                {l.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* right */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className={`text-sm font-semibold ${solid ? 'text-slate-600' : 'text-slate-700'} hover:text-primary-600 transition-colors`}>
              Iniciar sesión
            </a>
            <motion.a
              href="#contacto"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary-600/40 hover:bg-primary-500"
            >
              Solicitar demostración
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* mobile */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-slate-100 transition-colors"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-primary-100 bg-surface"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-700 font-semibold hover:text-primary-600">
                  {l.label}
                </a>
              ))}
              <a href="#" className="text-primary-600 font-semibold">Iniciar sesión</a>
              <a href="#contacto" onClick={() => setOpen(false)} className="rounded-xl bg-primary-600 px-5 py-3 text-center text-sm font-bold text-white">
                Solicitar demostración
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
