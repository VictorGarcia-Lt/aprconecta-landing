import { motion } from 'framer-motion'

export default function PhoneMockup({ children, src, alt = '', className = 'w-56', float = true, floatDelay = 0, tilt = false }) {
  const content = (
    <div className={`relative ${className} rounded-[2.4rem] bg-slate-900 p-2 shadow-2xl shadow-black/60 ring-1 ring-white/10`}>
      {/* side buttons */}
      <span className="absolute -left-[3px] top-16 h-8 w-1 rounded-full bg-slate-700" />
      <span className="absolute -left-[3px] top-28 h-5 w-1 rounded-full bg-slate-700" />
      <div className="relative overflow-hidden rounded-[2rem]">
        {/* notch */}
        <div className="pointer-events-none absolute top-2 left-1/2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900 ring-1 ring-white/10" />
        {src ? (
          <img src={src} alt={alt} className="w-full object-cover" />
        ) : (
          <div className="bg-white flex flex-col">
            <div className="pt-9 pb-2 flex flex-col h-full">{children}</div>
          </div>
        )}
      </div>
    </div>
  )

  if (tilt) {
    return (
      <motion.div
        style={{ transformStyle: 'preserve-3d' }}
        animate={float ? { y: [0, -12, 0] } : undefined}
        transition={float ? { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay } : undefined}
        whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block z-20"
      >
        {content}
      </motion.div>
    )
  }

  return (
    <motion.div
      animate={float ? { y: [0, -12, 0] } : undefined}
      transition={float ? { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay } : undefined}
      className="inline-block z-20"
    >
      {content}
    </motion.div>
  )
}
