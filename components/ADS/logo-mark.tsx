export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeOpacity="0.35" />
      <path d="M13 28V12l14 16V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="1.6" fill="#d46a80" />
    </svg>
  )
}
