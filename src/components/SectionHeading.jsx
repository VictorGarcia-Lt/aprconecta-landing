import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const center = align === 'center'
  return (
    <Reveal className={`max-w-2xl mb-14 ${center ? 'text-center mx-auto' : 'text-left'}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-sm font-bold tracking-wider text-primary-600 uppercase ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-6 bg-primary-400" />
          {eyebrow}
          <span className="h-px w-6 bg-primary-400" />
        </span>
      )}
      <h2 className={`mt-4 font-display text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold tracking-tight text-ink ${center ? 'text-center' : 'text-left'} leading-[1.1]`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg text-slate-500 ${center ? 'text-center mx-auto max-w-xl' : 'text-left'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
