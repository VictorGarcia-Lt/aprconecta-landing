import { motion } from 'framer-motion'
import { Droplets, Bell, TrendingUp, Users, FileText, Zap, MoreHorizontal } from 'lucide-react'

const bars = [35, 48, 42, 58, 66, 72, 60]

export default function DashboardMockup({ compact = false }) {
  return (
    <div className="rounded-3xl bg-white p-4 sm:p-5 shadow-2xl shadow-slate-300/60 ring-1 ring-slate-200">
      {/* browser bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 flex-1 rounded-md bg-slate-100 px-3 py-1 text-[10px] text-slate-500 ring-1 ring-slate-200">app.aprconecta.cl/dashboard</div>
      </div>

      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white shadow-md">
            <Droplets className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-bold text-ink leading-none">Comité Santa Elena</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Panel de control</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 ring-1 ring-slate-200">
            <MoreHorizontal className="h-4 w-4" />
          </span>
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 ring-1 ring-slate-200">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-white" />
          </span>
        </div>
      </div>

      {/* metric cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
        {[
          { icon: TrendingUp, label: 'Recaudación', value: '$2.4M', delta: '+12%', up: true, accent: true },
          { icon: Users, label: 'Socios', value: '485', delta: 'activos' },
          { icon: FileText, label: 'Boletas', value: '1.240', delta: 'emitidas' },
          { icon: Zap, label: 'Morosidad', value: '3.2%', delta: '− record', up: true, good: true },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className={`rounded-2xl p-3 ${m.accent ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' : 'bg-slate-50 ring-1 ring-slate-200'}`}
          >
            <m.icon className={`h-4 w-4 ${m.accent ? 'text-white/90' : 'text-slate-400'}`} />
            <p className={`text-lg font-extrabold mt-1 ${m.accent ? 'text-white' : 'text-ink'}`}>{m.value}</p>
            <div className="flex items-center justify-between">
              <p className={`text-[10px] ${m.accent ? 'text-white/80' : 'text-slate-500'}`}>{m.label}</p>
              {m.delta && (
                <span className={`text-[9px] font-bold ${m.good ? 'text-emerald-600' : m.accent ? 'text-white/90' : m.up ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {m.delta}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* chart */}
      <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-3 mb-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-semibold text-slate-600">Consumo promedio (m³)</p>
          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full ring-1 ring-emerald-200">Últimos 6 meses</span>
        </div>
        <div className="flex items-end gap-2 h-20">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
              className={`flex-1 rounded-t-md ${i === bars.length - 1 ? 'bg-emerald-500' : 'bg-primary-600'}`}
            />
          ))}
        </div>
      </div>

      {!compact && (
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
            <Droplets className="h-4 w-4" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-emerald-900 truncate">Boletas enviadas a 120 socios</p>
            <p className="text-[11px] text-emerald-700">vía WhatsApp · hace 5 min</p>
          </div>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">✓</span>
        </div>
      )}
    </div>
  )
}
