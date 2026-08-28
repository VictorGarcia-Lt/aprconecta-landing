import { motion, useReducedMotion } from 'framer-motion'
import { Droplets, Smartphone, Wifi, FileText, MapPin, Bell, ShieldCheck, CreditCard } from 'lucide-react'

const items = [
  { icon: Droplets, label: 'Gestión hídrica rural' },
  { icon: Smartphone, label: 'Dos apps móviles' },
  { icon: Wifi, label: 'Funciona sin señal' },
  { icon: FileText, label: 'Boletas automáticas' },
  { icon: MapPin, label: 'Comités de todo Chile' },
  { icon: Bell, label: 'Notificaciones' },
  { icon: ShieldCheck, label: 'Datos seguros' },
  { icon: CreditCard, label: 'Pago en línea' },
]

export default function Marquee() {
  const reduce = useReducedMotion()
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-primary-100 bg-surface py-4">
      <motion.div
        className="flex w-max items-center gap-12 pl-12"
        animate={reduce ? { x: 0 } : { x: ['0%', '-50%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-white">
              <it.icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-slate-700">{it.label}</span>
            <span className="ml-4 h-1.5 w-1.5 rounded-full bg-primary-400/60" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
